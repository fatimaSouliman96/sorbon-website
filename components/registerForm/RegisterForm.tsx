"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { RegisterResponse, Timing } from "@/types/types";
import toast from "react-hot-toast";
import postData from "@/utilts/postData";
import FlagSelect from "../comboBox/FlagSelect";
import { countries } from "@/constant/contries";
import { emailValidation } from "@/constant/baseUrl";
import InputField from "../InputField/InputField";



interface RegisterProps {
    close: (value: boolean) => void;
    time: Timing | undefined;
}

type ContryIdType = {
    responsible_phone_number: number | undefined,
    phone_number: number | undefined
}
const RegisterForm: React.FC<RegisterProps> = ({ close, time }) => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        country: "",
        city: "",
        job_title: "",
        company_name: "",
        phone_number: "",
        responsible_email: "",
        responsible_name: "",
        responsible_phone_number: "",
        responsible_position: "",
        timing_id: time?.id,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [countryId, setCountrtId] = useState<ContryIdType>({
        responsible_phone_number: undefined,
        phone_number: undefined
    });

    const handleChangeFlag = (value: number) => {
        setCountrtId({...countryId, phone_number: value});
    };

    const handleChangeFlagresponsible_phone_number = (value: number) => {
        setCountrtId({...countryId, responsible_phone_number: value});
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
        if (!formData.job_title.trim())
            newErrors.job_title = "Job title is required";

        if (!formData.company_name.trim())
            newErrors.company_name = "Company name is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";
        if (!formData.city.trim()) newErrors.city = "City is required";

        if (!formData.responsible_name.trim())
            newErrors.responsible_name = "Responsible name is required";
        if (!formData.responsible_email.trim())
            newErrors.responsible_email = "Responsible email is required";
        else if (!emailValidation.test(formData.responsible_email))
            newErrors.responsible_email = "Invalid email format";

        if (!formData.responsible_phone_number.trim())
            newErrors.responsible_phone_number = "Responsible phone is required";
        if (!formData.responsible_position.trim())
            newErrors.responsible_position = "Responsible position is required";

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
            const data = await postData<RegisterResponse>('register', formData);

            if (data && data.message) {
                toast.success(data.message); // show success message from response
                setIsLoading(false)
                setFormData({
                    full_name: "",
                    email: "",
                    country: "",
                    city: "",
                    job_title: "",
                    company_name: "",
                    phone_number: "",
                    responsible_email: "",
                    responsible_name: "",
                    responsible_phone_number: "",
                    responsible_position: "",
                    timing_id: time?.id,
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

    return (
        <form onSubmit={handleSubmit} className="pb-2">
            <div className="w-full bg-secondary rounded-t-3xl p-4">
                <div className="w-full flex items-center justify-end 721max:gap-[11rem] gap-[30rem]">
                    <h1 className="text-2xl text-white font-semibold text-center">
                        Enquire Form
                    </h1>
                    <div className="relative" onClick={() => close(false)}>
                        <Image
                            className="cursor-pointer"
                            src="/close.svg"
                            alt="close"
                            width={21}
                            height={21}
                        />
                    </div>
                </div>
                <p className="text-base text-white font-medium text-center">
                    Organizing and Behavioral Skills for Administrative Professionals and
                    Executive Secretaries Course
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
                <p className="text-2xl text-secondary font-semibold text-left">
                    Participant Information
                </p>
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


                    <InputField name="email" value={formData.email} onChange={handleChange} placeholder="Email*" error={errors.email} />
                    <InputField name="job_title" value={formData.job_title} onChange={handleChange} placeholder="Job Title*" error={errors.job_title} />
                </div>

                <p className="text-2xl text-secondary font-semibold text-left mt-4">
                    Company Information
                </p>
                <div className="grid 721max:grid-cols-2 grid-cols-4 pt-1 gap-x-8 gap-y-1">
                    <div className="col-span-2">
                        <InputField name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Company Name*" error={errors.company_name} />
                    </div>
                    <InputField name="country" value={formData.country} onChange={handleChange} placeholder="Country*" error={errors.country} />
                    <InputField name="city" value={formData.city} onChange={handleChange} placeholder="City*" error={errors.city} />
                </div>

                <p className="text-2xl text-secondary font-semibold text-left mt-4">
                    Person Responsible for Training and Development in the Company
                </p>
                <div className="grid grid-cols-2 pt-1 gap-x-8 gap-y-1">
                    <InputField name="responsible_name" value={formData.responsible_name} onChange={handleChange} placeholder="Full Name*" error={errors.responsible_name} />

                    <div className='flex flex-col'>
                        <div className='w-full flex border-0 border-b-[1px] border-[#FFFFFF99] ' >
                            <FlagSelect style="pt-4 text-sm font-semibold text-secondary border-b-secondary border-b" onChange={handleChangeFlagresponsible_phone_number} options={countries} value={countryId.responsible_phone_number} />
                            <p className='pl-2 flex items-center pt-2 text-sm font-semibold text-secondary border-b-secondary h-full border-b  text-[#FFFFFF99]'>{countryId.responsible_phone_number !== undefined ? "+" + countryId.responsible_phone_number : ""}</p>
                            <input
                                name="responsible_phone_number"
                                value={formData.responsible_phone_number}
                                onChange={handleChange}
                                type='text'
                                placeholder="Mobile Number*"
                               className="placeholder:text-secondary w-[95%] placeholder:text-sm placeholder:font-semibold text-sm mt-2 font-semibold text-secondary p-1 bg-transparent border-b-secondary border-b outline-none"
                            />
                        </div>
                        {errors.responsible_phone_number && <span className="text-red-400 text-xs">{errors.responsible_phone_number}</span>}
                    </div>
                    <InputField name="responsible_email" value={formData.responsible_email} onChange={handleChange} placeholder="Email*" error={errors.responsible_email} />
                    <InputField name="responsible_position" value={formData.responsible_position} onChange={handleChange} placeholder="Position*" error={errors.responsible_position} />
                </div>
            </div>

            <div className='relative w-[97.5%] mx-auto rounded h-6 p-1'>
                <button type="submit" className={`${isLoading && "cursor-not-allowed"} absolute top-0 left-0 w-full h-full  text-base font-medium bottom-1 bg-thirdy  text-white`}>
                    {!isLoading && "Submit"}
                </button>
                {isLoading && <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-thirdy '>
                    <div className="w-6 h-6 border-4 border-t-transparent border-secondary rounded-full animate-spin" />
                </div>}
            </div>
        </form>
    );
};



export default RegisterForm;
