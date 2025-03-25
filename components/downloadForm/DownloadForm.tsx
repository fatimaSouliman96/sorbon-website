"use client"

import {  useRef } from "react";
import CustomDatePicker from "../date/Date";
import Image from "next/image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Brochure from "../Brochure/Brochure";

interface DownloadFormProps {
    close: (value: boolean) => void;
}
const DownloadForm: React.FC<DownloadFormProps> = ({ close }) => {

    const componentRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (componentRef.current) {
            // Capture full content with higher quality
            const canvas = await html2canvas(componentRef.current, {
                backgroundColor: "#ffffff",
                scale: 2, // Improves quality
                useCORS: true,
                scrollX: 0,
                scrollY: 0,
                width: 794, // Ensure full A4 width
            });
    
            const imgData = canvas.toDataURL("image/png");
    
            // Calculate PDF height dynamically based on canvas height
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
            
    
            const pdf = new jsPDF("p", "mm", "a4");
            
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    
            // Check if content exceeds one page
            if (imgHeight > 297) {
                let heightLeft = imgHeight;
                let yPos = 0;
    
                pdf.addPage();
    
                while (heightLeft > 0) {
                    yPos -= 297;
                    pdf.addImage(imgData, "PNG", 0, yPos, imgWidth, imgHeight);
                    heightLeft -= 297;
                    if (heightLeft > 0) pdf.addPage();
                }
            }
    
            pdf.save("Course-Brochure.pdf");
        }
    };
    

    return (
        <>
            <div className="w-full bg-secondary rounded-t-3xl p-4 " >
                <div className="w-full flex items-center justify-end 721max:gap-[11rem] gap-[30rem]" >
                    <h1 className="text-2xl text-white font-semibold text-center">Enquire Form</h1>
                    <div className='relative' onClick={() => close(false)} >
                        <Image className="cursor-pointer" src="/close.svg" alt='close' width={21} height={21} />
                    </div>
                </div>

                <p className="text-base text-white font-medium text-center" >Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course</p>
                <div className="1038max:w-full w-[60%] m-auto grid 721max:grid-cols-2  433max:grid-cols-1  grid-cols-1 721min:grid-cols-4 gap-12 pt-4 items-center ">
                    <div>
                        <label className="text-sm font-semibold text-white">Start Date</label>
                        <CustomDatePicker form={true} />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-white">End Date</label>
                        <CustomDatePicker form={true} />
                    </div>
                    <div>
                        <div className="flex justify-between w-full">
                            <label className="text-sm font-semibold text-white">City</label>
                            <Image alt="location" width={20} height={20} src="/location-white.svg" />
                        </div>
                        <input className="w-full mt-2 text-sm font-semibold text-white p-1 bg-transparent border-b-white border-b outline-none" type="text" />
                    </div>
                    <div>
                        <div className="flex justify-between w-full">
                            <label className="text-sm font-semibold text-white">Fees</label>
                            <Image alt="fees" width={20} height={20} src="/fees.svg" />
                        </div>
                        <input className="placeholder:text-secondary placeholder:text-sm placeholder:font-semibold text-sm mt-2 w-full font-semibold text-white p-1 bg-transparent border-b-white border-b outline-none" type="text" />
                    </div>


                </div>
            </div>
            <div className="p-4">
                <div className="w-full " >
                    <p className="text-2xl text-secondary font-semibold text-left">Contact Information</p>
                    <div className="grid grid-cols-2 pt-1 gap-x-8 gap-y-1">
                        <div>
                            <input placeholder="Full Name*" className="placeholder:text-secondary placeholder:text-sm placeholder:font-semibold text-sm mt-2 w-full font-semibold text-secondary p-1 bg-transparent border-b-secondary border-b outline-none" type="text" />
                        </div>
                        <div>
                            <input placeholder="Mobile Number*" className="placeholder:text-secondary placeholder:text-sm placeholder:font-semibold text-sm mt-2 w-full font-semibold text-secondary p-1 bg-transparent border-b-secondary border-b outline-none" type="text" />
                        </div>
                        <div>
                            <input placeholder="Email*" className="placeholder:text-secondary placeholder:text-sm placeholder:font-semibold text-sm mt-2 w-full font-semibold text-secondary p-1 bg-transparent border-b-secondary border-b outline-none" type="email" />
                        </div>
                        <div>
                            <input placeholder="Company Name*" className="placeholder:text-secondary placeholder:text-sm placeholder:font-semibold text-sm mt-2 w-full font-semibold text-secondary p-1 bg-transparent border-b-secondary border-b outline-none" type="email" />
                        </div>

                    </div>
                </div>

            </div>
            <div className="w-full p-4">
                <button onClick={() => handleDownload()} className="w-full h-6 rounded bg-thirdy text-secondary text-base font-medium " >
                    Submit
                </button>
            </div>
            {
                <div className="absolute -left-[9999px]">
                <Brochure ref={componentRef} />
            </div>
            }
        </>
    );
}

export default DownloadForm