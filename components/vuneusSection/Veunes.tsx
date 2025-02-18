import React from 'react'
import VeunesSlider from '../veunesSlider/VeunesSlider'

export default function Veunes() {
  return (
    <div className='veunes bg-[#f0effa]  max-w-full px-12 py-4' >
        <h1 className='text-4xl font-semibold text-secondary' >Training Venues</h1>
        <VeunesSlider/>
    </div>
  )
}
