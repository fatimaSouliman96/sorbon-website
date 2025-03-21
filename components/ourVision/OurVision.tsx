import Image from 'next/image'
import React from 'react'

type item = string
interface OurVisionProps {
    title: string,
    reserve: boolean,
    items: item[],
    image: string
}
const OurVision: React.FC<OurVisionProps> =  ({title, reserve, items, image}) => {
    console.log(items[0])
  return (
    <div className={`flex ${reserve == true ? "lg:flex-row-reverse md:flex-row-reverse" : "lg:flex-row md:flex-row"} flex-col w-full px-20 py-12 justify-between`}>
        <div className='relative lg:w-[50%] md:w-[50%] w-full'>
            <h1 className='text-[32px] font-semibold text-secondary'>{title}</h1>
            <ul className='gap-3'>
                {
                    items.map((item, index) => {
                        return  <li key={index} className='flex gap-2 text-[20px] font-normal text-secondary pt-4' ><span className={`${title == "Our Mission" ? "w-2" : "w-1"}  mt-4 h-1 bg-secondary rounded-full`} ></span>{item}</li>
                    })
                }
 
            </ul>
        </div>
        <div className='relative lg:w-[35%] md:w-[35%] w-full h-[273px]'>
            <Image src={image} alt='our vision' fill />
        </div>
    </div>
  )
}

export default OurVision