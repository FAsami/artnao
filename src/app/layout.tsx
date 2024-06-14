import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
const font = Nunito_Sans({ subsets: ['latin'] })
import '../globals.css'
import 'animate.css'
import { ConfigProvider } from 'antd'
import { theme } from '../theme/antd'

export const metadata: Metadata = {
  title: 'Artnao',
  description: 'Artnao project setup'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
