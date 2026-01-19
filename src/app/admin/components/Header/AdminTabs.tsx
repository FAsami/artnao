'use client'
import React from 'react'
import { Tabs } from 'antd'
import { useTabs } from '@/providers/Tab'
import { getTabTitle } from '@/utils/getTabTitle'

const AdminTabs = ({ children }: { children: React.ReactNode }) => {
  const { tabs, removeTab, addTab } = useTabs()
  const handleTabEdit = (
    targetKey: string | React.MouseEvent | React.KeyboardEvent,
    action: 'add' | 'remove'
  ) => {
    if (action === 'remove') {
      if (typeof targetKey === 'string') {
        removeTab(targetKey)
      }
    }
  }

  const tabItems = tabs.tabs.map((tab) => ({
    label: tab.title,
    key: tab.path,
    closable: tab.path !== '/admin',
    children: <div className="bg-white w-full rounded-md px-2">{children}</div>
  }))

  return (
    <Tabs
      type="editable-card"
      activeKey={tabs.activeTabId}
      onChange={(key) => {
        console.log('==>', key)
        addTab({ path: key, title: getTabTitle(key) })
      }}
      onEdit={handleTabEdit}
      hideAdd
      items={tabItems}
      rootClassName="artnao-tabs"
      style={{
        padding: '4px'
      }}
    />
  )
}

export default AdminTabs
