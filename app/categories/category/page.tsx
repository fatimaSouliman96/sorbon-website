import CourseCard from "@/components/courseCard/CourseCard";
import CourseCity from "@/components/courseCity/CourseCity";
import HeroCategories from "@/components/heroCategories/HeroCategories";
import Image from "next/image";


export default function page() {
  return (
    <div className='w-full' >
      <HeroCategories background='bg-hero-cities-bg' />
      <div className='px-12 py-8 w-full bg-[#f0effa]' >
        <div className='flex justify-between items-center' >
          <h1 className='lg:text-xl text-lg  font-semibold text-secondary uppercase '>Advanced Excel: Power Query and Power Pivots Course</h1>
          <div className='relative w-[35%]' >
            <Image alt='search' width={24} height={24} src='/search-blue.svg' className='left-0 absolute bottom-1' />
            <input type='search' placeholder='Search For keywords' className='text-sm font-normal w-full text-secondary pl-8 outline-none border-b-[1px] border-secondary bg-transparent' />
          </div>
        </div>
        <div className='w-full pt-10 flex flex-col gap-3' >
          <CourseCity />
          <CourseCity />
          <CourseCity />
        </div>
        <div className='pt-14' >
          <h1 className='lg:text-2xl text-xl  font-semibold text-secondary uppercase '>recommended for you</h1>
          <p className='text-sm font-normal pt-2 text-secondary'>Handpicked courses just for you</p>
          <div className=' grid-cols-1 1249max&600min:grid-cols-2 1250min:grid-cols-3 grid gap-4 w-full pt-8'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>

    </div>
  )
}
