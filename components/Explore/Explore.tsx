import React from 'react'
import ExploreCard from '../exploreCard/ExploreCard'
import { exploreCourses } from '@/constant/staticData'
// import axios from 'axios';

export default async function Explore() {
  // get-banner-courses?lang=en


  return (
    <div className='w-full min-h-[70vh] pt-8'>
        <h1 className=' lg:text-2xl text-xl pl-12 font-semibold text-secondary uppercase'>Explore our training Courses</h1>
        <div className='bg-secondary px-12 mt-4 721max:grid-cols-2  433max:grid-cols-1  grid-cols-1 721min:grid-cols-4 grid gap-2 w-full pt-12 pb-12'>
           {
            exploreCourses.map((ele, index) => {
              return <ExploreCard image={ele.image} title={ele.title} descraption={ele.descraption} key={index} />
            })
           }
            
        </div>
    </div>
  )
}
