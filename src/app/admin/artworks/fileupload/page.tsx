'use client'
import React, { useState } from 'react'
import { Upload, Button, message, UploadFile, UploadProps } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'

const { Dragger } = Upload

const FileUploader = () => {
  const [loading, setLoading] = useState(false)
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const getSignature = async () => {
    try {
      const response = await axios.post('/api/media/cloudinary-sign')
      return response.data
    } catch (error) {
      console.error('Error getting signature:', error)
      return null
    }
  }

  const handleUpload = async (file: any) => {
    const signatureData = await getSignature()
    if (!signatureData) return

    const formData = new FormData()
    formData.append('file', file)
    formData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    )
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)
    formData.append('timestamp', signatureData.timestamp)
    formData.append('signature', signatureData.signature)

    setLoading(true)

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      )

      message.success('Upload successful!')
      console.log('File uploaded:', response.data) // Log the file details from Cloudinary

      // Generate a new unique uid if needed
      const uniqueUid = `${file.uid}-${new Date().getTime()}`

      // Update the file list with the uploaded file
      setFileList((prev) => [
        ...prev,
        {
          uid: uniqueUid, // Ensure the uid is unique
          name: file.name,
          status: 'done',
          url: response.data.secure_url, // Cloudinary file URL
          type: file.type // Add file type
        }
      ])
    } catch (error) {
      message.error('Upload failed.')
      console.error('Upload error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange: UploadProps['onChange'] = ({ fileList }) => {
    setFileList(fileList)
  }

  return (
    <div>
      <Dragger
        customRequest={({ file, onSuccess, onError }: any) => {
          handleUpload(file)
            .then(() => onSuccess?.('done'))
            .catch(() => onError?.('error'))
        }}
        showUploadList={{
          showPreviewIcon: true,
          showRemoveIcon: true
        }}
        fileList={fileList}
        onChange={handleChange}
        accept=".pdf,video/*,image/*,.fig,.md,.xlsx,.xls,.doc,.docx"
      >
        <p className="ant-upload-drag-icon">
          <UploadOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <Button loading={loading} icon={<UploadOutlined />}>
          {loading ? 'Uploading...' : 'Upload'}
        </Button>
      </Dragger>
    </div>
  )
}

export default FileUploader
