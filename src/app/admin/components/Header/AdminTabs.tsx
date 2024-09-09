'use client'
import React from 'react'
import { Tabs } from 'antd'
import { useTabs } from '@/providers/Tab'

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
    label: tab.path,
    key: tab.path,
    closable: tab.path !== '/admin',
    children: (
      <div className="bg-white min-h-[] w-full rounded-md">{children}</div>
    )
  }))

  return (
    <Tabs
      type="editable-card"
      activeKey={tabs.activeTabId}
      onChange={(key) => addTab({ path: key })}
      onEdit={handleTabEdit}
      hideAdd
      items={tabItems}
      rootClassName="artnao-tabs"
    />
  )
}

export default AdminTabs
