import React from 'react'
import ServiceData from './ServicesData'

const Services = () => {
  return (
      <>
           <div>
              <p className='ml-25 text-3xl font-figtree font-semibold '>Recent Service</p>
                  <div className='max-w-7xl mx-auto py-10 '>
                      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10'>
                          {ServiceData.map((data,index) => (
                          <div key={index}
                              className='group flex flex-col justify-center  items-start text-start border-white shadow-xl rounded-xl py-20 font-normal  p-10 space-y-3 '>
                              <data.icon className='text-blue text-6xl '/>
                              <p  className='font-bold text-2xl '> {data.title}</p>
                              <p className='text-sm'>{data.description}</p>
                            
                          </div>
                          ))}
                      </div>
                  </div>
             
          </div>
         
      </>
  )
}

export default Services
