import React from 'react'
import localFont from '@next/font/local'
import Image from 'next/image'

import { neueMachinaRegularFont } from './Fonts'

import heroLogo from '@/public/hero-logo.png'
import scrollIcon from '@/public/scroll.png'

const font = neueMachinaRegularFont

const Hero = () => {
  return (
    <section>
      <div className="grid grid-rows-[150px_auto_150px_70px] justify-items-center
      h-dvh overflow-hidden z-[-1] py-[40px] 
      bg-[url('/bg.gif')] bg-[#6a134f] bg-center bg-cover bg-no-repeat bg-blend-multiply">
        <Image
          src={heroLogo}
          alt='logo'
          height={24}
          width={257}
          className='mb-3'
        />
        <h1 className={`${font.variable} leading-none uppercase text-center
        w-[700px] text-[70px] font-hero text-white self-center`}> Platform for contemporary digital art</h1>
        <Image src={scrollIcon} alt='scroll' height={104} width={104}
        className='animate-[spin_10s_linear_infinite] self-center'/>
      </div>
    </section>

  )
}

export default Hero