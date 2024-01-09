import '../../public/css/globals.css'
import type { Metadata } from 'next'
import LocalFont from 'next/font/local'

const inter = LocalFont({
  src: '../../public/fonts/Inter-Variable.ttf'
})

export const metadata: Metadata = {
  title: 'Secure URL Shortener',
  description: 'URL shortener with cybersecurity in mind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
