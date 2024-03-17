import localFont from '@next/font/local'
import { Manrope } from 'next/font/google'

export const neueMachinaRegularFont = localFont({
  src: './../../public/fonts/NeueMachina-Regular.woff2',
  display: 'swap',
  variable: '--font-neueMachina-Regular'
})

export const manropeSemibold = Manrope({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope-semibold'
})

export const manropeMedium = Manrope({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope-medium'
})

export const manropeLight = Manrope({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope-light'
})

export const neueMontrealMediumFont = localFont({
  src: './../../public/fonts/NeueMontreal-Medium.woff2',
  display: 'swap',
  variable: '--font-neueMontreal-Medium'
})

export const neueMontrealRegularFont = localFont({
  src: './../../public/fonts/NeueMontreal-Regular.woff2',
  display: 'swap',
  variable: '--font-neueMontreal-Regular'
})