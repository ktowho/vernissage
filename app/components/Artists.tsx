'use client'

import React from 'react'
import Title from './Title'

import Artist from './Artist'

import { artistsList } from '../configs/Data'

const Artists = () => {
  return (
    <section id='artists-section' className='min-h-dvh bg-[#373737] section-padding'>
      <h1 className='uppercase mb-[37px]'>
        <Title title={'artists'} />
      </h1>

      <div className='grid grid-cols-3 gap-[90px]'>
        {artistsList.map((item, index) => (
          <Artist name={item.name} url={item.img} index={index} key={index}/>
        ))}
      </div>

    </section>
  )
}

export default Artists