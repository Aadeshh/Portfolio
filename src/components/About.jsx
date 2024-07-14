import React from 'react'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-10 text-4xl'>
            About
            <span className=' text-neutral-500'> Me</span>
        </h2>
        <div className='w-full'>
            <div className='flex justify-center lg:justify-start font-light'>
                <p className='my-2 max-w-xl'>{ABOUT_TEXT}</p>
            </div>
        </div>
    </div>
  )
}

export default About