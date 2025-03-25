import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef } from 'react'


 const Brochure = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className='w-[800px] p-6 shadow-lg'>
      <div className='w-full flex flex-col items-center relative h-[70vh] '>
        <div className="w-full h-full">
          <Image className={` rounded `} fill src="/brochor.png" alt="category" />
          <div className={`rounded absolute  w-full h-full z-0 bg-[#17133FE5] top-0 left-0`}>
          </div>
        </div>
        <div className='absolute top-0 w-full p-12 flex flex-col gap-8 items-center  h-[70vh] '>
          <div className="w-[100px] h-[100px] relative ">
            <Image src={"/logo-white.svg"} className="py-2" fill alt="sorbon-logo" />
          </div>
          <h1 className='text-lg text-center text-white font-normal'>
            Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course
          </h1>
          <div className='flex items-center justify-between pt-14 w-full ' >
            <div className='flex flex-col' >
              <div className='flex items-center gap-2'>
                <div className='relative' >
                  <Image src="/date.svg" alt='date' width={14} height={14} />
                </div>
                <p className='uppercase text-xs font-normal text-white'>START DATE</p>
              </div>
              <p className='uppercase pt-1 self-end  text-sm font-normal text-white'>23-1-2025</p>
            </div>

            <div className='flex flex-col' >
              <div className='flex items-center gap-2'>
                <div className='relative' >
                  <Image src="/date.svg" alt='date' width={14} height={14} />
                </div>
                <p className='uppercase text-xs font-normal text-white'>END DATE</p>
              </div>
              <p className='uppercase pt-1 self-end  text-sm font-normal text-white'>23-1-2025</p>
            </div>

            <div className='flex flex-col' >
              <div className='flex items-center gap-2'>
                <div className='relative' >
                  <Image src="/location-white.svg" alt='date' width={14} height={14} />
                </div>
                <p className='uppercase text-xs font-normal text-white'>Venue</p>
              </div>
              <p className='uppercase pt-1 self-end  text-sm font-normal text-white'>Amesterdam</p>
            </div>
            <div className='flex flex-col' >
              <div className='flex items-center gap-2'>
                <div className='relative' >
                  <Image src="/fees.svg" alt='date' width={14} height={14} />
                </div>
                <p className='uppercase text-xs font-normal text-white'>FEES</p>
              </div>
              <p className='uppercase pt-1 self-end  text-sm font-normal text-white'>4900$</p>
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
              The coaching skills for managers program aims to enhance the knowledge
              of the managers pertaining to the elements of coaching, which in turn
              encourages better performance from the team and improves the overall
              atmosphere.
            </p>
            <p className="text-black text-sm font-normal mb-4 leading-[20px]">
              This is the core objective of this course. Enrollees also rest to
              connect with staff and improve productivity through other means of
              coaching.
            </p>
            <p className="text-black text-sm font-normal mb-4 leading-[20px]">
              The specific aims have been to know when there is a need for coaching,
              how to build communication and listening capabilities, how to set
              achievable objectives, and using different approaches to coaching such
              as GROW and FUEL.
            </p>
            <p className="text-black text-sm font-normal mb-4 leading-[20px]">
              It further entails providing feedback to a subvention on the learned
              traits of the other members and the ethical nature of a coach. It is
              suited for managers of all levels who wish to increase their leaders’
              competence and promote independence and accountability in their teams.
            </p>

            {/* Course Objectives */}
            <h2 className="text-2xl font-medium text-secondary mt-6 leading-[20px]">
              Course Objectives:
            </h2>
            <p className="font-semibold text-sm text-black mt-2 leading-[20px]">
              At the end of this coaching skills for managers course, learners will be
              able to do:
            </p>
            <ul className="list-disc list-inside text-black text-sm font-normal mt-2 leading-[20px]">
              <li>Know when to use coaching with staff and peers.</li>
              <li>Develop strong 1-2-1 interpersonal relationships.</li>
              <li>Empower team members to identify their own goals and improvements.</li>
              <li>Connect individual staff to the strategic needs of your organization.</li>
              <li>Build and maintain more positive constructive working relationships.</li>
              <li>Retain high performers by giving them responsibility for and ownership of success.</li>
              <li>Establish a coaching relationship.</li>
              <li>Ask powerful questions.</li>
              <li>Really listen to what is being communicated.</li>
              <li>Generate new options.</li>
              <li>Set realistic goals.</li>
              <li>Utilize a coaching model, tools, and techniques.</li>
            </ul>

            {/* Who Should Attend */}
            <h2 className="text-2xl font-medium text-secondary mt-6 leading-[20px]">
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
            </ul>

            {/* Course Outlines */}
            <h2 className="text-2xl font-medium text-secondary mt-6 leading-[20px]">
              Course Outlines:
            </h2>

            {/* An Introduction to Coaching */}
            <h3 className="text-sm font-bold text-secondary mt-4 leading-[20px]">
              An Introduction To Coaching
            </h3>
            <ul className="list-disc list-inside text-black text-sm font-normal mt-2 leading-[20px]">
              <li>What is coaching?</li>
              <li>Why is it so effective?</li>
              <li>What coaching is not - what’s your coaching style?</li>
              <li>Coaching as a managerial style.</li>
              <li>
                The different uses of coaching (immediate feedback, regular meetings,
                performance, ongoing development).
              </li>
            </ul>

            {/* Coaching Models */}
            <h3 className="text-sm font-bold text-secondary mt-4 leading-[20px]">
              Coaching Models
            </h3>
            <ul className="list-disc list-inside text-black text-sm font-normal mt-2 leading-[20px]">
              <li>Using the GROW coaching model.</li>
              <li>Practice and application of GROW.</li>
              <li>Other coaching models:</li>
              <ul className="list-disc list-inside ml-6 leading-[20px]">
                <li>GROWTH</li>
                <li>OUTCOMES</li>
                <li>FUEL</li>
              </ul>
            </ul>

            {/* How to Give Constructive Feedback */}
            <h3 className="text-sm font-bold text-secondary mt-4 leading-[20px]">
              How To Give Constructive Feedback
            </h3>
            <ul className="list-disc list-inside text-black text-sm font-normal mt-2 leading-[20px]">
              <li>When to give feedback and how.</li>
              <li>Structuring a feedback conversation.</li>
              <li>2 models for giving effective feedback:</li>
              <ul className="list-disc list-inside ml-6 leading-[20px]">
                <li>Situation-Behavior-Impact.</li>
                <li>Pendleton’s feedback process.</li>
              </ul>
              <li>Phrases and statements to use.</li>
              <li>Introduction and practical implementation of coaching models for:</li>
              <ul className="list-disc list-inside ml-6 leading-[20px]">
                <li>Understanding learning styles.</li>
                <li>Building rapport and trust.</li>
                <li>Setting smart objectives.</li>
                <li>
                  Giving immediate/on-the-job coaching - regular 1-2-1’s - performance
                  meetings.
                </li>
              </ul>
            </ul>

            <p className="text-center text-lg  font-bold  mt-20 leading-[20px]">
              “Thanks And Regards”
            </p>
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