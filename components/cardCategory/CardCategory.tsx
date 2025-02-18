import Image from "next/image";


export default function CardCategory() {
    return (
        <div className="relative h-[325px] rounded-lg " >
            <div className=" w-full h-full ">
                <Image className="rounded-lg" fill src={"/course.png"} alt="category" />
                <div className="absolute rounded-lg w-full h-full z-0 bg-[#17133FE5] top-0 left-0">

                </div>
            </div>
            <div className="absolute gap-28 w-full h-full z-1 top-[40%] left-[4%]  flex flex-col items-center" >
                <h1 className="text-sm text-center font-normal text-white" >Maintenance, Reliability and Rotating Equipment</h1>
                <div className="flex items-center justify-center gap-2 " >
                    <p className="text-base font-medium text-thirdy" >Explore</p>
                    <Image src={"/arrow-eylow.svg"} alt="arrow-eylow" width={6} height={12} />
                </div>
            </div>
        </div>
    )
}
