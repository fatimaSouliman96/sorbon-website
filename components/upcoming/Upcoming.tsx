import React from 'react'
import TransformCard from '../transformCard/TransformCard'

export default function Upcoming() {
  
  return (
    <div className='bg-[#f0effa] px-10 w-full  pb-4 pt-8' >
        <h1 className='lg:text-2xl text-xl font-semibold text-secondary uppercase' >Discover Knowledge That Transforms Your Future</h1>
        <div className='585max:grid-cols-1 grid-cols-2 grid gap-4 w-full pt-4'>
           <TransformCard index={0} length={10} />
           <TransformCard index={1} length={10} />
           <TransformCard index={2} length={10} />
           <TransformCard index={3} length={10} />
           <TransformCard index={4} length={10} />
           <TransformCard index={5} length={10} />
           <TransformCard index={6} length={10} />
           <TransformCard index={7} length={10} />
           <TransformCard index={8} length={10} />
           <TransformCard index={9} length={10} />
        </div>
    </div>
  )
}
