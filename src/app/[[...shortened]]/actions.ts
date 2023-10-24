'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function shortenAndSaveUrl(original: string): Promise<string> {
  // Check if the original URL already exists in the database
  const existingUrl = await prisma.url.findUnique({
    where: { original }
  })

  if (existingUrl) {
    // If the URL already exists, return the already shortened URL
    return existingUrl.shortened
  } else {
    // Generate a shortened URL
    const shortened = await generateShortenedUrl()

    // Save the new URL to the database
    const newUrl = await prisma.url.create({
      data: { original, shortened },
    })

    return shortened
  }
}

export async function getOriginalUrl(shortened: string) {
  try {
    const url = await prisma.url.findUniqueOrThrow({
      where: { shortened }
    })
    await prisma.url.update({
      data: { totalHits: url.totalHits+1 },
      where: { id: url.id }
    })
    return { success: true, url: url.original }
  } catch (error) {
    return { success: false, message: `${error}` }
  }
}

async function generateShortenedUrl(): Promise<string> {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const urlLength = 6
  let shortened = ''

  let isDuplicate = true;
  while (isDuplicate) {
    shortened = ''
    for (let i = 0; i < urlLength; i++) {
      shortened += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    const existingUrl = await prisma.url.findUnique({
      where: { shortened }
    })

    if (!existingUrl) {
      isDuplicate = false
    }
  }

  return shortened
}
