'use client'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CSSTransition } from 'react-transition-group'
import {
  BiCheckCircle,
  BiErrorCircle,
  BiSolidHome,
  BiSolidInfoCircle
} from 'react-icons/bi'
import { useState, useTransition } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { ResetPasswordSchema } from '../../../schemas'
import { AuthActionResponse } from '../../../../types/auth'
import { Spinner } from '../../components/Spinner'
import { signIn } from 'next-auth/react'
import clsx from 'clsx'
import { useRouter, useSearchParams } from 'next/navigation'
import { resetPassword } from '../../actions/reset-password'
import { client } from '../../../lib/prismaClient'

const ResetPasswordPage = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset
  } = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      confirmPassword: '',
      password: '',
      token: ''
    }
  })

  const [isPending, startTransition] = useTransition()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const [result, setResult] = useState<AuthActionResponse>({
    success: false,
    message: '',
    error: ''
  })
  const router = useRouter()
  const search = useSearchParams()
  const token = search.get('token')

  const onSubmit = async (values: z.infer<typeof ResetPasswordSchema>) => {
    startTransition(async () => {
      if (token) {
        const result = await resetPassword({
          password: values.password,
          confirmPassword: values.confirmPassword,
          token
        })
        setResult(result)
        if (result?.success) {
          router.push('/')
        } else {
          reset()
        }
      }
    })
  }
  const inputFields: Array<{
    id: number
    name: keyof z.infer<typeof ResetPasswordSchema>
    placeholder: string
    type: string
  }> = [
    {
      id: 3,
      name: 'password',
      placeholder: 'Password',
      type: 'password'
    },
    {
      id: 4,
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
      type: 'password'
    }
  ]
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
      <h3 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
        Reset password
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          {inputFields.map(({ id, type, placeholder, name }) => {
            return (
              <div key={id} className="relative">
                <input
                  {...register(name)}
                  placeholder={placeholder}
                  type={
                    type === 'password'
                      ? isPasswordVisible
                        ? 'text'
                        : 'password'
                      : 'text'
                  }
                  className={clsx(
                    'w-full border border-gray-100 text-sm p-4 focus:outline-none focus:ring-1 focus:ring-amber-500 rounded',
                    errors[name] &&
                      'outline outline-red-200 outline-1 focus:ring-red-300'
                  )}
                />
                {type === 'password' && (
                  <div
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    className="absolute right-4 top-1/2 translate-y-[-50%]"
                  >
                    {isPasswordVisible ? (
                      <FiEye className="text-neutral-400 text-base" />
                    ) : (
                      <FiEyeOff className="text-neutral-400 text-base" />
                    )}
                  </div>
                )}
                <CSSTransition
                  in={Boolean(errors[name]?.message)}
                  timeout={200}
                  classNames={{
                    enter: 'animate__animated',
                    enterActive: 'animate__fadeIn',
                    appear: 'animate__animated',
                    appearActive: 'animate__fadeIn',
                    exit: 'animate__animated',
                    exitActive: 'animate__fadeOut'
                  }}
                  unmountOnExit
                >
                  <div className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    {errors[name]?.message && <BiErrorCircle />}
                    {errors[name]?.message}
                  </div>
                </CSSTransition>
              </div>
            )
          })}
          <button
            type="submit"
            disabled={isPending}
            className="w-full h-11 flex items-center justify-center gap-2 py-2.5 text-neutral-600 text-base font-semibold bg-amber-400 rounded disabled:bg-amber-100 disabled:cursor-not-allowed"
          >
            {isPending ? <Spinner /> : 'Login'}
          </button>

          {result?.error && (
            <div className="rounded bg-red-100 text-red-400 text-sm font-semibold px-4 py-3 flex items-center justify-between">
              <div>{result.error}</div>
              <div>{<BiErrorCircle />}</div>
            </div>
          )}
          {result?.success && (
            <div className="rounded bg-green-100 text-green-400 text-sm font-semibold px-4 py-3 flex items-center justify-between">
              <div>{result.message}</div>
              <div>{<BiCheckCircle />}</div>
            </div>
          )}
        </div>
      </form>
      <Link
        className="block text-blue-600 w-full mt-2 mb-12 font-semibold text-xs"
        href="/auth/forgot-password"
      >
        Forgotten password ?
      </Link>

      <div className="flex items-center gap-4 text-gray-300 my-4 text-sm">
        <div className="w-full border border-gray-100"></div>
        <span className="text-red-500 text-xs">or</span>
        <div className="w-full border border-gray-100"></div>
      </div>
      <div className="text-2xl flex items-center justify-center my-8 gap-4">
        <button onClick={() => signIn('google')}>
          <FcGoogle />
        </button>
        <button onClick={() => signIn('github')}>
          <FaGithub />
        </button>
      </div>
      <div className="text-xs mt-3 text-gray-400 font-semibold text-center">
        Don&rsquo;t have an account ?
        <Link href="/auth/register" className="text-amber-500">
          &nbsp; Register
        </Link>
      </div>
    </div>
  )
}

export default ResetPasswordPage