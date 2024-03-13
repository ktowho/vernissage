import React from 'react'
import localFont from '@next/font/local'

const neueMachinaRegularFont = localFont({
  src: '../../public/fonts/NeueMachina-Regular.woff2',
  display: 'swap',
  variable: '--font-neueMachina-Regular'
})

const Hero = () => {
  return (
    <>
      <div className="grid auto-cols-auto justify-center h-dvh overflow-hidden z-[-1] py-[40px]
      bg-[url('/bg.gif')] bg-[#6a134f] bg-center bg-cover bg-no-repeat bg-blend-multiply">
        <h1 className={`${neueMachinaRegularFont.variable} leading-none uppercase text-center w-[700px] text-[70px] font-hero text-white self-center`}> Platform for contemporary digital art</h1>
      </div>
      
    </>
  )
}

export default Hero