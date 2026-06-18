import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import TimelineNav from './TimelineNav'
import HeroSection from './HeroSection'
import ChatBar     from './ChatBar'
import About       from './About'
import Tech        from './Tech'
import Experience  from './Experience'
import Projects    from './Projects'
import Contact     from './Contact'

const SECTIONS = [
  { id: 'hero',       label: 'Home'       },
  { id: 'about',      label: 'About',      prompt: 'Who is Aadesh?'        },
  { id: 'tech',       label: 'Skills',     prompt: "What's his tech stack?" },
  { id: 'experience', label: 'Experience', prompt: "What's his background?" },
  { id: 'projects',   label: 'Projects',   prompt: 'What has he built?'     },
  { id: 'contact',    label: 'Contact',    prompt: 'How do I reach him?'    },
]

const TypingIndicator = () => (
  <div className="flex items-center gap-2.5 px-4 sm:px-6 mb-4">
    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
      style={{ background: 'linear-gradient(135deg, #c084fc, #7c3aed)' }}>A</div>
    <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}>
      <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
    </div>
  </div>
)

const AIAvatar = () => (
  <div className="flex items-center gap-2.5 mb-4 px-4 sm:px-6">
    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
      style={{ background: 'linear-gradient(135deg, #c084fc, #7c3aed)' }}>A</div>
    <span className="text-xs" style={{ color: 'var(--text-lo)' }}>Aadesh</span>
    <div className="h-px w-10" style={{ background: 'var(--border)' }} />
  </div>
)

/* A chat exchange per section: user bubble slides in → typing dots (~900ms) →
   avatar + response. Plays ONCE per section. Triggers when the section is
   centered in view (so only one fires at a time), with NO scroll-snap. */
/* A chat exchange per section: user bubble → typing dots → avatar + response.
   The RESPONSE CONTENT ALWAYS RENDERS — animation only gates its reveal, never
   its existence. If anything in the timing misbehaves, content still shows. */
const ChatSection = ({ id, prompt, children }) => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  // Three independent booleans, each latched true and never reset.
  const [showBubble, setShowBubble]     = useState(false)
  const [showTyping, setShowTyping]     = useState(false)
  const [showResponse, setShowResponse] = useState(false)

  useEffect(() => {
    if (!inView) return
    setShowBubble(true)
    const t1 = setTimeout(() => setShowTyping(true), 250)
    const t2 = setTimeout(() => { setShowTyping(false); setShowResponse(true) }, 1150)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [inView])

  return (
    <section
      id={`snap-${id}`}
      ref={ref}
      className="min-h-screen flex flex-col justify-center py-16"
      style={{ scrollMarginTop: '1.5rem' }}
    >
      {/* User bubble */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={showBubble ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-end px-4 sm:px-6 pt-2 pb-3"
      >
        <div
          className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-white max-w-xs sm:max-w-sm leading-relaxed"
          style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)', boxShadow: '0 4px 24px rgba(124,58,237,0.28)' }}
        >
          {prompt}
        </div>
      </motion.div>

      {/* Typing dots — only while waiting */}
      <AnimatePresence>
        {showTyping && (
          <motion.div key="typing"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <TypingIndicator />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Response — ALWAYS mounted once the section is seen; opacity-fades in.
          Content is never conditionally removed, so it can't vanish. */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={showResponse ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{ pointerEvents: showResponse ? 'auto' : 'none' }}
      >
        <AIAvatar />
        {children}
      </motion.div>
    </section>
  )
}

const ScrollChatLayout = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollToSection = (id) => {
    if (id === 'hero') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    const el = document.getElementById(`snap-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className="fixed top-0 -z-10 h-full w-full" aria-hidden="true">
        <div className="absolute inset-0 bg-canvas" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(192,132,252,0.11) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom left, rgba(251,191,36,0.07) 0%, transparent 65%)' }} />
      </div>

      <TimelineNav sections={SECTIONS} activeSection={activeSection} onNavigate={scrollToSection} />

      <div className="antialiased md:pl-10">
        <HeroSection />
        <ChatSection id="about"      prompt="Who is Aadesh?">        <About />      </ChatSection>
        <ChatSection id="tech"       prompt="What's his tech stack?"><Tech />       </ChatSection>
        <ChatSection id="experience" prompt="What's his background?"><Experience /></ChatSection>
        <ChatSection id="projects"   prompt="What has he built?">    <Projects />   </ChatSection>
        <ChatSection id="contact"    prompt="How do I reach him?">   <Contact />    </ChatSection>
        <div className="h-20" />
      </div>

      <ChatBar activeSection={activeSection} sections={SECTIONS} onNavigate={scrollToSection} />
    </>
  )
}

export default ScrollChatLayout