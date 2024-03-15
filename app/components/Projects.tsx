import React from 'react'

const Projects = ({font}: {font: any}) => {
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