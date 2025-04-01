"use client"
import { comboBoxData } from '@/constant/comboBoxData'
import React from 'react'
import ComboBox from '../comboBox/ComboBox'
import Image from 'next/image';
import './search.css'
import CustomDatepicker from '../date/Date';

export default function FiltterSearch() {

    return (
        <div className='sm:gap-4 gap-2 ustify-center w-[90%] flex  flex-col items-center mx-auto bg-[#F0EFFA66] backdrop-blur-[20px] p-6 rounded-[10px] '>
            <div className='relative w-full' >
                <Image alt='search' width={24} height={24} src='/search-filtter.svg' className='cursor-pointer right-0 absolute bottom-1' />
                <Image alt='search' width={24} height={24} src='/search.svg' className='left-0 absolute bottom-1' />
                <input type='search' className='w-full text-secondary pl-8 outline-none border-b-[1px] border-white bg-transparent' />
            </div>
            <div className='flex transition-all  gap-4 flex-col items-center w-full' >
                <div className='sm:gap-x-4 lg:gap-x-12 gap-y-5 md:gap-x-8 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 w-full gap-x-4 ' >
                    {
                        comboBoxData.map(ele => {
                            return <ComboBox key={ele.lable} label={ele.lable} options={ele.options} />
                        })
                    }
                    <CustomDatepicker />
                     <ComboBox  label={"Category"} options={[
                                {
                                    options: "Category",
                                    value: "category"
                                }
                            ]} />
                    
                    <div className='flex items-center   gap-4'>
                        <button className='bg-white transform transition-transform duration-200 scal text-secondary w-1/2 rounded h-[40px]' >Search</button>
                        <button className='bg-transparent transform transition-transform duration-200 scal text-white border border-white rounded w-1/2 h-[40px]' >Clear</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
