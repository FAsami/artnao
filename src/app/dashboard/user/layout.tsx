import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()
  console.log({ session })
  if (session?.user.role !== 'USER') {
    redirect('/auth/login')
  }
  return <div>{children}</div>
}

export default UserLayout
