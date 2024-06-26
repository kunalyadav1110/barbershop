import React from 'react'

function TheresMore() {
  return (
    <div className='h-[140vh] flex items-center justify-center gap-5 flex-col'>
      <h1 className='linear text-[90px] italic font-bold'>There's More</h1>
      <h2 className='text-[#1C0950] text-[40px] font-bold'>To This Template Than What You Can See</h2>
      <h3 className='text-[30px] text-[rgb(28, 9, 80)] font-light text-center w-[50%]'>It’s not just a beautifully designed slider or jaw-dropping animations that make this template — or any of Slider Revolution’s 250+ templates — special.</h3>
      <div className='w-[80%] h-[60vh] flex items-center justify-center gap-4'>
        <div className=' w-[40%] h-[50vh] px-8 py-10 flex items-center justify-center flex-col gap-4  ws-shadow'>
            <div className='w-[50px] h-[50px] bg-slate-500'></div>
            <h2 className='text-[25px] text-[#1C0950] font-semibold'>Compatibility</h2>
            <p className='text-center text-[#A69FBA] text-[16px]'>This slider template is compatible with popular WordPress plugins — like WooCommerce — so you have a ton of flexibility and control over what you can do with it.</p>
        </div>
        <div className=' w-[40%] h-[50vh] px-8 py-10 flex items-center justify-center gap-4 flex-col ws-shadow'>
        <div className='w-[50px] h-[50px] bg-slate-500'></div>
            <h2 className='text-center text-[25px] text-[#1C0950] font-semibold'>Support</h2>
            <p className='text-center text-[#A69FBA] text-[16px]'>Slider Revolution comes with dedicated 1-on-1 VIP support. If you run into any problems with the plugin, website or slider templates, our tech wizards will help resolve your issues ASAP.</p>
        </div>
        <div className='w-[40%] h-[50vh] px-8 py-10 flex items-center justify-center gap-4 flex-col ws-shadow'>
        <div className='w-[50px] h-[50px] bg-slate-500'></div>
            <h2 className='text-[25px] text-[#1C0950] font-semibold text-center'>Speed</h2>
            <p className='text-center text-[#A69FBA] text-[16px]'>Page loading speeds can significantly impact how well your website ranks. That’s why all of our templates are built for speed. If you want to give them an extra boost, our optimization guide will show you how to optimize them further.</p>
        </div>
      </div>
    </div>
  )
}

export default TheresMore
