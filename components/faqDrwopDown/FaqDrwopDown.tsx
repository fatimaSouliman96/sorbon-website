"use client"

import Image from "next/image";
import { useState } from "react";


interface FAQItem {
  question: string;
  title:string,
  answer: {item:string}[];
}

const faqData: FAQItem[] = [
  {
    question: "Course Objectives:",
    title: "By the end of the Process Management Mapping and Improvement training course, you will be able to:",
    answer: [
      {item: "Understand business processes and their components"},
      {item:  "Apply process mapping, measurement and analysis methods and techniques"},
      {item:  "Define processes using a subset of Business Process Modeling Notation (BPMN)"},
      {item:  "Diagnose the health of a business process"},
      {item:  "Use process improve techniques to transform business processes"},
    ]
  },
  {
    question: "Course Objectives:",
    title: "By the end of the Process Management Mapping and Improvement training course, you will be able to:",
    answer: [
      {item: "Understand business processes and their components"},
      {item:  "Apply process mapping, measurement and analysis methods and techniques"},
      {item:  "Define processes using a subset of Business Process Modeling Notation (BPMN)"},
      {item:  "Diagnose the health of a business process"},
      {item:  "Use process improve techniques to transform business processes"},
    ]
  },
  {
    question: "Course Objectives:",
    title: "By the end of the Process Management Mapping and Improvement training course, you will be able to:",
    answer: [
      {item: "Understand business processes and their components"},
      {item:  "Apply process mapping, measurement and analysis methods and techniques"},
      {item:  "Define processes using a subset of Business Process Modeling Notation (BPMN)"},
      {item:  "Diagnose the health of a business process"},
      {item:  "Use process improve techniques to transform business processes"},
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-full p-4">
      <h2 className=" text-2xl text-secondary font-bold mb-4 uppercase">about course</h2>
      <ul className="space-y-2">
        {faqData.map((item, index) => (
          <li key={index} className="rounded overflow-hidden">
            <button
              className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-between text-left p-3 bg-[#E0E0F5] hover:bg-[#dcdcf5]"
              onClick={() => toggleDropdown(index)}
            >
              {item.question}
              {openIndex === index ? 
              <Image src="/arrow-right-blue.svg" alt="arrow-right-blue" className="rotate-90" width={10} height={10} />
              :
               <Image src="/arrow-right-blue.svg" alt="arrow-right-blue" width={10} height={10} />}
            </button>
            {openIndex === index && (
              <ul className="p-3 border-t ">
                <p className="text-base font-medium" >{item.title}</p>
                {item.answer.map(ans => {
                return <li key={ans.item} className="flex gap-2 text-base font-light" >
                  <span className="w-1 self-center h-1 bg-secondary rounded-full" ></span>
                  {ans.item}</li>
              })}</ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
