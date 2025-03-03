import React from 'react'
import CourseCard from '../courseCard/CourseCard'

export default function TransferSection() {
  return (
    <div className='bg-[#f0effa] px-10 w-full pb-12 py-4 pt-8' >
    <h1 className='lg:text-4xl text-3xl font-semibold text-secondary' >Discover Knowledge That Transforms Your Future</h1>
    <div className='433max:grid-cols-1 grid-cols-1 lg:grid-cols-2 grid gap-4 w-full pt-8'>
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
