import React from 'react'
import Section1 from './Section1'
const Navbar = () => {
  return (
    <div>
      <div className='bg-black h-14 w-full flex items-center justify-between p-6'>
        <div className='text-yellow-300 text-3xl font-extrabold uppercase hover:text-yellow-500'>
            <a href="">Digvijay</a>
        </div>
        <div className='text-white font-bold flex gap-20 pr-25'>
        <a id="navbar-tag" className='hover:text-yellow-300' href="Section1">Home</a>
        <a id="navbar-tag" className='hover:text-yellow-300' href="#about">About</a>
        <a id="navbar-tag" className='hover:text-yellow-300' href="#resume">Resume</a>
        <a id="navbar-tag" className='hover:text-yellow-300' href="#skills">Skills</a>
        <a id="navbar-tag" className='hover:text-yellow-300' href="#projects">Projects</a>
        <a id="navbar-tag" className='hover:text-yellow-300' href="#contacts">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
