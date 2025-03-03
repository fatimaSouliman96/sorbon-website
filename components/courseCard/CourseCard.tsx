import Image from 'next/image'
import React from 'react'

interface CourseCardProps {
    index?: number,
    length?: number

}



const CourseCard: React.FC<CourseCardProps> = ({ index = 0.1 , length = 0 }) => {

    return (
        <div className={`relative shadow-custom-md  h-[168px] p-2 ${index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : index == length - 2 ? "rounded-bl-[30px] rounded-br rounded-t  " : index == length - 1 ? "rounded-br-[30px] rounded-bl rounded-t" : " rounded"} `} >
            <div className="w-full h-full">
                <Image className={`  ${index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : index == length - 2 ? "rounded-bl-[30px] rounded-br rounded-t  " : index == length - 1 ? "rounded-br-[30px] rounded-bl rounded-t" : " rounded"}`} fill src="/transform.jfif" alt="category" />
                <div className={` absolute  ${index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : index == length - 2 ? "rounded-bl-[30px] rounded-br rounded-t  " : index == length - 1 ? "rounded-br-[30px] rounded-bl rounded-t" : " rounded"}  w-full h-full z-0 bg-[#17133FE5] top-0 left-0`}>
                </div>
            </div>
            <div className='absolute top-[25%] 431max:top-[10px] gap-4 flex flex-col items-center w-full left-[50%] translate-x-[-50%] '>
                <p className=' text-white text-lg font-medium text-center px-4 431min:px-14' >
                Mastering Conflict Resolution and Effective Communication with Difficult Personalities
                </p>
                <div className='flex items-center gap-5'>
                    <div className='uppercase text-white text-xs flex items-center gap-1' >
                        <Image src={'/location.svg'} alt='location' width={20} height={20}/>
                        london
                    </div>
                    <div className='flex text-white text-xs items-center gap-1' >
                        <Image src={'/celander.svg'} alt='celander' width={20} height={20}/>
                        25-01-2025
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CourseCard