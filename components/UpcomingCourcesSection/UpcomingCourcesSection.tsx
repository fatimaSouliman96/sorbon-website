import React from 'react'
import CourseCard from '../courseCard/CourseCard'
import { SessionCource } from '@/types/types';
import getData from '@/utilts/getData';


const UpcomingCourcesSection = async () => {

  const data = await getData<SessionCource[]>("get-upcoming-courses");

  if (!Array.isArray(data)) {
    console.error("Expected array, but got:", data);
    return (
      <div className='text-center font-extrabold pt-8'>

      </div>
    );
  }
  return (
    <div className='bg-[#f0effa] px-10 pt-8 w-full ' >
      {data.length !== 0 && <h1 className='lg:text-2xl text-xl  font-semibold text-secondary uppercase' >
        upcoming & confirmed courses
      </h1>}
      <div className='585max:grid-cols-1 grid-cols-2 grid gap-4 w-full pt-4'>
        {
          data?.map((ele, index) => {
            return <CourseCard alt={ele.image_alt} cite={ele.city_title} date={ele.date_from} image={ele.course_image} title={ele.course_title} key={ele.id} link={`/course/${ele.course_slug}`} index={index} length={data.length} />
          })
        }


      </div>
    </div>
  )
}

export default UpcomingCourcesSection;