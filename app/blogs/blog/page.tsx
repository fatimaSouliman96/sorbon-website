import HeroCategories from '@/components/heroCategories/HeroCategories'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='w-full'>
            <HeroCategories background='bg-hero-categories-bg' />
            <div className='w-full flex flex-col gap-8 px-16 py-8' >
                <h1 className='lg:text-4xl text-3xll font-semibold text-secondary uppercase'>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h1>
                <div className='w-full h-[288px] relative'>
                    <Image src="/categoroes.jfif" alt='blog' fill />
                </div>
                <div className='w-[251px] self-end flex items-center '>
                    <p className='text-[13px] rounded-l-md w-1/2 text-center font-semibold text-secondary bg-[#EBF2FE] p-2' >Design tools</p>
                    <p className='text-[13px] rounded-r-md w-1/2 text-center font-semibold text-secondary bg-white p-2' >AUGust 13, 2021 </p>
                </div>
                <p className='text-secondary text-base font-medium'>
                These terms and conditions (“Agreement”) set forth the general terms and conditions of your use of the sorbonneacademy website (“Website” or “Service”) and any of its related products and services (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”) and SORBONNE ACADEMY s.r.o. (“SORBONNE ACADEMY s.r.o.”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and SORBONNE ACADEMY s.r.o., even though it is electronic and is not physically signed by you, and it governs your use of the Website and Services.
                </p>
                <p className='text-secondary text-base font-medium'>
                You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. Sensitive and private data exchange happens over a SSL secured communication channel and is encrypted and protected with digital signatures, and the Website and Services are also in compliance with PCI vulnerability standards in order to create as secure of an environment as possible for Users. Scans for malware are performed on a regular basis for additional security and protection. If, in our judgment, your purchase constitutes a high-risk transaction, we will require you to provide us with a copy of your valid government-issued photo identification, and possibly a copy of a recent bank statement for the credit or debit card used for the purchase. We reserve the right to change products and product pricing at any time.
                </p>
            </div>

        </div>
    )
}
