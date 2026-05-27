import React, { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import KnowledgePanel from './chat/KnowledgePanel'
import MessageBlock from './chat/MessageBlock'
import {
  PROJECTS, EXPERIENCES, EDUCATION, CONTACT,
  SKILLS, ABOUT_TEXT, CERTIFICATIONS,
} from '../constants/index'

const INTER = 'Inter, system-ui, -apple-system, sans-serif'

const PILLS = [
  { label: 'View Projects',          key: 'projects' },
  { label: 'Experience & Education', key: 'academic'  },
  { label: 'Skills & Tech Stack',    key: 'skills'   },
  { label: 'About Me',               key: 'about'    },
  { label: 'Contact Info',           key: 'contact'  },
]

const RESPONSES = {
  projects: { type: 'projects', projects: PROJECTS },
  academic: { type: 'academic', education: EDUCATION, experiences: EXPERIENCES },
  skills:   { type: 'skills',   skills: SKILLS },
  about:    { type: 'about',    text: ABOUT_TEXT, certifications: CERTIFICATIONS },
  contact:  { type: 'contact',  contact: CONTACT },
}

const WELCOME_PAYLOAD = { type: 'welcome' }

function ts() {
  return new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
}

let _msgId = 1

const ConversationalEngine = ({ onExit }) => {
  const [messages, setMessages] = useState([
    { id: 0, role: 'agent', payload: WELCOME_PAYLOAD, ts: ts() },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const streamRef = useRef(null)

  useEffect(() => {
    const el = streamRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onExit() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onExit])

  const handlePill = useCallback((pill) => {
    if (isTyping) return
    setMessages(prev => [
      ...prev,
      { id: _msgId++, role: 'user', text: pill.label, ts: ts() },
    ])
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [
        ...prev,
        { id: _msgId++, role: 'agent', payload: RESPONSES[pill.key], ts: ts() },
      ])
    }, 1200)
  }, [isTyping])

  return (
    <div
      className="chat-ui fixed inset-0 flex flex-col overflow-hidden"
      style={{ background: '#0a0a0a', fontFamily: INTER }}
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <header
        className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b shrink-0"
        style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#0a0a0a' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border"
            style={{ background: '#141414', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <span className="text-[#22c55e] text-[13px] font-bold" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
              A
            </span>
          </div>
          <div>
            <div className="text-[#f4f4f5] text-[13.5px] font-semibold leading-none">Aadesh's Portfolio</div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              <span className="text-[#6b7280] text-[11px]">Online · AI Engineer</span>
            </div>
          </div>
        </div>
        <button
          onClick={onExit}
          className="text-[#6b7280] hover:text-[#f4f4f5] text-[14px] w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5"
        >
          ✕
        </button>
      </header>

      {/* ── Body ───────────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0">

        {/* Left: chat stream */}
        <div className="flex flex-col flex-1 min-w-0 min-h-0">

          <div
            ref={streamRef}
            className="chat-stream flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-5"
          >
            <AnimatePresence initial={false}>
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                  <MessageBlock msg={msg} />
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  className="flex items-end gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border"
                    style={{ background: '#141414', borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <span className="text-[#22c55e] text-[12px] font-bold" style={{ fontFamily: '"JetBrains Mono", monospace' }}>A</span>
                  </div>
                  <div
                    className="px-4 py-3.5 rounded-2xl rounded-bl-md flex items-center gap-1.5 border"
                    style={{ background: '#1a1a1a', borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Suggestion chips ─────────────────────────── */}
          <div
            className="shrink-0 border-t px-4 sm:px-6 py-3.5"
            style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#0a0a0a' }}
          >
            <p className="text-[#4b5563] text-[11px] mb-2.5">Suggested</p>
            <div className="flex gap-2 overflow-x-auto pb-0.5" style={{ scrollbarWidth: 'none' }}>
              {PILLS.map(pill => (
                <button
                  key={pill.key}
                  onClick={() => handlePill(pill)}
                  disabled={isTyping}
                  className="shrink-0 px-3.5 py-1.5 rounded-full text-[12.5px] text-[#9ca3af] hover:text-[#f4f4f5] disabled:opacity-40 disabled:cursor-not-allowed border"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right: knowledge panel */}
        <div
          className="hidden md:flex flex-col w-72 xl:w-80 shrink-0 border-l min-h-0"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <KnowledgePanel />
        </div>

      </div>
    </div>
  )
}

export default ConversationalEngine
