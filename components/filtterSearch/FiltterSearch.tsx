"use client"
import { comboBoxData } from '@/constant/comboBoxData'
import React, { useState } from 'react'
import ComboBox from '../comboBox/ComboBox'
import Image from 'next/image';

export default function FiltterSearch() {
    const [isFocused, setIsFocused] = useState(false);
    const [filtter, setFiltter] = useState(false)

    const showFiltter = () => {
        if(filtter == false){
            setFiltter(true)

        } else {
            setFiltter(false)
        }
    }
    return (
        <div className='sm:gap-4 lg:gap-12 md:gap-8 p-8 justify-center w-[90%]  sm:mt-8 md:mt-12 lg:lg-14 mt-8 flex gap-4 flex-col items-center m-auto bg-[#F0EFFA66] backdrop-blur-[20px]   rounded-[10px] '>
            <div className='relative w-full' >
                <Image alt='search' onClick={ () => showFiltter()} width={24} height={24} src='/search-filtter.svg' className='cursor-pointer right-0 absolute bottom-1' />
                <Image alt='search' width={24} height={24} src='/search.svg' className='left-0 absolute bottom-1' />
                <input type='search' className='w-full border-b-[1px] border-white bg-transparent' />
            </div>

            {filtter && <div className='flex transition-all  gap-4 flex-col items-center w-full' >
                <div className='sm:gap-4 lg:gap-12 md:gap-8 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 grid grid-cols-1 w-full gap-4' >
                    {
                        comboBoxData.map(ele => {
                            return <ComboBox key={ele.lable} label={ele.lable} options={ele.options} />
                        })
                    }
                    <div className="relative w-full">
                        {/* Custom Icon */}
                        <Image
                            width={20}
                            height={20}
                            src="/date.svg" // Replace with your image path
                            alt="Calendar Icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                        />

                        {/* Label (Disappears on Focus) */}
                        {!isFocused && (
                            <span className="absolute text-white left-2 top-1/2 -translate-y-1/2 ">
                                Date
                            </span>
                        )}

                        {/* Date Input */}
                        <input
                            type="date"
                            className={`w-full  border-b border-white bg-transparent appearance-none ${isFocused ? "text-white border-white" : "text-transparent"}  p-2 appearance-none`}
                            onFocus={() => setIsFocused(true)}
                            onBlur={(e) => {
                                if (!e.target.value) setIsFocused(false);
                            }}
                        />
                    </div>
                </div>
                <div className='flex items-center sm:w-full lg:w-[50%] w-full self-center gap-2'>
                    <button className='bg-white text-secondary w-1/2 rounded h-[40px]' >Search</button>
                    <button className='bg-transparent text-white border border-white rounded w-1/2 h-[40px]' >Clear</button>
                </div>
            </div>}
        </div>
    )
}
