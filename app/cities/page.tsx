import CardCity from '@/components/cardCity/CardCity'
import CourseCard from '@/components/courseCard/CourseCard'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import React from 'react'

export default function page() {
  return (
    <div className="w-full" >
        <HeroCategories title="Explore Courses Around the World" descraption="Find top learning opportunities in cities worldwide." />
        <div className="grid 433max:grid-cols-1 585max:grid-cols-2 721max:grid-cols-3 913max:grid-cols-4 grid-cols-1 914min:grid-cols-5 gap-4 w-full bg-[#f0effa] px-12 py-8" >
          <CardCity />
          <CardCity />
          <CardCity />
          <CardCity />
          <CardCity />
        </div>
        <div className=" w-full bg-[#f0effa] px-12 py-8">
        <h1 className='lg:text-4xl text-3xll font-semibold text-secondary'>Featured Courses in Selected Cities</h1>
        <div className="grid 433max:grid-cols-1 pt-12 585max:grid-cols-2 721max:grid-cols-3 913max:grid-cols-4 grid-cols-1 914min:grid-cols-5 gap-4 w-full" >
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
