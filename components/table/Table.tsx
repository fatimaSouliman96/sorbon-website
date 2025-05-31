
import React, { ReactElement } from 'react'


interface TableProps {
    columns: string[],
    content: ReactElement,
    
}
const Table: React.FC<TableProps> = ({ columns, content }) => {
    return (
        <>
          
                    <div className='w-full lg:overflow-x-visible overflow-x-scroll overflow-y-scroll rounded-md'>
                        <table className="w-full border-collapse border border-[#cbd5e1] text-left mt-10">
                            <thead >
                                <tr className="border border-[#cbd5e1]  " >
                                    {
                                        columns.map((col, index) => {
                                            return <th key={index} className="px-3 py-3 uppercase text-lg font-medium border-r-0 md:text-sm ">{col}</th>
                                        })
                                    }

                                </tr>
                            </thead>
                            {content}
                        </table>

                    </div>
            
        </>
    )
}

export default Table