import React from 'react'
import JavaScript from '../assets/javascript.svg'
import CSS from '../assets/css.svg'
import HTML from '../assets/html.svg'
import Tailwind from '../assets/tailwind.svg'
import SCSS from '../assets/sass.svg'
import ReactLogo from '../assets/react.svg'
import jquery from '../assets/jquery.svg'
import git from '../assets/git.svg'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] w-full h-screen text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='flex flex-col justify-evenly shadow-md shadow-[#040c16] hover:translate-y-[-4px] duration-300 h-[150px]'>
                    <img src={HTML} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className="mt-5">HTML</p>
                </div>
                <div className='flex flex-col justify-evenly shadow-md shadow-[#040c16] hover:translate-y-[-4px] duration-300 h-[150px]'>
                    <img src={CSS} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className="mt-5">CSS</p>
                </div>
                <div className='flex flex-col justify-evenly shadow-md shadow-[#040c16] hover:translate-y-[-4px] duration-300 h-[150px]'>
                    <img src={SCSS} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className="mt-5">SCSS</p>
                </div>
                <div className='flex flex-col justify-evenly shadow-md shadow-[#040c16] hover:translate-y-[-4px] duration-300 h-[150px]'>
                    <img src={Tailwind} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className="mt-5">Tailwind</p>
                </div>
                <div className='flex flex-col justify-evenly shadow-md shadow-[#040c16] hover:translate-y-[-4px] duration-300 h-[150px]'>
                    <img src={JavaScript} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className="mt-5">JavaScript</p>
                </div>
                <div className='flex flex-col justify-evenly shadow-md shadow-[#040c16] hover:translate-y-[-4px] duration-300 h-[150px]'>
                    <img src={ReactLogo} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className="mt-5">React</p>
                </div>
                <div className='flex flex-col justify-evenly shadow-md shadow-[#040c16] hover:translate-y-[-4px] duration-300 h-[150px]'>
                    <img src={jquery} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className="mt-5">jquery</p>
                </div>
                <div className='flex flex-col justify-evenly shadow-md shadow-[#040c16] hover:translate-y-[-4px] duration-300 h-[150px]'>
                    <img src={git} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className="mt-5">git</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills