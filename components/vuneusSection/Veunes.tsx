import React from 'react'
import VeunesSlider from '../veunesSlider/VeunesSlider'

export default function Veunes() {
  return (
    <div className='veunes pt-8 bg-[#f0effa] w-full px-12 pb-8' >
        <h1 className='lg:text-2xl text-xl font-semibold text-secondary uppercase' >Training Venues</h1>
        <VeunesSlider/>
    </div>
  )
}
