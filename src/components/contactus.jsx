import React from 'react'
import mapImg from '../assets/map.png'

const ContactUs = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='bg-footer text-white w-full md:w-fit text-center px-4 md:px-15 p-2 pb-[5%] mx-4 mt-3 mb-5'>
          <h1 className='text-4xl mb-5'>CONTACT US</h1>
          <form>
            <div className='flex flex-col gap-4 items-center'>
              <input type="text"
                placeholder='Phone No.'
                className='border border-white px-4 py-2 w-11/12 md:w-80' />
              <input type="text"
                placeholder='Email' className='border border-white px-4 py-2 w-11/12 md:w-80' />
              <textarea
                placeholder='Your message' className='border border-white px-4 py-2 w-11/12 md:w-80 h-24'></textarea>
              <button className='bg-white text-black p-2 rounded-md w-11/12 md:w-auto'>Send</button>
            </div>
          </form>
        </div>
        <div className='mt-4 md:mt-0'>
          <img src={mapImg} alt="" className='w-full max-w-md' />
        </div>
      </div>
    </>
  )
}

export default ContactUs;