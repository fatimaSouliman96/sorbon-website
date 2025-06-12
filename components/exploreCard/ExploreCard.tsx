import Image from 'next/image'
import React from 'react'

interface ExploreCardProps {
    title: string,
    descraption: string,
    image: string,

}
const ExploreCard: React.FC<ExploreCardProps> = ({ title, descraption, image }) => {
    return (
        <div className='flex flex-col items-center gap-4' >
            <div className='w-[100px] h-[100px] p-4  rounded-lg bg-[#bab8c2] flex items-center justify-center'>
                <div className='w-[50px] h-[50px] relative '>
                    <Image src={image} fill alt="explore" />
                </div>
            </div>
            <h1 className='text-white text-sm font-semibold uppercase' >{title}</h1>
            <p className='text-white h-[96px] text-sm font-normal px-6 text-center leading-6' >{descraption}</p>
            <a className='text-thirdy flex items-center gap-4 text-lg font-medium' >
                Learn More
                <Image width={6} height={12} src="/arrow-eylow.svg" alt="arrow" /> </a>
        </div>
    )
}

export default ExploreCard