'use client'

import React from 'react'

import Title from './Title'
import Highlight from './Highlight'
import ExploreButton from './ExploreButton'

import { artworksList } from '../configs/Data'

const Highlights = () => {
  return (
    <section id='highlights-section' className='min-h-dvh bg-[#373737] section-padding'>
      <h1 className='uppercase mb-[108px]'>
        <Title title={'highlights'} />
      </h1>
      {artworksList.map((item) => (
        <Highlight
          url={item.url}
          artistName={item.artistName}
          artistImg={item.artistImg}
          artworkName={item.artworkName}
          artworkDescription={item.artworkDescription}
          artworkImg={item.artworkImg}
        />
      ))}
      <div className='flex justify-center'>
        <ExploreButton name='Explore all artworks' url='/'/>
      </div>

    </section>
  )
}

export default Highlights