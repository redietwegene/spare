import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import img26 from '../../assets/image 26.png'
import img24 from '../../assets/image 24.png'
import Services from './Services';
import { FaGreaterThan } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const Business = () => {
    return (
         <>
        <div>
            <div className='relative w-full'>
            <img className='w-full object-cover' src={img26} alt='' />

            <ul className='absolute inset-0 flex mt-8 space-x-5 text-white font-bold pl-18 text-2xl md:text-2xl sm:text-base'>
                <li className='text-4xl sm:text-2xl'>
                <IoMdHome />
                </li>
                <Link to='/'>
                <li className='cursor-pointer'>Home</li>
                </Link>
                <li className='mt-2'>
                <FaGreaterThan />
                </li>
                <li>Business</li>
            </ul>

            <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 space-y-3 flex flex-col items-center text-white text-center px-4'>
                <p className='font-extralight text-2xl sm:text-xl'>
                Reliable and Stable Crews
                </p>
                <p className='text-6xl sm:text-4xl'>Business</p>
                <p className='font-extralight max-w-3xl sm:text-sm'>
                            Need an extra hand? Our helper services connect you with skilled
                            professionals for tasks like moving, organizing, and more.
                </p>
            </div>
            </div>
        </div>

        <div className='bg-cont p-6 overflow-hidden mb-19'>
            <div className='flex flex-col md:flex-row justify-around items-center m-10 md:m-32 relative gap-10'>
            <div className='relative'>
                <div className='border-1 border-blue rounded-2xl p-20 w-[300px] h-[320px]'></div>
                <img
                src={img24}
                className='absolute bottom-50 left-15 w-[150px] md:w-auto'
                alt=''
                />
                <p className='bg-white w-90 shadow-2xl p-8 absolute top-40 left-45 rounded-2xl max-w-sm text-sm sm:text-base'>
                Lorem ipsum dolor sit amet consectetur. Dignissim aliquam ornare
                leo fermentum vulputate quis. Eget tincidunt facilisi ullam eget
                maecenas nisi. Elementum dignissim enim massa aenean.
                </p>
            </div>

            <div className='p-11 pl-50 flex flex-col items-center md:items-start'>
                <p className='font-bold mb-4 text-3xl border-2 border-green-100 p-3 rounded-2xl w-[450px] sm:w-[300px] text-center md:text-left'>
                The Best help
                </p>

                <div className='border-2 border-green-100 p-4 rounded-2xl space-y-3 w-full sm:w-[300px]'>
                <span className='flex gap-2'>
                    <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1 rounded-full' />
                    <p>Our team professional and experienced.</p>
                </span>
                <span className='flex gap-2'>
                    <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1 rounded-full' />
                    <p>Quick and efficient service.</p>
                </span>
                <span className='flex gap-2'>
                    <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1 rounded-full' />
                    <p>100% satisfaction guaranteed.</p>
                </span>
                <span className='flex gap-2'>
                    <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1 rounded-full' />
                    <p>Quick and efficient service.</p>
                </span>
                <span className='flex gap-2'>
                    <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1 rounded-full' />
                    <p>100% satisfaction guaranteed.</p>
                </span>
                </div>

                {/* Decorative Lines (optional responsiveness) */}
                <div className='border-l-2 border-gray-200 p-12 bottom-96 right-65 absolute hidden lg:block'></div>
                <div className='border-l-2 border-gray-200 p-16 bottom-80 right-50 absolute rotate-45 hidden lg:block'></div>
                <div className='border-l-2 border-gray-200 p-9 top-100 right-68 absolute hidden lg:block'></div>
                <div className='border-l-2 border-gray-200 p-80 top-30 left-[1000px] absolute rotate-50 hidden lg:block'></div>
            </div>
            </div>
        </div>

        <Services />
        </>
    )
}

export default Business
