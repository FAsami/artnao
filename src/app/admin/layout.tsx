'use client'
import { Layout } from 'antd'
import { ReactNode } from 'react'
import { TabProvider } from '@/providers/Tab'
import AdminTabs from './components/Header/AdminTabs'
import { AdminSidebar, AdminHeader } from './components'

const { Content } = Layout

interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <TabProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <AdminSidebar />
        <Layout>
          <AdminHeader />
          <Content className="m-2">
            <AdminTabs>{children}</AdminTabs>
          </Content>
        </Layout>
      </Layout>
    </TabProvider>
  )
}

export default AdminLayout
