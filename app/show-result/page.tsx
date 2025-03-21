import CourseCard from '@/components/courseCard/CourseCard'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import ShowTableContent from '@/components/showTableContent/ShowTableContent'
import { showColumns } from '@/components/table/dataTable'
import Table from '@/components/table/Table'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='w-full  '>
      <HeroCategories background='bg-hero-categories-bg' />
      <div className='px-16 py-8 w-full bg-[#f0effa]'>
        <div className='flex items-center gap-10' >
          <p className='text-secondary text-2xl font-semibold'>Results For:</p>
          <h1 className='flex items-center gap-3 border border-secondary rounded-[15px] p-2 text-sm font-medium text-secondary '>
            Advanced Excel: Power Query and Power Pivots Course
            <Image alt='cancel' width={18} height={18} src="/cancel-x.svg" />
          </h1>
        </div>
        <Table columns={showColumns} content={<ShowTableContent />} />
        <h1 className='text-secondary text-2xl font-semibold uppercase pt-8'>recommended for you</h1>
        <p className='text-secondary text-lg font-normal'>Handpicked courses just for you</p>
        <div  className='433max:grid-cols-1 grid-cols-1 lg:grid-cols-3 grid gap-4 w-full pt-4'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  )
}
