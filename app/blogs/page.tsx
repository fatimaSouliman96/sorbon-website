import BlogCard from '@/components/blogCard/BlogCard'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import React from 'react'

export default function page() {
  return (
    <div className='w-full'>
          <HeroCategories background='bg-hero-categories-bg' />
          <div className='w-full flex flex-col gap-14 px-16 py-8' >
            <h1 className='lg:text-2xl text-xl font-semibold text-secondary uppercase'>Explore our blogs</h1>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
    </div>
  )
}
