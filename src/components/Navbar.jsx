import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const Navbar = () => {
  return (
    <header role="banner">
      <nav className=' flex items-end justify-between' role="navigation" aria-label="Main navigation">
        <div className='m-8 flex items-end justify-center gap-4 text-2xl'>
          <a 
            href='https://www.linkedin.com/in/aadesh-thoppae-5b10311b4/'
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Aadesh Thoppae's LinkedIn profile (opens in new tab)"
            className="hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a 
            href="https://github.com/Aadeshh" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Aadesh Thoppae's GitHub profile (opens in new tab)"
            className="hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded"
          >
            <FaGithub aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar