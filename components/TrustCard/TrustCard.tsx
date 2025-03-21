
interface TrustCardProps {
  index: number,
  length: number
}

const TrustCard: React.FC<TrustCardProps> = ({index, length}) => {
  return (
    <div className='flex flex-col item-center justify-center' >
        <div className={`${index == 0 ? "rounded-tl-lg rounded-bl-lg rounded-l-[4px]" : index == length -1 ? "rounded-tr-lg rounded-br-lg rounded-l-[4px]" : "rounded-[4px]" } bg-gradient-to-r h-[70px] from-[#322A8DD9] to-[#322A8D] flex w-full  items-center text-white justify-center backdrop-blur-[11.2px] shadow-[inset_-4.2px_2.8px_2.8px_0px_rgba(18,14,63,0.25)]`}>
            <p className='text-2xl text-white font-medium'>+19800</p>
        </div>
        <p className='text-lg text-center pt-4 font-medium text-secondary'>Experience</p>
    </div>
  )
}

export default TrustCard