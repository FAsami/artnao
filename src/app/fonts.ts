import { Comic_Neue, Marck_Script } from 'next/font/google'

const primary = Comic_Neue({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['400', '400', '700']
})
const secondary = Marck_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-secondary'
})

export { primary, secondary }
