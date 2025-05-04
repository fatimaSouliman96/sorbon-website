import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardCity {
  title: string,
  height: string,
  category?: boolean,
  link: string,
  image: string | null,
  imageAlt: string
}
const CardCity: React.FC<CardCity> = ({ title, height, category, link,  imageAlt }) => {

  const defaultImg = category ? "/categore-card.jpg" : `/cite.jpg`
  // image && image.trim() !== "" ? image : 
  return (
    <Link href={link} className={`flex justify-center items-center transform transition-transform duration-200 scal relative rounded shadow-custom-md  ${height} p-2  `}  >
        <div className=" w-full h-full absolute top-0 left-0 z-[-1]">
          <Image className={` rounded `} fill src={defaultImg} alt={imageAlt} />
          <div className={`rounded absolute  w-full h-full z-0 bg-[#17133FE5] top-0 left-0`}>
          </div>
        </div>
        <p className={` text-white w-full text-lg font-medium text-center`}>
          {title}
        </p>
    </Link>
  )
}

export default CardCity