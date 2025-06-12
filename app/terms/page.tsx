import HeroCategories from '@/components/heroCategories/HeroCategories'
import { termsType } from '@/types/types';
import getData from '@/utilts/getData';
import React from 'react'

export default async function page() {
   const data = await getData<termsType>(`get-terms`);
  return (
    <div className='w-full' >
         <HeroCategories background='bg-hero-terms-bg' />
        <div className='px-16 py-8 w-full '>
            <h1 className='text-secondary text-2xl font-semibold uppercase'>
            General Terms & Conditions
            </h1>
            <p className='w-full md:w-3/4 lg:w-3/4 text-secondary text-sm font-normal leading-7 pt-4' >{data?.value}</p>
            {/* <FAQ fag={faqData} /> */}
        </div>
    </div>
  )
}
