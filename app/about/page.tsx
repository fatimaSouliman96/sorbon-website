import HeroCategories from '@/components/heroCategories/HeroCategories'
import React from 'react'

export default function page() {
  return (
    <div className='w-full' >
      <HeroCategories background='bg-hero-about-bg' />

      <div className="px-12 py-8 w-full bg-[#f0effa] ">
        <div className="w-full flex" >
            <div className='grid grid-cols-2' >
                <div></div>
            </div>
        </div>
      </div>

    </div>
  )
}
