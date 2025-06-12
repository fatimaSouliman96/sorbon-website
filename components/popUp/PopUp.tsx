"use client"

import React, { useEffect, useState } from 'react'
import RegisterForm from '../registerForm/RegisterForm';
import EnquireForm from '../enquireForm/EnquireForm';
import DownloadForm from '../downloadForm/DownloadForm';
import { Course,  Timing } from '@/types/types';

interface PopUpProps {
    close: (value: boolean) => void;
    formNum: number,
    time: Timing | undefined,
    courseId?: number | undefined,
    course?: Course | undefined

} 


const PopUp: React.FC<PopUpProps> = ({close, formNum, time, courseId, course}) => {
    const [topPosition, setTopPosition] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setTopPosition(window.scrollY);
        return () => {
            // إعادة التمرير عند إغلاق البوب أب
            document.body.style.overflow = "auto";
        };
       
    }, []);

    return (
        <tr
        className="absolute left-0 w-full h-full  z-50 pt-8 bg-black/50 flex justify-center items-start overflow-y-scroll "
        style={{ top: `${topPosition}px` }}
          
        >
            <td className="lg:w-[90%] sm:w-full lg:h-fit md:h-full md-w-full sm:h-full mx-auto bg-white rounded-md shadow-lg rounded-t-[3rem]">
                
                {formNum == 0 && <RegisterForm time={time} close={close}  />}
                {formNum == 1 && <EnquireForm courseId={courseId} time={time} close={close}  />}
                {formNum == 2 && <DownloadForm course={course} time={time} close={close}  />}

            </td>
        </tr>
    );
}

export default PopUp