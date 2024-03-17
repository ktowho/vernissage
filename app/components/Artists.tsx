import React from 'react'
import Title from './Title'

import Artist from './Artist'

const artistsList = [
  {
    name: 'Kirill Rave',
    img: '',
  },
  {
    name: 'Anastasia Skabelkina',
    img: '',
  },
  {
    name: 'Victoria Dyryagina',
    img: '',
  },
  {
    name: 'Rebecca Sira',
    img: '',
  },
  {
    name: 'Denis Lotarev',
    img: '',
  },
  {
    name: 'Yana German',
    img: '',
  },
  {
    name: '',
    img: '',
  },
  {
    name: '',
    img: '',
  },
  {
    name: '',
    img: '',
  },
]

const Artists = () => {
  return (
    <section id='artists-section' className='h-dvh bg-[#373737] section-padding'>
      <h1 className='uppercase mb-[37px]'>
        <Title title={'artists'} />
      </h1>

      <div className='grid grid-cols-3 gap-[90px]'>
        {artistsList.map((item, index) => (
          <Artist name={item.name} key={index}/>
        ))}
      </div>

    </section>
  )
}

export default Artists