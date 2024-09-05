import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()
  if (session?.user.role !== 'ADMIN') {
    redirect('/auth/login')
  }
  return <div>{children}</div>
}

export default AdminLayout
