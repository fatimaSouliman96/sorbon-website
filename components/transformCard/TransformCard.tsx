import Image from 'next/image'
import React from 'react'

interface TransformCardProps {
    index?: number,
    length?: number
}

const TransformCard: React.FC<TransformCardProps> = ({index, length = 0}) => {
    return (
        <div className={`flex justify-center items-center relative cursor-pointer transform transition-transform duration-200 scal shadow-custom-md  h-[98px] p-2 ${index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : index == length -2 ? "rounded-bl-[30px] rounded-br rounded-t  " : index == length -1 ? "rounded-br-[30px] rounded-bl rounded-t" : " rounded" } `} >
            <div className=" w-full h-full  absolute top-0 right-0 z-[-1]">
                <Image className={`  ${index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : index == length -2 ? "rounded-bl-[30px] rounded-br rounded-t  " : index == length -1 ? "rounded-br-[30px] rounded-bl rounded-t" : " rounded" }`} fill src="/transform.jpg" alt="category" />
                <div className={` absolute  ${index == 0 ? "rounded-tl-[30px] rounded-b rounded-tr" : index == 1 ? "rounded-tr-[30px] rounded-b rounded-tl" : index == length -2 ? "rounded-bl-[30px] rounded-br rounded-t  " : index == length -1 ? "rounded-br-[30px] rounded-bl rounded-t" : " rounded" }  w-full h-full z-0 bg-[#17133FE5] top-0 left-0`}>
                </div>
            </div>
            <p className=' text-white 431max:top-[1px] top-[15%] 431max:left-[40%] left-[50%]  text-lg font-medium text-center' >
            Advanced Excel: Power Query and Power Pivots Course
            </p>
        </div>
    )
}

export default TransformCard;
