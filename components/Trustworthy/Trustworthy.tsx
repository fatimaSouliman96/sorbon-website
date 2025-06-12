import React from 'react'
import TrustCard from '../TrustCard/TrustCard'


const Trustworthy = () => {

  return (
    <div className='w-full px-12 pb-4 pt-8 bg-[#f0effa]' >
      <h1 className='lg:text-2xl text-xl  font-semibold text-secondary uppercase'>
        Trustworthy verified in numbers
      </h1>
      <p className='text-sm font-normal pt-2 text-secondary'>
        A quick overview about our history and present standing in training and consulting.
      </p>
      <div className='433max:grid-cols-1 585max:grid-cols-2 721max:grid-cols-3 913max:grid-cols-4 grid-cols-1 914min:grid-cols-6 grid  gap-10 w-full pt-8'>
        <TrustCard title={'Years of experience'} num='27' index={0} length={6} />
        <TrustCard title={'Participants'} num='19800' index={1} length={6} />
        <TrustCard title={'Clients'} num='380' index={2} length={6} />
        <TrustCard title={'Associations'} num='6' index={3} length={6} />
        <TrustCard title={'Countries Served'} num='41' index={4} length={6} />
        <TrustCard title={'Courses'} num='3048' index={5} length={6} />
      </div>
    </div>
  )
}
export default Trustworthy