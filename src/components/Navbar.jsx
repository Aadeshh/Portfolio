import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Tech Stack', href: '#tech'        },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Contact',    href: '#contact'     },
]

const Navbar = () => {
  const [isOpen, setIsOpen]           = useState(false)
  const [activeSection, setActive]    = useState('')
  const [scrolled, setScrolled]       = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['about', 'tech', 'experience', 'projects', 'contact']
      const offset = window.scrollY + 80

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && offset >= el.offsetTop) {
          setActive(sections[i])
          return
        }
      }
      setActive('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (href) => {
    setIsOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
    }
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-gray-800/60 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={scrollToTop}
          className="text-lg font-bold shrink-0"
          aria-label="Back to top"
        >
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Aadesh
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {' '}Thoppae
          </span>
        </a>

        {/* Desktop nav links + social icons */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive  = activeSection === sectionId
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            )
          })}

          {/* Divider */}
          <div className="h-4 w-px bg-gray-700 shrink-0" aria-hidden="true" />

          {/* Social icons */}
          <div className="flex items-center gap-3 text-xl">
            <a
              href="https://www.linkedin.com/in/aadesh-thoppae-5b10311b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Aadeshh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Mobile: social icons + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/aadesh-thoppae-5b10311b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Aadeshh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="text-gray-400 hover:text-white transition-colors p-1 ml-1"
          >
            {isOpen
              ? <HiX className="w-6 h-6" aria-hidden="true" />
              : <HiMenu className="w-6 h-6" aria-hidden="true" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-black/95 backdrop-blur-md border-b border-gray-800/60 px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive  = activeSection === sectionId
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar
