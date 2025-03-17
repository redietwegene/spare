import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import img12 from '../../assets/image 22.png'
import img11 from '../../assets/image_02 1.png'
import Services from './Services';
import { FaGreaterThan } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const Cleaning = () => {
    return (
        <>
            <div>
                <div className='relative w-full'>
                    <img className='w-full' src={img11} alt="" />
                    <ul className='absolute inset-0 flex mt-8 space-x-5 text-white font-bold pl-4 md:pl-18 text-xl md:text-2xl'>
                        <li className='text-3xl'><IoMdHome /></li>
                        <Link to='/'> <li>Home</li></Link>
                        <li className='mt-2'><FaGreaterThan /></li>
                        <li>Cleaning</li>
                    </ul>
                    <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 space-y-3 flex flex-col items-center text-white'>
                        <p className='font-extralight text-lg md:text-2xl'>Reliable and Stable Crews</p>
                        <p className='text-4xl md:text-6xl'>Cleaning</p>
                        <p className='font-extralight text-sm md:text-base text-center'>Keep your spaces spotless with our professional cleaning services.
                            From homes to offices, we ensure a pristine and healthy environment.</p>
                    </div>
                </div>
            </div>
                    <div className='bg-cont p-6 overflow-hidden mb-19'>
                        <div className='flex flex-col md:flex-row justify-around items-center m-10 md:m-32 relative gap-10'>
                        <div className='relative'>
                            <div className='border-1 border-blue rounded-2xl p-20 w-[300px] h-[320px]'></div>
                            <img
                            src={img12}
                            className='absolute bottom-50 left-15 w-[150px] md:w-auto'
                            alt=''
                            />
                            <p className='bg-white w-90 shadow-2xl p-8 absolute top-40 left-45 rounded-2xl max-w-sm text-sm sm:text-base'>
                            Lorem ipsum dolor sit amet consectetur. Dignissim aliquam ornare
                            leo fermentum vulputate quis. Eget tincidunt facilisi ullam eget
                            maecenas nisi. Elementum dignissim enim massa aenean.
                            </p>
                        </div>
                    <div className='p-4 md:p-11 pl-4 md:pl-50'>
                        <p className='font-bold mb-4 text-2xl md:text-3xl border-2 border-green-100 p-2 md:p-3 rounded-2xl w-full max-w-[450px]'>
                            The Best Help
                        </p>
                        <div className='border-2 border-green-100 p-4 rounded-2xl'>
                            <span className='flex gap-2'> <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1' /> <p className='text-sm md:text-base'>Our team professional and experienced.</p></span>
                            <span className='flex gap-2'> <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1' /> <p className='text-sm md:text-base'>Quick and efficient service.</p></span>
                            <span className='flex gap-2'> <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1' /> <p className='text-sm md:text-base'>100% satisfaction guaranteed.</p></span>
                            <span className='flex gap-2'> <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1' /> <p className='text-sm md:text-base'>Quick and efficient service.</p></span>
                            <span className='flex gap-2'> <IoMdCheckmark className='text-blue bg-blue-100 m-1 p-1' /> <p className='text-sm md:text-base'>100% satisfaction guaranteed.</p></span>
                        </div>
                        <div className='border-l-2 border-gray-200 p-12 bottom-96 right-65 absolute hidden md:block'></div>
                        <div className='border-l-2 border-gray-200 p-16 bottom-80 right-50 absolute rotate-45 hidden md:block'></div>
                        <div className='border-l-2 border-gray-200 p-9 top-100 right-68 absolute hidden md:block'></div>
                        <div className='border-l-2 border-gray-200 p-80 top-30 left-[1000px] absolute rotate-50 hidden md:block'></div>
                    </div>
                </div>
            </div>
            <Services />
        </>
    )
}

export default Cleaning