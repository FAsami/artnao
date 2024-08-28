import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ReCaptchaProvider } from '@/providers/RecaptchaProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artnao',
  description: 'A platform which combines who love arts'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReCaptchaProvider>{children}</ReCaptchaProvider>
      </body>
    </html>
  )
}
