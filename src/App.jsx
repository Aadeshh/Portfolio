import React from 'react'
import Main from './components/Main';
import Navbar from './components/Navbar'
import About from './components/About'
import Tech from './components/Tech'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import Hero from './components/Hero'; // New Hero component
//import Skills from './components/Skills'; // New Skills component

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* Single unified background for entire app */}
      <div className='fixed top-0 -z-10 h-full w-full' aria-hidden="true">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Gradient overlays that stay fixed */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[128px]"></div>
        
        {/* Animated floating orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      </div>
      
      <div className='relative'>
        {/* Components will go here - placeholder for now */}
        <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full' aria-hidden="true">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className='container mx-auto px-8'>
        <Navbar />
          <main>
            <Main /> {/* Updated Hero Section */}
              <About />
              <Tech /> {/* New Skills Section */}
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;