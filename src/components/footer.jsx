import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTiktok,FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
      <>
          <div className='bg-footer font-extralight text-white'>
          <div  className=' flex justify-around p-24 '>
              <div className='font-semibold mt-3 text-2xl'>
                  <p>SpareWork</p>
              </div>
              <div className='font-extralight' >
                  <p  className='mb-5 font-semibold'>Links</p>
                  <ul  className='space-y-3'>
                      
                         <li ><Link to='/getservice'> Get Service/Talent </Link> </li>
                          <li><Link to='/yourservice'> List your services </Link> </li>
                          <li><Link to='/whyspare'> Why SpareWork </Link> </li>
                          <li><Link to='/resource'>  Resource </Link> </li>
                      </ul>
              </div>
              <div>
                  <p className='mb-5 font-semibold'>Company</p>
                  <ul className='space-y-3'>
                  <li>About Sparework</li>
                  <li>Term of Service</li>
                  <li>Privacy Policy</li>
                  <li>Partnerships</li>
                      
                  </ul>
             

              </div>
              <div>
                  <p className='mb-5 font-semibold'>Contact Us</p>
                  <ul className='space-y-3'>
                   <li>+1-804-300-8808</li>
                  <li>Richmond City, Virginia, USA (23219)</li>
                  <li>info@sparework.com</li>
                      
                  </ul>
                 
              </div>

          </div>
              <div className='ml-24 mr-24'>
                  <div className="border-t border-gray-400 my-4 "></div>
              <div className='text-gray-400 flex justify-between'>
                      <p className='text-gray-400'>@ 2025 SpareWork. All rights reserved</p>
                      <div className='flex gap-5  rounded-4xl text-white '>
                      <a className='bg-gray-700 p-3 rounded-4xl'><FaFacebookF /></a>
                      <a className='bg-gray-700 p-3 rounded-4xl'><FaInstagram /></a> 
                      <a className='bg-gray-700 p-3 rounded-4xl'><FaTiktok /></a>
                      <a className='bg-gray-700 p-3 rounded-4xl'><FaLinkedinIn /></a>
                      <a className='bg-gray-700 p-3 rounded-4xl'><FaTwitter /></a>
                          
                      </div>
                    
                  </div>

              </div>
              </div>
      </>
  )
}

export default Footer
