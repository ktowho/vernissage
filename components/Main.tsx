import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <div className='text-green bg-gray-20 h-screen'>
      Main
      <Image src="/main-bg.png"
      alt=''
      width={1920}
      height={1080}
      />
    </div>
  )
}

export default Main