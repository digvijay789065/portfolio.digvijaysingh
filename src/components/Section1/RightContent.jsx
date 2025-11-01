import React from 'react'

const RightContent = () => {
  return (
    <div>
      <div className='relative border-10 border-yellow-300 h-[70vh] w-[70vh] rounded-full overflow-hidden hover:border-yellow-700'>
        <div className='h-[70vh] w-[70vh] rounded-full flex items-center'>
          <img id='profile' src="https://www.dropbox.com/scl/fi/y6behnoajlfn1ag6qjttz/digvijay_profile.jpg?rlkey=1n932vr2u14t4k2oerkfigmnd&st=uos3yvub&dl=0" alt="profile" />
          <div className='absolute inset-0 bg-black/5 rounded-full h-[70vh] w-[70vh]'></div>
        </div>
      </div>
    </div>
  )
}

export default RightContent
