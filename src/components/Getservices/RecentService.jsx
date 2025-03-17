import React from 'react'
import img4 from '../../assets/image 21.png'
import img5 from '../../assets/Group 45.png'
import img6 from '../../assets/Group 46.png'
import { IoMdCheckmark } from "react-icons/io";
import RecentData from './RecentserviceData';


const RecentService = () => {
  return (
      <>
          <div className='flex justify-around m-20 mt-30 relative'>
              <div className>
                  <img src={img4} className='rounded-3xl' />
                  <img src={img5} className='absolute top-80 right-170 bg-white p-2 rounded-2xl' />
                  <img src={img6} className='absolute top-20 left-0 bg-white p-2 rounded-2xl'/>
              </div>
              <div className='space-y-4 font-figtree '>
                 <h1 className='font-figtree font-bold text-4xl'>Find the perfect product and <br/> services for you</h1>
                  <p> Lorem ipsum dolor sit amet, consectetur dipiscing <br />
                      elit eius mod tempor incididunt ut labore </p>
                  <div className='space-y-3'>
                      <span className='flex text-2xl gap-3 font-semibold '> <IoMdCheckmark className='text-blue bg-blue-100 rounded-full m-1 p-1 ' /> <p>we are Committed</p></span>
                      <p className='pl-12'>Lorem ipsum dolor sit amet, consectetur<br />
                          dipiscing elit eiusmod tempor incididunt </p>
                  </div>
                                   <div className='space-y-3'>
                      <span className='flex text-2xl gap-3 font-semibold '> <IoMdCheckmark className='text-blue bg-blue-100 rounded-full m-1 p-1 ' /> <p>Trusted Professionals</p></span>
                      <p className='pl-12'>Lorem ipsum dolor sit amet, consectetur<br />
                          dipiscing elit eiusmod tempor incididunt </p>
                  </div>
                                    <div className='space-y-3'>
                      <span className='flex text-2xl gap-3 font-semibold '> <IoMdCheckmark className='text-blue bg-blue-100 rounded-full m-1 p-1 ' /> <p>Highly Rated </p></span>
                      <p className='pl-12'>Lorem ipsum dolor sit amet, consectetur<br />
                          dipiscing elit eiusmod tempor incididunt </p>
                  </div>
                  
                  <p></p>
              </div>
          </div>
          <div>
              <p className='ml-45 text-3xl font-figtree font-semibold '>Recent Service</p>
                  <div className='max-w-6xl mx-auto py-10 '>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14'>
                          {RecentData.map((recentD,index) => (
                          <div key={index}
                              className='group flex flex-col justify-center  items-start text-start border-white  rounded-xl  p-8 space-y-3 '>
                              <img src={recentD.image} alt="" />
                              <p  className='font-semibold '> {recentD.title}</p>
                              <p className='text-sm'>{recentD.description}</p>
                              <p className='text-blue text-xl'>{recentD.price}</p>
                          </div>
                          ))}
                      </div>
                  </div>
             
          </div>
      </> 
  )
}

export default RecentService
