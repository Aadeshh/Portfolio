import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ABOUT_TEXT = `Hey, I'm Aadesh — an AI Engineer and Full-Stack Developer pursuing my Master's in Computer Science (AI Concentration) at the University of San Francisco. I specialize in building production-grade AI systems: multi-agent LLM architectures, cloud-native deployments, and full-stack applications that are fast, reliable, and built to scale.

As an AWS Solutions Architect Associate certified professional, I've led development of gaming platforms with Web3 integration, contributed to secure voting systems using advanced security kernels, and optimized autonomous vehicle sensor fusion algorithms.

Currently deepening my expertise in LLMs, agentic architectures, and applied machine learning at USF.`

const aboutContent = {
  story: {
    title: 'Where it started',
    content: 'Started coding at 16, fell in love with problem-solving, and never looked back. From building my first website to deploying multi-agent AI systems on AWS Lambda — every project has been a step toward tighter, faster, more reliable engineering.',
  },
  passion: {
    title: 'What drives me',
    content: "Drawn to the systems layer — where algorithms meet infrastructure. Whether it's optimizing a sensor fusion loop, routing LLM calls across models for cost and latency, or designing a sandboxed code execution engine, I find the most interesting work at the boundary between AI and production systems.",
  },
  goals: {
    title: "Where I'm headed",
    content: 'LLMOps, AI Infrastructure, and Core AI Engineering at scale. I want to work on the pipelines, platforms, and tooling that make other engineers faster — not just the model on top, but the system underneath it.',
  },
}

const highlights = [
  { label: 'Problem solver',   desc: 'Complexity is the interesting part' },
  { label: 'Systems thinker',  desc: 'End-to-end, not just the surface'  },
  { label: 'Fast learner',     desc: 'New stack, no problem'              },
  { label: 'Detail-driven',    desc: 'Edge cases are features too'        },
]

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const About = () => {
  const [activeTab, setActiveTab] = useState('story')

  return (
    <section id="about" className="py-10 pb-16 relative px-4 sm:px-6">
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <div className="section-header flex items-center justify-between">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-hi)' }}>
            About
          </h2>
          <span className="text-xs font-mono" style={{ color: 'var(--text-lo)' }}>§ 01</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">

          {/* ── Left column ─────────────────────────────────── */}
          <div className="flex flex-col gap-4">

            {/* Bio panel */}
            <FadeIn delay={0.05}>
              <div className="glass p-5">
                <div className="text-[10px] font-mono mb-3" style={{ color: 'var(--text-lo)' }}>// bio</div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                  {ABOUT_TEXT}
                </p>
              </div>
            </FadeIn>

            {/* Trait grid */}
            <FadeIn delay={0.12}>
              <div className="glass overflow-hidden">
                <div className="text-[10px] font-mono px-4 py-2.5 border-b" style={{ color: 'var(--text-lo)', borderColor: 'var(--border)' }}>
                  // traits
                </div>
                <div className="grid grid-cols-2">
                  {highlights.map(({ label, desc }, i) => (
                    <div
                      key={label}
                      className="p-4 text-sm"
                      style={{
                        borderRight:  i % 2 === 0 ? '1px solid var(--border)' : 'none',
                        borderBottom: i < 2        ? '1px solid var(--border)' : 'none',
                      }}
                    >
                      <div className="font-medium mb-1" style={{ color: 'var(--purple)' }}>{label}</div>
                      <div className="text-xs" style={{ color: 'var(--text-lo)' }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Right column ────────────────────────────────── */}
          <div className="flex flex-col gap-4">

            {/* Tab panel */}
            <FadeIn delay={0.09} className="flex-1 flex flex-col">
              <div className="glass flex-1 flex flex-col overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b" style={{ borderColor: 'var(--border)' }}>
                  {Object.entries(aboutContent).map(([key]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className="flex-1 py-2.5 px-2 text-xs font-medium capitalize"
                      style={{
                        color:          activeTab === key ? 'var(--purple)' : 'var(--text-lo)',
                        background:     activeTab === key ? 'rgba(192,132,252,0.07)' : 'transparent',
                        borderBottom:   activeTab === key ? '2px solid var(--purple)' : '2px solid transparent',
                        borderRight:    '1px solid var(--border)',
                        transition:     'color 180ms ease, background 180ms ease',
                      }}
                    >
                      {key}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-5 flex-1">
                  <div className="text-xs font-medium mb-2" style={{ color: 'var(--gold)' }}>
                    {aboutContent[activeTab].title}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                    {aboutContent[activeTab].content}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.16}>
              <div className="glass grid grid-cols-3 overflow-hidden">
                {[
                  { v: '5+',  label: 'Years coding' },
                  { v: '20+', label: 'Projects'      },
                  { v: '∞',   label: 'Still learning' },
                ].map(({ v, label }, i) => (
                  <div
                    key={label}
                    className="text-center p-5"
                    style={{ borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}
                  >
                    <div className="text-2xl font-bold" style={{ color: 'var(--gold)' }}>{v}</div>
                    <div className="text-[11px] mt-1" style={{ color: 'var(--text-lo)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
