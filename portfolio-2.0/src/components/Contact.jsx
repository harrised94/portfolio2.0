import React from 'react'
import {HiMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#8D93A6] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/ad80def9-d8ca-475d-96d5-ec4382d76574" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#20A2F6] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>
            
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white text-center border-2 group hover:bg-[#20A2F6] hover:border-[#20A2F6] px-4 py-3 my-8 mx-auto flex items-center'>Get in touch!<span className='opacity-0 group-hover:ml-5 group-hover:opacity-100 duration-300'><HiMail className=''/></span></button>
        </form>
    </div>
  )
}

export default Contact
