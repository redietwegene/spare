import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/image 14.png';
import { CiSearch, CiCalendar, CiLocationOn, CiTimer } from "react-icons/ci";
import Category from './catagories/catagories';
import Feature from './Features/Feature';
import img3 from '../assets/image 15.png';
import img25 from '../assets/image 25.png'; 
import img26 from '../assets/image 26.png';
import img27 from '../assets/image 27.png';
import img10 from '../assets/image 16.png';

const Landingpage = () => {
  const [activeTab, setActiveTab] = useState('onsite');
  const images = [img1, img25, img3, img26, img27, img10];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); 
      }, 500); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      
      <div className='relative w-full'>
             <img
            className={`w-full  object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-90'}`}
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
        />
        </div>
        <ul className='absolute inset-0 flex flex-wrap justify-center gap-3 md:mt-8 space-x-6 text-white font-bold text-xs md:text-base'>
          <li className='text-white'>Companion</li>
          <Link to='/helper'><li>Moving Helper</li></Link>
          <Link to='/cleaning'><li>Cleaning</li></Link>
          <Link to='/itservices'><li>Virtual Assistant</li></Link>
          <Link to='/business'><li>Career Advisors</li></Link>
          <Link to='/ride'><li>Non-Medical Ride</li></Link>
          <Link to='/graphics'><li>Web Designer</li></Link>
          <li>More</li>
        </ul>

       
        <div className="absolute top-20 md:top-40 left-4 md:left-32 text-white px-4 md:px-0">
          <h3 className="text-2xl md:text-4xl font-figtree leading-snug">
            Find the perfect product and <br />
            service for your business and <br />
            household
          </h3>
          <p className="text-blue font-extralight mt-2">
            Your journey starts here
          </p>
          <p className='text-white mt-8 md:mt-20 font-extralight mb-4 text-lg md:text-xl'>
            Search for Service Provider Near you or remotely
          </p>

          <div className="relative md:absolute top-full md:top-[100%] left-1/2 md:left-64 transform md:-translate-x-1/2 w-full md:w-[500px] bg-white shadow-lg p-6 mt-6 md:mt-0">
          
            <div className="flex flex-col md:flex-row">
              <button
                onClick={() => setActiveTab('onsite')}
                className={`flex-1 py-2 font-semibold p-4 transition-all duration-300 text-sm md:text-base ${
                  activeTab === 'onsite'
                    ? 'text-blue-500 bg-white border-b-4 border-blue-500'
                    : 'text-white bg-gray-800'
                }`}
              >
                Search onsite services
              </button>
              <button
                onClick={() => setActiveTab('remote')}
                className={`flex-1 py-2 font-semibold rounded-tr-lg transition-all duration-300 text-sm md:text-base ${
                  activeTab === 'remote'
                    ? 'text-blue-500 bg-white border-b-4 border-blue-500'
                    : 'text-white bg-gray-800'
                }`}
              >
                Search remote services
              </button>
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center border-b border-gray-300 py-2 gap-2">
                <span><CiSearch className='text-black' /></span>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="outline-none flex-grow text-gray-700 text-xs md:text-sm"
                />
              </div>

              <div className="flex items-center border-b border-gray-300 py-2 gap-2">
                <span><CiLocationOn className='text-black' /></span>
                <label className='text-black' htmlFor="country"></label>
                <select
                  className='text-black text-xs md:text-sm flex-grow bg-transparent outline-none'
                  name="country"
                  id="country"
                >
                  <option value="">USA</option>
                  <option value="">China</option>
                  <option value="">Russia</option>
                </select>
              </div>

              <div className="flex items-center border-b border-gray-300 gap-2 py-2">
                <span><CiCalendar className='text-black' /></span>
                <input
                  type="text"
                  placeholder="Start Date"
                  className="outline-none flex-grow text-gray-700 text-xs md:text-sm"
                />
              </div>

              <div className="flex items-center border-b border-gray-300 gap-2 py-2">
                <span><CiTimer className='text-black' /></span>
                <input
                  type="text"
                  placeholder="Start Time"
                  className="outline-none flex-grow text-gray-700 text-xs md:text-sm"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6">
              <button className="w-full py-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-700 transition text-sm md:text-base">
                Search
              </button>
            </div>
          </div>
        </div>

        <Feature />
        <Category />
     
    </>
  );
}

export default Landingpage;
