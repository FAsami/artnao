'use server'
import crypto from 'crypto'
import { hash } from 'bcryptjs'
import { client } from '../../lib/prismaClient'
import { sendEmail } from '../../utils/sendEmail'
import { otpTemplate } from '../../email-templates/otp-template'

interface GenerateOTPParams {
  firstName: string
  email?: string
  phone?: string
}

export const sendOTP = async ({
  firstName,
  email,
  phone
}: GenerateOTPParams): Promise<void> => {
  if (!email && !phone) {
    throw new Error('Either email or phone must be provided')
  }
  const token = crypto.randomInt(100_000, 1000_000).toString()
  const emailConfig = {
    subject: 'OTP for registration',
    sender: '"Team foysal.dev" <noreply@foysal.dev>'
  }

  try {
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
          email: emailConfig.sender,
          name: 'noreply'
        },
        to: {
          email: email,
          name: firstName
        },
        subject: emailConfig.subject,
        htmlbody: otpTemplate({ name: firstName, otp: token })
      })
    }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to send OTP')
  }
}
