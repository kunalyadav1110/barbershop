import React from 'react'

function LocalBarber() {
  return (
    <div className='h-[60vh] w-[100%] bg-[#1A191B] flex items-center justify-space-around flex-col gap-14'>
        <div className='h-[20px] w-[40px] align-top lb-logo'>
        <img className='hover:grayscale-[2]' src='https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-header/barber-shop-logo.png'></img>
        </div>
        <h1 className='headings text-[30px] text-[#FFE11B] lb-h1'>Local Barber</h1>
        <p className='nexin text-center w-[30%] text-[16px] text-white lb-p'>Barbershop is a No.1place to have a men's haircut in San Francisco.Here you can get luxury barber experience at a reasonable price</p>
        <div className='flex gap-[30px] text-[#FFE11B] barlow font-bold tracking-wide lb-p'>
            <label className='hover:text-[#fff] cursor-pointer'>ABOUT</label>
            <label className='hover:text-[#fff] cursor-pointer'>SERVICES</label>
            <label className='hover:text-[#fff] cursor-pointer'>BARBERS</label>
            <label className='hover:text-[#fff] cursor-pointer'>CONTACTS</label>
        </div>
        <div className='flex gap-6 text-[25px] text-white lb-icon'>
        <i className="fa fa-facebook-official hover:text-[#FFE11B] cursor-pointer" aria-hidden="true"></i>
        <i className="fa fa-twitter hover:text-[#FFE11B] cursor-pointer" aria-hidden="true"></i>
        <i className="fa fa-youtube-play hover:text-[#FFE11B] cursor-pointer" aria-hidden="true"></i>
        <i className="fa fa-linkedin hover:text-[#FFE11B] cursor-pointer" aria-hidden="true"></i>
        </div>
      
    </div>
  )
}

export default LocalBarber
