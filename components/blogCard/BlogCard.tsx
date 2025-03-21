import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogCard() {
  return (
    <Link href="/blogs/blog" className='flex w-full' >
        <div >
            <div className='w-[251px] flex items-center '>
                <p className='text-[13px] rounded-l-md w-1/2 text-center font-semibold text-secondary bg-[#EBF2FE] p-2' >Design tools</p>
                <p className='text-[13px] rounded-r-md w-1/2 text-center font-semibold text-secondary bg-white p-2' >AUGust 13, 2021 </p>
            </div>
            <h1 className='pt-4 text-[28px] font-bold text-secondary'>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h1>
            <p className='text-sm font-normal text-secondary pr-96 leading-[150%]'>Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
        </div>

        <div className='w-[30%] h-[210px] rounded-lg relative' ><Image className='rounded-lg' alt='blog' fill src='/blog.png' /></div>
    </Link>
  )
}
