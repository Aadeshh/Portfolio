import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Tech from './components/Tech'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* Fixed background — single source of truth */}
      <div className='fixed top-0 -z-10 h-full w-full' aria-hidden="true">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      {/* Sticky navbar — full width, outside content container */}
      <Navbar />

      {/* Page content — pt-16 clears the fixed 64px navbar */}
      <main className='pt-16'>
        <Main />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
