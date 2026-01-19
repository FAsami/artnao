'use client'

import { FormBuilder, FormField } from '@/components/FormBuilder'

const App: React.FC = () => {
  const formData: FormField[] = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      rules: [{ required: true, message: 'Please input your first name!' }],
      fullWidth: false,
      order: 1
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      rules: [{ required: true, message: 'Please input your age!' }],
      fullWidth: false,
      order: 2
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'select',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' }
      ],
      rules: [{ required: true, message: 'Please select your gender!' }],
      fullWidth: false,
      order: 3
    },
    {
      name: 'dob',
      label: 'Date of Birth',
      type: 'date',
      rules: [{ required: true, message: 'Please select your date of birth!' }],
      fullWidth: false,
      order: 4
    },
    {
      name: 'profileImage',
      label: 'Profile Image',
      type: 'assets',
      rules: [
        { required: false, message: 'Please upload your profile image!' }
      ],
      fullWidth: true,
      order: 5
    },
    {
      name: 'introVideo',
      label: 'Introduction Video',
      type: 'assets',
      rules: [
        { required: true, message: 'You can upload an introduction video.' }
      ],
      fullWidth: true,
      order: 6
    },
    {
      name: 'status',
      label: 'Status',
      type: 'radio',
      options: [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' }
      ],
      rules: [{ required: true, message: 'Please select your status!' }],
      fullWidth: false,
      order: 7
    },
    {
      name: 'uploadAssets',
      label: 'Upload Assets',
      type: 'assets',
      rules: [{ required: false, message: 'Please upload some assets!' }],
      fullWidth: false,
      order: 8
    }
  ]

  return (
    <div>
      <FormBuilder fieldsData={formData} />
    </div>
  )
}

export default App
