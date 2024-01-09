'use client'

import { useState, useEffect, useRef } from 'react'
import { checkUrlWithSafeBrowsing, shortenAndSaveUrl } from './actions'

export default function URLShortener() {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const host = window.location.origin
    if (inputRef.current && url.startsWith(host)) {
      inputRef.current.select()
    }
  }, [url])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (url === '' || url.startsWith(document.location.origin)) {
      return
    } else if (!url.match(/^https?:\/\//)) {
      setError('Enter a valid URL')
      return
    }

    setError('')

    try {
      const { success, safe, message, shortened } = await shortenAndSaveUrl(url)
      if (success === false || safe === false) {
        setError(message || 'Unknown error.')
        return
      }
      setUrl(window.location.origin + '/' + shortened)
    } finally {
    }
  }

  function handleClear(e: React.MouseEvent) {
    e.preventDefault()
    setUrl('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div>
          <input 
            type="text" 
            name="url" 
            autoComplete="off"
            className={`w-[750px] p-2 rounded-md border border-gray-300 focus:border-green-400 text-base outline-none ` + (error ? 'border-red-300 focus:border-red-300' : '')}
            placeholder="Enter long URL"
            ref={inputRef}
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
          {error && (
            <div className="mt-2 text-red-700 text-sm">
              {error}
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button 
            type="submit"
            className="p-2 w-[150px] rounded-md bg-green-700 hover:bg-green-600 text-white text-base font-bold"
          >
            Shorten URL
          </button>
          <button 
            className="p-2 w-[150px] rounded-md text-base bg-gray-100 hover:bg-gray-200 font-bold"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  )
}
