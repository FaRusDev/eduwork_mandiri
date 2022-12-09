import React from 'react'
import Logo from '../assets/images/logo.png'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full  px-4 mb-3'>
        <div className="nav-logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className=" flex flex-col items-center justify-center space-y-1 py-3">
            <div className="p-[1.5px] bg-black-font w-2/4 rounded" />
            <div className="p-[1.5px] bg-black-font w-3/4 rounded" />
            <div className="p-[1.5px] bg-black-font w-2/4 rounded" />
            <p className='px-[2px] text-xs font-inter text-gray-font text-center uppercase'>Menu</p>
        </div>
    </nav>
  )
}

export default Navbar