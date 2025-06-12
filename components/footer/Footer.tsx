import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Footer() {


    return (
        <footer className="w-full bg-gradient-to-b from-[#322A8D] to-secondary pt-8 ">
            <div className='585max:px-6 px-16 grid 433max:grid-cols-1 585max:grid-cols-1 721max:grid-cols-2 913max:grid-cols-3  grid-cols-1 914min:grid-cols-[200px_150px_80px_auto] 1213min:gap-[12%] md:gap-[4%] 1213max:gap-[9%] 1100max:gap-[6.3%] 713max:gap-2 688max:gap-0 items-start '>
                <div className=" relative flex flex-col gap-10">
                    <Image src="/logo-white.svg" width={150} height={200} alt="sorbon-logo" />
                    <div>
                        <p className='text-base font-light flex items-center text-white gap-2'>
                            Stay Tuned
                        </p>
                        <ul className='flex items-center gap-4 pt-1' >
                            <li><Image width={20} height={20} alt='facebook' src='/facebook.svg' /></li>
                            <li><Image width={20} height={20} alt='insta' src='/insta.svg' /></li>
                            <li><Image width={20} height={20} alt='x' src='/x.svg' /></li>
                            <li><Image width={20} height={20} alt='youtube' src='/youtube.svg' /></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='721min:text-xl pb-2 text-lg font-medium text-white' >Navigation</p>
                    <ul className='flex flex-col gap-2 pt-2'>
                        <li className='721min:text-base text-base font-extralight text-[#ffffffab]'><Link href={"/"} >
                           Home
                        </Link></li>
                        <li className='721min:text-base text-base font-extralight text-[#ffffffab]'><Link href={"/about"} >
                           About
                        </Link></li>
                        <li className='721min:text-base text-base font-extralight text-[#ffffffab]'><Link href={"/contact"} >
                            Contact Us
                        </Link></li>
                    </ul>
                </div>
                <div>
                    <p className='721min:text-xl pb-2 text-lg font-medium text-white' >
                       Resources
                    </p>
                    <ul className='flex flex-col gap-2 pt-2'>
                        <li className='721min:text-base text-base font-extralight text-[#ffffffab]'><Link href={"/blogs"} >
                        Blog
                        </Link></li>
                        <li className='721min:text-base text-base font-extralight text-[#ffffffab]'>
                         News
                            </li>
                        <li className='721min:text-base text-base font-extralight text-[#ffffffab]'>
                             Site Map
                           
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='721min:text-xl pb-2 text-lg font-medium text-white' >
                       Contact Information
                    </p>
                    <ul className='flex flex-col gap-2 pt-2'>
                        <li className='text-base font-light flex items-center text-[#ffffffab] gap-2'>
                            <Image className='opacity-[0.6]' width={24} height={24} src='/phone.svg' alt="phone" />
                            +421 915 500 996
                        </li>
                        <li className='text-base font-light flex items-center text-[#ffffffab] gap-2'>
                            <Image className='opacity-[0.6]' width={24} height={24} src='/email.svg' alt="email" />
                            <Link href="#" className='flex flex-wrap shrink-0' >sorbonne@<p>sorbonneacademy</p><p>.com</p></Link>
                        </li>
                        <li className='text-base font-light flex  items-center text-[#ffffffab] gap-2'>
                            <Image className='opacity-[0.6]' width={24} height={24} src='/location-footer.svg' alt="location" />
                            Šancová 356861 - 831 04 Bratislava, Slovakia
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex w-full flex-col lg:pt-4 pt-4 913max:pt-10' >
                <span className='bg-[#6d6b8c] block w-full h-[2px]'></span>

                <div className='585max:px-6 px-16 flex items-center py-2 justify-between' >
                    <p className='721min:text-base text-base font-extralight text-[#ffffffab]'>© 2023 Sorbonne Academy. All rights reserved.</p>
                    <div className='flex items-center gap-4'>
                        <p className='721min:text-base text-base font-extralight text-[#ffffffab]'><Link href={"/terms"} >Terms and Conditions</Link></p>
                        <p className='721min:text-base text-base font-extralight text-[#ffffffab]'><Link href={"/privacy"} >Privacy Policy</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
