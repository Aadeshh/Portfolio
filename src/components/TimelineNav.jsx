import React, { useState, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const TimelineNav = ({ sections, activeSection, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [closestIdx, setClosestIdx] = useState(null)
  const dotRefs = useRef([])

  const close = () => setMobileOpen(false)

  const handleMouseMove = useCallback((e) => {
    const mouseY = e.clientY
    let closest = null
    let minDist = Infinity

    dotRefs.current.forEach((el, i) => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const dotCenterY = rect.top + rect.height / 2
      const dist = Math.abs(mouseY - dotCenterY)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })

    setClosestIdx(closest)
  }, [])

  const handleMouseLeave = useCallback(() => setClosestIdx(null), [])

  return (
    <>
      {/* ── Desktop: fixed left dot-line-dot ──────────────── */}
      <nav
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center"
        aria-label="Section navigation"
      >
        {sections.map(({ id, label }, i) => {
          const isActive  = activeSection === id
          const isLast    = i === sections.length - 1
          const showLabel = closestIdx === i

          return (
            <div key={id} className="flex flex-col items-center">

              {/* Dot */}
              <div className="relative">
                <button
                  ref={el => { dotRefs.current[i] = el }}
                  onClick={() => onNavigate(id)}
                  aria-label={`Go to ${label}`}
                  className="w-2.5 h-2.5 rounded-full border-2"
                  style={{
                    background:  isActive ? '#c084fc' : 'transparent',
                    borderColor: isActive ? '#c084fc' : 'rgba(192, 132, 252, 0.28)',
                    boxShadow:   isActive ? '0 0 10px rgba(192, 132, 252, 0.45)' : 'none',
                    transition:  'background 200ms ease, border-color 200ms ease, box-shadow 200ms ease',
                  }}
                />

                {/* Label — only shown when closest dot to cursor */}
                <div
                  className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] rounded"
                  style={{
                    opacity:    showLabel ? 1 : 0,
                    transition: 'opacity 140ms ease',
                    color:      isActive ? 'var(--purple)' : 'var(--text-mid)',
                    background: 'var(--panel)',
                    border:     '1px solid rgba(192, 132, 252, 0.18)',
                    padding:    '2px 10px',
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {label}
                </div>
              </div>

              {/* Connecting line */}
              {!isLast && (
                <div
                  className="w-px h-7"
                  style={{
                    background:  isActive
                      ? 'linear-gradient(to bottom, rgba(192,132,252,0.5), rgba(192,132,252,0.15))'
                      : 'rgba(192, 132, 252, 0.1)',
                    transition:  'background 300ms ease',
                  }}
                />
              )}
            </div>
          )
        })}
      </nav>

      {/* ── Mobile: floating button ───────────────────────── */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
        style={{
          background: 'rgba(22, 14, 40, 0.8)',
          border: '1px solid rgba(192, 132, 252, 0.2)',
          backdropFilter: 'blur(8px)',
        }}
        aria-label="Open navigation"
      >
        <HiMenu className="w-4 h-4" style={{ color: 'var(--text-mid)' }} />
      </button>

      {/* ── Mobile overlay ────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(13, 11, 20, 0.95)', backdropFilter: 'blur(12px)' }}
              onClick={close}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center gap-1">
              <button
                onClick={close}
                className="absolute top-5 right-5 p-1"
                style={{ color: 'var(--text-lo)' }}
                aria-label="Close navigation"
              >
                <HiX className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center gap-px">
                {sections.map(({ id, label }, i) => {
                  const isActive = activeSection === id
                  const isLast   = i === sections.length - 1

                  return (
                    <div key={id} className="flex flex-col items-center">
                      <button
                        onClick={() => { onNavigate(id); close() }}
                        className="py-3 px-8 text-sm font-medium rounded-lg"
                        style={{
                          color:      isActive ? 'var(--purple)' : 'var(--text-lo)',
                          background: isActive ? 'rgba(192, 132, 252, 0.08)' : 'transparent',
                          transition: 'color 180ms ease, background 180ms ease',
                        }}
                      >
                        {label}
                      </button>
                      {!isLast && (
                        <div className="w-px h-3" style={{ background: 'rgba(192, 132, 252, 0.12)' }} />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default TimelineNav
