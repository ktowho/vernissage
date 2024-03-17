import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'


import { manropeMedium, manropeLight } from '../configs/Fonts'

const highlightVariants = {
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

const Highlight = ({ url, artistName, artistImg, artworkName, artworkDescription, artworkImg, }: any) => {
  return (
    <motion.div
      variants={highlightVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true
      }}
    >
      <Link href={url}>
        <div className='flex mb-[100px] gap-[70px] glitch'>
          <Image src={artworkImg} alt='flower of civilization' width={799} height={482}></Image>
          <div className='flex flex-col justify-end pb-[49px] text-white'>
            <div className='flex gap-[15px] items-center mb-[30px]'>
              <Image src={artistImg} alt={artistName} width={34} height={34} className='rounded-[50%]' />
              <div className={`${manropeLight.variable} text-[18px] leading-none font-manropeLight`}>{artistName}</div>
            </div>
            <h2 className={`${manropeMedium.variable} mb-[15px] text-[30px]`}>{artworkName}</h2>
            <p className={`${manropeLight.variable} text-[18px]`}>{artworkDescription}</p>
          </div>
        </div>
      </Link>
    </motion.div>

  )
}

export default Highlight