import ContactForm from '@/components/contactForm/ContactForm'
import ContactInfo from '@/components/contactInfo/ContactInfo'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import React from 'react'

export default function page() {
  return (
    <div className='w-full   pb-48' >
      <HeroCategories background='bg-hero-contact-bg' />
      <div className='w-full relative  px-12 py-8 flex gap-16 flex-wrap  1015max:gap-40' >
        <ContactForm />
        <ContactInfo />
        <iframe
          className="w-full h-56 absolute left-0 top-[28.9rem] z-[-1]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28883.73386784415!2d55.261109!3d25.187478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0d69e8d93%3A0x8f0fe5aa20493ae4!2sThe%20Prism!5e0!3m2!1sen!2sse!4v1723002947827!5m2!1sen!2sse"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  )
}
