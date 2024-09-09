'use client'
import { Layout, Menu } from 'antd'
import { PieChartOutlined, FileOutlined, UserOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineDraw } from 'react-icons/md'
import { useTabs } from '@/providers/Tab'
import { usePathname } from 'next/navigation'

const { Sider } = Layout
const { SubMenu } = Menu

const menuItems = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    title: 'Dashboard',
    path: '/admin'
  },
  {
    key: '2',
    icon: <MdOutlineDraw />,
    title: 'Artworks',
    path: '/admin/artworks/templates'
  },
  {
    key: 'sub1',
    icon: <UserOutlined />,
    title: 'Users',
    subItems: [
      { key: '3', title: 'All Users', path: '/admin/users' },
      { key: '4', title: 'Add User', path: '/admin/users/add' }
    ]
  },
  {
    key: '9',
    icon: <FileOutlined />,
    title: 'Files'
  }
]

const AdminSidebar = () => {
  const { addTab } = useTabs()
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const getDefaultSelectedKeys = () => {
    for (const item of menuItems) {
      if (item.path === pathname) return [item.key]
      if (item.subItems) {
        for (const subItem of item.subItems) {
          if (subItem.path === pathname) return [item.key, subItem.key]
        }
      }
    }
    return []
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      theme="light"
    >
      <div className="h-16 py-2.5 flex items-center justify-center border-b">
        {collapsed ? (
          <Image
            src={'/logo-sm.png'}
            alt="Logo"
            width={80}
            height={80}
            className="h-full w-auto"
          />
        ) : (
          <Image
            src={'/logo-full.png'}
            alt="Logo"
            width={300}
            height={80}
            className="h-full w-auto"
          />
        )}
      </div>
      <Menu
        theme="light"
        defaultSelectedKeys={getDefaultSelectedKeys()}
        mode="inline"
      >
        {menuItems.map((item) =>
          item.subItems ? (
            <SubMenu key={item.key} icon={item.icon} title={item.title}>
              {item.subItems.map((subItem) => (
                <Menu.Item
                  key={subItem.key}
                  onClick={() => subItem.path && addTab({ path: subItem.path })}
                >
                  {subItem.path ? (
                    <Link href={subItem.path}>{subItem.title}</Link>
                  ) : (
                    subItem.title
                  )}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => item.path && addTab({ path: item.path })}
            >
              {item.path ? (
                <Link href={item.path}>{item.title}</Link>
              ) : (
                item.title
              )}
            </Menu.Item>
          )
        )}
      </Menu>
    </Sider>
  )
}

export { AdminSidebar }
