import React, { useState, useEffect } from 'react'

const TYPING_SPEED = 52

const ChatBar = ({ activeSection, sections, onNavigate }) => {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase]         = useState('typing')

  const currentIdx  = sections.findIndex(s => s.id === activeSection)
  const nextSection = sections[currentIdx + 1] ?? null
  const target      = nextSection?.prompt ?? ''

  /* Reset + retype whenever active section changes */
  useEffect(() => {
    setDisplayed('')
    setPhase('typing')
  }, [activeSection])

  /* Type once, then hold */
  useEffect(() => {
    if (phase !== 'typing' || !target) return
    if (displayed.length < target.length) {
      const t = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        TYPING_SPEED
      )
      return () => clearTimeout(t)
    } else {
      setPhase('done')
    }
  }, [displayed, phase, target])

  const isReady = phase === 'done' && !!nextSection

  const handleSend = () => {
    if (nextSection) onNavigate(nextSection.id)
  }

  return (
    /* Outer wrapper: positioning only — NO background so it truly floats */
    <div
      className="fixed bottom-0 left-0 right-0 z-30 md:pl-10 px-4"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-2xl mx-auto">

        {/* Input pill — the only visible surface */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{
            background:     'rgba(18, 12, 32, 0.92)',
            border:         '1px solid rgba(192, 132, 252, 0.22)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow:      '0 8px 40px rgba(0,0,0,0.45), 0 2px 0 rgba(192,132,252,0.06) inset',
          }}
        >
          {/* Typewriter text — or thank-you message on last section */}
          <span
            className={`flex-1 text-sm min-h-[1.25rem] leading-relaxed ${target ? 'cursor-blink' : ''}`}
            style={{ color: target ? 'var(--text-mid)' : 'var(--text-lo)', fontStyle: target ? 'normal' : 'italic' }}
          >
            {target ? displayed : 'Hope to hear from you soon!'}
          </span>

          {/* Send button with ping ring when ready */}
          <div className="relative shrink-0 w-8 h-8">
            {/* Ping ring — animates while ready */}
            {isReady && (
              <span
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'rgba(124, 58, 237, 0.45)',
                  animation:  'ping-ring 2s ease-out infinite',
                }}
              />
            )}
            <button
              onClick={handleSend}
              disabled={!isReady}
              aria-label="Go to next section"
              className="absolute inset-0 rounded-lg flex items-center justify-center"
              style={{
                background: isReady
                  ? 'linear-gradient(135deg, #7c3aed, #9333ea)'
                  : 'rgba(192, 132, 252, 0.08)',
                cursor:     isReady ? 'pointer' : 'default',
                transition: 'background 300ms ease',
              }}
            >
              <svg
                width="14" height="14" viewBox="0 0 24 24"
                fill="none"
                stroke={isReady ? 'white' : 'rgba(192,132,252,0.3)'}
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChatBar
