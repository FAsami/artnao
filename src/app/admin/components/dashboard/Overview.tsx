'use client'

import { InfoCircleOutlined } from '@ant-design/icons'
import { Badge, Card, Col, Progress, Row, Tooltip } from 'antd'
import { FC } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip as RTooltip,
  XAxis
} from 'recharts'

const staticData = new Array(14).fill(null).map((_, index) => ({
  name: `2024-09-${index + 1}`,
  number: Math.floor(Math.random() * 8 + 1)
}))

interface ColCardProps {
  metaName: string
  metaCount: string
  body: React.ReactNode
  footer: React.ReactNode
  loading: boolean
}

const ColCard: FC<ColCardProps> = ({
  metaName,
  metaCount,
  body,
  footer,
  loading
}) => {
  return (
    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
      <Card loading={loading} bordered={false}>
        <div className="flex items-start justify-between">
          <div>
            <div>{metaName}</div>
            <div className="font-semibold text-2xl">{metaCount}</div>
          </div>
          <Tooltip title="Introduce">
            <InfoCircleOutlined />
          </Tooltip>
        </div>
        <div>{body}</div>
        <div>{footer}</div>
      </Card>
    </Col>
  )
}

const CustomTooltip: FC<any> = ({ active, payload, label }) =>
  active && (
    <div>
      <span>
        <Badge color={payload[0].fill} /> {label} : {payload[0].value}
      </span>
    </div>
  )

interface TrendProps {
  wow: string
  dod: string
}

const Trend: FC<TrendProps> = ({ wow, dod }) => {
  return (
    <div>
      <div>
        <span>WoW Change</span>
        <span>{wow}</span>
      </div>
      <div>
        <span>DoD Change</span>
        <span>{dod}</span>
      </div>
    </div>
  )
}

interface FieldProps {
  name: string
  number: string
}

const Field: FC<FieldProps> = ({ name, number }) => (
  <div>
    <span>{name}</span>
    <span>{number}</span>
  </div>
)

const Overview: FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <Row gutter={[12, 12]}>
      <ColCard
        loading={loading}
        metaName="Total Sales"
        metaCount="$ 126,560"
        body={<Trend wow="12%" dod="12%" />}
        footer={<Field name="Daily Sales" number="￥12,423" />}
      />
      <ColCard
        loading={loading}
        metaName="Visits"
        metaCount="8846"
        body={
          <ResponsiveContainer width="100%" height={80}>
            <AreaChart data={staticData}>
              <XAxis dataKey="name" hide />
              <RTooltip content={<CustomTooltip />} />
              <Area
                strokeOpacity={0}
                type="monotone"
                dataKey="number"
                fill="#8E65D3"
              />
            </AreaChart>
          </ResponsiveContainer>
        }
        footer={<Field name="Daily Sales" number="1234" />}
      />
      <ColCard
        loading={loading}
        metaName="Payments"
        metaCount="6560"
        body={
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={staticData}>
              <XAxis dataKey="name" hide />
              <RTooltip content={<CustomTooltip />} />
              <Bar
                strokeOpacity={0}
                barSize={10}
                dataKey="number"
                fill="#3B80D9"
              />
            </BarChart>
          </ResponsiveContainer>
        }
        footer={<Field name="Conversion Rate" number="60%" />}
      />
      <ColCard
        loading={loading}
        metaName="Operational Effect"
        metaCount="8846"
        body={<Progress strokeColor="#58BFC1" percent={85} />}
        footer={<Trend wow="12%" dod="12%" />}
      />
    </Row>
  )
}

export { Overview }
