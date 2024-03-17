import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { VectorSvg } from '../configs/Svg'

import { neueMontrealMediumFont } from '../configs/Fonts'

const font = neueMontrealMediumFont

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
      duration: 0.5,
    }
  }
}

const ExploreButton = ({ name, url }: any) => {
  return (

    <Link href={url} className='inline-block'>
      <motion.div className={`${font.variable} flex items-center justify-between w-[271px] px-[49px] py-[18px] bg-white rounded-[20px] font-montrealMedium text-[18px]`}
        variants={buttonVariants}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true
        }}
      >
        {name}
        <VectorSvg />
      </motion.div>
    </Link>



  )
}

export default ExploreButton