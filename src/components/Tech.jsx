import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import pythonLogo from "../assets/python-logo-only.png"


const Tech = () => {
    const [showMore, setShowMore] = React.useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };
  return (
    <div className='border-b border-neutral-50-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <img className='w-18 h-20'src={pythonLogo}/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGolang className='text-7xl text-blue-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCplusplus className='text-7xl text-blue-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl text-orange-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                
                <RiReactjsLine className='text-7xl text-cyan-300'/>
            </div>

        </div>
        <button className='mt-10 px-4 py-2 bg-indigo-700 text-white rounded-md' onClick={handleToggle}>
            {showMore ? 'Hide Other Technologies' : 'Show Other Technologies'}
        </button>

        {showMore && (
            <div className='mt-4'>
                <p className="text-center text-lg max-w-2xl mx-auto">
                   C, JavaScript, Git, MATLAB, R, C#, HTML, CSS, Ruby, Tensorflow, Pandas, Jira, Scikit-learn, Docker
                </p>
            </div>
        )}
    </div>
  )
}

export default Tech