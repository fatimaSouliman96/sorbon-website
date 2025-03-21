"use client"
import { comboBoxData } from '@/constant/comboBoxData'
import React from 'react'
import ComboBox from '../comboBox/ComboBox'
import Image from 'next/image';
import './search.css'
import CustomDatepicker from '../date/Date';

export default function FiltterSearch() {

    return (
        <div className='sm:gap-4 lg:gap-12 md:gap-8 justify-center w-[90%] mt-8 md:mt-12 lg:lg-14  flex gap-4 flex-col items-center m-auto bg-[#F0EFFA66] backdrop-blur-[20px] p-6 rounded-[10px] '>
            <div className='relative w-full' >
                <Image alt='search' width={24} height={24} src='/search-filtter.svg' className='cursor-pointer right-0 absolute bottom-1' />
                <Image alt='search' width={24} height={24} src='/search.svg' className='left-0 absolute bottom-1' />
                <input type='search' className='w-full text-secondary pl-8 outline-none border-b-[1px] border-white bg-transparent' />
            </div>
            <div className='flex transition-all  gap-4 flex-col items-center w-full' >
                <div className='sm:gap-4 lg:gap-12 md:gap-8 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 w-full gap-4' >
                    {
                        comboBoxData.map(ele => {
                            return <ComboBox key={ele.lable} label={ele.lable} options={ele.options} />
                        })
                    }
                    <CustomDatepicker />
                    <div className='flex items-center   gap-4'>
                        <button className='bg-white transform transition-transform duration-200 hover:scale-110 text-secondary w-1/2 rounded h-[40px]' >Search</button>
                        <button className='bg-transparent transform transition-transform duration-200 hover:scale-110 text-white border border-white rounded w-1/2 h-[40px]' >Clear</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
