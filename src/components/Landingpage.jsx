
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/image 14.png'
import { CiSearch, CiCalendar, CiLocationOn, CiTimer } from "react-icons/ci";
import Contactus from './contactus';
import Category from './catagories/catagories';
import Feature from './Features/Feature';
const Landingpage = () => {
      const [activeTab, setActiveTab] = useState('onsite');
  return (
      <> 
              <div className=' relative w-full '>
                  <img className='w-full' src={img1} alt="" />
        <ul className=' absolute inset-0 flex mt-8 gap-3 justify-center space-x-6 text-white font-bold  '>
                     <li className=' text-white'> Companion </li>
                     <Link to='/helper'> <li>Moving Helper</li></Link>
                      <Link to='/cleaning'> <li> Cleaning</li></Link>
                      <Link to='/itservices'> <li>Virtual Assitant</li> </Link>
                       <Link to='/business'><li> Career Advisors</li> </Link>
                      <Link to='/ride'> <li> Non-Medical Ride</li></Link>
                      <Link to='/graphics'> <li>Web Designer  </li></Link>
                      <li> More</li>
          </ul>
        <div className="absolute top-40 left-32 text-white ">
        <h3 className="text-4xl font-figtree leading-snug">
          Find the perfect product and <br />
          service for your business and <br />
          household
        </h3>
        <p className=" text-blue font-extralight  ">
          Your journey starts here
        </p>
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
              <Feature/>
              <Category/>
            
        
     
          </div>
          </>
       
      
  )
}

export default Landingpage