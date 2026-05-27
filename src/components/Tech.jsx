import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MODULES = [
  {
    key: 'core',
    tag: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'C/C++'],
  },
  {
    key: 'frontend',
    tag: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Three.js'],
  },
  {
    key: 'backend',
    tag: 'Backend',
    skills: ['Spring Boot', 'Node.js', 'RESTful APIs', 'MySQL', 'SQL', 'Firebase'],
  },
  {
    key: 'cloud',
    tag: 'Cloud & DevOps',
    skills: ['AWS', 'AWS Lambda', 'Docker', 'Git', 'CI/CD'],
    certified: true,
  },
  {
    key: 'data',
    tag: 'AI / ML',
    skills: ['Machine Learning', 'PyTorch', 'Scikit-learn', 'TensorFlow', 'LangChain', 'LangGraph', 'LLMs', 'RAG', 'NLP'],
  },
]

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const Tech = () => {
  const [active, setActive] = useState(null)

  return (
    <section id="tech" className="py-10 pb-16 relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="section-header flex items-center justify-between">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-hi)' }}>
            Tech stack
          </h2>
          <div
            className="flex items-center gap-2 text-xs px-3 py-1 rounded-full"
            style={{
              border:     '1px solid rgba(251, 191, 36, 0.3)',
              background: 'rgba(251, 191, 36, 0.06)',
              color:      'var(--gold)',
            }}
          >
            <span className="status-dot" style={{ backgroundColor: '#fbbf24' }} />
            AWS SAA-C03
          </div>
        </div>

        {/* Module grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MODULES.map((mod, i) => {
            const isActive = active === mod.key
            return (
              <FadeIn key={mod.key} delay={i * 0.06}>
                <div
                  className="p-5 rounded-xl flex flex-col gap-4 cursor-default h-full"
                  style={{
                    background:  isActive
                      ? 'rgba(192, 132, 252, 0.07)'
                      : 'rgba(255, 255, 255, 0.02)',
                    border:      isActive
                      ? '1px solid rgba(192, 132, 252, 0.3)'
                      : '1px solid var(--border)',
                    transition:  'background 200ms ease, border-color 200ms ease',
                  }}
                  onMouseEnter={() => setActive(mod.key)}
                  onMouseLeave={() => setActive(null)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: isActive ? 'var(--purple)' : 'var(--text-mid)' }}
                    >
                      {mod.tag}
                    </span>
                    {mod.certified && (
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: 'rgba(251, 191, 36, 0.1)',
                          border:     '1px solid rgba(251, 191, 36, 0.3)',
                          color:      'var(--gold)',
                        }}
                      >
                        certified
                      </span>
                    )}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {mod.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-md"
                        style={{
                          background:  isActive ? 'rgba(192, 132, 252, 0.1)' : 'rgba(255,255,255,0.04)',
                          border:      isActive ? '1px solid rgba(192,132,252,0.3)' : '1px solid rgba(192,132,252,0.1)',
                          color:       isActive ? 'var(--text-hi)' : 'var(--text-lo)',
                          transition:  'all 180ms ease',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Tech
