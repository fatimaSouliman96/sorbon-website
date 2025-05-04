"use client"

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Brochure from "../Brochure/Brochure";
import { Course, DownloadFormResponse, Timing } from "@/types/types";
import { emailValidation } from "@/constant/baseUrl";
import toast from "react-hot-toast";
import postData from "@/utilts/postData";
import InputField from "../InputField/InputField";
import FlagSelect from "../comboBox/FlagSelect";
import { countries } from "@/constant/contries";

interface DownloadFormProps {
    close: (value: boolean) => void;
    time: Timing | undefined,
    course?: Course | undefined
}
type CountryIdType = {
    phone_number: number | undefined;
};
const DownloadForm: React.FC<DownloadFormProps> = ({ close, time, course }) => {

    const componentRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course_id: course?.id,
        company_name: "",
        phone: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [countryId, setCountryId] = useState<CountryIdType>({
        phone_number: undefined,
    });

    const handleChangeFlag = (value: number) => {
        setCountryId({ ...countryId, phone_number: value });
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim())
            newErrors.name = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailValidation.test(formData.email))
            newErrors.email = "Invalid email format";

        if (!formData.phone.trim())
            newErrors.phone = "Phone number is required";

        if (!formData.company_name.trim())
            newErrors.company_name = "Company name is required";


        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setIsLoading(true)
            const data = await postData<DownloadFormResponse>('download', formData);

            if (data && data.message) {
                toast.success(data.message); // show success message from response
                setIsLoading(false)
                handleDownload()
                setFormData({
                    name: "",
                    email: "",
                    course_id: course?.id,
                    company_name: "",
                    phone: "",
                });
            } else {
                setIsLoading(false)
                toast.error("Failed to send. Please try again.");
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            toast.error("Something went wrong. Please try again later.");
        }
    };

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
            <form onSubmit={handleSubmit} className="pb-4">
                <div className="w-full bg-secondary rounded-t-3xl p-4 " >
                    <div className="w-full flex items-center justify-end 721max:gap-[11rem] gap-[30rem]" >
                        <h1 className="text-2xl text-white font-semibold text-center">Download Form</h1>
                        <div className='relative' onClick={() => close(false)} >
                            <Image className="cursor-pointer" src="/close.svg" alt='close' width={21} height={21} />
                        </div>
                    </div>

                    <p className="text-base text-white font-medium text-center" >Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course</p>
                    <div className="1038max:w-full w-[60%] m-auto grid 721max:grid-cols-2 433max:grid-cols-1 grid-cols-1 721min:grid-cols-4 gap-12 pt-4 items-center">
                        <div>
                            <label className="text-sm font-semibold text-white">Start Date</label>
                            <p className="text-sm font-semibold text-white">{time?.date_from}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-white">End Date</label>
                            <p className="text-sm font-semibold text-white">{time?.date_to}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-white">City</label>
                            <p className="text-sm font-semibold text-white">{time?.city_title}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-white">Fees</label>
                            <p className="text-sm font-semibold text-white">{time?.price}</p>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="w-full " >
                        <p className="text-2xl text-secondary font-semibold text-left">Contact Information</p>
                        <div className="grid grid-cols-2 pt-1 gap-x-8 gap-y-1">
                            <InputField
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                error={errors.name}
                            />
                            <InputField
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                error={errors.email}
                                type="email"
                            />
                            <div className='flex flex-col'>
                                <div className='w-full flex border-0 border-b-[1px] border-[#FFFFFF99] ' >
                                    <FlagSelect style="pt-4 text-sm font-semibold text-secondary border-b-secondary border-b" onChange={handleChangeFlag} options={countries} value={countryId.phone_number} />
                                    <p className='pl-2 flex items-center pt-2 text-sm font-semibold text-secondary border-b-secondary h-full border-b  text-[#FFFFFF99]'>{countryId.phone_number !== undefined ? "+" + countryId.phone_number : ""}</p>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type='text'
                                        placeholder="Mobile Number*"
                                        className="placeholder:text-secondary w-[95%] placeholder:text-sm placeholder:font-semibold text-sm mt-2 font-semibold text-secondary p-1 bg-transparent border-b-secondary border-b outline-none"
                                    />
                                </div>
                                {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
                            </div>
                            <InputField
                                name="company_name"
                                value={formData.company_name}
                                onChange={handleChange}
                                placeholder="Company Name"
                                error={errors.company_name}
                            />

                        </div>
                    </div>

                </div>
                <div className="relative w-[97.5%] mx-auto rounded h-6 p-1">
                    <button type="submit" className={`${isLoading && "cursor-not-allowed"} absolute top-0 left-0 w-full h-full text-base font-medium bottom-1 bg-thirdy text-white`}>
                        {!isLoading && "Submit"}
                    </button>
                    {isLoading && (
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-thirdy">
                            <div className="w-6 h-6 border-4 border-t-transparent border-secondary rounded-full animate-spin" />
                        </div>
                    )}
                </div>
            </form>
            {
                <div className="absolute -left-[9999px]">
                    <Brochure course={course} time={time} ref={componentRef} />
                </div>
            }
        </>
    );
}

export default DownloadForm