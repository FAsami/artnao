import nodemailer from 'nodemailer'

interface EmailOptions {
  from: {
    email: string
    name: string
  }
  to: {
    email: string
    name: string
  }

  subject: string
  htmlbody: string
}

const sendEmail = async ({ to, from, subject, htmlbody }: EmailOptions) => {
  const transport = nodemailer.createTransport({
    host: 'smtp.zeptomail.com',
    port: 587,
    auth: {
      user: 'emailapikey',
      pass: process.env.EMAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: '"noreply" <noreply@foysal.dev>',
    to: to.email,
    subject: subject,
    html: htmlbody
  }

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
      throw new Error('Failed to send email')
    }
  })
}
export { sendEmail }
