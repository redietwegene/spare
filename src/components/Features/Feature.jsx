import React from 'react';
import Features from './FeaturesData';
import img2 from '../../assets/image 11.png'

const Feature = () => {
  return (
  <>
 
    <div className="max-w-6xl mx-auto py-10 mt-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14">
        {Features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col justify-center items-start text-start border-white shadow-xl rounded-xl  p-6 cursor-pointer transition-all duration-300
                       bg-white hover:bg-blue-500"
          >
            <feature.icon
              size={40}
              className="mb-4 text-icon group-hover:text-white transition-all duration-300"
            />
            <h3 className="font-bold text-md text-gray-800 group-hover:text-white transition-all duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 group-hover:text-white transition-all duration-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      </div>
      <div className='relative w-full overflow-hidden'>

        <div className='bg-cont pb-12 '>
          <div className='flex gap-12 pt-18  '>
            <img src={img2} alt="" />
            <div  className='mt-20 space-y-8'>
              <p className=' font-bold text-[45px] '>Your one-stop <br />Resource</p>
              <p className='font-figtree text-[13px] font-extralight'>At SpareWork ,we make it easy to explore a wide range of essential products and <br />
                services .Whether for your business or home.we help you find high-quality<br />
                solution that fit your lifestyle and budget</p>
              <button className='bg-spare text-white p-2 px-8'>JOIN</button>
            </div>
          </div>
          <div className='flex justify-around my-8'>
          <div className='space-y-4  p-4'>
            <p className='text-blue font-bold text-5xl'>10k+</p>
            <p className='font-bold text-2xl '>Clients worldwide</p>
            <p className='font-figtree text-sm'>At Sparework, we proudly serve clients<br/>
              across the globe. Our commitment to <br />
              excellence ensures tailored to your needs.</p>
          </div>
                   <div className='space-y-4  p-4'>
            <p className='text-blue font-bold text-5xl'>20k+</p>
            <p className='font-bold text-2xl'> Active resume</p>
            <p className='font-figtree text-sm'>Our platform is designed to make it easy<br />
              for you to discover and access the right<br />
              products and services</p>
          </div>
            <div className='space-y-4  p-4'>
            <p className='text-blue font-bold text-5xl'>18k+</p>
            <p className='font-bold text-2xl'>Companies</p>
            <p className='font-figtree text-sm'>At Sparework, we collaborate with leading <br />
              companies to provide you with top-quality <br />
              products and services.</p>
          </div>
          </div>

       <div className='absolute border-l-[3px] border-gray-300 left-[1250px] bottom-23 p-20  h-[800px] rotate-[55deg]'></div>
          <div className='absolute border-l-[3px] border-gray-300  p-100 right-10    rotate-[54deg]'></div>
          <div className='absolute border-l-3 border-gray-300 p-34 right-72  bottom-13 '></div>
          <div className='absolute border-l-3 border-gray-300 p-30 right-28  bottom-1 '></div>
       <div className='absolute border-l-[3px] border-gray-300 right-12 bottom-0 p-2 h-[700px] rotate-[55deg]'></div>

          

        </div> 
      </div>
       </>
  
  );
};

export default Feature;