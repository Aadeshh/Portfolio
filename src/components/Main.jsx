import React from 'react'
import profImg from '../assets/Prof.jpg';
import resume from '../../public/resume/Aadesh_Thoppae.pdf';

const Main = () => {
  const MAIN_CONTENT = "Passionate about building innovative solutions that bridge the gap between cutting-edge technology and real-world impact. Specializing in full-stack development, cloud architecture, and AI/ML applications.";
  
  const handleContactClick = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };


// 1. Add your resume PDF to the public folder: /public/resume/Aadesh_Thoppae_Resume.pdf
// 2. Update your handleResumeDownload function:

const handleResumeDownload = () => {
    // Method 1: Direct download
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Aadesh_Thoppae.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <section className='min-h-screen flex items-center justify-center relative'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='text-center lg:text-left space-y-6'>
            {/* Name with Animation */}
            <div className="space-y-2">
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent inline-block animate-fade-in">
                  Aadesh
                </span>
                <br/>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block animate-fade-in" style={{animationDelay: '0.2s'}}>
                  Thoppae
                </span>
              </h1>
            </div>
            
            {/* Role Badge */}
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm'>
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Software Developer & AI Enthusiast
              </span>
            </div>
            
            {/* Current Status */}
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <p className="text-lg text-gray-400 font-medium">
                🎓 Master's Student • University of San Francisco
              </p>
              <p className="text-base text-gray-500 font-medium">
                🎓 BS in Computer Science • UC Davis
              </p>
            </div>
            
            {/* Description */}
            <p className='text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in' style={{animationDelay: '0.8s'}}>
              {MAIN_CONTENT}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 py-4 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">5+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Years of Coding Expierence</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">20+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">AWS</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Certified</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in' style={{animationDelay: '1.2s'}}>
              <button 
                onClick={handleContactClick}
                className='group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25'
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={handleResumeDownload}
                className='group relative px-8 py-4 overflow-hidden rounded-lg border-2 border-cyan-500/50 text-cyan-400 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-400/25'
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          
          {/* Right Content - Profile Image - ADJUSTED POSITIONING */}
          <div className='flex justify-center lg:justify-end animate-fade-in' style={{animationDelay: '0.6s'}}>
            <div className='relative group -mt-20 lg:-mt-30'>
              {/* Subtle glow instead of animated ring */}
              <div className='absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition duration-500'></div>
              
              {/* Image Container */}
              <div className="relative">
                <div className='w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-600/10 to-cyan-600/10 border border-purple-500/20 flex items-center justify-center backdrop-blur-sm'>
                  {/* Profile Image */}
                  <img 
                    src={profImg}
                    alt="Profile"
                    className='w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-900 shadow-lg shadow-purple-500/20'>
                  </img>
                </div>
                
                {/* Simple status badges */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-xs font-medium text-gray-300 border border-cyan-500/30">
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default Main