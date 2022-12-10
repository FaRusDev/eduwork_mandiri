import React from 'react'
import GooglePlay from '../assets/images/google-play-badge-white.png'
import AppStore from '../assets/images/app-store-badge-black.png'


const Download = () => {
  return (
    <section className='text-center p-4 bg-purple-button flex flex-col justify-center items-center space-y-4'>
        <h2 className='text-2xl text-white font-semibold'>84% of employees who use trust their direct manager</h2>
        <img src={GooglePlay} alt="" />
        <img src={AppStore} alt="" />
    </section>
  )
}

export default Download