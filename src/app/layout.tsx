import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import '../globals.css'
import 'animate.css'
import { ConfigProvider } from 'antd'
import { theme } from '../theme/antd'
import { SessionProvider } from 'next-auth/react'
import { auth } from '../auth'
import { Header, Footer } from './components'
import { primary, secondary } from './fonts'

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
        <body
          className={`${primary.variable} ${secondary.variable} ${primary.className}`}
        >
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
                      className="max-w-screen-xl px-3 mx-auto font-primary"
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
