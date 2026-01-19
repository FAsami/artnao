import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getTabTitle } from '@/utils/getTabTitle'

interface TabItem {
  path: string
  title: string
}

interface TabsState {
  activeTabId: string
  tabs: TabItem[]
}

interface TabContextType {
  tabs: TabsState
  addTab: (tab: TabItem) => void
  removeTab: (path: string) => void
  removeAllTabs: () => void
  removeOtherTabs: () => void
}

const TabContext = createContext<TabContextType | undefined>(undefined)

export const TabProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const initial =
    pathname === '/admin'
      ? [{ path: '/admin', title: getTabTitle('/admin') }]
      : [
          { path: '/admin', title: getTabTitle('/admin') },
          { path: pathname, title: getTabTitle(pathname) }
        ]

  const [tabs, setTabs] = useState<TabsState>({
    activeTabId: pathname,
    tabs: initial
  })

  const addTab = (tab: TabItem) => {
    setTabs((prevState) => {
      const existingTab = prevState.tabs.find((t) => t.path === tab.path)
      if (!existingTab) {
        return {
          ...prevState,
          tabs: [...prevState.tabs, tab]
        }
      }
      return prevState
    })
    router.push(tab.path)
  }

  const removeTab = (path: string) => {
    setTabs((prevState) => {
      const tabs = prevState.tabs.filter((tab) => tab.path !== path)
      const activeTabId =
        prevState.activeTabId === path
          ? tabs.length
            ? tabs[tabs.length - 1].path
            : ''
          : prevState.activeTabId
      console.log(activeTabId)

      return {
        ...prevState,
        tabs,
        activeTabId
      }
    })

    router.push(tabs.activeTabId)
  }
  const removeAllTabs = () => {
    setTabs((prevState) => ({
      ...prevState,
      activeTabId: prevState.tabs[0]?.path || '',
      tabs: [prevState.tabs[0]].filter(Boolean)
    }))
    router.push(tabs.activeTabId)
  }

  const removeOtherTabs = () => {
    setTabs((prevState) => {
      const activeTab = prevState.tabs.find(
        (tab) => tab.path === prevState.activeTabId
      )
      const isDashboard = activeTab?.path === prevState.tabs[0]?.path
      return {
        ...prevState,
        tabs: isDashboard
          ? [prevState.tabs[0]]
          : [prevState.tabs[0], activeTab!].filter(Boolean)
      }
    })
  }
  useEffect(() => {
    setTabs((prev) => ({ ...prev, activeTabId: pathname }))
  }, [pathname])

  return (
    <TabContext.Provider
      value={{
        tabs,
        addTab,
        removeTab,
        removeAllTabs,
        removeOtherTabs
      }}
    >
      {children}
    </TabContext.Provider>
  )
}

export const useTabs = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('useTabsView must be used within a TabProvider')
  }
  return context
}
