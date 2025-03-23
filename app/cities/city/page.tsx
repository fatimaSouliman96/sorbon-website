import CourseCard from '@/components/courseCard/CourseCard'
import CourseCity from '@/components/courseCity/CourseCity'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='w-full' >
      <HeroCategories background='bg-hero-cities-bg' />
      <div className='px-12 py-8 w-full bg-[#f0effa]' >
        <div className='flex justify-between items-center' >
          <h1 className='lg:text-3xl text-2xl  font-semibold text-secondary uppercase '>Discover courses in Dubai</h1>
          <div className='relative w-[40%]' >
            <Image alt='search' width={24} height={24} src='/search-blue.svg' className='left-0 absolute bottom-1' />
            <input type='search' placeholder='Search For keywords' className='text-sm font-normal w-full text-secondary pl-8 outline-none border-b-[1px] border-secondary bg-transparent' />
          </div>
        </div>
        <div className='w-full pt-6 flex flex-col gap-2' >
          <CourseCity />
          <CourseCity />
          <CourseCity />
        </div>
        <div className='pt-14' >
          <h1 className='lg:text-2xl text-xl  font-semibold text-secondary uppercase '>recommended for you</h1>
          <p className='text-base font-normal pt-2 text-secondary'>Handpicked courses just for you</p>
          <div className='604max:grid-cols-1 876max&605min:grid-cols-2  grid-cols-3 grid gap-4 w-full pt-8'>
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
          </div>
        </div>
      </div>

    </div>
  )
}
