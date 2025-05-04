import { Course } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const CourseCity: React.FC<Course> = ({title, link}) => {
    
    return (
        <Link href={link ?? "#"} className=' bg-[#17133FBF] rounded-lg w-full flex justify-between p-2 h-[48px]' >
            <h1 className='text-lg font-semibold text-white ' >
                {title}
            </h1>
            <div className='transform transition-transform duration-200 scal w-7 h-w-8 rounded-full bg-[#F0EFFA66] flex justify-center items-center' >
                <Image src="/arrow-right-white.svg" width={7} height={7} alt="arrow-right-white" />
            </div>
        </Link>
    )
}

export default CourseCity


