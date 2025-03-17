import React from 'react'
import ExploreCard from '../exploreCard/ExploreCard'

export default function Explore() {
  return (
    <div className='w-full  min-h-[70vh] py-4'>
        <h1 className=' lg:text-4xl text-3xl pl-12 font-semibold text-secondary'>Explore our training Courses</h1>
        <div className='bg-secondary px-12 mt-8  721max:grid-cols-2  433max:grid-cols-1  grid-cols-1 721min:grid-cols-4 grid gap-4 w-full pt-12 pb-12'>
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
        </div>
    </div>
  )
}
