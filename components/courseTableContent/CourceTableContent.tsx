"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { courseRow } from '../table/dataTable'
import PopUp from '../popUp/PopUp'

export default function CourceTableContent() {
    const [openRegister, setOpenRegister] = useState<boolean>(false)
    const [formNum, setFormNum] = useState<number>(0)

    const openPopUp = (value: number) => {
        setOpenRegister(true)
        setFormNum(value)
    }

    return (
        <>
            {
                courseRow.map((row, index) => {
                    return <tr key={index} className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
                        <td className="px-3 py-3 border-r-0  text-black text-sm font-normal">{row.city}</td>
                        <td className="px-3 py-3 border-r-0  text-black text-sm font-normal">{row.start}</td>
                        <td className="px-3 py-3 border-r-0  text-black text-sm font-normal">{row.end}</td>
                        <td className="px-3 py-3 border-r-0  text-black text-sm font-normal">{row.fees}</td>
                        <td className="px-3 py-3  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' onClick={() => openPopUp(0)} >
                                Register
                                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
                            </div>
                        </td>
                        <td className="px-3 py-3 border-r-0  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' onClick={() => openPopUp(1)}  >
                                Enquire
                                <Image src="/enquire.svg" alt="enquire" width={18} height={18} />
                            </div>
                        </td>
                        <td className="px-3 py-3 border-r-0  text-secondary  text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' onClick={() => openPopUp(2)} >
                                PDF
                                <Image src="/pdf.svg" alt="pdf" width={18} height={18} />
                            </div>
                        </td>

                    </tr>
                })
            }

            {
                openRegister && <PopUp close={setOpenRegister} formNum={formNum} />
            }
        </>
    )
}
