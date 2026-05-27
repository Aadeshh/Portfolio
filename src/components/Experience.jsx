import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCES } from '../constants'

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
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

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleExpanded = (index) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <div id="experience" className="py-10 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="section-header flex items-center justify-between">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-hi)' }}>
            Experience
          </h2>
          <span className="text-xs font-mono" style={{ color: 'var(--text-lo)' }}>§ 03</span>
        </div>

        <div className="flex flex-col gap-3">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedCard === index
            return (
              <FadeIn key={index} delay={index * 0.05}>
                <div
                  className="rounded-xl cursor-pointer overflow-hidden"
                  style={{
                    background:  'rgba(255, 255, 255, 0.025)',
                    border:      exp.featured
                      ? '1px solid rgba(192, 132, 252, 0.35)'
                      : '1px solid var(--border)',
                    backdropFilter: 'blur(8px)',
                    transition:  'border-color 200ms ease',
                  }}
                  onClick={() => toggleExpanded(index)}
                >
                  {/* Card header */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                    {/* Left: logo + role */}
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div
                        className="w-9 h-9 rounded-lg overflow-hidden shrink-0 flex items-center justify-center"
                        style={{ background: 'rgba(192, 132, 252, 0.08)', border: '1px solid var(--border)' }}
                      >
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold" style={{ color: 'var(--text-hi)' }}>{exp.role}</span>
                          {exp.featured && (
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
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: 'var(--purple)' }}>{exp.company}</div>
                      </div>
                    </div>

                    {/* Right: date + toggle */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className="text-xs px-2.5 py-1 rounded-md font-mono"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border:     '1px solid var(--border)',
                          color:      'var(--text-mid)',
                        }}
                      >
                        {exp.year}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-lo)', transition: 'transform 200ms ease', transform: isExpanded ? 'rotate(90deg)' : 'none' }}>
                        ›
                      </span>
                    </div>
                  </div>

                  {/* Metric highlights */}
                  {(() => {
                    const hits = (exp.achievements ?? [])
                      .map((a) => {
                        const m = a.match(/(\d+%|\d+\.\d+%|99\.9%|sub-second|200%|20%)/g)
                        return m ? { metric: m[0], text: a.replace(m[0], '').trim() } : null
                      })
                      .filter(Boolean)
                      .slice(0, 2)

                    return hits.length > 0 ? (
                      <div
                        className="mx-4 sm:mx-5 mb-3 p-3 rounded-lg"
                        style={{ background: 'rgba(251, 191, 36, 0.05)', border: '1px solid rgba(251, 191, 36, 0.15)' }}
                      >
                        <div className="flex flex-wrap gap-4 text-xs">
                          {hits.map(({ metric, text }, i) => (
                            <span key={i} className="flex items-baseline gap-1.5">
                              <span className="font-bold" style={{ color: 'var(--gold)' }}>{metric}</span>
                              <span style={{ color: 'var(--text-lo)' }}>{text}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null
                  })()}

                  {/* Description */}
                  <div className="px-4 sm:px-5 pb-4 text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                    <p className={isExpanded ? '' : 'line-clamp-2'}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Expanded: achievements */}
                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight:  isExpanded ? '400px' : '0',
                      transition: 'max-height 0.28s ease',
                    }}
                  >
                    <div
                      className="mx-4 sm:mx-5 mb-4 pt-3"
                      style={{ borderTop: '1px solid var(--border)' }}
                    >
                      <div className="text-[10px] font-mono mb-2.5" style={{ color: 'var(--text-lo)' }}>// highlights</div>
                      <ul className="space-y-2 text-sm" style={{ color: 'var(--text-mid)' }}>
                        {(exp.achievements ?? []).map((a, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="shrink-0 mt-1" style={{ color: 'var(--purple)' }}>→</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="px-4 sm:px-5 pb-4 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border:     '1px solid rgba(192,132,252,0.1)',
                          color:      'var(--text-lo)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
