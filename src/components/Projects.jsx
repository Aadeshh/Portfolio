import React, { useState, useRef, useEffect } from 'react'
import { PROJECTS } from '../constants'
import OptimizedImage from './OptimizedImage'

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [visibleProjects, setVisibleProjects] = useState(new Set())
  const [brokenLinks, setBrokenLinks] = useState(new Set())
  const observerRef = useRef(null)

  // Lazy loading implementation
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = entry.target.dataset.projectIndex
            setVisibleProjects(prev => new Set([...prev, parseInt(projectIndex)]))
          }
        })
      },
      { threshold: 0.1 }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]))
  }

  // Handle link click with error fallback
  const handleLinkClick = (url, projectTitle, linkType) => {
    console.error(`Attempting to open ${linkType} for ${projectTitle}: ${url}`)
    if (!url) return

    // Try to open the link
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      
      // Check if the window was blocked or failed to open
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Fallback: show alert with the URL
        alert(`Unable to open ${linkType}. Please visit: ${url}`)
        return
      }

      // Set a timeout to check if the page loaded successfully
      setTimeout(() => {
        try {
          // If we can't access the window location, assume it's working
          if (newWindow.location.href === 'about:blank') {
            setBrokenLinks(prev => new Set([...prev, url]))
          }
        } catch (e) {
          // Cross-origin error is expected for external sites, so link is likely working
        }
      }, 1000)
    } catch (error) {
      console.error(`Failed to open ${linkType} for ${projectTitle}:`, error)
      setBrokenLinks(prev => new Set([...prev, url]))
      // Fallback: copy to clipboard or show URL
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          alert(`Link copied to clipboard: ${url}`)
        }).catch(() => {
          alert(`Please visit: ${url}`)
        })
      } else {
        alert(`Please visit: ${url}`)
      }
    }
  }

  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)

    useEffect(() => {
      if (cardRef.current && observerRef.current) {
        observerRef.current.observe(cardRef.current)
      }
    }, [])

    const isVisible = visibleProjects.has(index)
    const isImageLoaded = loadedImages.has(index)
    const isFeatured = project.title === "Doc - Medical Chatbot"

    return (
      <div
        ref={cardRef}
        data-project-index={index}
        className={`group transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute -top-3 left-4 z-10 bg-gradient-to-r from-cyan-400 to-purple-500 px-3 py-1 rounded-full text-xs font-semibold text-black">
            Featured
          </div>
        )}

        {/* Project card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 hover:border-cyan-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-cyan-400/10 h-full">
          
          {/* Image section */}
          <div className="relative w-full overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={project.image}
                alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                type="project"
                context={{
                  title: project.title,
                  description: project.description
                }}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 flex flex-col h-full">
            
            {/* Project header */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                {project.duration && (
                  <span className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded-full whitespace-nowrap ml-2 flex-shrink-0">
                    {project.duration}
                  </span>
                )}
              </div>
              
              {/* Project category */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span className="text-xs text-cyan-400 font-medium">
                  {project.title.includes('Medical') ? 'AI & Healthcare' :
                   project.title.includes('3D') ? 'AI & Design' :
                   project.title.includes('BeFake') ? 'Social Media' :
                   project.title.includes('Learning') ? 'AI & Education' :
                   project.title.includes('Portfolio') ? 'Web Development' :
                   project.title.includes('Financial') ? 'AI & Fintech' :
                   'Cybersecurity'}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-300 text-sm leading-relaxed mb-6 group-hover:text-neutral-200 transition-colors duration-300 overflow-hidden" style={{
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical'
            }}>
              {project.description}
            </p>

            {/* Technology stack */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-neutral-800 to-neutral-700 text-cyan-400 rounded-lg text-sm font-medium border border-neutral-600/50 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Repository Link */}
            <div className="mt-6 pt-4 border-t border-neutral-700/50 relative z-10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-neutral-800 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neutral-700/50 group/link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium">View on GitHub</span>
              </a>
            </div>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    )
  }

  return (
    <div className='border-b border-neutral-900 pb-16'>
      <div className="text-center mb-12">
        <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4'>
          Featured Projects
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Showcasing innovative solutions in AI, web development, and cybersecurity
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
      {/* Bottom Quote */}
      <div className="mt-16 text-center">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 max-w-3xl mx-auto">
            <svg className="w-8 h-8 text-purple-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-gray-300 italic text-lg">
              "The only way to do great work is to love what you do."
            </p>
            <p className="text-gray-500 mt-2">- Steve Jobs</p>
          </div>
        </div>
    </div>
  )
}

export default Projects