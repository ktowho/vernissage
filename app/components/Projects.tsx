import React from 'react'
import { manropeFont } from './Fonts'

import Title from './Title'

const font = manropeFont

const Projects = () => {
  return (
    <section id='projects-section' className='h-dvh bg-[#717171] section-padding'>
      <h1 className='uppercase'>
        <Title title={'projects'}/>
      </h1>
    </section>
  )
}

export default Projects