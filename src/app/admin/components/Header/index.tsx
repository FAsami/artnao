'use client'
import { Layout, Dropdown, Avatar } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { logout } from '@/actions/logout'
import Notification from './Notification'
const { Header } = Layout

const AdminHeader = () => {
  return (
    <Header
      className="flex items-center justify-end"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="flex items-center gap-6">
        <Notification />
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link href="/dashboard/account">Account</Link>
              },
              {
                key: '2',
                icon: <LogoutOutlined color="#fecaca" />,
                label: (
                  <button className="text-red-200" onClick={logout}>
                    Log out
                  </button>
                )
              }
            ]
          }}
        >
          <Avatar style={{ backgroundColor: '#116099' }} size="small">
            <UserOutlined />
          </Avatar>
        </Dropdown>
      </div>
    </Header>
  )
}
export { AdminHeader }
