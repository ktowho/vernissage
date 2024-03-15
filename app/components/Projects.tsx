import React from 'react'
import { manropeFont } from './Fonts'

const font = manropeFont

const Projects = () => {
  return (
    <section className='h-dvh bg-[#717171] section-padding'>
      <h1 className='uppercase'>
        <div className={`${font.variable} leading-none text-[45px] font-hero text-white mb-[30px]`}>Projects</div>
        <span className='block w-full h-[1px] bg-white'></span>
      </h1>
    </section>
  )
}

export default Projects