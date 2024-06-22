'use server'

import * as z from 'zod'
import { ResetPasswordSchema } from '../../schemas'
import { auth } from '../../auth'
import { AuthActionResponse } from '../../../types/auth'
import { client } from '../../lib/prismaClient'
import bcrypt from 'bcryptjs'

export const resetPassword = async (
  values: z.infer<typeof ResetPasswordSchema>
): Promise<AuthActionResponse> => {
  const validatedFields = ResetPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid fields !' }
  }

  const { password } = validatedFields.data
  const session = await auth()
  if (session?.user.id) {
    const hashedPassword = await bcrypt.hash(password, 10)

    await client.user.update({
      where: {
        id: session.user.id
      },
      data: {
        password: hashedPassword
      }
    })
    return { success: true, message: 'Password updated successfully' }
  } else {
    return { success: false, error: 'You are not authorized.' }
  }
}
