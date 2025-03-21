import Image from 'next/image'
import React from 'react'

export default function AboutUsSection() {
    return (
        <div className='lg:flex-row md:flex-row flex-col flex bg-[#DDDBEF] w-full px-20 py-12'>
            <div className='lg:w-[50%] md:w-[50%] w-full'>
                <h1 className='text-[32px] font-semibold text-secondary'>ABOUT US</h1>
                <p className='text-[28px] font-normal text-secondary pt-12 leading-10 pr-4'>Our goal is to take your practical learning experience to a whole other level and be successful Together.</p>
                <p className='text-[20px] font-normal text-secondary pt-10'>Maximize your potential in emerging business trends with our professional training courses</p>
            </div>
            <div className='grid relative grid-cols-2 lg:w-[50%] md:w-[50%] w-full gap-3 h-[402px] bg-rectancle-bg bg-no-repeat bg-center bg-auto' >
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 ">
                    <Image alt='about2' width={411} height={411} src='/our_values_img 1.svg' />
                </div>
                <div className=" relative">
                    <Image alt='about2' fill src='/about2.png' />
                </div>
                <div className=" relative">
                    <Image alt='about1' fill src='/about1.png' />
                </div>
                
                <div className=" relative">
                    <Image alt='about4' fill src='/about3.png' />
                </div>
                <div className=" relative">
                    <Image alt='about3' fill src='/about4.png' />
                </div>
            </div>
        </div>
    )
}
