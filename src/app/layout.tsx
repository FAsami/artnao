import type { Metadata } from 'next'
import { ReCaptchaProvider } from '@/providers/RecaptchaProvider'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { theme } from '@/theme/antd'
import 'animate.css'
import '../styles/globals.css'

import { Inter } from 'next/font/google'
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
    <ConfigProvider theme={theme}>
      <ReCaptchaProvider>
        <html lang="en">
          <body className={inter.className}>
            <AntdRegistry> {children}</AntdRegistry>
          </body>
        </html>
      </ReCaptchaProvider>
    </ConfigProvider>
  )
}
