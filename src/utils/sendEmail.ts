import { SendMailClient } from 'zeptomail'

const url = process.env.ZEPTO_EMAIL_URL
const token = process.env.ZEPTO_TOKEN

if (!url) {
  throw new Error('ZEPTO_EMAIL_URL is not defined in environment variables')
}

if (!token) {
  throw new Error('ZEPTO_TOKEN is not defined in environment variables')
}

const client = new SendMailClient({ url, token })

interface EmailOptions {
  from: {
    address: string
    name: string
  }
  to: Array<{
    email_address: {
      address: string
      name: string
    }
  }>
  subject: string
  htmlbody: string
}

export const sendEmail = async (options: EmailOptions) => {
  try {
    await client.sendMail(options)
  } catch (error) {
    console.error(error)
  }
}
