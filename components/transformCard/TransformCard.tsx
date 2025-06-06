import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface TransformCardProps {
    index?: number,
    length?: number,
    title: string,
    image_alt: string,
    image: string | null,
    link: string
}

const TransformCard: React.FC<TransformCardProps> = ({ index, length = 0, title, image, image_alt, link }) => {

   
    const isOdd = (number: number) => number % 2 !== 0;

    return (
        <Link href={link} className={`flex 585max:rounded bg-black justify-center items-center cursor-pointer transform transition-transform duration-200 scal shadow-custom-md h-[98px] p-2 ${index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : !isOdd(length) && index == length - 2 ? "rounded-bl-[30px] rounded-br rounded-t  " : !isOdd(length) && index == length - 1 ? "rounded-br-[30px] rounded-bl rounded-t" : isOdd(length) && index == length - 1 ? "rounded-bl-[30px] rounded-br rounded-t" : " rounded"} `} >
            <div className=" w-full h-full  absolute top-0 right-0 z-[-1]">
                <div className='w-full h-full relative' >
                    <Image
                         unoptimized
                        className={`585max:rounded w-full h-full ${index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : !isOdd(length) && index == length - 2 ? "rounded-bl-[30px] rounded-br rounded-t  " : !isOdd(length) && index == length - 1 ? "rounded-br-[30px] rounded-bl rounded-t" : isOdd(length) && index == length - 1 ? "rounded-bl-[30px] rounded-br rounded-t" : " rounded"}`}
                        fill
                        src={image || "/transform.jpg"}
                        alt={image_alt} />
                </div>
                <div className={`585max:rounded absolute  ${index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : !isOdd(length) && index == length - 2 ? "rounded-bl-[30px] rounded-br rounded-t  " : !isOdd(length) && index == length - 1 ? "rounded-br-[30px] rounded-bl rounded-t" : isOdd(length) && index == length - 1 ? "rounded-bl-[30px] rounded-br rounded-t" : " rounded"}  w-full h-full z-0 bg-[#17133FE5] top-0 left-0`}>
                </div>
            </div>
            <p className=' text-white 431max:top-[1px] top-[15%] 431max:left-[40%] left-[50%]  text-lg font-medium text-center' >
                {title}
            </p>
        </Link>
    )
}

export default TransformCard;
