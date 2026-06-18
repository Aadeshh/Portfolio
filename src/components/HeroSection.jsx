import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import profImg from '../assets/Prof.jpg'
import { CONTACT } from '../constants'

const HeroSection = () => (
  <section
    id="hero"
    className="h-screen flex flex-col relative"
  >
    {/* Social links — top right, icon-only on mobile */}
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.55 }}
      className="absolute top-5 right-5 sm:top-6 sm:right-6 flex items-center gap-2 z-10"
    >
      <a
        href={CONTACT.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium"
        style={{
          background:     'rgba(22, 14, 40, 0.7)',
          border:         '1px solid rgba(192, 132, 252, 0.2)',
          color:          'var(--text-mid)',
          backdropFilter: 'blur(8px)',
          transition:     'border-color 180ms ease, color 180ms ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(192,132,252,0.45)'; e.currentTarget.style.color = 'var(--purple)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(192,132,252,0.2)';  e.currentTarget.style.color = 'var(--text-mid)' }}
      >
        <FiLinkedin className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
      <a
        href={CONTACT.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium"
        style={{
          background:     'rgba(22, 14, 40, 0.7)',
          border:         '1px solid rgba(192, 132, 252, 0.2)',
          color:          'var(--text-mid)',
          backdropFilter: 'blur(8px)',
          transition:     'border-color 180ms ease, color 180ms ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(192,132,252,0.45)'; e.currentTarget.style.color = 'var(--purple)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(192,132,252,0.2)';  e.currentTarget.style.color = 'var(--text-mid)' }}
      >
        <FiGithub className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">GitHub</span>
      </a>
    </motion.div>

    {/* Main content */}
    <div className="flex-1 flex items-center px-6 sm:px-10 lg:px-16 pb-20">

      {/*
        Mobile  → column, centered: photo on top, name/info below
        sm+     → row: name/info left, photo right
      */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-12 lg:gap-16 w-full max-w-5xl mx-auto">

        {/* Photo — first in DOM = top on mobile; pushed right on sm+ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 sm:order-last"
        >
          <div
            className="w-28 h-28 sm:w-44 sm:h-44 lg:w-64 lg:h-64 rounded-full overflow-hidden"
            style={{
              boxShadow: '0 0 0 3px rgba(192, 132, 252, 0.45), 0 0 60px rgba(192, 132, 252, 0.18)',
            }}
          >
            <img
              src={profImg}
              alt="Aadesh Thoppae"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Text info — centered on mobile, left-aligned on sm+ */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex items-center gap-2 text-xs mb-4 sm:mb-5"
          >
            <span className="status-dot" />
            <span style={{ color: '#4ade80' }}>Open to work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none gradient-text"
          >
            Aadesh<br />Thoppae
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-4 sm:mt-5 text-sm font-medium"
            style={{ color: 'var(--text-mid)' }}
          >
            AI Engineer — building multimodal LLM &amp; agent systems
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="mt-4 sm:mt-5 space-y-2"
          >
            <div className="text-xs" style={{ color: 'var(--text-lo)' }}>
              MSc Computer Science (AI) &nbsp;·&nbsp; University of San Francisco &nbsp;·&nbsp; 2025–2027
            </div>
            <div className="text-xs" style={{ color: 'var(--text-lo)', opacity: 0.65 }}>
              BSc Computer Science &nbsp;·&nbsp; UC Davis &nbsp;·&nbsp; 2020–2024
            </div>
          </motion.div>
        </div>

      </div>
    </div>

    {/* Scroll indicator */}
    <div
      className="absolute bottom-24 right-6 flex flex-col items-center gap-1"
      style={{ color: 'var(--text-lo)' }}
    >
      <span style={{ animation: 'scroll-bob 1.6s ease-in-out infinite', fontSize: '14px' }}>↓</span>
      <span className="text-[9px] tracking-widest">scroll</span>
    </div>
  </section>
)

export default HeroSection
