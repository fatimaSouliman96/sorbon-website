"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import PopUp from '../popUp/PopUp'
import { Course, Timing } from '@/types/types'

interface CourceTableContentProps {
  row: Timing[] | undefined,
  id: number | undefined,
  course?: Course | undefined
}

const CourceTableContent: React.FC<CourceTableContentProps> = ({ row, course }) => {

  const [openRegister, setOpenRegister] = useState<boolean>(false)
  const [formNum, setFormNum] = useState<number>(0)
  const [data, setData] = useState<Timing | undefined>()
  const [courseId, setCourseId] = useState<number | undefined>()


  const openPopUp = (value: number) => {
    setOpenRegister(true)
    setFormNum(value)
  }

  return (
    <>

      <tbody>
        {

          row?.map((time, index) => (
            <tr key={index} className="border border-[#cbd5e1] hover:bg-gray-50 transition">
              <td className="px-3 py-3 text-black text-sm font-normal">{time.city_title}</td>
              <td className="px-3 py-3 text-black text-sm font-normal">{time.date_from}</td>
              <td className="px-3 py-3 text-black text-sm font-normal">{time.date_to}</td>
              <td className="px-3 py-3 text-black text-sm font-normal">{time.price}</td>
              <td className="px-3 py-3 text-secondary text-sm font-normal cursor-pointer">
                <div
                  className="flex items-center gap-2"
                  onClick={() => {
                    openPopUp(0)
                    setData(time)
                  }}
                >
                  Register
                  <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
                </div>
              </td>
              <td className="px-3 py-3 text-secondary text-sm font-normal cursor-pointer">
                <div className="flex items-center gap-2" onClick={() => {
                  openPopUp(1)
                  setData(time)
                  setCourseId(course?.id)
                }}>
                  Enquire
                  <Image src="/enquire.svg" alt="enquire" width={18} height={18} />
                </div>
              </td>
              <td className="px-3 py-3 text-secondary text-sm font-normal cursor-pointer">
                <div className="flex items-center gap-2" onClick={() => {
                  openPopUp(2)
                  setData(time)
                }}>
                  PDF
                  <Image src="/pdf.svg" alt="pdf" width={18} height={18} />
                </div>
              </td>
            </tr>
          ))

        }

        {openRegister && <PopUp course={course ?? course} courseId={courseId} time={data} close={setOpenRegister} formNum={formNum} />}
      </tbody>



    </>
  )

}

export default CourceTableContent