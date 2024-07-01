import { Comic_Neue, Marck_Script, Quicksand } from 'next/font/google'

const primary = Quicksand({
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
