import React from 'react'
import CourseCard from '../courseCard/CourseCard'

export default function TransferSection() {
  return (
    <div className='bg-[#f0effa] px-10 w-full ' >
    <h1 className='lg:text-2xl text-xl font-semibold text-secondary uppercase' >upcoming & confirmed courses</h1>
    <div className='433max:grid-cols-1 grid-cols-1 lg:grid-cols-2 grid gap-4 w-full pt-4'>
       <CourseCard index={0} length={6} />
       <CourseCard index={1} length={6} />
       <CourseCard index={2} length={6} />
       <CourseCard index={3} length={6} />
       <CourseCard index={4} length={6} />
       <CourseCard index={5} length={6} />
    </div>
</div>
  )
}
