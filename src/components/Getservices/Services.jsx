import React from 'react'
import ServiceData from './ServicesData'

const Services = () => {
  return (
      <>
           <div>
              <p className='ml-4 sm:ml-10 text-3xl font-figtree font-semibold'>Recent Service</p>
                  <div className='max-w-7xl mx-auto py-10'>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-8  lg:grid-cols-4 gap-6 sm:gap-10'>
                          {ServiceData.map((data, index) => (
                          <div key={index}
                              className='group flex flex-col justify-center items-start text-start border-white shadow-xl rounded-xl py-10 px-6 sm:py-20 sm:px-10 font-normal space-y-3'>
                              <data.icon className='text-blue-500 text-5xl sm:text-6xl'/>
                              <p className='font-bold text-xl sm:text-2xl'>{data.title}</p>
                              <p className='text-xs sm:text-sm'>{data.description}</p>
                          </div>
                          ))}
                      </div>
                  </div>
             
          </div>
         
      </>
  )
}

export default Services