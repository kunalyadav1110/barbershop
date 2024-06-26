import React from 'react'

function CopyRight() {
  return (
    <div className='h-[12vh] bg-[#5E35B1] flex items-center justify-between px-40'>
        <div className='flex gap-3 text-white text-[22px]'>
        <i className="fa fa-youtube-play bg-[rgb(255,0,0)] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center cursor-pointer" aria-hidden="true"></i>
        <i className="fa fa-facebook bg-[#1877F2] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center cursor-pointer" aria-hidden="true"></i>
        <i className="fa fa-twitter bg-[#1DA1F2] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center cursor-pointer" aria-hidden="true"></i>
        <i className="fa fa-instagram bg-[#C32AA3] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center cursor-pointer" aria-hidden="true"></i>
        <i className="fa fa-pinterest-p bg-[#BD081C] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center cursor-pointer" aria-hidden="true"></i>
        <i className="fa fa-futbol-o bg-[#EA4C89] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center cursor-pointer" aria-hidden="true"></i>
        </div>
        <h3 className='text-white'>© Copyright 2023 by ThemePunch OHG</h3>
      </div>
  )
}

export default CopyRight
