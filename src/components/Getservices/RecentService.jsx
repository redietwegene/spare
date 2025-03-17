import React from 'react';
import img4 from '../../assets/image 21.png';
import img5 from '../../assets/Group 45.png';
import img6 from '../../assets/Group 46.png';
import { IoMdCheckmark } from "react-icons/io";
import RecentData from './RecentserviceData';

const RecentService = () => {
  return (
    <>
      {/* First Section */}
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:justify-around m-10 md:m-20 relative'>
        
        {/* Images */}
        <div className='relative'>
          <img src={img4} className='rounded-3xl w-full max-w-md md:max-w-lg lg:max-w-none' />

          <img
            src={img5}
            className='absolute left-87 top-40 md:top-80 right-10 md:right-40 bg-white p-2 rounded-2xl w-16 md:w-auto'
          />

          <img
            src={img6}
            className='absolute  top-10 md:top-20 right-90 bg-white p-2 rounded-2xl w-16 md:w-auto'
          />
        </div>

        {/* Text Content */}
        <div className='space-y-4 font-figtree px-5 md:px-0'>
          <h1 className='font-bold text-2xl md:text-4xl'>
            Find the perfect product and <br /> services for you
          </h1>

          <p className='text-sm md:text-base'>
            Lorem ipsum dolor sit amet, consectetur dipiscing <br />
            elit eius mod tempor incididunt ut labore
          </p>

          <div className='space-y-3'>
            <span className='flex text-lg md:text-2xl gap-3 font-semibold'>
              <IoMdCheckmark className='text-blue bg-blue-100 rounded-full m-1 p-1' />
              <p>We are Committed</p>
            </span>
            <p className='pl-8 md:pl-12 text-sm md:text-base'>
              Lorem ipsum dolor sit amet, consectetur<br />
              dipiscing elit eiusmod tempor incididunt
            </p>
          </div>

          <div className='space-y-3'>
            <span className='flex text-lg md:text-2xl gap-3 font-semibold'>
              <IoMdCheckmark className='text-blue bg-blue-100 rounded-full m-1 p-1' />
              <p>Trusted Professionals</p>
            </span>
            <p className='pl-8 md:pl-12 text-sm md:text-base'>
              Lorem ipsum dolor sit amet, consectetur<br />
              dipiscing elit eiusmod tempor incididunt
            </p>
          </div>

          <div className='space-y-3'>
            <span className='flex text-lg md:text-2xl gap-3 font-semibold'>
              <IoMdCheckmark className='text-blue bg-blue-100 rounded-full m-1 p-1' />
              <p>Highly Rated</p>
            </span>
            <p className='pl-8 md:pl-12 text-sm md:text-base'>
              Lorem ipsum dolor sit amet, consectetur<br />
              dipiscing elit eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>

      {/* Recent Services Section */}
      <div className='px-5 md:px-0'>
        <p className='ml-0 md:ml-40 text-2xl md:text-3xl font-figtree font-semibold mb-4'>
          Recent Service
        </p>

        <div className='max-w-6xl mx-auto py-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14'>
            {RecentData.map((recentD, index) => (
              <div
                key={index}
                className='group flex flex-col justify-center items-start text-start border-white rounded-xl p-6 md:p-8 space-y-3'
              >
                <img src={recentD.image} alt="" />
                <p className='font-semibold text-base md:text-lg'>{recentD.title}</p>
                <p className='text-sm'>{recentD.description}</p>
                <p className='text-blue text-lg md:text-xl'>{recentD.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentService;
