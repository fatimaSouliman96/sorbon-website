import Image from 'next/image'
import React from 'react'
import { SearchResponse } from '@/types/types'
import Link from 'next/link'
interface TableShowContent {
  row: SearchResponse[] | []
}

const ShowTableContent: React.FC<TableShowContent> = ({row}) => {
  return (
    <tbody>
      {
        row.map((row, index) => {
          return <tr key={index} className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
            <td className="px-3 py-3 border-r-0  text-black text-sm font-normal">{row.title}</td>
            <td className="px-3 py-3  text-secondary text-sm font-normal cursor-pointer ">
              <Link
                href={`course/${row.slug}`}
                className='flex items-center gap-2 text-secondary text-sm font-semibold cursor-pointer'
              >
                Explore Venues & Dates
                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
              </Link>
            </td>

          </tr>
        })
      }
    </tbody>
  )
}

export default ShowTableContent
