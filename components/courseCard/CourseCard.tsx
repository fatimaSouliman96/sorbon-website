import Image from 'next/image'
import React from 'react'

// interface CourseCardProps {
    // image: string,
    // title: string,
    // category: string,
    // city: string,
    // date: string
// }



const CourseCard = () => {

    return (
        <div className='pt-2 pb-6 px-2  bg-[#E2E0F5] rounded-lg shadow-[0px_3px_4.5px_rgba(31,27,59,0.25)]'>
            <div className='w-full h-[250px] rounded-lg relative'>
                <Image className='rounded-lg' src='/course.png' alt='course' fill />
            </div>
            <div className='flex flex-col pt-2' >
                <h1 className='text-sm font-normal text-secondary' >Introduction to Graphic Design</h1>
                <ul className='pt-4' >
                    <li className='flex items-center gap-1 text-secondary'>
                        <Image alt='location' width={20} height={20} src='/location.svg' />
                        london
                    </li>
                    <li className='flex items-center pt-2 gap-1 text-secondary'>
                        <Image alt='celander' width={20} height={20} src='/celander.svg' />
                        25-01-2025
                    </li>
                </ul>
            </div>

        </div>
    )

}

export default CourseCard