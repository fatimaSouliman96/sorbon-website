import React, { ReactElement } from 'react'


interface TableProps {
    columns: string[],
    content: ReactElement,
    coursePage?: boolean
}
const Table:React.FC<TableProps> = ({columns, content, coursePage}) => {
    return (
        <div className='w-full lg:overflow-x-visible overflow-x-scroll overflow-y-scroll rounded-md'>
            <table className="w-full border-collapse border border-[#cbd5e1] text-left mt-10">
                <thead >
                    <tr className="border border-[#cbd5e1]  " >
                        {
                            columns.map((col, index) => {
                                return <th key={index} className="px-3 py-2 uppercase text-base font-medium border-r-0 md:text-sm ">{col}</th>
                            })
                        }
                        
                    </tr>
                </thead>
                <tbody className='bg-white' >
                    {content}
                </tbody>

            </table>
            {coursePage && <div className="border max-w-full border-t-0 p-4 bg-white flex items-center justify-center  border-[#cbd5e1]">
                <button className='border-1 border p-2 w-[200px] border-[#322A8D99] rounded-[8px] text-[#322A8D99] text-lg font-medium ' >
                    All Cities
                </button>
            </div>}
        </div>


    )
}

export default Table