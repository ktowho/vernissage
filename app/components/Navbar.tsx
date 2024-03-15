'use client'
import React, { useState } from 'react'
import { Manrope } from 'next/font/google'
import Link from 'next/link'

const manropeFont = Manrope({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope-semibold'
})

const navList = [
  { name: 'Main', link: '/' },
  { name: 'Projects', link: '/' },
  { name: 'Artworks', link: '/' },
  { name: 'Artists', link: '/' },
  { name: 'Joining', link: '/' },
  { name: 'Founders', link: '/' },
  { name: 'Contact us', link: '/' },
]

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className={`${manropeFont.variable} fixed bottom-[40px] left-[50%] -translate-x-1/2 z-50 font-nav`}>
      {/* Nav List  */}

      <ul className={`${open ? 'flex' : 'hidden'} text-white/[0.8] flex-col items-center bg-black/[0.8] rounded-t-[20px] pt-2`}>
        {navList.map((item) => (
          <li className='mb-1 hover:text-white'><Link href={item.link}>{item.name}</Link></li>
        ))}
      </ul>
      {/* Menu Button  */}
      <div onClick={() => setOpen(!open)}
        className={`flex items-center w-[150px] h-[60px] justify-between px-[30px] py-[15px]
        bg-black/[0.8] text-white text-[18px] hover:cursor-pointer ${open ? 'rounded-b-[20px]' : 'rounded-[20px]'}`}>
        <div>
          {/* Menu Icon (open/close)  */}
          <span className={`block w-[18px] h-[2px] bg-white duration-100 ${open ? ' rotate-45 translate-x-[1px] translate-y-[0.5px]' : 'mb-1'}`} />
          <span className={`block w-[18px] h-[2px] bg-white ${open ? '-rotate-45 translate-x-[1px] -translate-y-[1.5px]' : ''}`} />
        </div>
        <div>Menu</div>
      </div>
    </nav>
  )
}

export default Navbar