import { Great_Vibes, Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin']
})
const caveat = Great_Vibes({ subsets: ['latin'], weight: '400' })

export { playfair, caveat }
