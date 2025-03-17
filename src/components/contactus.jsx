import React from 'react'
import mapImg from '../assets/map.png'

const contactus = () => {
  return (
    <>
      <div className='flex'>
    <div className='bg-footer text-white w-fit text-center px-15 p-2 pb-[5%] ml-8 mt-3 mb-5  '>
          <h1 className='text-4xl mb-5'>CONTACT US</h1>
         <form className=''>
                  <div className='flex flex-col gap-8 items-center'>
                    <input type="text"
                          placeholder='Phone No.'
                      className='border-1 border-white px-7 py-2'/>
                   <input type="text"
                      placeholder='Email' className='border-1 border-white px-7 py-2' />
                  <textarea name="" id=""
                      placeholder='Your message' className='border-1 border-white px-9 py-2 relative'></textarea>
                  <button className='bg-white text-black  p-1  bottom-16 left-[325px]'>send</button>
                      
                  </div>
      </form>
        </div>
        <div>
        <img src={mapImg} alt="" />
      </div>
        </div>
       </>
  )
}

export default contactus
