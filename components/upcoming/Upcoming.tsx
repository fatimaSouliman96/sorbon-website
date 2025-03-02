import React from 'react'
import CourseCard from '../courseCard/CourseCard'

export default function Upcoming() {
  
  return (
    <div className='bg-[#f0effa] px-10 w-full pb-12 py-4 pt-8' >
        <h1 className='lg:text-4xl text-3xl font-semibold text-secondary' >Upcoming & Confirmed Courses</h1>
        <div className='433max:grid-cols-1 585max:grid-cols-2 721max:grid-cols-4 913max:grid-cols-5 grid-cols-1 914min:grid-cols-6  grid gap-4 w-full pt-8'>
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
