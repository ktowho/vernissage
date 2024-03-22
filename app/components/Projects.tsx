'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Title from './Title'
import Tag from './Tag'

import { neueMontrealMediumFont, neueMontrealRegularFont } from '../configs/Fonts'

import picture from '@/public/technology-humanity.png'
import { CalendarSvg, LocationSvg } from '../configs/Svg'
import ExploreButton from './ExploreButton'

const textFont = neueMontrealRegularFont

const projectVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    }
  })
}

const Projects = () => {
  return (
    <section id='projects-section' className='min-h-dvh bg-[#373737] section-padding'>
      <h1 className='uppercase'>
        <Title title={'projects'} />
      </h1>
      <motion.div className='flex flex-wrap xl:flex-nowrap gap-[150px] mt-[96px]'
        variants={projectVariants}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true
        }}
      >
        <div>
          <div className='flex gap-[9px] mb-[32px]'>
            <Tag tagName={'Offline'} />
            <Tag tagName={'Exhibition'} />
          </div>

          <Title title={'Technology and Humanity Canvas'} />

          <div className={`${textFont.variable} text-white font-montrealRegular mb-[45px]`}>

            <p className={` mt-[48px] mb-[80px] font-montrealRegular text-[24px]`}>Could dreams and nightmares be the potent driving force behind our creative processes, the mysterious catalysts Igniting the flame of artistic Inspiration?</p>

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
          <ExploreButton name='Explore project' url='' />
        </div>
        <div className=' w-full'>
          <Image
            src={picture}
            alt='Technology and Humanity Canvas'
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Projects