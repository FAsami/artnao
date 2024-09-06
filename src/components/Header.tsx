import clsx from 'clsx'
import Link from 'next/link'
import { auth } from '@/auth'
import { BsCart3 } from 'react-icons/bs'
import { logout } from '@/actions/logout'
import Image from 'next/image'

const Header = async () => {
  const navigation = [
    { id: 0, url: '/', title: 'Home' },
    { id: 1, url: '/artists', title: 'Artists' },
    { id: 2, url: '/arts', title: 'Arts' },
    { id: 3, url: '/contact', title: 'Contact' },
    { id: 4, url: '/about', title: 'About' }
  ]
  const session = await auth()

  return (
    <header className="h-20  w-screen z-50 bg-white relative">
      <div className="max-w-screen-xl px-3 mx-auto flex items-center justify-between h-full">
        <div className="flex items-center">
          <Link href="/">
            <div className="h-12 flex items-center">
              <Image
                src="/logo-full.png"
                alt="Logo"
                width={300}
                height={80}
                className="h-full w-auto"
              />
            </div>
          </Link>

          {/* <div className="h-1 bg-amber-500 w-32 mt-auto rounded-full" /> */}
        </div>
        <div className="flex items-center gap-2 text-base font-medium text-gray-700 tracking-wider relative px-4 h-full">
          {navigation.map(({ id, title, url }) => {
            return (
              <Link
                key={id}
                className={clsx(
                  'cursor-pointer  relative z-10 h-full flex items-center px-3'
                  // path === url && 'border-b-4 border-b-amber-600 text-amber-600'
                )}
                href={url}
              >
                <span>{title}</span>
              </Link>
            )
          })}

          <div className="h-1 bg-gray-100 w-full mt-auto rounded-full absolute bottom-0 left-0 right-0" />
        </div>
        <div className="flex items-center gap-8">
          <div className="relative">
            <BsCart3 className="text-amber-500 text-3xl" />
            <div className="flex items-center justify-center absolute -top-1 -right-1 h-5 w-5 bg-amber-600 rounded-full text-xs text-white font-semibold p-1">
              10
            </div>
          </div>
          {session?.user ? (
            <form action={logout}>
              <button type="submit">Sign out</button>
            </form>
          ) : (
            <Link href="/auth/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  )
}

export { Header }
