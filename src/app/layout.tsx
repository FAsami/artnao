import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import '../globals.css'
import 'animate.css'
import { ConfigProvider } from 'antd'
import { theme } from '../theme/antd'
import { SessionProvider } from 'next-auth/react'
import { auth } from '../auth'
const font = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artnao',
  description: 'Artnao project setup'
}

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${font.className}`}>
          <AntdRegistry>
            <ConfigProvider theme={theme}>
              <div className="bg-slate-50">
                <div>
                  <Header />
                  <div
                    style={{
                      height: 'calc(100vh - 80px)'
                    }}
                    className="overflow-y-auto"
                  >
                    <main
                      className="max-w-[1224px] px-3 mx-auto"
                      style={{
                        minHeight: 'calc(100vh - 80px)'
                      }}
                    >
                      {children}
                    </main>
                    <Footer />
                  </div>
                </div>
              </div>
            </ConfigProvider>
          </AntdRegistry>
        </body>
      </html>
    </SessionProvider>
  )
}
export default RootLayout

const Header = () => {
  return (
    <header className="h-20 bg-white w-screen shadow-sm z-50 relative">
      <div className="max-w-[1200px] mx-auto"></div>
    </header>
  )
}
const Footer = () => {
  return <footer className="bg-amber-500 min-h-80"></footer>
}
