import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"

const NAV_LINKS = [
  { label: 'about',      href: '#about'      },
  { label: 'tech_stack', href: '#tech'        },
  { label: 'experience', href: '#experience'  },
  { label: 'projects',   href: '#projects'    },
  { label: 'contact',    href: '#contact'     },
]

const Navbar = () => {
  const [isOpen, setIsOpen]        = useState(false)
  const [activeSection, setActive] = useState('')
  const [scrolled, setScrolled]    = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['about', 'tech', 'experience', 'projects', 'contact']
      const offset   = window.scrollY + 80
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && offset >= el.offsetTop) { setActive(sections[i]); return }
      }
      setActive('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollToSection = (href) => {
    setIsOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-canvas/95 border-b border-slate-800' : 'bg-canvas/75'
      }`}
      style={{ backdropFilter: 'blur(6px)' }}
      role="banner"
    >
      <nav
        className="max-w-screen-xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* System identifier */}
        <a
          href="#"
          onClick={scrollToTop}
          className="shrink-0 text-sky-400 text-sm font-bold tracking-tight hover:text-white"
          aria-label="Back to top"
        >
          AT://
        </a>

        {/* Diagnostic params — sm+ only */}
        <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="status-dot" />
            <span className="text-green-500">SYS_STATUS: OPERATIONAL</span>
          </span>
          <span className="text-slate-700">│</span>
          <span>PROJECTS: <span className="text-sky-400">20+</span></span>
          <span className="text-slate-700">│</span>
          <span>UPTIME: <span className="text-sky-400">99.9%</span></span>
        </div>

        {/* Desktop nav + social */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive  = activeSection === sectionId
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-xs font-medium tracking-wide ${
                  isActive ? 'text-sky-400' : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                {isActive ? '> ' : ''}{link.label}
              </button>
            )
          })}

          <div className="h-3 w-px bg-slate-800 shrink-0" aria-hidden="true" />

          <div className="flex items-center gap-3 text-lg">
            <a
              href="https://www.linkedin.com/in/aadesh-thoppae-5b10311b4/"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-500 hover:text-sky-400"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Aadeshh"
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-500 hover:text-sky-400"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Mobile: social + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/aadesh-thoppae-5b10311b4/"
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-500 hover:text-sky-400 text-lg"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Aadeshh"
            target="_blank" rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-slate-500 hover:text-sky-400 text-lg"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="text-slate-500 hover:text-slate-200 p-1 ml-1"
          >
            {isOpen
              ? <HiX    className="w-5 h-5" aria-hidden="true" />
              : <HiMenu className="w-5 h-5" aria-hidden="true" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden ${isOpen ? 'max-h-80' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="bg-canvas border-b border-slate-800 px-4 py-2 flex flex-col gap-0.5">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive  = activeSection === sectionId
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-left py-2.5 px-3 text-xs font-medium border ${
                  isActive
                    ? 'text-sky-400 border-sky-400/30 bg-sky-400/5'
                    : 'text-slate-500 border-transparent hover:text-slate-200 hover:border-slate-800'
                }`}
              >
                {isActive ? '▶ ' : '  '}{link.label}
              </button>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar
