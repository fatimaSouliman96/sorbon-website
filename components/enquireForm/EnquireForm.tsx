"use client"

import { InquiryResponse, Timing } from "@/types/types";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { emailValidation } from "@/constant/baseUrl";
import InputField from "../InputField/InputField";
import FlagSelect from "../comboBox/FlagSelect";
import { countries } from "@/constant/contries";
import postData from "@/utilts/postData";
import toast from "react-hot-toast";
interface EnquireFormProps {
    close: (value: boolean) => void;
    time: Timing | undefined;
    courseId: number | undefined;
}

type CountryIdType = {
    responsible_phone_number: number | undefined;
    phone_number: number | undefined;
};

const EnquireForm: React.FC<EnquireFormProps> = ({ close, time, courseId }) => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        country: "",
        city: "",
        course_id: courseId,
        company: "",
        message: "",
        phone_number: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [countryId, setCountryId] = useState<CountryIdType>({
        responsible_phone_number: undefined,
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

        if (!formData.full_name.trim())
            newErrors.full_name = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailValidation.test(formData.email))
            newErrors.email = "Invalid email format";

        if (!formData.phone_number.trim())
            newErrors.phone_number = "Phone number is required";

        if (!formData.company.trim())
            newErrors.company = "Company name is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";
        if (!formData.city.trim()) newErrors.city = "City is required";

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
                const data = await postData<InquiryResponse>('inquire', formData);
    
                if (data && data.message) {
                    toast.success(data.message); // show success message from response
                    setIsLoading(false)
                    setFormData({
                        full_name: "",
                        email: "",
                        country: "",
                        city: "",
                        course_id: courseId,
                        company: "",
                        message: "",
                        phone_number: "",
                    });
                } else {
                    setIsLoading(false)
                    toast.error("Failed to send. Please try again.");
                }
            } catch (error) {
                setIsLoading(false)
                console.log(error)
                toast.error("Something went wrong. Please try again later.");
            }
        };

    return (
        <form onSubmit={handleSubmit} className="pb-2">
            <div className="w-full bg-secondary rounded-t-3xl p-4">
                <div className="w-full flex items-center justify-end 721max:gap-[11rem] gap-[30rem]">
                    <h1 className="text-2xl text-white font-semibold text-center">Enquire Form</h1>
                    <div className="relative" onClick={() => close(false)}>
                        <Image className="cursor-pointer" src="/close.svg" alt="close" width={21} height={21} />
                    </div>
                </div>

                <p className="text-base text-white font-medium text-center">
                    Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course
                </p>
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
                <div className="w-full">
                    <p className="text-2xl text-secondary font-semibold text-left">Contact Information</p>
                    <div className="grid grid-cols-2 pt-1 gap-x-8 gap-y-1">
                        <InputField name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name*" error={errors.full_name} />
                        <div className='flex flex-col'>
                            <div className='w-full flex border-0 border-b-[1px] border-[#FFFFFF99] ' >
                                <FlagSelect style="pt-4 text-sm font-semibold text-secondary border-b-secondary border-b" onChange={handleChangeFlag} options={countries} value={countryId.phone_number} />
                                <p className='pl-2 flex items-center pt-2 text-sm font-semibold text-secondary border-b-secondary h-full border-b  text-[#FFFFFF99]'>{countryId.phone_number !== undefined ? "+" + countryId.phone_number : ""}</p>
                                <input
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder="Mobile Number*"
                                    className="placeholder:text-secondary w-[95%] placeholder:text-sm placeholder:font-semibold text-sm mt-2 font-semibold text-secondary p-1 bg-transparent border-b-secondary border-b outline-none"
                                />
                            </div>
                            {errors.phone_number && <span className="text-red-400 text-xs">{errors.phone_number}</span>}
                        </div>
                        <InputField name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email*" error={errors.email} />
                        <InputField name="company" value={formData.company} onChange={handleChange} placeholder="Company Name*" error={errors.company} />
                        <InputField name="country" value={formData.country} onChange={handleChange} placeholder="Country*" error={errors.country} />
                        <InputField name="city" value={formData.city} onChange={handleChange} placeholder="City*" error={errors.city} />
                        <div className="col-span-2">
                            <InputField name="message" value={formData.message} onChange={handleChange} placeholder="Subject*" error={errors.message} />
                        </div>
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
    );
};

export default EnquireForm;
