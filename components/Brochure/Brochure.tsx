import { Course, Timing } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef, RefObject } from 'react'


  interface BrochureProps {
    ref?: RefObject<HTMLDivElement | null>,
    time: Timing | undefined,
    course?: Course | undefined

  }

  const Brochure = forwardRef<HTMLDivElement, BrochureProps>(({ time, course }, ref) => {
    const rawImg = course?.image;

    const isValidRemote =
      typeof rawImg === "string" &&
      (rawImg.startsWith("/") ||
       rawImg.startsWith("http://") ||
       rawImg.startsWith("https://"));
  
  
    const imageSrc = isValidRemote ? rawImg : "/brochor.png"
  return (
    <div ref={ref} className='w-[800px] p-6 shadow-lg'>
      <div className='w-full flex flex-col items-center relative h-[70vh] '>
        <div className="w-full h-full">
          <Image className={` rounded `} fill src={imageSrc} alt="category" />
          <div className={`rounded absolute  w-full h-full z-0 bg-[#17133FE5] top-0 left-0`}>
          </div>
        </div>
        <div className='absolute top-0 w-full p-12 flex flex-col gap-8 items-center  h-[70vh] '>
          <div className="w-[100px] h-[100px] relative ">
            <Image src={"/logo-white.svg"} className="py-2" fill alt="sorbon-logo" />
          </div>
          <h1 className='text-lg text-center text-white font-normal'>
            {course?.h1}
          </h1>
          <div className='flex items-center justify-between pt-14 w-full ' >
            <div className='flex flex-col' >
              <div className='flex items-center gap-2'>
                <div className='relative' >
                  <Image src="/date.svg" alt='date' width={14} height={14} />
                </div>
                <p className='uppercase text-xs font-normal text-white'>START DATE</p>
              </div>
              <p className='uppercase pt-1 self-end  text-sm font-normal text-white'>{time?.date_from}</p>
            </div>

            <div className='flex flex-col' >
              <div className='flex items-center gap-2'>
                <div className='relative' >
                  <Image src="/date.svg" alt='date' width={14} height={14} />
                </div>
                <p className='uppercase text-xs font-normal text-white'>END DATE</p>
              </div>
              <p className='uppercase pt-1 self-end  text-sm font-normal text-white'>{time?.date_to}</p>
            </div>

            <div className='flex flex-col' >
              <div className='flex items-center gap-2'>
                <div className='relative' >
                  <Image src="/location-white.svg" alt='date' width={14} height={14} />
                </div>
                <p className='uppercase text-xs font-normal text-white'>Venue</p>
              </div>
              <p className='uppercase pt-1 self-end  text-sm font-normal text-white'>{time?.city_title}</p>
            </div>
            <div className='flex flex-col' >
              <div className='flex items-center gap-2'>
                <div className='relative' >
                  <Image src="/fees.svg" alt='date' width={14} height={14} />
                </div>
                <p className='uppercase text-xs font-normal text-white'>FEES</p>
              </div>
              <p className='uppercase pt-1 self-end  text-sm font-normal text-white'>{time?.price}</p>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full bg-white">
        <div className="min-h-screen flex flex-col items-center p-6">
          <div className="p-8 rounded-lg max-w-4xl w-full">
            {/* Course Overview */}
            <h1 className="text-2xl font-medium text-secondary mb-6 leading-[20px]">
              Course Overview:
            </h1>
            <p className="text-black text-sm font-normal mb-4 leading-[20px]">
              {course?.overview}
            </p>
           

            {/* Course Objectives */}
            <h2 className="text-2xl font-medium text-secondary mt-6 leading-[20px]">
              Course Objectives:
            </h2>
            <p className="font-semibold text-sm text-black mt-2 leading-[20px]">
              {course?.description}
              
            </p>
         

            {/* Who Should Attend */}
            {/* <h2 className="text-2xl font-medium text-secondary mt-6 leading-[20px]">
              Who Should Attend?
            </h2>
            <p className="font-semibold text-gray-800 mt-2 leading-[20px]">
              Coaching Skills For Managers Training Course Is Designed For:
            </p>
            <ul className="list-disc list-inside text-black text-sm font-normal mt-2 leading-[20px]">
              <li>
                Anyone who manages, supports, or coordinates other people and is
                interested in deepening the effectiveness of their working
                relationships and improving performance.
              </li>
              <li>
                No prior knowledge of coaching is needed - just a commitment to
                effective management.
              </li>
            </ul> */}

          </div>
        </div>
      </div>

      <footer className="w-full bg-gradient-to-b from-[#322A8D] to-secondary lg:p-12 p-6">
        <div className='flex gap-8 items-center justify-between'>
          <div>

            <ul className='flex flex-col gap-6 pt-2'>
              <li className='text-base font-light flex items-center text-white gap-2'>
                <Image  width={24} height={24} src='/phone.svg' alt="phone" />
                +421 915 500 996
              </li>
              <li className='text-base font-light flex items-center text-white gap-2'>
                <Image  width={24} height={24} src='/email.svg' alt="email" />
                <Link href="#" className='flex flex-wrap shrink-0' >sorbonne@<p>sorbonneacademy</p><p>.com</p></Link>
              </li>
              <li className='text-base font-light flex  items-center text-white gap-3'>
                <Image  width={24} height={24} src='/location-footer.svg' alt="location" />
                Šancová 356861 - 831 04 Bratislava, Slovakia
              </li>
            </ul>
          </div>
          <div className=" relative">
            <Image src="/logo-white.svg" width={200} height={200} alt="sorbon-logo" />
          </div>



        </div>

        <div className='flex flex-col lg:pt-10 pt-8' >
          <span className='bg-[#ffffff65] block w-full h-[2px]'></span>

          <div className='flex items-center pt-4 justify-between' >
            <p className='721min:text-base text-base font-extralight text-white'>Sorbonne Academy s.r.o.</p>
            <ul className='flex items-center gap-4 pt-2' >
              <li><Image width={26} height={26} alt='facebook' src='/facebook.svg' /></li>
              <li><Image width={26} height={26} alt='insta' src='/insta.svg' /></li>
              <li><Image width={26} height={26} alt='x' src='/x.svg' /></li>
              <li><Image width={26} height={26} alt='youtube' src='/youtube.svg' /></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
   );
  });

  Brochure.displayName = "Brochure";
  
  export default Brochure