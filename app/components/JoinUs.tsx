'use client'
import React from 'react'
import Title from './Title'
import { neueMontrealMediumFont } from '../configs/Fonts'
import ExploreButton from './ExploreButton'

const font = neueMontrealMediumFont

const JoinUs = () => {
  return (
    <section id='joining-section' className="min-h-dvh section-padding bg-[url('/room.gif')] bg-[#6a134f] bg-center bg-cover bg-no-repeat bg-blend-multiply">
      <h1 className='uppercase mb-[200px]'><Title title={'join us'} /></h1>
      <div className='flex flex-col items-center'>
        <h2 className={`${font.variable} leading-none text-[45px] font-montrealMedium text-white mb-[37px] uppercase`}>Artists</h2>
        <p className={`${font.variable} w-[520px] text-center leading-none font-montrealMedium text-[30px] text-white mb-[100px]`}>
          Let&nbsp;us promote you and be&nbsp;the first to&nbsp;learn about upcoming open calls and exhibitions
        </p>
        <ExploreButton name={'Join as artist'} url={'/'}/>
      </div>
    </section>
  )
}

export default JoinUs