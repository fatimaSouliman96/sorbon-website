import React from 'react'
import ExploreCard from '../exploreCard/ExploreCard'

export default function Explore() {
  return (
    <div className='w-full bg-secondary min-h-[70vh] px-12 py-4'>
        <h1 className='sm:text-lg md:text-2xl lg:text-4xl text-lg font-semibold text-white'>Explore our training Courses</h1>
        <div className=' 721max:grid-cols-2  433max:grid-cols-1  grid-cols-1 721min:grid-cols-4 grid gap-4 w-full pt-12'>
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
        </div>
    </div>
  )
}
