import React from 'react'

const Buttons = () => {
  return (
    <div>
      <div className="flex gap-5 font-bold ml-1">
        <a href="#contact"><button className="border-2 border-yellow-300 h-15 w-30 rounded-4xl uppercase bg-yellow-300 text-black hover:bg-black hover:text-yellow-300">hire me</button></a> 
        <a href="#projects"><button className="border-2 border-yellow-300 h-15 w-35 rounded-4xl uppercase text-yellow-300 hover:bg-yellow-300 hover:text-black">my works</button></a>
      </div>
    </div>
  )
}

export default Buttons
