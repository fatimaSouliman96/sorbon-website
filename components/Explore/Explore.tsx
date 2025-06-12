import React from 'react'
import ExploreCard from '../exploreCard/ExploreCard'
import { exploreCourses } from '@/constant/staticData'


const Explore = () => {

  return (
    <div className='w-full min-h-[70vh] pt-8'>
      <h1 className=' lg:text-2xl text-xl px-12 font-semibold text-secondary uppercase'>
        Explore our training Courses
      </h1>
      <div className="
            grid 
            grid-cols-1
            max-555:grid-cols-1 
            max-788-min-555:grid-cols-2 
            1022max-788min:grid-cols-3 
            1022min:grid-cols-4
            gap-2 
            w-full 
            pt-12 
            pb-12 
            px-12 
            mt-4 
            bg-secondary
          ">
        {

          exploreCourses.map((ele, index) => {
            return <ExploreCard image={ele.image} title={ele.title} descraption={ele.descraption} key={index} />
          })

        }

      </div>
    </div>
  )
}

export default Explore