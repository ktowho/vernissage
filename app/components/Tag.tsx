import React from 'react'
import { manropeSemibold } from '../configs/Fonts'

const font = manropeSemibold

const Tag = ({tagName} : any) => {
  return (
    <div className={`${font.variable} leading-none py-[9px] px-[30px] rounded-[80px] text-white border-white font-manropesb border`}>{tagName}</div>
  )
}

export default Tag