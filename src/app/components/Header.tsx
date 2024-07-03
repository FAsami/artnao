'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsCart3 } from 'react-icons/bs'

const Header = () => {
  const navigation = [
    { id: 0, url: '/', title: 'Home' },
    { id: 1, url: '/artists', title: 'Artists' },
    { id: 2, url: '/arts', title: 'Arts' },
    { id: 3, url: '/contact', title: 'Contact' },
    { id: 4, url: '/about', title: 'About' }
  ]
  const path = usePathname()

  return (
    <header className="h-20  w-screen z-50 bg-white relative">
      <div className="max-w-screen-xl px-3 mx-auto flex items-center justify-between h-full">
        <div className="h-full">
          <Link href="/">
            <div
              className={clsx(
                'w-fit flex h-full items-center text-3xl translate-x-1/4 font-secondary'
              )}
            >
              <span className="text-amber-500 font-normal font-secondary">
                art
              </span>
              <span className="text-gray-700 font-secondary">nao</span>
            </div>
          </Link>
          <div className="h-1 bg-amber-500 w-32 mt-auto rounded-full" />
        </div>
        <div className="flex items-center gap-2 text-base font-medium text-gray-700 tracking-wider relative px-4 h-full">
          {navigation.map(({ id, title, url }) => {
            return (
              <Link
                key={id}
                className={clsx(
                  'cursor-pointer  relative z-10 h-full flex items-center px-3',
                  path === url && 'border-b-4 border-b-amber-600 text-amber-600'
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
          <Link
            href="/auth/login"
            className="w-fit bg-amber-300 text-gray-900 font-medium px-6 py-2 rounded-sm"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Header }
