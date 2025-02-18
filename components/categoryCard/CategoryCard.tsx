import Image from "next/image";

export default function CategoryCard() {
    return (
        <div className='flex flex-col items-center gap-4 py-4 border border-[#FFFFFF1A] rounded-lg ' >
            <div className='w-[100px] h-[100px] p-4  rounded-lg bg-[#E2E0F5] flex items-center justify-center'>
                <div className='w-[80px] h-[80px] relative '>
                    <Image src="/exploer.svg" fill alt="explore" />
                </div>
            </div>
            <h1 className='text-white leading-8 text-center text-base font-medium' >Accounting, Finance and Budgeting Training</h1>
            <a className='text-thirdy flex pt-4 items-center gap-4 text-lg font-medium' >Learn More <Image width={6} height={12} src="/arrow-eylow.svg" alt="arrow" /> </a>
        </div>
    )
}
