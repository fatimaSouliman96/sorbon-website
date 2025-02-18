import React from 'react'
import CourseCard from '../courseCard/CourseCard'

export default function Upcoming() {
  
  return (
    <div className='bg-[#f0effa]  w-full pb-12 py-4 pt-24' >
        <h1 className='sm:text-lg md:text-2xl lg:text-4xl text-lg font-semibold text-secondary' >upcoming & confirmed courses</h1>
        <div className='433max:grid-cols-1 585max:grid-cols-2 721max:grid-cols-3 913max:grid-cols-4 grid-cols-1 914min:grid-cols-5  grid gap-4 w-full pt-8'>
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
            <CourseCard  />
        </div>
    </div>
  )
}
