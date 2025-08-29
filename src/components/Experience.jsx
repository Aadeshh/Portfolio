import React, { useState } from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleExpanded = (index) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>
        Experience
      </h2>
      
      {/* Timeline Container */}
      <div className='relative max-w-6xl mx-auto px-4'>
        {/* Timeline Line */}
        <div className='absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500'></div>
        
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}>
            {/* Timeline Dot */}
            <div className={`absolute w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full border-2 border-neutral-900 ${index % 2 === 0 ? 'left-6 md:left-auto md:-right-1.5' : 'left-6 md:-left-1.5'} top-4 z-10 shadow-lg shadow-purple-500/50`}></div>
            
            {/* Experience Card */}
            <div 
              className={`ml-16 md:ml-0 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg p-4 shadow-xl border border-neutral-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer transform hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/20 ${expandedCard === index ? 'ring-2 ring-purple-500/50' : ''} ${experience.featured ? 'ring-1 ring-gold-400/30' : ''}`}
              onClick={() => toggleExpanded(index)}
            >
              {/* Featured Badge */}
              {experience.featured && (
                <div className='absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg'>
                  ⭐ Featured
                </div>
              )}

              {/* Card Header */}
              <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3'>
                <div className='flex items-start space-x-3 flex-1'>
                  {/* Company Logo Placeholder */}
                  <div className='w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 rounded-lg border border-purple-500/30 flex items-center justify-center flex-shrink-0'>
                    <div className='w-6 h-6 bg-gradient-to-br from-purple-400 to-cyan-300 rounded opacity-60'>
                      <img src={experience.logo} alt={experience.company} className="w-full h-full object-contain rounded-sm"/>
                    </div>
                  </div>
                  
                  <div className='flex-1'>
                    <h3 className='text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors'>
                      {experience.role}
                    </h3>
                    <p className='text-purple-300 font-semibold text-base mb-1'>
                      {experience.company}
                    </p>
                  </div>
                </div>
                
                <div className='flex flex-col sm:items-end mt-2 sm:mt-0'>
                  <span className='text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded-full border border-cyan-400/20'>
                    {experience.year}
                  </span>
                  <button className='mt-1 text-xs text-neutral-400 hover:text-purple-300 transition-colors flex items-center'>
                    {expandedCard === index ? '▼ Less' : '▶ More'}
                  </button>
                </div>
              </div>

              {/* Key Metrics Highlight - Only show if there are quantifiable metrics */}
              {(() => {
                const metricsAchievements = experience.achievements?.slice(0, 2).map((achievement, idx) => {
                  const metrics = achievement.match(/(\d+%|\d+\.\d+%|99\.9%|sub-second|200%|20%)/g);
                  if (metrics) {
                    return (
                      <div key={idx} className='flex items-center space-x-2'>
                        <span className='text-cyan-400 font-bold text-base'>{metrics[0]}</span>
                        <span className='text-neutral-300 text-sm'>{achievement.replace(metrics[0], '').trim()}</span>
                      </div>
                    );
                  }
                  return null;
                }).filter(Boolean);

                return metricsAchievements && metricsAchievements.length > 0 ? (
                  <div className='mb-3 p-2 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg border border-purple-500/20'>
                    <div className='flex flex-wrap gap-3 text-sm'>
                      {metricsAchievements}
                    </div>
                  </div>
                ) : null;
              })()}

              {/* Description */}
              <p className={`text-neutral-300 leading-relaxed mb-3 text-sm transition-all duration-300 ${expandedCard === index ? '' : 'line-clamp-2'}`}>
                {experience.description}
              </p>

              {/* Expandable Content */}
              <div className={`transition-all duration-300 overflow-hidden ${expandedCard === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='border-t border-neutral-700 pt-3 mb-3'>
                  <h4 className='text-sm font-semibold text-purple-300 mb-2 flex items-center'>
                    <span className='w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2'></span>
                    Key Achievements
                  </h4>
                  <ul className='text-sm text-neutral-300 space-y-1.5'>
                    {experience.achievements?.map((achievement, idx) => (
                      <li key={idx} className='flex items-start group'>
                        <span className='text-cyan-400 mr-2 mt-0.5 group-hover:text-purple-400 transition-colors text-xs'>▶</span>
                        <span className='group-hover:text-white transition-colors'>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Enhanced Technology Tags */}
              <div className='flex flex-wrap gap-1.5'>
                {experience.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className='group px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-cyan-400/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/20 hover:scale-105 transition-all duration-200 cursor-default'
                  >
                    <span className='group-hover:text-cyan-300 transition-colors'>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience