import React from 'react'
import SwiperSlider from '../swiperSlider/SwiperSlider'
import FiltterSearch from '../filtterSearch/FiltterSearch'

export default function Hero() {
  return (
    <div className='w-full relative min-h-screen hero bg-[#f0effa]'>
      <SwiperSlider />

      <div className=' pt-20 flex flex-col sm:gap-2 gap-2 md:gap-6 lg:gap-8  absolute w-full z-10 bottom-0 top-[10%] left-[50%] translate-x-[-50%] ' >
        <FiltterSearch />
        <h1 className='sm:text-sm text-sm md:text-lg lg:text-2xl text-white font-light uppercase tracking-normal w-[100%] text-center'>Discover Knowledge That Transforms Your Future</h1>

        <button className='sm:w-[50%] lg:w-[15%] w-[50%] bg-white mt-8 border text-lg font-normal border-secondary text-secondary m-auto rounded h-[40px]' >read more</button>

      </div>


    </div>
  )
}
