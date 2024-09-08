'use server'
import crypto from 'crypto'
import { hash } from 'bcryptjs'
import { client } from '@/lib/prismaClient'
import { sendEmail } from '@/utils/sendEmail'
import { emailOTP } from '@/templates/emailOTP'
import { AuthResponse } from '@/types/auth'

interface GenerateOTPParams {
  name: string
  email?: string
  phone?: string
}

export const sendOTP = async ({
  name,
  email,
  phone
}: GenerateOTPParams): Promise<AuthResponse> => {
  if (!email && !phone) {
    return { success: false, error: 'Either email or phone must be provided' }
  }
  const token = crypto.randomInt(100_000, 1000_000).toString()

  const prevOTP = await client.otp.findMany({
    where: {
      email
    },
    orderBy: {
      updatedAt: 'desc'
    }
  })

  if (prevOTP.length >= 1) {
    const t1 = new Date(prevOTP[0].createdAt).getTime()
    if (new Date().getTime() / 1000 - t1 / 1000 <= 120) {
      return {
        success: false,
        error: 'Already sent !'
      }
    }
  }

  try {
    //Make all the OTP invalid for current user
    await client.otp.updateMany({
      where: {
        email: email
      },
      data: {
        isValid: false
      }
    })
    await client.otp.create({
      data: {
        token: await hash(token, 10),
        isValid: true,
        email: email,
        phone: phone,
        expiredOn: new Date(new Date().getTime() + 3600 * 1000)
      }
    })
    if (email) {
      await sendEmail({
        from: {
          email: '"noreply"<noreply@foysal.dev>',
          name: 'noreply'
        },
        to: {
          email: email,
          name: name
        },
        subject: 'OTP',
        htmlbody: emailOTP({ name: name, otp: token })
      })
    }
    return {
      success: true,
      message: 'OTP sent'
    }
  } catch (error) {
    return {
      success: false,
      error: 'Something went wrong!'
    }
  }
}