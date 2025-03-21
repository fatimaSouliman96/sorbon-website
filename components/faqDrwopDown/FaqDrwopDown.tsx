"use client"

import Image from "next/image";
import { useState } from "react";


export type FAQItem = {
  question: string;
  title?:string,
  answer?: {item:string}[];
  sigleAnswer?: string
}

interface FaqProps {
  fag: FAQItem[]
}

const FAQ:React.FC<FaqProps> = ({fag}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-full pt-4">
      {fag[0].title && <h2 className=" text-2xl text-secondary font-bold mb-4 uppercase">about course</h2>}
      <ul className="space-y-2">
        {fag.map((item, index) => (
          <li key={index} className="rounded overflow-hidden">
            <button
              className="w-full text-secondary text-lg font-medium md:w-3/4 lg:w-3/4 flex items-center justify-between text-left p-3 bg-[#E0E0F5] hover:bg-[#dcdcf5]"
              onClick={() => toggleDropdown(index)}
            >
              {item.question}
              {openIndex === index ? 
              <Image src="/arrow-right-blue.svg" alt="arrow-right-blue" className="rotate-90" width={10} height={10} />
              :
               <Image src="/arrow-right-blue.svg" alt="arrow-right-blue" width={10} height={10} />}
            </button>
            {openIndex === index && (
              <>{item.title && item.answer && <ul className="p-3 border-t ">
               {item.title && <p className="text-base font-medium" >{item.title}</p>}
                {item.answer && item.answer.map(ans => {
                return <li key={ans.item} className="flex gap-2 text-base font-light" >
                  <span className="w-1 self-center h-1 bg-secondary rounded-full" ></span>
                  {ans.item}</li>
              })}
              </ul>}
              <p className="flex gap-2 text-base font-light text-secondary pt-4 leading-7" >{item.sigleAnswer}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ
