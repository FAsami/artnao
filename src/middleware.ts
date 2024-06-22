import { auth } from './auth'

export default auth((req) => {
  // api auth route handlers
  if (req.nextUrl.pathname.startsWith('/api/auth')) {
    return
  }

  if (req.auth) {
    // if (
    //   authRoutes.includes(req.nextUrl.pathname) &&
    //   !req.auth.user.emailVerified
    // ) {
    //   return Response.redirect(new URL('/auth/verify-email', req.nextUrl))
    // }
    if (authRoutes.includes(req.nextUrl.pathname)) {
      return Response.redirect(new URL('/', req.nextUrl))
    }
  } else {
    if (authRoutes.includes(req.nextUrl.pathname)) {
      return
    }
    if (!publicRoutes.includes(req.nextUrl.pathname)) {
      // private router matched
      let callbackUrl = req.nextUrl.pathname
      if (req.nextUrl.search) {
        callbackUrl += req.nextUrl.search
      }
      const encodedCallbackUrl = encodeURIComponent(callbackUrl)
      return Response.redirect(
        new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, req.nextUrl)
      )
    }
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
}

const publicRoutes = [
  '/',
  '/404',
  '/auth/verify-email',
  '/auth/forgot-password'
]

const authRoutes = ['/auth/login', '/auth/register', '/auth/error']
