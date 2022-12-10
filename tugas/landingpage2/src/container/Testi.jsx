import React from 'react'
import Testi1 from '../assets/images/user-img.png'

const Testi = () => {
  return (
    <section className='text-center px-4 space-y-4'>
        <div className='space-y-4'>
            <h2 className='font-bold text-lg '>Why customers love working with us</h2>
            <p>“It's amazing what has helped me learn about my team. I don't worry about blindspots anymore, and 1-on-1s have never been more productive. The team loves it.”</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={Testi1} alt="img" className='mb-3'/>
            <p className='font-bold'>Jorge Robertson</p>
            <p className='font-light text-sm'>CS at Google</p>
        </div>
    </section>
  )
}

export default Testi