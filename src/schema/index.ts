import * as z from 'zod'

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required'
    })
    .email({
      message: 'Invalid email'
    }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[@$!#%*?&]/,
      'Password must contain at least one special character'
    ),
  firstName: z.string().min(1, {
    message: 'First name is required'
  }),
  lastName: z.string().min(1, {
    message: 'Last name is required'
  })
})
