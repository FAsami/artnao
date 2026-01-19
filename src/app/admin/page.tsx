import React from 'react'
import { Overview } from './components/dashboard'

const AdminPage = () => {
  return (
    <div className="m-4">
      <Overview loading={false} />
    </div>
  )
}
export default AdminPage
