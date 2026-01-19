import { auth } from '@/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { BiSolidHome, BiSolidInfoCircle } from 'react-icons/bi'
import { Suspense } from 'react'
import SetPasswordForm from './SetPasswordForm'

const SetPasswordPage = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) => {
  const authUser = await auth()
  if (!authUser?.user) {
    redirect('/auth/login')
  }
  const { token } = await searchParams

  if (!token) {
    return (
      <div className="flex items-center flex-col gap-8 justify-center h-full px-14">
        <BiSolidInfoCircle className="text-red-500 text-5xl" />
        <div className="text-sm text-center text-neutral-700">
          Something went wrong. Please make sure you have access to this page.
        </div>
        <Link
          className="text-blue-600 flex items-center gap-1 text-sm"
          href="/"
        >
          <BiSolidHome /> Home
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SetPasswordForm />
      </Suspense>
    </div>
  )
}

export default SetPasswordPage
