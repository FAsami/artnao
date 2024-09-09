'use client'
import type { FC } from 'react'
import { LoadingOutlined, BellOutlined } from '@ant-design/icons'
import { Avatar, Badge, List, Popover, Spin, Tabs, Tag, Tooltip } from 'antd'
import { useState } from 'react'
import { EventStatus, Notice } from '@/interfaces/notification'
import staticNotices from './notifications'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const { TabPane } = Tabs

const Notification: FC = () => {
  const [visible, setVisible] = useState(false)
  const [loading] = useState(false)
  const noticeCount = staticNotices.length

  const noticeListFilter = <T extends Notice['type']>(type: T) => {
    return staticNotices.filter((notice) => notice.type === type) as Notice<T>[]
  }

  const tabs = (
    <div>
      <Spin tip="Loading..." indicator={antIcon} spinning={loading}>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={`Messages (${noticeListFilter('notification').length})`}
            key="1"
          >
            <List
              dataSource={noticeListFilter('notification')}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.title}>{item.title}</a>}
                    description={item.datetime}
                  />
                </List.Item>
              )}
            />
          </TabPane>

          <TabPane tab={`News (${noticeListFilter('message').length})`} key="2">
            <List
              dataSource={noticeListFilter('message')}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.title}>{item.title}</a>}
                    description={
                      <div className="notice-description">
                        <div className="notice-description-content">
                          {item.description}
                        </div>
                        <div className="notice-description-datetime">
                          {item.datetime}
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab={`Tasks (${noticeListFilter('event').length})`} key="3">
            <List
              dataSource={noticeListFilter('event')}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <div className="notice-title">
                        <div className="notice-title-content">{item.title}</div>
                        <Tag color={EventStatus[item.status]}>{item.extra}</Tag>
                      </div>
                    }
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </Spin>
    </div>
  )

  return (
    <Popover
      content={tabs}
      overlayClassName="bg-2"
      placement="bottomRight"
      trigger={['click']}
      open={visible}
      onOpenChange={(v) => setVisible(v)}
      overlayStyle={{
        width: 336
      }}
    >
      <Tooltip title="Notifications">
        <Badge
          className="cursor-pointer"
          count={noticeCount}
          overflowCount={999}
        >
          <BellOutlined className="text-2xl" />
        </Badge>
      </Tooltip>
    </Popover>
  )
}

export default Notification
