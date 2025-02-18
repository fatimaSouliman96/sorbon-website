import React from 'react'

export default function TrustCard() {
  return (
    <div className='flex flex-col item-center justify-center' >
        <div className="flex w-full h-[140px] rounded-[11px] bg-[#E2E0F5] items-center justify-center  backdrop-blur-[11.2px] shadow-[inset_-4.2px_2.8px_2.8px_0px_rgba(18,14,63,0.25)]">
            <p className='text-2xl text-secondary font-medium' >+19800</p>
        </div>
        <p className='text-xl text-center pt-4 font-normal text-secondary'>Experience</p>
    </div>
  )
}
