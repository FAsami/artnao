import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': {
          50: '#ebf9fc',
          100: '#c1ecf5',
          200: '#a3e2f0',
          300: '#7ad5ea',
          400: '#60cde5',
          500: '#38c1df',
          600: '#33b0cb',
          700: '#28899e',
          800: '#1f6a7b',
          900: '#18515e'
        },
        'brand-secondary': {
          50: '#edecf5',
          100: '#c8c5e1',
          200: '#ada9d2',
          300: '#8882bd',
          400: '#716ab1',
          500: '#4d459d',
          600: '#463f8f',
          700: '#37316f',
          800: '#2a2656',
          900: '#201d42'
        },
        'brand-tertiary': {
          50: '#efe6fd',
          100: '#ceb0fa',
          200: '#b78af7',
          300: '#9654f4',
          400: '#8133f1',
          500: '#6200ee',
          600: '#5900d9',
          700: '#4600a9',
          800: '#360083',
          900: '#290064'
        }
      }
    }
  },
  plugins: []
}
export default config
