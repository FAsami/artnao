import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { UserRole } from '@prisma/client'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { client } from './lib/prismaClient'
import { LoginSchema } from './schemas'
import { getUserByEmail, getUserById } from './query/user'
import bcrypt from 'bcryptjs'

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error'
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole
        session.user.emailVerifiedOn = token.emailVerifiedOn as Date | null
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token
      if (token.sub) {
        const user = await getUserById(token.sub)
        if (user) {
          token.name = `${user.firstName} ${user.lastName}`
          token.role = user.role
          token.email = user.email
          token.emailVerifiedOn = user.emailVerifiedOn
        }
      }
      return token
    }
  },
  providers: [
    Google,
    Github,
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)
        if (validatedFields.success) {
          const { email, password } = validatedFields.data
          const user = await getUserByEmail(email)

          if (!user || !user.password) return null
          const passwordsMatch = await bcrypt.compare(password, user.password)
          if (passwordsMatch) return user
          return null
        }
        return null
      }
    })
  ],
  adapter: PrismaAdapter(client),
  session: { strategy: 'jwt' }
})
