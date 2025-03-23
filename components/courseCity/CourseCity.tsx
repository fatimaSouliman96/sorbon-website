import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// arrow-right-white

export default function CourseCity() {
    return (
        <Link href={"#"} className=' bg-[#17133FBF] rounded-lg w-full flex justify-between p-2 h-[48px]' >
            <h1 className='text-lg font-semibold text-white ' >
                Advanced Heat Exchanger Design with HTRI Software
            </h1>
            <div className='transform transition-transform duration-200 hover:scale-110 w-7 h-w-8 rounded-full bg-[#F0EFFA66] flex justify-center items-center' >
                <Image src="/arrow-right-white.svg" width={7} height={7} alt="arrow-right-white" />
            </div>
        </Link>
    )
}


