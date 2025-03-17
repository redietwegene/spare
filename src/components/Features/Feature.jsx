import React from 'react';
import Features from './FeaturesData';
import img2 from '../../assets/image 11.png';

const Feature = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto py-10 mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
          {Features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col justify-center items-start text-start border-white shadow-xl rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 bg-white hover:bg-blue-500"
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

      <div className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="bg-cont pb-12">
          <div className="flex flex-col lg:flex-row gap-12 pt-10 items-center">
            <img
              src={img2}
              alt=""
              className="w-full max-w-md lg:max-w-xl object-cover"
            />
            <div className="mt-10 lg:mt-20 space-y-6 text-center lg:text-left">
              <p className="font-bold text-[30px] sm:text-[36px] lg:text-[45px] leading-tight">
                Your one-stop <br /> Resource
              </p>
              <p className="font-figtree text-[14px] sm:text-[15px] font-extralight leading-relaxed">
                At SpareWork, we make it easy to explore a wide range of essential products and <br className="hidden lg:block" />
                services. Whether for your business or home, we help you find high-quality <br className="hidden lg:block" />
                solutions that fit your lifestyle and budget.
              </p>
              <button className="bg-spare text-white py-2 px-6 rounded-md">
                JOIN
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-center my-12 gap-10 md:gap-0">
            <div className="space-y-4 p-4 text-center md:text-left">
              <p className="text-blue font-bold text-5xl">10k+</p>
              <p className="font-bold text-2xl">Clients worldwide</p>
              <p className="font-figtree text-sm leading-relaxed">
                At Sparework, we proudly serve clients <br className="hidden md:block" />
                across the globe. Our commitment to <br className="hidden md:block" />
                excellence ensures tailored to your needs.
              </p>
            </div>

            <div className="space-y-4 p-4 text-center md:text-left">
              <p className="text-blue font-bold text-5xl">20k+</p>
              <p className="font-bold text-2xl">Active resume</p>
              <p className="font-figtree text-sm leading-relaxed">
                Our platform is designed to make it easy <br className="hidden md:block" />
                for you to discover and access the right <br className="hidden md:block" />
                products and services.
              </p>
            </div>

            <div className="space-y-4 p-4 text-center md:text-left">
              <p className="text-blue font-bold text-5xl">18k+</p>
              <p className="font-bold text-2xl">Companies</p>
              <p className="font-figtree text-sm leading-relaxed">
                At Sparework, we collaborate with leading <br className="hidden md:block" />
                companies to provide you with top-quality <br className="hidden md:block" />
                products and services.
              </p>
            </div>
          </div>

          {/* Decorative Lines */}
          <div className="hidden lg:block absolute border-l-[3px] border-gray-200 left-[1250px] bottom-23 p-20 h-[800px] rotate-[55deg]"></div>
          <div className="hidden lg:block absolute border-l-[3px] border-gray-200 p-100 right-10 rotate-[54deg]"></div>
          <div className="hidden lg:block absolute border-l-3 border-gray-200 p-34 right-72 bottom-13"></div>
          <div className="hidden lg:block absolute border-l-3 border-gray-200 p-30 right-28 bottom-1"></div>
          <div className="hidden lg:block absolute border-l-[3px] border-gray-200 right-12 bottom-0 p-2 h-[700px] rotate-[55deg]"></div>
        </div>
      </div>
    </>
  );
};

export default Feature;
