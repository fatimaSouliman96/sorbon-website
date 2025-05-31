import CourceTableContent from '@/components/courseTableContent/CourceTableContent'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import { courseCoulmns } from '@/components/table/dataTable'
import Table from '@/components/table/Table'
import { CourseDetailsResponse } from '@/types/types'
import getData from '@/utilts/getData'
import Image from 'next/image'
import React from 'react'
import { Toaster } from 'react-hot-toast'



export default async function Page({params}: {params: Promise<{ slug: string }>}) {

  const data = await getData<CourseDetailsResponse>(`get-timings-by-course/${(await params).slug}`);
  
  if (!data) {
    return (
      <div className="w-full h-screen pt-80 text-center py-8 font-bold text-red-600">
        There are no available timings for this course.
      </div>
    );
  }
  // const faqData: FAQItem[] = [
  //   {
  //     question: "Course Objectives:",
  //     title: "By the end of the Process Management Mapping and Improvement training course, you will be able to:",
  //     answer: [
  //       { item: "Understand business processes and their components" },
  //       { item: "Apply process mapping, measurement and analysis methods and techniques" },
  //       { item: "Define processes using a subset of Business Process Modeling Notation (BPMN)" },
  //       { item: "Diagnose the health of a business process" },
  //       { item: "Use process improve techniques to transform business processes" },
  //     ]
  //   },
  //   {
  //     question: "Course Objectives:",
  //     title: "By the end of the Process Management Mapping and Improvement training course, you will be able to:",
  //     answer: [
  //       { item: "Understand business processes and their components" },
  //       { item: "Apply process mapping, measurement and analysis methods and techniques" },
  //       { item: "Define processes using a subset of Business Process Modeling Notation (BPMN)" },
  //       { item: "Diagnose the health of a business process" },
  //       { item: "Use process improve techniques to transform business processes" },
  //     ]
  //   },
  //   {
  //     question: "Course Objectives:",
  //     title: "By the end of the Process Management Mapping and Improvement training course, you will be able to:",
  //     answer: [
  //       { item: "Understand business processes and their components" },
  //       { item: "Apply process mapping, measurement and analysis methods and techniques" },
  //       { item: "Define processes using a subset of Business Process Modeling Notation (BPMN)" },
  //       { item: "Diagnose the health of a business process" },
  //       { item: "Use process improve techniques to transform business processes" },
  //     ]
  //   }
  // ];

  return (
    <div className='w-full  '>
      <HeroCategories background='bg-hero-categories-bg' />
      <div className='px-12 py-8 w-full bg-[#f0effa]'>
        <div className='flex justify-between items-center flex-wrap w-full lg:gap-0 gap-2 ' >
          <div>
            <h1 className='lg:text-xl text-lg  font-semibold text-secondary uppercase '>{data?.course.h1}</h1>
            <p className='text-sm font-normal pt-2 text-secondary'>{data?.course.title}</p>
          </div>
          {/* <div className='relative lg:w-[35%] w-full md:w-[35%]' >
            <Image alt='search' width={24} height={24} src='/search-blue.svg' className='left-0 absolute bottom-1' />
            <input type='search' placeholder='Search For keywords' className='text-sm font-normal w-full text-secondary pl-8 outline-none border-b-[1px] border-secondary bg-transparent' />
          </div> */}

        </div>
        {data?.timings == undefined ?
          <h1 className='flex items-center  p-2 text-sm font-medium text-secondary '>
            There are no available timings for this course.
          </h1> : <Table  columns={courseCoulmns} content={<CourceTableContent course={data?.course} id={data?.course.id} row={data?.timings} />} />}
        {/* <FAQ fag={faqData} /> */}
      </div>
      <Toaster
        position="bottom-left"

        reverseOrder={false}
      />
    </div>
  )
}
