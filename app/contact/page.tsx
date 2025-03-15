import ContactForm from '@/components/contactForm/ContactForm'
import ContactInfo from '@/components/contactInfo/ContactInfo'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import React from 'react'

export default function page() {
  return (
    <div className='w-full   pb-48' >
        <HeroCategories background='bg-hero-contact-bg' />
        <div className='w-full relative  px-12 py-8 flex gap-16 flex-wrap' >
            <ContactForm />
            <ContactInfo />
            <iframe className='w-full left-0 h-56 absolute z-[-1] top-[28.9rem]' src='https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&parameters' />
        </div>
        
    </div>
  )
}
