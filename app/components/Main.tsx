import Image from 'next/image'
import React from 'react'
import main_bg from '@/public/png/main-bg.png'

const Main = () => {
  return (
    <>
      <div className='relative overflow-hidden h-dvh z-[-1]'>
        <Image
          className='z-[0] bg'
          alt={'Background Image'}
          src={main_bg}
          placeholder='blur'
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1>Anime</h1>
    </>
  )
}

export default Main