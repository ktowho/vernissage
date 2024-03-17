
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


import { neueMontrealRegularFont } from '../configs/Fonts'

const font = neueMontrealRegularFont

const artistsVariants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
      duration: 0.75,
    }
  }
}

const Artist = ({ name, url, index }: any) => {
  return (
    <motion.div className='flex gap-[35px] items-center pt-[50px]'
      variants={artistsVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true
      }}
    >
      <Image src={url} alt={name} width={120} height={120} className='w-[120px] h-[120px] rounded-[50%]' />
      <div className={`${font.variable} leading-none font-montrealMedium text-[45px] text-white [word-spacing:2000px]`}>{name}</div>
    </motion.div>
  )
}

export default Artist