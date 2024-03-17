'use client'

import React from 'react'
import Image from 'next/image'

import Title from './Title'
import Tag from './Tag'

import { neueMontrealMediumFont, neueMontrealRegularFont } from '../configs/Fonts'

import picture from '@/public/technology-humanity.png'
import { CalendarSvg, LocationSvg } from '../configs/Svg'
import ExploreButton from './ExploreButton'

const textFont = neueMontrealRegularFont

const Projects = () => {
  return (
    <section id='projects-section' className='min-h-dvh bg-[#373737] section-padding'>
      <h1 className='uppercase'>
        <Title title={'projects'} />
      </h1>
      <div className='grid grid-cols-2 gap-[150px] mt-[96px]'>
        <div>
          <div className='flex gap-[9px] mb-[32px]'>
            <Tag tagName={'Offline'} />
            <Tag tagName={'Exhibition'} />
          </div>

          <Title title={'Technology and Humanity Canvas'} />

          <div className={`${textFont.variable} text-white font-montrealRegular mb-[45px]`}>

            <p className={` mt-[48px] mb-[80px] font-montrealRegular text-[24px] w-[486px]`}>Could dreams and nightmares be the potent driving force behind our creative processes, the mysterious catalysts Igniting the flame of artistic Inspiration?</p>

            <div className='flex gap-[67px] text-[18px]'>
              <div className='flex gap-[21px]'>
                <CalendarSvg />
                <div>7 November - 19 December 2023</div>
              </div>

              <div className='flex gap-[21px]'>
                <LocationSvg />
                <div>Dubai, UAE</div>
              </div>
            </div>

          </div>
          <ExploreButton name='Explore project' url=''/>
        </div>
        <div>
          <Image
            src={picture}
            alt='Technology and Humanity Canvas'
          />
        </div>
      </div>
    </section>
  )
}

export default Projects