import { manropeSemibold } from './app/configs/Fonts';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        neueMachinaRegular: ['var(--font-neueMachina-Regular)'],
        montrealRegular: ['var(--font-neueMontreal-Regular)'],
        montrealMedium: ['var(--font-neueMontreal-Medium)'],
        manropeSemibold: ['var(--font-manrope-semibold)'],
        manropeMedium: ['var(--font-manrope-medium)'],
        manropeLight: ['var(--font-manrope-light)'],
      },
      colors: {
        white: '#fff',
      },
      backgroundImage: {
        'main-bg': "url('/static/png/main-bg.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
