import React from 'react'
import TransformCard from '../transformCard/TransformCard'

export default function Upcoming() {
  
  return (
    <div className='bg-[#f0effa] px-10 w-full pb-12 py-4 pt-8' >
        <h1 className='lg:text-4xl text-3xl font-semibold text-secondary' >Upcoming & Confirmed Courses</h1>
        <div className='433max:grid-cols-1 grid-cols-1 lg:grid-cols-2 grid gap-4 w-full pt-8'>
           <TransformCard index={0} length={6} />
           <TransformCard index={1} length={6} />
           <TransformCard index={2} length={6} />
           <TransformCard index={3} length={6} />
           <TransformCard index={4} length={6} />
           <TransformCard index={5} length={6} />
        </div>
    </div>
  )
}
