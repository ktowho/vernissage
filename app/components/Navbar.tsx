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
  { name: 'Contact', link: '/' },
]

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className={`${manropeFont.variable} fixed bottom-[40px] left-[50%] -translate-x-1/2 z-50 font-nav`}>
      {/* Nav List  */}

      <ul className={`${open ? 'flex' : 'hidden'} text-white flex-col items-center `}>
        {navList.map((item) => (
          <li><Link href={item.link}>{item.name}</Link></li>
        ))}
      </ul>
      {/* Menu Button  */}
      <div onClick={() => setOpen(!open)}
        className='flex items-center w-[150px] h-[60px] justify-between px-[30px] py-[15px]
        rounded-[20px] bg-black text-white text-[18px] hover:cursor-pointer'>
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