'use client'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useState, useTransition } from 'react'
import { AuthActionResponse } from '../../../../types/auth'
import { Spinner } from '../../components/Spinner'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import OtpInput from './OtpInput'
import { useSession } from 'next-auth/react'
import { sendOTP } from '../../actions/send-otp'
import { useRouter } from 'next/navigation'
import { verifyEmail } from '../../actions/verify-email'
import { BiErrorCircle } from 'react-icons/bi'

interface FormData {
  otp: string
}

const EmailVerifyPage = () => {
  const { handleSubmit, control } = useForm<FormData>()
  const [isPending, startTransition] = useTransition()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const [result, setResult] = useState<AuthActionResponse>({
    success: false,
    message: '',
    error: ''
  })
  const { data, status } = useSession()

  const handleResendOTP = async () => {
    if (data?.user?.email && data?.user.name) {
      await sendOTP({
        email: data?.user?.email,
        firstName: data?.user.name
      })
    }
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      window.location.reload()
    } else {
      setIsLoading(false)
    }
  }, [status, router])

  const onSubmit = async (data: FormData) => {
    const result = await verifyEmail({ otp: data.otp })
    console.log(result)
    setResult(result)
    if (result.success) {
      router.push('/')
    }
  }
  if (isLoading) {
    return <div>Loading</div>
  }
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
        Verify your email
      </h3>
      <div className="flex justify-center mt-12">
        <MdOutlineMarkEmailUnread className="text-amber-400 text-7xl" />
      </div>
      <div className="text-sm py-6 text-neutral-700">
        6 digit code has been sent to{' '}
        <span className="text-green-600">{data?.user?.email}</span> Please enter
        the code to verify your email
      </div>
      <button onClick={handleResendOTP} className="text-sm text-blue-500 mb-4">
        Didn&rsquo;t received an OTP ? resend in 00:10:09
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <Controller
          name="otp"
          control={control}
          render={() => <OtpInput control={control} name="otp" length={6} />}
        />

        <button
          disabled={isPending}
          className="w-full h-11 flex items-center justify-center gap-2 py-2.5 text-neutral-600 text-base font-semibold bg-amber-400 rounded disabled:bg-amber-100 disabled:cursor-not-allowed mt-4"
        >
          {isPending ? <Spinner /> : 'submit'}
        </button>
      </form>
      {result.error && !isPending && (
        <div className="rounded bg-red-100 text-red-400 text-sm font-semibold px-4 py-3 flex items-center justify-between">
          <div>{result.error}</div>
          <div>{<BiErrorCircle />}</div>
        </div>
      )}
    </div>
  )
}

export default EmailVerifyPage
