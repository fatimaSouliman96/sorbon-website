import Image from 'next/image'
import React from 'react'

export default function ExploreCard() {
    return (
        <div className='flex flex-col items-center gap-4' >
            <div className='w-[100px] h-[100px] p-4  rounded-lg bg-[#bab8c2] flex items-center justify-center'>
                <div className='w-[50px] h-[50px] relative '>
                    <Image src="/exploer.svg" fill alt="explore" />
                </div>
            </div>
            <h1 className='text-white text-sm font-semibold uppercase' >public training courses</h1>
            <p className='text-white text-sm font-normal px-6 text-center leading-6' >Open to individuals and organizations to gain a new perspective on professional development and shared challenges.</p>
            <a className='text-thirdy flex items-center gap-4 text-lg font-medium' >Learn More <Image width={6} height={12} src="/arrow-eylow.svg" alt="arrow" /> </a>
        </div>
    )
}
