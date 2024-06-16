declare module 'zeptomail' {
  interface SendMailClientConfig {
    url: string
    token: string
  }

  interface EmailAddress {
    address: string
    name?: string
  }

  interface EmailRecipient {
    email_address: EmailAddress
  }

  interface SendMailOptions {
    from: {
      address: string
      name?: string
    }
    to: EmailRecipient[]
    subject: string
    htmlbody: string
  }

  export class SendMailClient {
    constructor(config: SendMailClientConfig)
    sendMail(options: SendMailOptions): Promise<any>
  }
}
