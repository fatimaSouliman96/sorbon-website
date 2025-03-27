import ClientsSlider from "../clientsSlider/ClientsSlider"


function ClientsSection() {
  return (
    <div className='w-full pt-8 bg-[#f0effa]  px-12 clients'>
            <h1 className='lg:text-2xl text-xl font-semibold text-secondary uppercase'>Organizations & Clients</h1>
            <p className='text-sm font-normal pt-2 text-secondary'>We earned their trust</p>
            <div className='pt-1'>
              <ClientsSlider />
            </div>
        </div>
  )
}

export default ClientsSection