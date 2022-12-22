import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='h-16 w-full px-20 bg-red-500 flex justify-between items-center shadow-lg fixed z-10'>
        <div className="">
            <Link to='users'><span className='text-white'>Logo</span></Link>
        </div>
        <Link to='user/add' className='text-white'>Add User</Link>
    </nav>
  )
}

export default Navbar