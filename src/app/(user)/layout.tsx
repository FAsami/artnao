import { Header } from '@/components'
import { Footer } from '@/components/Footer'

export default function UserLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="min-h-[75vh]">{children}</main>
      <Footer />
    </>
  )
}
