import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#322A8D] to-secondary lg:p-12 p-6">
            <div className='grid 433max:grid-cols-1  585max:grid-cols-1 721max:grid-cols-2 913max:grid-cols-3  grid-cols-1 914min:grid-cols-4 items-start'>
                <div className=" relative">
                    <Image src="/logo-white.svg" width={200} height={200} alt="sorbon-logo" />
                </div>
                <ul>
                    <li className='721min:text-xl pb-2 text-lg font-medium text-white' >Navigation</li>
                    <li className='721min:text-lg text-base font-light text-white'>Home</li>
                    <li className='721min:text-lg text-base font-light text-white'>Public Courses</li>
                    <li className='721min:text-lg text-base font-light text-white'>Online Courses</li>
                    <li className='721min:text-lg text-base font-light text-white'>About</li>
                    <li className='721min:text-lg text-base font-light text-white'>Contact Us</li>
                </ul>
                <ul>
                    <li className='721min:text-xl pb-2 text-lg font-medium text-white' >Resources</li>
                    <li className='721min:text-lg text-base font-light text-white'>Home</li>
                    <li className='721min:text-lg text-base font-light text-white'>Blog</li>
                    <li className='721min:text-lg text-base font-light text-white'>News</li>
                    <li className='721min:text-lg text-base font-light text-white'>About</li>
                    <li className='721min:text-lg text-base font-light text-white'>Site Map</li>
                </ul>
                <ul>
                    <p className='721min:text-xl pb-2 text-lg font-medium text-white' >Contact Information</p>
                    <li className='text-lg font-light flex items-center text-white gap-2'>
                        <Image width={24} height={24} src='/phone.svg' alt="phone" />
                        +421 915 500 996
                    </li>
                    <li className='text-lg font-light flex items-center text-white gap-2'>
                        <Image width={24} height={24} src='/email.svg' alt="email" />
                        <Link href="#" className='flex flex-wrap' >sorbonne@<p>sorbonneacademy</p><p>.com</p></Link>
                    </li>
                    <li className='text-lg font-light flex items-center text-white gap-3'>
                        <Image width={24} height={24} src='/location-footer.svg' alt="location" />
                        Šancová 356861 - 831 04 Bratislava, Slovakia
                    </li>
                </ul>
            </div>
            <div className='pt-8' >
                    <p className='text-lg font-light flex items-center text-white gap-2'>Stay Tuend</p>
                    <ul className='flex items-center gap-4' >
                        <li><Image width={26} height={26} alt='facebook' src='/facebook.svg' /></li>
                        <li><Image width={26} height={26} alt='insta' src='/insta.svg' /></li>
                        <li><Image width={26} height={26} alt='x' src='/x.svg' /></li>
                        <li><Image width={26} height={26} alt='youtube' src='/youtube.svg' /></li>
                    </ul>
            </div>
            <div className='flex flex-col lg:pt-32 pt-24' >
                <span className='bg-[#FFFFFF80] block w-full h-[1px]'></span>
                <div className='flex items-center pt-4 justify-between' >
                    <p className='721min:text-lg text-base font-light   text-white'>© 2023 Sorbonne Academy. All rights reserved.</p>
                    <div className='flex items-center gap-4'>
                        <p className='721min:text-lg text-base font-light text-white'>Terms and Conditions</p> 
                        <p className='721min:text-lg text-base font-light text-white'>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
