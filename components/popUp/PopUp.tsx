"use client"

import React, { useEffect, useState } from 'react'
import RegisterForm from '../registerForm/RegisterForm';
import EnquireForm from '../enquireForm/EnquireForm';
import DownloadForm from '../downloadForm/DownloadForm';

interface PopUpProps {
    close: (value: boolean) => void;
    formNum: number
} 


const PopUp: React.FC<PopUpProps> = ({close, formNum}) => {
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
        className="absolute left-0 w-full h-screen z-50 pt-8 bg-black/50 flex justify-center items-start"
        style={{ top: `${topPosition}px` }}
          
        >
            <td className="w-[90%] mx-auto bg-white rounded-md shadow-lg rounded-t-[3rem]">
                
                {formNum == 0 && <RegisterForm close={close}  />}
                {formNum == 1 && <EnquireForm close={close}  />}
                {formNum == 2 && <DownloadForm close={close}  />}

            </td>
        </tr>
    );
}

export default PopUp