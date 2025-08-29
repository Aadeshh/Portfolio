import React, { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  
  const ABOUT_TEXT = "I am a dedicated full stack developer with a passion for creating efficient and innovative web applications. With extensive experience in modern technologies including React, Node.js, Python, and cloud services, I strive to deliver solutions that make a difference. Currently pursuing my Master's degree at USF, I combine academic knowledge with practical experience to tackle complex technical challenges.";
  
  const aboutContent = {
    story: {
      title: "My Journey",
      content: "Started coding at 16, fell in love with problem-solving, and never looked back. From building my first website to deploying enterprise applications, every project has been a stepping stone in my journey as a developer.",
      icon: "📚"
    },
    passion: {
      title: "What Drives Me",
      content: "I'm passionate about leveraging technology to solve real-world problems. Whether it's optimizing algorithms, designing intuitive interfaces, or architecting scalable systems, I find joy in the entire development process.",
      icon: "🔥"
    },
    goals: {
      title: "Future Vision",
      content: "My goal is to contribute to projects that have a meaningful impact on society. I'm particularly interested in AI/ML applications, sustainable technology, and building tools that empower other developers.",
      icon: "🎯"
    }
  };

  const highlights = [
    { label: "Problem Solver", icon: "🧩", description: "Complex challenges energize me" },
    { label: "Team Player", icon: "🤝", description: "Collaboration drives innovation" },
    { label: "Fast Learner", icon: "📈", description: "Always expanding my skillset" },
    { label: "Detail Oriented", icon: "🔍", description: "Quality in every line of code" }
  ];

  return (
    <section className='py-20 relative'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Main About */}
          <div className='space-y-8'>
            {/* Profile Card */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <p className='text-gray-300 leading-relaxed text-lg'>
                {ABOUT_TEXT}
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{item.label}</h4>
                      <p className="text-gray-400 text-xs mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tabs */}
          <div className='space-y-6'>
            {/* Tab Navigation */}
            <div className="flex space-x-2 bg-gray-900/30 backdrop-blur-sm p-1 rounded-xl">
              {Object.keys(aboutContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <span className="mr-2">{aboutContent[tab].icon}</span>
                  {aboutContent[tab].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 min-h-[200px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {aboutContent[activeTab].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {aboutContent[activeTab].content}
                </p>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-cyan-900/20 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Years of Coding Experience</div>
              </div>
              <div className="text-center p-4 bg-purple-900/20 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400">20+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Projects Done</div>
              </div>
              <div className="text-center p-4 bg-yellow-900/20 rounded-xl border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-400">∞</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About