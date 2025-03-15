import Image from 'next/image'
import React from 'react'

export default function Table() {
    return (
        <div className='w-full lg:overflow-x-visible overflow-x-scroll overflow-y-scroll'>
            <table className="w-full border-collapse border border-[#cbd5e1] text-left mt-10">
                <thead >
                    <tr className="border border-[#cbd5e1]  " >
                        <th className="px-3 py-2 uppercase text-base font-medium border-r-0 md:text-sm ">City</th>
                        <th className="px-3 py-2 uppercase text-base font-medium border-r-0 md:text-sm ">Start Date</th>
                        <th className="px-3 py-2 uppercase text-base font-medium border-r-0 md:text-sm ">End Date</th>
                        <th className="px-3 py-2 uppercase text-base font-medium border-r-0 md:text-sm ">Fees</th>
                        <th className="px-3 py-2 uppercase text-base font-medium border-r-0 md:text-sm "> </th>
                        <th className="px-3 py-2 uppercase text-base font-medium border-r-0 md:text-sm "> </th>
                        <th className="px-3 py-2 uppercase text-base font-medium border-r-0 md:text-sm "> </th>
                    </tr>
                </thead>
                <tbody className='bg-white' >
                    <tr className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">Madrid - Spain</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">23-01-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">26-02-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">$6100</td>
                        <td className="px-3 py-2  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Register
                                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Enquire
                                <Image src="/enquire.svg" alt="enquire" width={18} height={18} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary  text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                PDF
                                <Image src="/pdf.svg" alt="pdf" width={18} height={18} />
                            </div>
                        </td>
                    </tr>
                    <tr className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">Madrid - Spain</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">23-01-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">26-02-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">$6100</td>
                        <td className="px-3 py-2  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Register
                                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Enquire
                                <Image src="/enquire.svg" alt="enquire" width={18} height={18} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary  text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                PDF
                                <Image src="/pdf.svg" alt="pdf" width={18} height={18} />
                            </div>
                        </td>
                    </tr>
                    <tr className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">Madrid - Spain</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">23-01-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">26-02-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">$6100</td>
                        <td className="px-3 py-2  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Register
                                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Enquire
                                <Image src="/enquire.svg" alt="enquire" width={18} height={18} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary  text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                PDF
                                <Image src="/pdf.svg" alt="pdf" width={18} height={18} />
                            </div>
                        </td>
                    </tr>
                    <tr className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">Madrid - Spain</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">23-01-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">26-02-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">$6100</td>
                        <td className="px-3 py-2  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Register
                                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Enquire
                                <Image src="/enquire.svg" alt="enquire" width={18} height={18} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary  text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                PDF
                                <Image src="/pdf.svg" alt="pdf" width={18} height={18} />
                            </div>
                        </td>
                    </tr>
                    <tr className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">Madrid - Spain</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">23-01-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">26-02-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">$6100</td>
                        <td className="px-3 py-2  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Register
                                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Enquire
                                <Image src="/enquire.svg" alt="enquire" width={18} height={18} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary  text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                PDF
                                <Image src="/pdf.svg" alt="pdf" width={18} height={18} />
                            </div>
                        </td>
                    </tr>
                    <tr className="border border-[#cbd5e1]  hover:bg-gray-50 transition">
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">Madrid - Spain</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">23-01-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">26-02-2025</td>
                        <td className="px-3 py-2 border-r-0  text-black text-sm font-normal">$6100</td>
                        <td className="px-3 py-2  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Register
                                <Image src="/arrow-right-blue.svg" alt="arrow-right" width={9} height={9} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                Enquire
                                <Image src="/enquire.svg" alt="enquire" width={18} height={18} />
                            </div>
                        </td>
                        <td className="px-3 py-2 border-r-0  text-secondary  text-sm font-normal cursor-pointer ">
                            <div className='flex items-center gap-2' >
                                PDF
                                <Image src="/pdf.svg" alt="pdf" width={18} height={18} />
                            </div>
                        </td>
                    </tr>

                </tbody>

            </table>
            <div className="border max-w-full border-t-0 p-4 bg-white flex items-center justify-center  border-[#cbd5e1]">
                <button className='border-1 border p-2 w-[200px] border-[#322A8D99] rounded-[8px] text-[#322A8D99] text-lg font-medium ' >
                    All Cities
                </button>
            </div>
        </div>


    )
}
