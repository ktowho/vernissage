'use client'
import React, { forwardRef, useState } from 'react'
import Link from 'next/link'

import { manropeFont } from './Fonts'

// const navList = [
//   { name: 'main'},
//   { name: 'projects'},
//   { name: 'artworks'},
//   { name: 'artists'},
//   { name: 'joining'},
//   { name: 'founders'},
//   { name: 'contact us'},
// ]

const navList = ['main', 'projects', 'artworks', 'highlights', 'joining', 'founders', 'contact us']

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className={`${manropeFont.variable} fixed bottom-[40px] left-[50%] -translate-x-1/2 z-50 font-nav`}>
      {/* Nav List  */}

      <ul className={`${open ? 'flex' : 'hidden'} text-white/[0.8] flex-col items-center bg-black/[0.8] rounded-t-[20px] pt-2`}>
        {navList.map((item) => (
          <li className='mb-1 hover:text-white'><button className=' first-letter:capitalize' onClick={() => {
            const element = document.getElementById(`${item}-section`)
            element?.scrollIntoView({
              behavior: 'smooth'
            })
            setOpen(!open)
          }}>{item}</button></li>
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