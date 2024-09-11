import clsx from 'clsx'
import Link from 'next/link'
import { auth } from '@/auth'
import { BsCart3 } from 'react-icons/bs'
import { logout } from '@/actions/logout'
import Image from 'next/image'
import { Avatar, Badge, Dropdown, Tooltip } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { IoMdLogOut } from 'react-icons/io'
import Notification from '@/app/admin/components/Header/Notification'

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
            <div className="flex items-center gap-6 ml-16">
              <Tooltip title="Notifications">
                <Badge
                  className="cursor-pointer"
                  count={10}
                  overflowCount={999}
                >
                  <BsCart3 className="text-2xl" />
                </Badge>
              </Tooltip>
              <Notification />

              <div>
                {session?.user ? (
                  <Dropdown
                    trigger={['click', 'hover']}
                    placement="bottomRight"
                    menu={{
                      items: [
                        {
                          key: '1',
                          icon: <UserOutlined />,
                          label: <Link href="/account/profile">Account</Link>
                        },
                        {
                          key: '2',
                          icon: <IoMdLogOut className="text-red-400" />,
                          label: (
                            <form action={logout}>
                              <button className="text-red-400" type="submit">
                                Sign out
                              </button>
                            </form>
                          )
                        }
                      ]
                    }}
                  >
                    <Avatar
                      style={{ backgroundColor: '#87a4ae' }}
                      shape="circle"
                    >
                      {session?.user?.name?.slice(0, 1)}
                    </Avatar>
                  </Dropdown>
                ) : (
                  <Link
                    className="bg-tertiary-500  transition-all text-white rounded-sm flex items-center gap- justify-center px-3 py-2 text-sm uppercase hover:bg-secondary-500"
                    href="/auth/login"
                  >
                    Sign up
                  </Link>
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
