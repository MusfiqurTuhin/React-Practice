import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='max-w-[1680px] mx-auto flex justify-between items-center p-4'> 
    {/* Left side of the Navbar */}
    <div className='flex items-center'>
      <div className='cursor-pointer'>
        <AiOutlineMenu size={30} />   
      </div>
      <h1 className='text 2xl sm: text-3xl lg:text-4xl px-2'>
        Recycle <span className='font-bold'>Smart</span>
      </h1>
      <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text=[14px]'>
        <p>Sell Request</p>
        <p>Buy Request</p>
      </div>
    </div>
    </div>
  )
}

export default Navbar
