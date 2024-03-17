'use client'

import React from 'react'
import Title from './Title'

import Artist from './Artist'

const artistsList = [
  {
    name: 'Kirill Rave',
    img: '/kirill_rave.png',
  },
  {
    name: 'Anastasia Skabelkina',
    img: '/anastasia_skabelina.png',
  },
  {
    name: 'Victoria Dyryagina',
    img: '/victoria_dyryagina.png',
  },
  {
    name: 'Rebecca Sira',
    img: '/rebecca_sira.png',
  },
  {
    name: 'Denis Lotarev',
    img: '/denis_lotarev.png',
  },
  {
    name: 'Yana German',
    img: '/yana_german.png',
  },
  {
    name: 'Alessia Mocia',
    img: '/alessia_mocia.png',
  },
  {
    name: 'Sasha Malysheva',
    img: '/sasha_malysheva.png',
  }
]

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