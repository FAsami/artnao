'use client'
import React, { useState, useEffect } from 'react'
import { Table, Tag, Tooltip, Input, Button } from 'antd'
import dayjs from 'dayjs'
import { ColumnType } from 'antd/es/table'

type Template = {
  id: number
  title: string
  description: string
  type: 'EventBased' | 'Generic'
  date?: Date | null
  price: number
  discount: number
  assets: any
  createdAt: Date
  updatedAt: Date
}

const data: Template[] = [
  {
    id: 1,
    title: 'Christmas Design',
    description: 'This is a special Christmas-themed design.',
    type: 'EventBased',
    date: new Date(),
    price: 200,
    discount: 10,
    assets: { image: 'image-url-1', icon: 'icon-url-1' },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: 'Generic Design',
    description: 'A generic design for everyday use.',
    type: 'Generic',
    date: null,
    price: 150,
    discount: 5,
    assets: { image: 'image-url-2', icon: 'icon-url-2' },
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const columns: ColumnType<Template>[] = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search title"
          value={selectedKeys[0] as string}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()}
        />
        <div style={{ marginTop: 8 }}>
          <Button onClick={() => confirm()} style={{ marginRight: 8 }}>
            Search
          </Button>
          <button onClick={() => setSelectedKeys([])}>Reset</button>
        </div>
      </div>
    ),
    onFilter: (value, record) =>
      record.title.toLowerCase().includes((value as string).toLowerCase())
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    filters: [
      { text: 'EventBased', value: 'EventBased' },
      { text: 'Generic', value: 'Generic' }
    ],
    onFilter: (value, record) => record.type === value,
    render: (text: string) => (
      <Tag color={text === 'EventBased' ? 'red' : 'blue'}>{text}</Tag>
    )
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text: Date | null) =>
      text ? dayjs(text).format('YYYY-MM-DD') : 'N/A'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text: number) => `$${text}`
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
    render: (text: number) => `${text}%`
  },
  {
    title: 'Assets',
    dataIndex: 'assets',
    key: 'assets',
    render: (text: any) => (
      <Tooltip title={JSON.stringify(text)}>
        <Tag color="green">View Assets</Tag>
      </Tooltip>
    )
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text: Date) => dayjs(text).format('YYYY-MM-DD')
  },
  {
    title: 'Last updated',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (text: Date) => dayjs(text).format('YYYY-MM-DD')
  }
]

const TemplateTable: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [tableData, setTableData] = useState<Template[]>([])
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setTableData(data)
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleTableChange = (pagination: any) => {
    setPagination(pagination)
  }

  const showPagination = tableData.length > pagination.pageSize

  return (
    <div className="mx-2">
      <Table
        columns={columns}
        dataSource={tableData}
        loading={loading}
        pagination={showPagination ? pagination : false}
        onChange={handleTableChange}
        rowKey="id"
      />
    </div>
  )
}

export default TemplateTable
