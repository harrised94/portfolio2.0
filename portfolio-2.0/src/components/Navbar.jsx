import React, {useState} from 'react'
import Logo from '../assets/Eh.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


const Navbar = () => {
    // mobile nav
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    // change nav color when scrolling
    const [color, setColor] = useState(false);
    
    const changeColor = () => {
        if (window.scrollY >= 500) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'bg-[#000]/50 fixed w-full h-[40px] flex justify-between items-center px-4 text-gray-300 font-[500] duration-300 z-10' : 'fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 font-[500] duration-300 z-10'}>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>

        {/*Menu*/}
            <ul className='hidden md:flex'>
                <li>
                <Link to="home" smooth={true} className='hover:text-gray-100 hover:underline'>
                    Home
                </Link>
                </li>
                <li>
                <Link to="about" smooth={true} className='hover:text-gray-100 hover:underline'>
                    About
                </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} className='hover:text-gray-100 hover:underline'>
                    Skills
                </Link>
                </li>
                <li>
                <Link to="work" smooth={true} className='hover:text-gray-100 hover:underline'>
                    Work
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} className='hover:text-gray-100 hover:underline'>
                    Contact
                </Link>
                </li>
            </ul>

        {/*Hamburger*/}

        <div className="md:hidden z-10" onClick={handleClick}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile Menu*/}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link  to="home" smooth={true} onClick={handleClick}>
                        Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link  to="about" smooth={true} onClick={handleClick}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link  to="skills" smooth={true} onClick={handleClick}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link  to="work" smooth={true} onClick={handleClick}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link  to="contact" smooth={true} onClick={handleClick}>
                    Contact
                </Link>
            </li>
        </ul>

        {/*Social Icons*/}
        <div className='fixed flex-col top-[35%] left-0 hidden lg:flex'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/ed-harris-2963bb206/">
                    LinkedIn   <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2b3137]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/harrised94">
                    Github   <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#09B090]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="mailto:harrised94@gmail.com">
                    Email   <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E85F5D]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1U1-odX2fq3xQTZDbm2jCdSmAA2xOdBWu/view?usp=sharing">
                    My CV  <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar