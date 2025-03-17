
import React, { useState } from 'react';
import img3 from '../../assets/image 15.png'
import { CiSearch, CiCalendar, CiLocationOn, CiTimer } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import RecentService from './RecentService';
import { FaGreaterThan } from "react-icons/fa";
import Category from '../catagories/catagories';
import Contactus from '../contactus';



const Homepage = () => {
      const [activeTab, setActiveTab] = useState('onsite');
  return (
    <>
      <div>
              <div className=' relative w-full '>
                  <img className='w-full' src={img3} alt="" />
                  <ul className=' absolute inset-0 flex mt-8  space-x-5 text-white font-bold pl-18 text-2xl  '>
                      <li className='text-4xl'> <IoMdHome /></li>
                        <li >Home</li>
                         <li className='mt-2'><FaGreaterThan/></li>
                          <li>Service</li>
        
          </ul>
        <div className="absolute top-40 left-64 text-white ">
        
        
              <p className='text-white mt-20 font-extralight mb-4 text-xl'> Search for Service Provider Near you or remotely</p>
              <div className="absolute top-[100%]  left-64  transform -translate-x-1/2 w-[500px] bg-white  shadow-lg p-6 ">
       
        <div className="flex">
          <button
        onClick={() => setActiveTab('onsite')}
        className={`flex-1 py-2 font-semibold p-4 transition-all duration-300 ${
          activeTab === 'onsite'
            ? 'text-blue-500 bg-white border-b-4 border-blue-500'
            : 'text-white bg-gray-800'
        }`}
      >
        Search onsite services
      </button>
            <button
        onClick={() => setActiveTab('remote')}
        className={`flex-1 py-2 font-semibold rounded-tr-lg transition-all duration-300 ${
          activeTab === 'remote'
            ? 'text-blue-500 bg-white border-b-4 border-blue-500'
            : 'text-white bg-gray-800'
        }`}
      >
        Search remote services
      </button>
        </div>

     
        <div className="grid grid-cols-2 gap-4 mt-4">
        
          <div className="flex items-center border-b border-gray-300 py-2 gap-0.5">
            <span><CiSearch className='text-black' /></span>
            <input
              type="text"
              placeholder="Job title or keyword"
              className="outline-none flex-grow text-gray-700"
            />
          </div>

        
          <div className="flex items-center border-b border-gray-300 py-2">
                  <span> <CiLocationOn className='text-black' /></span>
                  <label className='text-black' htmlFor="country"> </label>
                  <select className='text-black text-sm' name="country" id="country">
                    <option value="">USA</option>
                    <option value="">China</option>
                    <option value="">Russia</option>   
            </select>

          </div>

        
          <div className="flex items-center border-b border-gray-300  gap-0.5 py-2">
            <span ><CiCalendar className='text-black '/></span>
            <input
              type="text"
              placeholder="Start Date"
              className="outline-none flex-grow text-gray-700"
            />
          </div>

       
          <div className="flex items-center border-b border-gray-300 gap-0.5 py-2">
            <span> <CiTimer  className='text-black'/></span>
            <input
              type="text"
              placeholder="Start Time"
              className="outline-none flex-grow text-gray-700"
            />
          </div>
        </div>

      
        <div className="mt-6">
          <button className="w-full py-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-700 transition">
            Search
          </button>
        </div>
      </div>
              </div>
        </div>
        </div>

     
        <RecentService />
      <Category />
    
    
          </>
       
      
  )
}

export default Homepage