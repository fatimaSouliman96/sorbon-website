import AboutUsSection from '@/components/aboutUsSection/AboutUsSection'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import OurVision from '@/components/ourVision/OurVision'
import { aboutData } from '@/constant/staticData';
import React from 'react'

export default async function page() {



  return (
    <div className='w-full' >
      <HeroCategories  background='bg-hero-about-bg' />

      <AboutUsSection  />
      {
 
        aboutData.map((e, index) => {
          return <OurVision key={index}
            reserve={e.reserve} title={e.title}
            items={e.content}
            image={e.image} />
        })
  
      }



    </div>
  )
}
