import localFont from '@next/font/local'
import { Manrope } from 'next/font/google'

export const neueMachinaRegularFont = localFont({
  src: './../../public/fonts/NeueMachina-Regular.woff2',
  display: 'swap',
  variable: '--font-neueMachina-Regular'
})

export const manropeFont = Manrope({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope-semibold'
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