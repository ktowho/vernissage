import React from 'react'
import { neueMontrealMediumFont } from '../configs/Fonts'
import { motion } from 'framer-motion'

const font = neueMontrealMediumFont

const titleVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
      duration: 0.75,
    }
  }
}

const lineVariants = {
  initial: {
    opacity: 0,
    width: 0
  },
  animate: {
    width: "100%",
    opacity: 1,
    transition: {
      delay: 0.05,
      duration: 0.75,
    }
  }
}

const Title = ({ title }: any) => {

  return (
    <>
      <motion.div className={`${font.variable} leading-none text-[30px] md:text-[45px] font-hero text-white mb-[30px]`}
        variants={titleVariants}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true
        }}
      >
        {title}
      </motion.div>
      <motion.span className='block w-full h-[1px] bg-white'
         variants={lineVariants}
         initial='initial'
         whileInView='animate'
         viewport={{
           once: true
         }}
      ></motion.span>
    </>
  )
}

export default Title