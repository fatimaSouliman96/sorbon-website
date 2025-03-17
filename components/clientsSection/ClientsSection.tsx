import ClientsSlider from "../clientsSlider/ClientsSlider"


function ClientsSection() {
  return (
    <div className='w-full bg-[#f0effa] min-h-[50vh] px-12 py-4 clients'>
            <h1 className='lg:text-4xl text-3xl font-semibold text-secondary'>Organizations & Clients</h1>
            <p className='text-sm font-normal pt-2 text-secondary'>We earned their trust</p>
            <div className='pt-1'>
              <ClientsSlider />
            </div>
        </div>
  )
}

export default ClientsSection