'use client'
import { Layout, Menu } from 'antd'
import { PieChartOutlined, FileOutlined, UserOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdBorderAll, MdOutlineDraw } from 'react-icons/md'
import { useTabs } from '@/providers/Tab'
import { usePathname } from 'next/navigation'
import { getTabTitle } from '@/utils/getTabTitle'

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
    key: 'order',
    icon: <MdBorderAll />,
    title: 'Orders',
    path: '/admin/orders'
  },
  {
    key: 'artworks',
    icon: <MdOutlineDraw />,
    title: 'Artworks',
    subItems: [
      { key: '3', title: 'Templates', path: '/admin/artworks/templates' },
      { key: '5', title: 'Events', path: '/admin/artworks/events' },
      { key: '4', title: 'Demos', path: '/admin/artworks/demos' },
      { key: '10', title: 'Plans', path: '/admin/artworks/plans' }
    ]
  },
  {
    key: 'crm',
    icon: <UserOutlined />,
    title: 'Customers',
    subItems: [
      { key: '8', title: 'Customers', path: '/admin/crm/customers' },
      { key: '9', title: 'Coupons', path: '/admin/crm/coupons' }
    ]
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
        defaultOpenKeys={['artworks', 'crm']}
      >
        {menuItems.map((item) =>
          item.subItems ? (
            <SubMenu key={item.key} icon={item.icon} title={item.title}>
              {item.subItems.map((subItem) => (
                <Menu.Item
                  key={subItem.key}
                  onClick={() =>
                    subItem.path &&
                    addTab({
                      path: subItem.path,
                      title: getTabTitle(subItem.path)
                    })
                  }
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
              onClick={() =>
                item.path &&
                addTab({ path: item.path, title: getTabTitle(item.path) })
              }
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
