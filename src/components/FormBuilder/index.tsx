'use client'
import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Radio,
  Tooltip,
  UploadFile
} from 'antd'
import { InfoCircleOutlined, SaveFilled } from '@ant-design/icons'
import dayjs, { Dayjs } from 'dayjs'
import { MdOutlineFormatListBulleted } from 'react-icons/md'
import { FileUploader } from '../FileUploader'
const { Option } = Select

export type FormField = {
  name: string
  label: string
  type:
    | 'text'
    | 'number'
    | 'select'
    | 'date'
    | 'image'
    | 'video'
    | 'radio'
    | 'assets'
  rules: { required: boolean; message: string }[]
  options?: { value: string; label: string }[]
  fullWidth?: boolean
  order?: number
}

interface FormValues {
  [key: string]: any
}
type AssetsState = {
  [fieldName: string]: UploadFile[]
}

const FormBuilder: React.FC<{ fieldsData: FormField[] }> = ({ fieldsData }) => {
  const [form] = Form.useForm()
  const [assets, setAssets] = useState<AssetsState>({})

  const onFinish = (values: FormValues) => {
    console.log('Submitted Values:', {
      ...values,
      ...Object.keys(assets).reduce((acc, key) => {
        acc[key] = assets[key]
        return acc
      }, {} as FormValues)
    })
  }

  const sortedFields = [...fieldsData].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  )
  const handleSetAssets = (fieldName: string, files: UploadFile[]) => {
    setAssets((prevAssets) => ({
      ...prevAssets,
      [fieldName]: files
    }))
  }

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <div className="flex justify-between border-b">
        <Tooltip title="Templates for your design and artworks">
          <div className="text-2xl font-semibold flex gap-2 items-center">
            <MdOutlineFormatListBulleted />
            Template{' '}
            <InfoCircleOutlined className="text-sm translate-y-0.5 text-secondary-500" />
          </div>
        </Tooltip>

        <Form.Item className="!mb-1">
          <Button type="primary" size="large" htmlType="submit">
            <SaveFilled /> Save
          </Button>
        </Form.Item>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-200px)] px-6 pt-4">
        {sortedFields.map((field) => {
          const colSpan = field.fullWidth ? 'span 2' : 'span 1'

          switch (field.type) {
            case 'text':
              return (
                <Form.Item
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  rules={field.rules}
                  style={{ gridColumn: colSpan }}
                >
                  <Input placeholder={`Enter ${field.label}`} />
                </Form.Item>
              )

            case 'number':
              return (
                <Form.Item
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  rules={field.rules}
                  style={{ gridColumn: colSpan }}
                >
                  <InputNumber
                    placeholder={`Enter ${field.label}`}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              )

            case 'select':
              return (
                <Form.Item
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  rules={field.rules}
                  style={{ gridColumn: colSpan }}
                >
                  <Select placeholder={`Select ${field.label}`}>
                    {field.options?.map((option) => (
                      <Option key={option.value} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              )

            case 'date':
              return (
                <Form.Item
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  rules={field.rules}
                  style={{ gridColumn: colSpan }}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder={`Select ${field.label}`}
                    defaultValue={dayjs() as Dayjs}
                  />
                </Form.Item>
              )

            case 'radio':
              return (
                <Form.Item
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  rules={field.rules}
                  style={{ gridColumn: colSpan }}
                >
                  <Radio.Group buttonStyle="solid">
                    {field.options?.map((option) => (
                      <Radio.Button key={option.value} value={option.value}>
                        {option.label}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </Form.Item>
              )

            case 'assets':
              return (
                <Form.Item
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  rules={[
                    () => ({
                      validator() {
                        const isRequiredRule = field.rules?.find(
                          (rule) => rule.required
                        )
                        if (isRequiredRule) {
                          if (assets[field.name]?.length > 0) {
                            return Promise.resolve()
                          }
                          return Promise.reject(
                            new Error(isRequiredRule.message)
                          )
                        }
                        return Promise.resolve()
                      }
                    })
                  ]}
                  style={{ gridColumn: colSpan }}
                >
                  <FileUploader
                    onUploadComplete={(val) => handleSetAssets(field.name, val)}
                  />
                </Form.Item>
              )
            default:
              return null
          }
        })}
      </div>
    </Form>
  )
}

export { FormBuilder }
