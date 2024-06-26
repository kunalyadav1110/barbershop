import React from 'react'
function BarberShopWeb() {
  return (
    <div className='h-[130vh] bg-[#F2F1F5] flex items-center justify-center flex-col gap-6'>
    <h3 className='text-[#F7345E] text-[17px] font-semibold tracking-wider'>SLIDER REVOLUTION HERO, ONE PAGE WEBSITE, SLIDER TEMPLATE</h3>
    <h1 className='text-[#1C0950] text-[45px] font-bold '>Barber Shop Website</h1>
    <h2 className='text-[#57497E] font-thin text-[30px] w-[75%] text-center'>A beautiful one pager website with a unique look and feel. Built inside your WordPress surroundings.</h2>
    <div className='flex items-center justify-center gap-10 w-[80%]'>
        <div className=' h-[50vh] w-[80%] '>
            <img className='h-[50vh] w-[700px] rounded-md' src='https://www.sliderrevolution.com/wp-content/uploads/2020/04/barber_shop.jpg'></img>
        </div>
        <div className=' h-[50vh] w-[60%] '>
            <h2 className='text-[25px] font-semibold text-[#1C0950]'>Slider Revolution Templates Are 100% Responsive</h2>
            <p className='text-[16px] leading-8 text-[#7F759B] font-semibold'>We designed the Barber Shop Website to look good no matter what device your visitors are on. <br></br>We’ve also given you an easy-to-use responsive editor that allows you to edit and preview your Slider Revolution module from different views.</p>
        </div>
    </div>
    <button className='border-2 py-3 px-10 bg-red-400 text-[18px] font-semibold text-white rounded-full translate-y-8'>Get This Template When You Sign Up For Slider Revolution</button>
      
    </div>
  )
}

export default BarberShopWeb
