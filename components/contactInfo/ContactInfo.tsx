import Image from 'next/image'
import React from 'react'

export default function ContactInfo() {
    return (
        <div className='w-full flex gap-14 lg:w-[30%]' >
            <span className='mt-16 h-[367px] block w-[1px] bg-[#17133f59]' ></span>
            <div className='w-full'>
                <div>
                    <h1 className='text-[28px] font-semibold text-secondary' >Get in touch</h1>
                    <p className='text-sm font-normal'>We would love to hear from you</p>
                </div>
                <div className='pt-8'>
                    <div className='flex items-center gap-4' >
                        <div className='w-10 h-10 rounded-[5px] p-1 flex items-center justify-center border border-[#372E9E] '>
                            <Image src="/phone-blue.svg" alt="phone" width={17} height={16} />
                        </div>
                        <div>
                            <p className='text-lg text-secondary font-normal' >Phone</p>
                            <p className='text-lg text-[#17133FB2] font-normal'>+421 915 500 996</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4' >
                        <div className='w-10 h-10 rounded-[5px] p-1 flex items-center justify-center border border-[#372E9E] '>
                            <Image src="/whatsapp-blue.svg" alt="whatsapp" width={17} height={16} />
                        </div>
                        <div>
                            <p className='text-lg text-secondary font-normal' >Chat with us</p>
                            <p className='text-lg text-[#17133FB2] font-normal'>WhatApp 24/7</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4' >
                        <div className='w-10 h-10 rounded-[5px] p-1 flex items-center justify-center border border-[#372E9E] '>
                            <Image src="/email-blue.svg" alt="email" width={17} height={16} />
                        </div>
                        <div>
                            <p className='text-lg text-secondary font-normal' >Email</p>
                            <div className='text-lg text-[#17133FB2] font-normal flex flex-wrap'>sorbonne@<p>sorbonneacademy</p><p>.com</p></div>
                        </div>
                    </div>
                </div>
                <span className='mt-6 w-4/5 block h-[1px] bg-[#17133f59]' ></span>
                <div className='pt-4' >
                    <p className='text-xl font-medium flex items-center text-secondary gap-2'>Stay Tuend</p>
                    <ul className='flex items-center gap-4 pt-1' >
                        <li><Image width={26} height={26} alt='facebook' src='/facebook-blue.svg' /></li>
                        <li><Image width={26} height={26} alt='insta' src='/insta-blue.svg' /></li>
                        <li><Image width={26} height={26} alt='x' src='/twitter.svg' /></li>
                        <li><Image width={26} height={26} alt='youtube' src='/youtube-blue.svg' /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
