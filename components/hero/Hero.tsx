import React from 'react'
import SwiperSlider from '../swiperSlider/SwiperSlider'
import FiltterSearch from '../filtterSearch/FiltterSearch'

export default function Hero() {
  return (
    <div className='w-full relative bg-hero-home-bg min-h-[70vh] hero bg-center bg-cover bg-no-repeat'>
      <div className=' pt-6 flex flex-col sm:gap-2 gap-2 md:gap-6 lg:gap-8  absolute w-full z-10 bottom-0 top-[10%] left-[50%] translate-x-[-50%] ' >
        <FiltterSearch />
      </div>
    </div>
  )
}
