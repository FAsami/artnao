'use server'
import * as z from 'zod'
import { ForgotPasswordSchema } from '@/schema'
import { AuthResponse } from '@/types/auth'
import { sendOTP } from '@/utils/sendOTP'
import { client } from '@/lib/prismaClient'

export const forgotPassword = async (
  values: z.infer<typeof ForgotPasswordSchema>
): Promise<AuthResponse> => {
  const validatedFields = ForgotPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid fields !' }
  }

  const { email } = validatedFields.data
  const user = await client.user.findFirst({
    where: {
      email
    }
  })

  const provider = await client.account.findMany({
    where: {
      userId: user?.id
    }
  })

  if (user?.name && !provider.length) {
    try {
      await sendOTP({ email, name: user.name })
      return { success: true, message: 'OTP sent successfully' }
    } catch (error) {
      return { success: false, error: 'Failed to send OTP' }
    }
  } else {
    return { success: false, error: 'No user is associated with this email.' }
  }
}
