import CardCity from '@/components/cardCity/CardCity'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import React from 'react'

export default function page() {
  return (
    <div className="w-full  " >
      <HeroCategories background='bg-hero-cities-bg' />
      <div className="w-full bg-[#f0effa] px-12 py-8 flex flex-col ">
        <h1 className='lg:text-4xl text-3xll font-semibold text-secondary'>Featured Courses in Selected Cities</h1>
        <div className="grid 433max:grid-cols-1  585max:grid-cols-1 721max:grid-cols-2 913max:grid-cols-3 grid-cols-1 914min:grid-cols-4 gap-4 w-full pt-12" >
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          <CardCity link="cities/city" title='Barcelona - Spain' height='h-[112px]' />
          
          
        </div>
        <button className='border-1 border p-2 w-[200px] m-auto mt-28 border-[#322A8D99] rounded-[8px] text-[#322A8D99] text-lg font-medium ' >
          All Cities
        </button>
      </div>
    </div>
  )
}
