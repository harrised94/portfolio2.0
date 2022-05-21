import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import backgroundImage from '../assets/backgroundImg3.jpg'

const Home = () => {
  return (
    <div className="bg-[#274363] w-full h-screen homepage after:content-['']" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#20A2F6]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ed Harris</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#dcdcdc]'>I'm a Front End Developer</h2>
            <p className='text-[#edeff5] py-4 max-w-[700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis hic quibusdam deleniti unde nam vero possimus, voluptatum dolorum odit, ratione sapiente distinctio minima labore, cupiditate id in. Quaerat, molestias aut.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#20A2F6] hover:border-[#20A2F6]'> 
                    View Work 
                    <span className='group-hover:ml-5 duration-300 ml-3'><HiArrowNarrowRight /></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home