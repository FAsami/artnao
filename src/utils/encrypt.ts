'use server'
import CryptoJS from 'crypto-js'

const SECRET_KEY = process.env.CRYPTO_SECRET_KEY as string

if (!SECRET_KEY) {
  throw new Error(
    'Missing secret key. Please set the CRYPTO_SECRET_KEY environment variable.'
  )
}

export const encrypt = async (data: object): Promise<string> => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString()
}

export const decrypt = async (encryptedData: string): Promise<object> => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY)
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
  return JSON.parse(decryptedData)
}
