import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className="bg-[#0a192f] w-full h-screen">
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#4c9ed9]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ed Harris</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis hic quibusdam deleniti unde nam vero possimus, voluptatum dolorum odit, ratione sapiente distinctio minima labore, cupiditate id in. Quaerat, molestias aut.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4c9ed9] hover:border-[#4c9ed9]'> 
                    View Work 
                    <span className='group-hover:ml-5 duration-300 ml-3'><HiArrowNarrowRight /></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home