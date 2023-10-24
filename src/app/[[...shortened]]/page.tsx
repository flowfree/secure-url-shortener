'use server'

import { redirect } from 'next/navigation'
import URLShortener from './url-shortener'
import { getOriginalUrl } from './actions'

export default async function Page({
  params: { shortened }
}: {
  params: { shortened: string }
}) {
  if (shortened) {
    const { url } = await getOriginalUrl(shortened[0])
    if (url) {
      redirect(url)
    } else {
      return (
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            404 - Not Found
          </h1>
        </div>
      )
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="grow flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          URL Shortener
        </h1>
        <URLShortener />
      </div>
    </div>
  )
}
