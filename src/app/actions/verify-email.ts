'use server'

import * as z from 'zod'
import { OTPSchema } from '../../schemas'
import { auth } from '../../auth'
import { AuthActionResponse } from '../../../types/auth'
import bcrypt from 'bcryptjs'
import { client } from '../../lib/prismaClient'

export const verifyEmail = async (
  values: z.infer<typeof OTPSchema>
): Promise<AuthActionResponse> => {
  const validatedFields = OTPSchema.safeParse(values)

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid fields!' }
  }

  const session = await auth()
  const { otp } = validatedFields.data

  if (!session || !session.user.email || !session.user.id) {
    return { success: false, error: 'No active session found!' }
  }

  try {
    const result = await client.otp.findFirst({
      where: {
        email: session.user.email
      }
    })

    if (!result || !result.token) {
      return { success: false, error: 'OTP not found!' }
    }

    const isOTPmatched = await bcrypt.compare(otp, result.token)
    if (!isOTPmatched) {
      return { success: false, error: 'Invalid OTP!' }
    }

    if (result.expiredOn <= new Date()) {
      return { success: false, error: 'OTP has expired!' }
    }

    await client.user.update({
      where: {
        id: session.user.id
      },
      data: {
        emailVerifiedOn: new Date()
      }
    })

    await client.otp.deleteMany({
      where: {
        email: session.user.email
      }
    })

    return { success: true, message: 'OTP validated successfully!' }
  } catch (error) {
    return { success: false, error: 'Something went wrong!' }
  }
}
