import React from 'react'
import Navbar from '../components/Navbar'
import ChevronIconRight from '../assets/icons/ChevronIconRight'
import BannerImg from '../assets/images/banner-img.png'

const Header = () => {
  return (
    <>
    <Navbar/>
    <header className='flex flex-col  justify-center items-center space-y-3 h-100vh'>
        <div className="flex flex-row justify-center items-center space-x-1 w-2/4 rounded-full py-1 bg-[#F2F9EB] text-center">
                <p className='text-xs text-gray-font'>Get account of $59 </p>
                <i><ChevronIconRight classNamex="w-2 h-2"/></i>
            </div>
        <div>
        <div className='px-10'>
            <h1 className='text-2xl font-bold text-black-font text-center'>Manage the team everyone wants to be on</h1>
            <p className='text-gray-font text-sm  text-justify '>Simple platform that lets you master what great managers do best, as develop trust, collaborate, and drive team performance.</p>
            <div className='w-full py-2'>
                <form action="#" className='flex flex-col space-y-2'>
                    <input type="email" name="email" id="email" placeholder='name@yourcompany.com' className='w-full border-2 p-2 rounded-md placeholder:text-center placeholder:text-sm'/>
                    <button type='submit' className='w-full p-2 bg-purple-button rounded-md text-white hover:bg-purple-600'>Try it free</button>
                </form>
            </div>
        </div>
        </div>
        <div className='w-full'>
            <img src={BannerImg} alt="bannerimg" className='w-full'/>
        </div>
    </header>
    </>
  )
}

export default Header