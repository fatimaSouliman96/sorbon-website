import Image from 'next/image'
import React from 'react'

export default function CardCity() {
  return (
    <div className="relative h-[200px] rounded-lg " >
            <div className=" w-full h-full ">
                <Image className="rounded-lg" fill src="/city.jfif" alt="category" />
                <div className="absolute rounded-lg w-full h-full z-0 bg-[#17133FE5] top-0 left-0">

                </div>
            </div>
            <div className="flex items-center justify-center gap-2 absolute  w-full h-full z-1 top-[40%] left-[4%] " >
                    <p className="text-base font-medium text-white" >Madrid - Spain</p>
                    <Image src="/arrow-white.svg" alt="arrow-eylow" width={6} height={12} />
            </div>
        </div>
  )
}
