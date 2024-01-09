'use server'

import { PrismaClient } from '@prisma/client'
import axios, { AxiosResponse } from 'axios'

const prisma = new PrismaClient()

interface SafeBrowsingResponse {
  matches?: any[];
}

export async function checkUrlWithSafeBrowsing(url: string) {
  const apiKey = process.env.SAFE_BROWSING_API_KEY
  const apiUrl = 'https://safebrowsing.googleapis.com/v4/threatMatches:find'

  try {
    const response: AxiosResponse<SafeBrowsingResponse> = await axios.post(apiUrl, {
      client: {
        clientId: 'secure-url-shortener',
        clientVersion: '1.0.0',
      },
      threatInfo: {
        threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING'],
        platformTypes: ['ANY_PLATFORM'],
        threatEntryTypes: ['URL'],
        threatEntries: [{ url }],
      },
    }, {
      params: { key: apiKey },
    })

    if (response.data.matches && response.data.matches.length > 0) {
      const threats = response.data.matches.map((match) => match.threatType);
      return { 
        success: true, 
        safe: false, 
        message: `The URL is not safe. Detected threat: ${threats.join(', ')}` 
      }
    } else {
      return { success: true, safe: true }
    }
  } catch (error) {
    return { 
      success: false, 
      message: `Error checking URL with Google Safe Browsing API: ${error}` 
    }
  }
}

export async function shortenAndSaveUrl(original: string) {
  // Check if the original URL already exists in the database
  const existingUrl = await prisma.url.findUnique({
    where: { original }
  })

  if (existingUrl) {
    // If the URL already exists, return the already shortened URL
    return { success: true, shortened: existingUrl.shortened }
  } 

  const { success, safe, message } = await checkUrlWithSafeBrowsing(original)
  if (success === false || safe === false) {
    return { success, safe, message }
  } 

  // Generate a shortened URL
  const shortened = await generateShortenedUrl()

  // Save the new URL to the database
  const newUrl = await prisma.url.create({
    data: { original, shortened },
  })

  return { success: true, shortened }
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
