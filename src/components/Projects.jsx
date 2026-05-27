import React, { useState, useRef, useEffect } from 'react'
import { PROJECTS } from '../constants'

const ProjectCard = ({ project, index, observerRef, visibleProjects }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current && observerRef.current) {
      observerRef.current.observe(cardRef.current)
    }
  }, [])

  const isVisible  = visibleProjects.has(index)
  const isFeatured = project.title === "Sentinels - Autonomous Financial Analyst"

  return (
    <div
      ref={cardRef}
      data-project-index={index}
      className="flex flex-col rounded-xl overflow-hidden"
      style={{
        background:  'rgba(255, 255, 255, 0.025)',
        border:      isFeatured
          ? '1px solid rgba(192, 132, 252, 0.35)'
          : '1px solid var(--border)',
        backdropFilter: 'blur(8px)',
        opacity:     isVisible ? 1 : 0,
        transform:   isVisible ? 'translateY(0)' : 'translateY(12px)',
        transition:  'opacity 0.35s ease, transform 0.35s ease',
      }}
    >
      {/* Project image */}
      {project.image && (
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(rgba(13,11,20,0.2) 0%, transparent 40%, rgba(13,11,20,0.5) 100%)' }}
          />
        </div>
      )}

      {/* Card header */}
      <div
        className="p-4 sm:p-5 flex items-start justify-between gap-3"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            {isFeatured && (
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: 'rgba(192, 132, 252, 0.1)',
                  border:     '1px solid rgba(192, 132, 252, 0.3)',
                  color:      'var(--purple)',
                }}
              >
                Featured
              </span>
            )}
            <span
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border:     '1px solid var(--border)',
                color:      'var(--text-lo)',
              }}
            >
              {project.category ?? 'Project'}
            </span>
          </div>
          <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-hi)' }}>
            {project.title}
          </h3>
        </div>
        {project.duration && (
          <span
            className="text-xs shrink-0 px-2.5 py-1 rounded-md font-mono"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border:     '1px solid var(--border)',
              color:      'var(--text-lo)',
            }}
          >
            {project.duration}
          </span>
        )}
      </div>

      {/* Log output */}
      <div
        className="p-4 sm:p-5 flex-1"
        style={{ borderBottom: '1px solid var(--border)', background: 'rgba(0,0,0,0.15)' }}
      >
        <div className="text-[10px] font-mono mb-2" style={{ color: 'var(--text-lo)' }}>// description</div>
        <div className="space-y-1.5 text-sm" style={{ color: 'var(--text-mid)' }}>
          {(project.logs ?? []).map((line, i) => (
            <div key={i} className="leading-relaxed">
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="text-[10px] font-mono mb-2" style={{ color: 'var(--text-lo)' }}>// stack</div>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border:     '1px solid rgba(192,132,252,0.12)',
                color:      'var(--text-lo)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub link */}
      <div className="p-4 sm:p-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm rounded-lg font-medium"
          style={{
            background:  'rgba(192, 132, 252, 0.08)',
            border:      '1px solid rgba(192, 132, 252, 0.2)',
            color:       'var(--text-mid)',
            transition:  'background 180ms ease, border-color 180ms ease, color 180ms ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background    = 'rgba(192, 132, 252, 0.15)'
            e.currentTarget.style.borderColor   = 'rgba(192, 132, 252, 0.4)'
            e.currentTarget.style.color         = 'var(--purple)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background    = 'rgba(192, 132, 252, 0.08)'
            e.currentTarget.style.borderColor   = 'rgba(192, 132, 252, 0.2)'
            e.currentTarget.style.color         = 'var(--text-mid)'
          }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set())

  const observerRef = useRef(null)
  if (!observerRef.current) {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = entry.target.dataset.projectIndex
            setVisibleProjects((prev) => new Set([...prev, parseInt(i)]))
          }
        })
      },
      { threshold: 0.08 }
    )
  }

  useEffect(() => {
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div id="projects" className="py-10 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="section-header flex items-center justify-between">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-hi)' }}>
            Projects
          </h2>
          <span className="text-xs font-mono" style={{ color: 'var(--text-lo)' }}>
            {PROJECTS.length} entries
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              observerRef={observerRef}
              visibleProjects={visibleProjects}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects
