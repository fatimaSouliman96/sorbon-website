import ClientsSlider from "../clientsSlider/ClientsSlider"


function ClientsSection() {
  return (
    <div className='w-full bg-[#f0effa] min-h-[70vh] px-12 py-8 clients'>
            <h1 className='text-4xl font-semibold text-secondary'>Organizations & Clients</h1>
            <p className='text-sm font-normal pt-2 text-secondary'>We earned their trust</p>
            <div className=' pt-6'>
              <ClientsSlider />
            </div>
        </div>
  )
}

export default ClientsSection