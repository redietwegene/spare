import React from 'react';
import categories from './catagoriesData';

const Category = () => {
return (
    <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className='text-black font-epilogue text-3xl mb-8'>Explore the Marketplace</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-col justify-center items-start text-start border-1 border-gray-300  p-6 cursor-pointer transition-all duration-300
                       bg-white hover:bg-blue-500"
          >
            <category.icon
              size={40}
              className="mb-4 text-icon group-hover:text-white transition-all duration-300"
            />
            <h3 className="font-bold text-md text-gray-800 group-hover:text-white transition-all duration-300">
              {category.title}
            </h3>
            <p className="text-sm text-gray-500 group-hover:text-white transition-all duration-300">
              {category.jobs}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
