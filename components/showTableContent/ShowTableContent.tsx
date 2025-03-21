import Image from 'next/image'
import React from 'react'
import { showRows } from '../table/dataTable'

export default function ShowTableContent() {
  return (
    <>
      {
        showRows.map((row, index) => {
          return <tr key={index} className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
            <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">{row.name}</td>
            <td className="px-3 py-2  text-secondary text-sm font-normal cursor-pointer ">
              <div className='flex items-center gap-2 text-secondary text-sm font-semibold cursor-pointer' >
                Explore Venues & Dates
                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
              </div>
            </td>

          </tr>
        })
      }
    </>
  )
}
