import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const Navbar = () => {
  return (
  <nav className='mb-20 flex items-end justify-between py-3'>
    <div className='m-8 flex items-end justify-center gap-4 text-2xl'>

        <a href='https://www.linkedin.com/in/aadesh-thoppae-5b10311b4/'target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aadeshh" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
    </div>
    </nav>
    )
}

export default Navbar