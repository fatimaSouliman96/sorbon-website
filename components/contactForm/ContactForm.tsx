import Image from 'next/image'
import React from 'react'

export default function ContactForm() {
    return (
        <form className='bg-[#372E9E] rounded-xl p-4 grid grid-cols-2 w-full lg:w-[60%] gap-3' >
            <p className='text-[28px] font-semibold text-white' >Your message</p>
            <div className='flex flex-col col-span-2' >
                <label className='text-[#FFFFFF99] text-sm font-medium'>Full Name*</label>
                <input required type='text' className='border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent  ' />
            </div>

            <div className='flex flex-col col-span-2' >
                <label className='text-[#FFFFFF99] text-sm font-medium'>Email*</label>
                <input required type='email' className='border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent  ' />
            </div>
            <div className='flex flex-col' >
                <label className='text-[#FFFFFF99] text-sm font-medium'>Country*</label>
                <input required type='text' className='border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent  ' />
            </div>
            <div className='flex flex-col' >
                <label className='text-[#FFFFFF99] text-sm font-medium'>Company*</label>
                <input required type='text' className='border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent  ' />
            </div>
            <div className='flex flex-col col-span-2' >
                <label className='text-[#FFFFFF99] text-sm font-medium'>Phone*</label>
                <input required type='text' className='border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent  ' />
            </div>
            <div className='flex flex-col col-span-2' >
                <label className='text-[#FFFFFF99] text-sm font-medium'>Subject*</label>
                <input required type='text' className='border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent  ' />
            </div>
            <div className='flex flex-col rounded items-center justify-center border border-dashed col-span-2 h-12' >
                <label htmlFor='file' className='text-[#FFFFFF99] cursor-pointer text-sm font-medium flex items-center gap-1'>
                    <Image src="/upload.svg" width={20} height={20} alt='upload' />
                    Upload Additional file</label>
                <input required type='file' id="file" className='hidden rounded border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent  ' />
            </div>
            <div className="flex items-center gap-2 col-span-2">
                <input
                    required
                    type="checkbox"
                    id="checkbox"
                    className="appearance-none w-4 h-4 border-[1px] rounded-sm border-[#FFFFFF99]  bg-transparent mt-1 shrink-0 checked:bg-[#FFFFFF99] cursor-pointer checked:border-0"
                />
                <label
                    htmlFor="checkbox"
                    className="flex items-center gap-2 text-[#FFFFFF99] text-sm font-medium cursor-pointer peer-checked:text-blue-500 transition"
                >
                    I want to protect my data by signing an NDA
                </label>
            </div>


            <button className="col-span-2 rounded h-12 text-base font-medium text-secondary bg-white">
                Submit
            </button>



        </form>
    )
}
