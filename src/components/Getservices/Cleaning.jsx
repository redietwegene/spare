import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import img12 from '../../assets/image 22.png'
import img11 from '../../assets/image_02 1.png'
import Services from './Services';
import { FaGreaterThan } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';


const Cleaning = () => {
    return (
        <>
             <div>
                   <div className=' relative w-full '>
                   <img className='w-full' src={img11} alt="" />
                    <ul className=' absolute inset-0 flex mt-8  space-x-5 text-white font-bold pl-18 text-2xl  '>
                       <li className='text-4xl'> <IoMdHome /></li>
                         <Link to ='/'> <li >Home</li></Link>
                        <li className='mt-2'><FaGreaterThan/></li>
                        <li>Cleaning</li>
                    
                    </ul>
                    <div className='absolute top-50 left-50 space-y-3 flex flex-col items-center text-white '>
                        <p className='font-extralight text-2xl '>Reliable and Stable Crews</p>
                        <p className='text-6xl'>Cleaning</p>
                        <p className='font-extralight '>Keep your spaces spotless with our professional cleaning services.
                            From homes to offices, we ensure a pristine and healthy environment.</p>

                    </div>
                    </div>

                    </div>
      <div className='bg-cont p-6  overflow-hidden mb-19'>
          <div className=' flex justify-around m-32  relative'>
              <div className=''>
                  <div className='border-1 border-blue  rounded-2xl p-20 w-[300px] h-[320px] ml'></div>
                  <img  src={img12}  className='absolute bottom-50 left-35 '/>
                  <p className='bg-white w-90 shadow-2xl p-8 absolute top-40 left-45 rounded-2xl  '>
                      Lorem ipsum dolor sit amet consectetur. Dignissim
                      aliquam ornare leo fermentum vulputate quis. Eget
                      tincidunt facilisi ullam eget maecenas nisi.
                      Elementum dignissim enim massa aenean.</p>
              </div>
              <div className='p-11 pl-50'>
                  <p className='font-bold mb-4 text-3xl border-2 border-green-100 p-3 rounded-2xl w-[450px]'>
                      The Best help 
                  </p>
                  <div className='border-2 border-green-100 p-4 rounded-2xl'>
                      <span className='flex gap-2 '> <IoMdCheckmark className='text-blue bg-blue-100  m-1 p-1 ' /> <p>Our team professional and experienced.</p></span>
                      <span className='flex gap-2  '> <IoMdCheckmark className='text-blue bg-blue-100  m-1 p-1 ' /> <p>Quick and efficient service.</p></span>
                       <span className='flex gap-2 '> <IoMdCheckmark className='text-blue bg-blue-100  m-1 p-1 ' /> <p>100% satisfaction guaranteed.</p></span>
                      <span className='flex gap-2   '> <IoMdCheckmark className='text-blue bg-blue-100  m-1 p-1 ' /> <p>Quick and efficient service.</p></span>
                        <span className='flex gap-2 '> <IoMdCheckmark className='text-blue bg-blue-100  m-1 p-1 ' /> <p>100% satisfaction guaranteed.</p></span>
                  </div> 
                     <div className='border-l-2 border-gray-200 p-12 bottom-96 right-65 absolute '> </div>
                     <div className='border-l-2 border-gray-200 p-16 bottom-80 right-50 absolute rotate-45 '> </div>

                     <div className='border-l-2 border-gray-200 p-9 top-100 right-68 absolute '> </div>
                     <div className='border-l-2 border-gray-200 p-80 top-30 left-[1000px] absolute rotate-50 '> </div>
              </div>
          </div>
            </div>
            <Services />
            
            
            </>
  )




}

export default Cleaning
