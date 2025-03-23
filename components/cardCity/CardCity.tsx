import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardCity {
  title: string,
  height: string,
  category?: boolean,
  link: string
}
const CardCity: React.FC<CardCity> = ({ title, height, category, link }) => {
  
  return (
    <Link href={link} className={`transform transition-transform duration-200 hover:scale-110 relative rounded shadow-custom-md  ${height} p-2  `}  >
        <div className=" w-full h-full">
          <Image className={` rounded `} fill src={category ? "/categore-card.jpg" : `/cite.jpg`} alt="category" />
          <div className={`rounded absolute  w-full h-full z-0 bg-[#17133FE5] top-0 left-0`}>
          </div>
        </div>
        <p className={`absolute text-white w-full ${category ? "px-12 913max:px-6" : "" }  top-[25%]  left-[50%]   translate-x-[-50%] text-lg font-medium text-center`}>
          {title}
        </p>
    </Link>
  )
}

export default CardCity