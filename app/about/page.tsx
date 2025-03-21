import AboutUsSection from '@/components/aboutUsSection/AboutUsSection'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import OurVision from '@/components/ourVision/OurVision'
import React from 'react'

export default function page() {
  return (
    <div className='w-full' >
      <HeroCategories background='bg-hero-about-bg' />

      <AboutUsSection />
      <OurVision reserve={false} title='Our Vision' items={["To be a preferred training hub for professionals worldwide.",
        "To be an essential part of a functional development cycle.",
        "Offer a various and wide range of professional training courses.",
        "Provide High Quality Experiential Learning"]
      } image='/our.png' />
      <OurVision reserve={true} title='Our Mission' items={["TFulfill our commitments Toward usersTo develop their competency and improve performance to drive business success",
        "Developing and Introducing Courses By tracking the latest business and industry trends in top emerging markets",
        "Assure that participants' needs are always met By bringing together practical knowledge and industry experience"]
      } image='/mission.png' />
      <OurVision reserve={false} title='Our Values'items={["To be a preferred training hub for professionals worldwide.",
        "To be an essential part of a functional development cycle.",
        "Offer a various and wide range of professional training courses.",
        "Provide High Quality Experiential Learning"]
      } image='/values.png' />

    </div>
  )
}
