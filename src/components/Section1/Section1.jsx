import React from 'react'
import Navbar from './Navbar'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Section1 = () => {
  return (
    <div className='bg-black h-screen w-full'>
      <Navbar />
      <div className='px-45 py-20 flex'>
        <LeftContent />
        <RightContent />
      </div>

    </div>
  )
}

export default Section1
