'use client'
import { Layout, Breadcrumb } from 'antd'
import { ReactNode } from 'react'
import AdminSidebar from './components/Sidebar'
import { AdminHeader } from './components'
const { Content } = Layout

interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <Layout className="!min-h-screen">
      <AdminSidebar />
      <Layout>
        <AdminHeader />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
