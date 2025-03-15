import FAQ from '@/components/faqDrwopDown/FaqDrwopDown'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import Table from '@/components/table/Table'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='w-full  '>
            <HeroCategories background='bg-hero-categories-bg' />
            <div className='px-12 py-8 w-full bg-[#f0effa]'>
                <div className='flex justify-between items-center flex-wrap w-full lg:gap-0 gap-2 ' >
                    <div>
                        <h1 className='lg:text-xl text-lg  font-semibold text-secondary uppercase '>Explore Courses For</h1>
                        <p className='text-sm font-normal pt-2 text-secondary'>Advanced Excel: Power Query and Power Pivots Course</p>
                    </div>
                    <div className='relative lg:w-[35%] w-full md:w-[35%]' >
                        <Image alt='search' width={24} height={24} src='/search-blue.svg' className='left-0 absolute bottom-1' />
                        <input type='search' placeholder='Search For keywords' className='text-sm font-normal w-full text-secondary pl-8 outline-none border-b-[1px] border-secondary bg-transparent' />
                    </div>
                    
                </div>
                <Table />
                <FAQ />
            </div>
        </div>
    )
}
