'use server'

import { redirect } from 'next/navigation'
import { getOriginalUrl } from './actions'
import URLShortener from './url-shortener'

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
      <div className="grow flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="mr-2 text-green-700 font-bold tracking-tight">
              Secure
            </span>
            URL Shortener
          </h1>
          <h2>
            Our URL shortener puts safety first, powered by the Google Safe Browsing API.
          </h2>
        </div>
        <URLShortener />
      </div>
    </div>
  )
}
