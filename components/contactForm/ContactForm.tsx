"use client"

import React, { ChangeEvent, useState } from 'react'
import ComboBox from '../comboBox/ComboBox';
import { countryOptions } from '@/constant/comboBoxData';
import FlagSelect from '../comboBox/FlagSelect';
import { countries } from '@/constant/contries';
import postData from '@/utilts/postData';
import { ContactFormResponse } from '@/types/types';
import toast from 'react-hot-toast';
import { emailValidation } from '@/constant/baseUrl';




export default function ContactForm() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        country: '',
        company: '',
        phone_number: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [countryId, setCountrtId] = useState<number>();
   
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        setFormData({ ...formData, email: emailValue });

        if (!emailValidation.test(emailValue)) {
            setErrors({ ...errors, email: "البريد الإلكتروني غير صالح" });
        } else {
            setErrors({ ...errors, email: "" });
        }
    };

    const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
        const phone_numberValue = event.target.value.replace(/\D/g, "");
        setFormData({ ...formData, phone_number: phone_numberValue });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target;

        const { name, type, value } = target;

        if (type === 'checkbox') {
            const checkbox = target as HTMLInputElement;
            setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        setErrors(prev => ({ ...prev, [name]: '' }));
    };


    const handleChangeFlag = (value: number) => {
        setCountrtId(value);
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.country.trim()) newErrors.country = 'Country is required';
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';


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
            const data = await postData<ContactFormResponse>('contact', formData);

            if (data && data.message) {
                toast.success(data.message); // show success message from response
                setIsLoading(false)
                setFormData({
                    full_name: '',
                    email: '',
                    country: '',
                    company: '',
                    phone_number: '',
                    subject: '',
                    message: ''
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
        <form
            noValidate
            onSubmit={handleSubmit}
            className='bg-[#372E9E] rounded-xl p-4 grid grid-cols-2 w-full lg:w-[60%] gap-3'
        >
            <p className='text-[28px] font-semibold text-white col-span-2'>Your message</p>

            {/* Full Name */}
            <div className='flex flex-col col-span-2'>
                <label className='text-[#FFFFFF99] text-sm font-medium'>Full Name*</label>
                <input
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    type='text'
                    className='outline-none border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent'
                />
                {errors.full_name && <span className="text-red-400 text-xs">{errors.full_name}</span>}
            </div>

            {/* Email */}
            <div className='flex flex-col col-span-2'>
                <label className='text-[#FFFFFF99] text-sm font-medium'>Email*</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    type='email'
                    className='outline-none border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent'
                />
                {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
            </div>

            {/* Country */}
            <div className='flex flex-col'>
                <ComboBox
                    style='outline-none border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent '
                    label='Country*'
                    options={countryOptions}
                    value={formData.country}
                    onChange={(val) => {
                        setFormData((prev) => ({ ...prev, country: String(val) }));
                        setErrors((prev) => ({ ...prev, country: "" }));
                      }}
                />
                {errors.country && <span className="text-red-400 text-xs">{errors.country}</span>}
            </div>

            {/* Company */}
            <div className='flex flex-col'>
                <label className='text-[#FFFFFF99] text-sm font-medium'>Company*</label>
                <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type='text'
                    className='outline-none border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent'
                />
                {errors.company && <span className="text-red-400 text-xs">{errors.company}</span>}
            </div>

            {/* Phone */}
            <div className='flex flex-col col-span-2'>
                <label className='text-[#FFFFFF99] text-sm font-medium'>Phone*</label>
                <div className='w-full flex border-0 border-b-[1px] border-[#FFFFFF99] items-center' >
                    <FlagSelect onChange={handleChangeFlag} options={countries} value={countryId} />
                    <p className='pl-2 text-[#FFFFFF99]'>{countryId !== undefined ? "+" + countryId : ""}</p>
                    <input
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handlePhoneNumber}
                        type='text'
                        className='pl-2 outline-none w-[95%] text-[#FFFFFF99] bg-transparent'
                    />
                </div>
                {errors.phone_number && <span className="text-red-400 text-xs">{errors.phone_number}</span>}
            </div>

            {/* Subject */}
            <div className='flex flex-col col-span-2'>
                <label className='text-[#FFFFFF99] text-sm font-medium'>Subject*</label>
                <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type='text'
                    className='outline-none border-0 border-b-[1px] text-[#FFFFFF99] border-[#FFFFFF99] bg-transparent'
                />
                {errors.subject && <span className="text-red-400 text-xs">{errors.subject}</span>}
            </div>

            {/* Message */}
            <div className='flex flex-col col-span-2'>
                <label className='text-[#FFFFFF99] text-sm font-medium'>Message*</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className='outline-none resize-none border border-[#FFFFFF99] text-[#FFFFFF99] bg-transparent rounded p-2'
                />
                {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 col-span-2">
                <input
                    type="checkbox"
                    name="checkbox"

                    onChange={handleChange}
                    className="appearance-none w-4 h-4 border-[1px] rounded-sm border-[#FFFFFF99] bg-transparent mt-1 shrink-0 checked:bg-[#FFFFFF99] cursor-pointer checked:border-0"
                />
                <label
                    htmlFor="checkbox"
                    className="flex items-center gap-2 text-[#FFFFFF99] text-sm font-medium cursor-pointer"
                >
                    I want to protect my data by signing an NDA
                </label>
            </div>
            {errors.checkbox && <span className="text-red-400 text-xs col-span-2 -mt-2">{errors.checkbox}</span>}

            {/* Submit Button */}

            <div className='relative col-span-2 rounded h-12'>
                <button type="submit" className={`${isLoading && "cursor-not-allowed"} absolute top-0 left-0 w-full h-full  text-base font-medium text-secondary bg-white`}>
                    {!isLoading && "Submit"}
                </button>
                {isLoading && <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white'>
                    <div className="w-6 h-6 border-4 border-t-transparent border-secondary rounded-full animate-spin" />
                </div>}
            </div>
        </form>
    );
}

