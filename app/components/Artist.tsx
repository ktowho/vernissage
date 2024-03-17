
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


import { neueMontrealRegularFont } from '../configs/Fonts'
import Link from 'next/link'

const font = neueMontrealRegularFont

const artistsVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    }
  })
}

const Artist = ({ name, url, index }: any) => {
  return (
    <Link href='/'>
      <motion.div className='flex gap-[35px] items-center pt-[50px]'
        variants={artistsVariants}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true
        }}
        custom={index}
      >
        <Image src={url} alt={name} width={120} height={120} className='w-[120px] h-[120px] rounded-[50%]' />
        <div className={`${font.variable} leading-none font-montrealMedium text-[45px] text-white [word-spacing:2000px]`}>{name}</div>
      </motion.div>
    </Link>

  )
}

export default Artist