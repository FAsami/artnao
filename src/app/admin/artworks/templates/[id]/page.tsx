'use client'
import React, { useState, useEffect } from 'react'
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Button,
  Upload,
  message
} from 'antd'
import { FormInstance } from 'antd/es/form'
import dayjs from 'dayjs'
import { UploadOutlined } from '@ant-design/icons'

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

const { Option } = Select

const TemplateForm: React.FC<{
  template?: Template
  onSubmit: (values: Template) => void
}> = ({ template, onSubmit }) => {
  const [form] = Form.useForm<FormInstance<Template>>()

  useEffect(() => {
    if (template) {
      form.setFieldsValue({
        ...template,
        date: template.date ? dayjs(template.date) : null,
        createdAt: dayjs(template.createdAt),
        updatedAt: dayjs(template.updatedAt)
      })
    }
  }, [template, form])

  const handleFinish = (values: any) => {
    onSubmit({
      ...values,
      date: values.date?.toDate(),
      createdAt: values.createdAt.toDate(),
      updatedAt: values.updatedAt.toDate(),
      assets: values.assets?.fileList.map((file) => file.originFileObj) || []
    })
    message.success('Template saved successfully!')
  }

  const handleChange = (info: any) => {
    if (info.fileList.length > 0) {
      form.setFieldsValue({ assets: info.fileList })
    }
  }

  return (
    <div className="p-4">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          type: 'Generic',
          discount: 0,
          assets: []
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please select the type!' }]}
        >
          <Select>
            <Option value="EventBased">EventBased</Option>
            <Option value="Generic">Generic</Option>
          </Select>
        </Form.Item>

        <Form.Item name="date" label="Date">
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please input the price!' }]}
        >
          <InputNumber min={0} prefix="$" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="discount" label="Discount">
          <InputNumber min={0} max={100} suffix="%" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="assets" label="Assets">
          <Upload
            action="/upload" // This is a placeholder; adjust the action URL based on your backend
            listType="picture"
            onChange={handleChange}
            maxCount={5} // Adjust the max count as needed
          >
            <Button icon={<UploadOutlined />}>Upload Images</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="createdAt" label="Created At">
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item name="updatedAt" label="Updated At">
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default TemplateForm
