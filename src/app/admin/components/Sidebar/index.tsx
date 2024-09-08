'use client'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const { Sider } = Layout
const { SubMenu } = Menu

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
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
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link href="/admin/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link href="/admin/monitor">Monitor</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
          <Menu.Item key="3">
            <Link href="/admin/users">All Users</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/admin/users/add">Add User</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Teams">
          <Menu.Item key="5">Team 1</Menu.Item>
          <Menu.Item key="6">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default AdminSidebar
