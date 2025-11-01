import React from 'react'

const RightContent = () => {
  return (
    <div>
      <div className='relative border-10 border-yellow-300 h-[70vh] w-[70vh] rounded-full overflow-hidden hover:border-yellow-700'>
        <div className='h-[70vh] w-[70vh] rounded-full flex items-center'>
          <img id="profile" src="https://dl.dropboxusercontent.com/scl/fi/your_link_here?rlkey=xyz&st=abc" alt="profile" />
          <div className='absolute inset-0 bg-black/5 rounded-full h-[70vh] w-[70vh]'></div>
        </div>
      </div>
    </div>
  )
}

export default RightContent
