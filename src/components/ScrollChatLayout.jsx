import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import TimelineNav  from './TimelineNav'
import HeroSection  from './HeroSection'
import ChatBar      from './ChatBar'
import About        from './About'
import Tech         from './Tech'
import Experience   from './Experience'
import Projects     from './Projects'
import Contact      from './Contact'

const SECTIONS = [
  { id: 'hero',       label: 'Home'       },
  { id: 'about',      label: 'About',      prompt: 'Who is Aadesh?'          },
  { id: 'tech',       label: 'Skills',     prompt: "What's his tech stack?"   },
  { id: 'experience', label: 'Experience', prompt: "What's his background?"   },
  { id: 'projects',   label: 'Projects',   prompt: 'What has he built?'       },
  { id: 'contact',    label: 'Contact',    prompt: 'How do I reach him?'      },
]

/* ── Typing indicator — three bouncing dots ──────────────── */
const TypingIndicator = () => (
  <div className="flex items-center gap-2.5 px-4 sm:px-6 mb-4">
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
      style={{ background: 'linear-gradient(135deg, #c084fc, #7c3aed)' }}
    >
      A
    </div>
    <div
      className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border:     '1px solid var(--border)',
      }}
    >
      <span className="typing-dot" />
      <span className="typing-dot" />
      <span className="typing-dot" />
    </div>
  </div>
)

/* ── AI avatar ────────────────────────────────────────────── */
const AIAvatar = () => (
  <div className="flex items-center gap-2.5 mb-4 px-4 sm:px-6">
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
      style={{ background: 'linear-gradient(135deg, #c084fc, #7c3aed)' }}
    >
      A
    </div>
    <span className="text-xs" style={{ color: 'var(--text-lo)' }}>Aadesh</span>
    <div className="h-px w-10" style={{ background: 'var(--border)' }} />
  </div>
)

/* ── ChatSection wrapper ──────────────────────────────────── */
/* Each section gets id="snap-{id}" on its outer div so that
   scrollToSection can target the exact snap boundary.
   The inner components keep their own id attrs for the
   IntersectionObserver that tracks activeSection.          */
const ChatSection = ({ id, prompt, children }) => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.06 })

  /* Timing:
     0.00s  — bubble slides in
     0.38s  — typing dots appear
     1.98s  — dots vanish
     2.10s  — avatar + content fade in                       */
  return (
    <div
      id={`snap-${id}`}
      ref={ref}
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always', minHeight: '100vh' }}
    >
      {/* User bubble — flush right */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-end px-4 sm:px-6 pt-4 pb-3"
      >
        <div
          className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-white max-w-xs sm:max-w-sm leading-relaxed"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
            boxShadow:  '0 4px 24px rgba(124, 58, 237, 0.28)',
          }}
        >
          {prompt}
        </div>
      </motion.div>

      {/* Typing dots — appear then disappear */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 1.6, delay: 0.38, times: [0, 0.08, 0.82, 1], ease: 'easeInOut' }}
      >
        <TypingIndicator />
      </motion.div>

      {/* AI avatar — appears after dots finish */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 2.1 }}
      >
        <AIAvatar />
      </motion.div>

      {/* Section content */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 2.2, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/* ── Main layout ──────────────────────────────────────────── */
const ScrollChatLayout = () => {
  const [activeSection, setActiveSection] = useState('hero')

  /* Observe inner section elements to track which is active */
  useEffect(() => {
    const observers = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-38% 0px -38% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  /* Navigate to the snap div. Use getBoundingClientRect + pageYOffset
     for an exact absolute position so the scroll never undershoots.  */
  const scrollToSection = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(`snap-${id}`)
    if (!el) return
    window.scrollTo({
      top:      el.getBoundingClientRect().top + window.pageYOffset,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* ── Fixed background ────────────────────────────── */}
      <div className="fixed top-0 -z-10 h-full w-full" aria-hidden="true">
        <div className="absolute inset-0 bg-canvas" />
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(192,132,252,0.11) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom left, rgba(251,191,36,0.07) 0%, transparent 65%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 60%)' }}
        />
      </div>

      <TimelineNav
        sections={SECTIONS}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <div className="antialiased md:pl-10">

        <HeroSection />

        <ChatSection id="about" prompt="Who is Aadesh?">
          <About />
        </ChatSection>

        <ChatSection id="tech" prompt="What's his tech stack?">
          <Tech />
        </ChatSection>

        <ChatSection id="experience" prompt="What's his background?">
          <Experience />
        </ChatSection>

        <ChatSection id="projects" prompt="What has he built?">
          <Projects />
        </ChatSection>

        <ChatSection id="contact" prompt="How do I reach him?">
          <Contact />
        </ChatSection>

        {/* Spacer just enough to clear the floating ChatBar */}
        <div className="h-20" />
      </div>

      <ChatBar
        activeSection={activeSection}
        sections={SECTIONS}
        onNavigate={scrollToSection}
      />
    </>
  )
}

export default ScrollChatLayout
