import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Section2 = () => {
  return (
    <div className='bg-black h-screen w-full flex justify-between px-20'>
      <div className='text-yellow-300 text-6xl font-bold hover:text-yellow-500 py-45'>
        <h4>About Me</h4>
      </div>
      <div className='text-xl flex items-center flex-col justify-center p-10'>
        <p className= 'px-50'>I’m Digvijay Singh, a MERN stack and AI developer passionate about building smart, user-friendly digital experiences. Currently pursuing B.Tech CSE at AKTU.</p>
        <div className='flex flex-col gap-20 h-[70vh] w-[70vh] justify-center'>
            <div className='flex justify-between'>
            <i className="ri-html5-line text-5xl h-25 w-40 rounded-xl text-yellow-300 flex flex-col justify-center items-center"><h4 className='text-xl font-bold'>HTML</h4></i>
            <i className="ri-css3-line text-5xl  h-25 w-40 rounded-xl text-yellow-300 flex flex-col justify-center items-center"><h4 className='text-xl font-bold'>CSS</h4></i>
            <i className="ri-tailwind-css-line text-5xl  h-25 w-40 rounded-xl text-yellow-300 flex flex-col justify-center items-center"><h4 className='text-xl font-bold'>Tailwind CSS</h4></i>
            </div>
            <div className='flex justify-between'>
            <i className="ri-javascript-line text-5xl  h-25 w-40 rounded-xl text-yellow-300 flex flex-col justify-center items-center"><h4 className='text-xl font-bold'>JAVASCRIPT</h4></i>
            <i className="ri-reactjs-line text-5xl  h-25 w-40 rounded-xl text-yellow-300 flex flex-col justify-center items-center"><h4 className='text-xl font-bold'>REACTJS</h4></i>
            <i className="ri-java-line text-5xl  h-25 w-40 rounded-xl text-yellow-300 flex flex-col justify-center items-center"><h4 className='text-xl font-bold'>JAVA</h4></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
