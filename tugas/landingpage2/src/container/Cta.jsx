import React from 'react'
import Tbl from '../assets/images/table-img.png'

const Cta = () => {
  return (
    <section className='text-center space-y-3 px-4'>

        <div className="w-full text-center">
            <img className='w-full' src={Tbl} alt="tbl" />
        </div>

        <div className="w-full space-y-5" >
            <h2 className='font-bold text-lg '>We work how you work everyday</h2>
            <p>Since the easiest things to use actually get used, we adapts to the way your team works – not the other way around.</p>
            <button className='p-2 rounded-md w-full bg-purple-button text-white hover:bg-purple-second hover:text-purple-button'>Get started free</button>
        </div>
    
    </section>
  )
}

export default Cta