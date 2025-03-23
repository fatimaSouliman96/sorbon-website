import Image from 'next/image'
import React from 'react'
import {  showResultVenueRows } from '../table/dataTable'

export default function TableShowVenueContent() {
    return (
        <>
            {
                showResultVenueRows.map((row, index) => {
                    return <tr key={index} className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
                        <td className="px-3 py-3 border-r-0  text-black text-sm font-normal">{row.title}</td>
                        <td className="px-3 py-3 border-r-0  text-black text-sm font-normal">{row.city}</td>
                        <td className="px-3 py-3 border-r-0  text-black text-sm font-normal">{row.start}</td>
                        <td className="px-3 py-3 border-r-0  text-black text-sm font-normal">{row.end}</td>
                        <td className="px-3 py-3  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Details
                                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
                            </div>
                        </td>

                    </tr>
                })
            }
        </>
    )
}
