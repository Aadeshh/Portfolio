import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { CONTACT } from '../constants'
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
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

const Contact = () => {
  const [formData, setFormData]        = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.send(
        'service_wd6bifn',
        'template_x4w4wns',
        { name: formData.name, email: formData.email, message: formData.message, to_name: 'Aadesh' },
        'Xlmgtc9_t32xop8VO'
      )
      console.log('SUCCESS!', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.log('FAILED...', error.text)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    width:           '100%',
    padding:         '12px 16px',
    background:      'rgba(0, 0, 0, 0.2)',
    border:          '1px solid var(--border)',
    borderRadius:    '10px',
    color:           'var(--text-hi)',
    fontSize:        '14px',
    outline:         'none',
    transition:      'border-color 180ms ease',
    fontFamily:      'inherit',
  }

  return (
    <section id="contact" className="py-10 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="section-header flex items-center justify-between">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-hi)' }}>
            Get in touch
          </h2>
          <span className="text-xs font-mono" style={{ color: 'var(--text-lo)' }}>§ 05</span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          {/* ── Contact info ──────────────────────────────────── */}
          <FadeIn delay={0.05}>
            <div className="glass p-5 flex flex-col gap-5 h-full">
              <div className="text-[10px] font-mono" style={{ color: 'var(--text-lo)' }}>// contact</div>

              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background:  'rgba(192, 132, 252, 0.08)',
                      border:      '1px solid var(--border)',
                      transition:  'border-color 180ms ease, background 180ms ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)'
                      e.currentTarget.style.background  = 'rgba(192, 132, 252, 0.15)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background  = 'rgba(192, 132, 252, 0.08)'
                    }}
                  >
                    <FiMail className="w-4 h-4" style={{ color: 'var(--purple)' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text-mid)', transition: 'color 180ms ease' }}>
                    {CONTACT.email}
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(192, 132, 252, 0.08)', border: '1px solid var(--border)' }}
                  >
                    <FiPhone className="w-4 h-4" style={{ color: 'var(--text-lo)' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text-lo)' }}>{CONTACT.phoneNo}</span>
                </div>
              </div>

              <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="text-[10px] font-mono mb-3" style={{ color: 'var(--text-lo)' }}>// socials</div>
                <div className="flex gap-2">
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg"
                    style={{
                      background:  'rgba(192, 132, 252, 0.06)',
                      border:      '1px solid var(--border)',
                      color:       'var(--text-mid)',
                      transition:  'all 180ms ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.35)'
                      e.currentTarget.style.color       = 'var(--purple)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color       = 'var(--text-mid)'
                    }}
                  >
                    <FiLinkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg"
                    style={{
                      background:  'rgba(192, 132, 252, 0.06)',
                      border:      '1px solid var(--border)',
                      color:       'var(--text-mid)',
                      transition:  'all 180ms ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.35)'
                      e.currentTarget.style.color       = 'var(--purple)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color       = 'var(--text-mid)'
                    }}
                  >
                    <FiGithub className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Status */}
              <div
                className="mt-auto p-3 rounded-lg"
                style={{ background: 'rgba(74, 222, 128, 0.06)', border: '1px solid rgba(74, 222, 128, 0.2)' }}
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="status-dot" />
                  <span style={{ color: '#4ade80' }}>Connect with me!</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Message form ──────────────────────────────────── */}
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="glass p-5 flex flex-col gap-4 h-full">
              <div className="text-[10px] font-mono" style={{ color: 'var(--text-lo)' }}>// message</div>

              <div>
                <label className="text-xs mb-1.5 block" style={{ color: 'var(--text-lo)' }}>Your name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'rgba(192, 132, 252, 0.5)' }}
                  onBlur={e  => { e.target.style.borderColor = 'var(--border)' }}
                  required
                />
              </div>

              <div>
                <label className="text-xs mb-1.5 block" style={{ color: 'var(--text-lo)' }}>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'rgba(192, 132, 252, 0.5)' }}
                  onBlur={e  => { e.target.style.borderColor = 'var(--border)' }}
                  required
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="text-xs mb-1.5 block" style={{ color: 'var(--text-lo)' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'd love to talk about..."
                  rows="5"
                  style={{ ...inputStyle, resize: 'none', flex: 1 }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(192, 132, 252, 0.5)' }}
                  onBlur={e  => { e.target.style.borderColor = 'var(--border)' }}
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div
                  className="px-3 py-2 rounded-lg text-sm"
                  style={{ background: 'rgba(74, 222, 128, 0.07)', border: '1px solid rgba(74, 222, 128, 0.25)', color: '#4ade80' }}
                >
                  Message sent — I'll get back to you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div
                  className="px-3 py-2 rounded-lg text-sm"
                  style={{ background: 'rgba(248, 113, 113, 0.07)', border: '1px solid rgba(248, 113, 113, 0.25)', color: '#f87171' }}
                >
                  Something went wrong — please email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-5 py-3 text-sm font-semibold rounded-lg"
                style={{
                  background:  isSubmitting ? 'rgba(192, 132, 252, 0.1)' : 'linear-gradient(135deg, #7c3aed, #9333ea)',
                  color:       isSubmitting ? 'var(--text-lo)' : 'white',
                  border:      'none',
                  cursor:      isSubmitting ? 'not-allowed' : 'pointer',
                  boxShadow:   isSubmitting ? 'none' : '0 4px 20px rgba(124, 58, 237, 0.3)',
                  transition:  'opacity 180ms ease, box-shadow 180ms ease',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

export default Contact
