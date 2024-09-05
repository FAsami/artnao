import { auth } from '@/auth'
import { logout } from '@/actions/logout'
import Link from 'next/link'

const Header = async () => {
  const session = await auth()

  return (
    <header className="h-[var(--header-height)]">
      {session?.user ? (
        <form action={logout}>
          <button type="submit">Sign out</button>
        </form>
      ) : (
        <Link href="/auth/login">Login</Link>
      )}
    </header>
  )
}

export { Header }
