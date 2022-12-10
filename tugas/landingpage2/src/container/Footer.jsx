import React from 'react'
import GPlay from '../assets/images/google-play-badge-black.png'
import AStore from '../assets/images/app-store-badge-black.png'
import FooterSlide from '../components/FooterSlide'

const Footer = () => {
  return (
    <footer className='bg-[#1D2830] p-4 space-y-4'>
        <div className="w-full space-y-4">
            <FooterSlide nm='Company' />
            <FooterSlide nm='Support' />
            <FooterSlide nm='Legal' />
        </div>
        <div className="text-left space-y-4">
            <h3 className='text-white'>Install App</h3>
            <img src={GPlay} alt="" />
            <img src={AStore} alt="" />
        </div>
        
    </footer>
  )
}

export default Footer