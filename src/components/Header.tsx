import clsx from 'clsx'
import Link from 'next/link'
import { auth } from '@/auth'
import { BsCart3 } from 'react-icons/bs'
import { logout } from '@/actions/logout'
import Image from 'next/image'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const Header = async () => {
  const adminRoutes = [{ id: 1, url: '/admin', title: 'Admin' }]
  const navigation = [
    { id: 1, url: '/artists', title: 'Artists' },
    { id: 2, url: '/arts', title: 'Arts' },
    { id: 3, url: '/contact', title: 'Contact' },
    { id: 4, url: '/about', title: 'About' }
  ]
  const session = await auth()

  return (
    <header className="h-20  w-screen z-50 bg-white relative shadow-sm">
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
        </div>
        {session?.user?.role === 'ADMIN' ? (
          <div>
            {adminRoutes.map(({ id, title, url }) => {
              return (
                <Link
                  key={id}
                  className={clsx(
                    'cursor-pointer text-sm relative z-10 h-full flex items-center px-3 hover:border-b hover:border-b-primary-500 transition-all'
                  )}
                  href={url}
                >
                  <span>{title}</span>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-gray-700 tracking-wider relative px-4 h-full">
            {navigation.map(({ id, title, url }) => {
              return (
                <Link
                  key={id}
                  className={clsx(
                    'cursor-pointer text-sm relative z-10 h-full flex items-center px-3 hover:border-b hover:border-b-primary-500 transition-all'
                    // path === url && 'border-b-4 border-b-amber-600 text-amber-600'
                  )}
                  href={url}
                >
                  <span>{title}</span>
                </Link>
              )
            })}
            <div className="flex items-center gap-4 ml-16">
              <div className="relative">
                <BsCart3 className="text-primary-500 text-2xl" />
                <div className="flex items-center justify-center absolute -top-1 -right-1 h-4 w-4 bg-tertiary-500 rounded-full text-[10px] text-white font-semibold p-1">
                  10
                </div>
              </div>
              <div>
                {session?.user ? (
                  <div className="cursor-pointer">
                    <Avatar
                      size="small"
                      icon={<UserOutlined />}
                      style={{ backgroundColor: '#116099' }}
                    />
                  </div>
                ) : (
                  <Link href="/auth/login">Login</Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export { Header }
