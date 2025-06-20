import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CourseCardProps {
    index?: number,
    length?: number,
    title: string,
    image: string | null,
    cite: string,
    date: string,
    link: string,
    alt: string,

}



const CourseCard: React.FC<CourseCardProps> = ({ index = 0.1, length = 0, image, title, cite, date, link, alt }) => {


    return (
        <Link href={link} className={`flex 585max:rounded justify-center items-center transform transition-transform duration-200 scal relative shadow-custom-md  h-[168px] p-2 ${
            index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : index == length - 2 ? "rounded-bl-[30px] rounded-br rounded-t  " : index == length - 1 ? "rounded-br-[30px] rounded-bl rounded-t" : "rounded"
            
            }`} >
            <div className="w-full h-full absolute top-0 left-0 z-[-1]">
                <Image
                    unoptimized
                    className={`585max:rounded   ${
                        index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : index == length - 2 ? "rounded-bl-[30px] rounded-br rounded-t  " : index == length - 1 ? "rounded-br-[30px] rounded-bl rounded-t" : "rounded"
                        }`}
                    fill
                    src={image ?? "/home.jpg"}
                    alt={alt} />
                <div className={`585max:rounded absolute   ${
                        index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : index == length - 2 ? "rounded-bl-[30px] rounded-br rounded-t  " : index == length - 1 ? "rounded-br-[30px] rounded-bl rounded-t" : "rounded"
                        
                    } w-full h-full z-0 bg-[#17133FE5] top-0 left-0`}>
                </div>
            </div>
            <div className={`w-full  431max:top-[10px] gap-4 flex flex-col ${length == 0 ? "items-start" : "items-center"} w-full`}>
                <p className={` text-white text-lg font-medium ${length == 0 ? "text-left" : "text-center"}  `} >
                    {title}
                </p>
                <div className={`flex items-center gap-5 lg:pt-4 `}>
                    <div className='uppercase text-white text-sm flex items-center gap-1' >
                        <Image src={'/location.svg'} alt='location' width={20} height={20} />
                        {cite}
                    </div>
                    <div className='flex text-right text-white text-sm items-center gap-1' >
                        <Image src={'/celander.svg'} alt='celander' width={20} height={20} />
                        {date}
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default CourseCard