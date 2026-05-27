import React from 'react'

const INTER = 'Inter, system-ui, -apple-system, sans-serif'
const MONO  = '"JetBrains Mono", "SF Mono", monospace'

/* ── Shared avatar ───────────────────────────────────────────── */
const Avatar = ({ size = 8 }) => (
  <div
    className={`w-${size} h-${size} rounded-full flex items-center justify-center shrink-0 border`}
    style={{ background: '#141414', borderColor: 'rgba(255,255,255,0.08)' }}
  >
    <span className="text-[#22c55e] text-[12px] font-bold" style={{ fontFamily: MONO }}>A</span>
  </div>
)

/* ── Section label ───────────────────────────────────────────── */
const SectionLabel = ({ children }) => (
  <p className="text-[#4b5563] text-[11px] font-medium uppercase tracking-wider">{children}</p>
)

/* ── Tech tag ────────────────────────────────────────────────── */
const Tag = ({ children }) => (
  <span
    className="px-2.5 py-1 rounded-full text-[11.5px] text-[#9ca3af]"
    style={{ background: '#1f1f1f' }}
  >
    {children}
  </span>
)

/* ── Card wrapper ────────────────────────────────────────────── */
const Card = ({ children, className = '' }) => (
  <div
    className={`rounded-xl overflow-hidden border ${className}`}
    style={{ background: '#141414', borderColor: 'rgba(255,255,255,0.06)' }}
  >
    {children}
  </div>
)

/* ── User bubble ─────────────────────────────────────────────── */
const UserBubble = ({ msg }) => (
  <div className="flex justify-end items-end gap-2.5">
    <div className="max-w-[72%]">
      <div className="px-4 py-2.5 rounded-2xl rounded-br-md bg-[#2563eb] text-white text-[13.5px] leading-[1.55]">
        {msg.text}
      </div>
      <p className="text-[10.5px] text-[#4b5563] mt-1.5 text-right">{msg.ts}</p>
    </div>
  </div>
)

/* ── Agent bubble shell ──────────────────────────────────────── */
const AgentBlock = ({ msg }) => (
  <div className="flex items-end gap-3">
    <Avatar />
    <div className="flex-1 min-w-0">
      <div
        className="px-4 py-4 rounded-2xl rounded-bl-md border text-[13.5px] leading-[1.65] text-[#d4d4d8]"
        style={{ background: '#1a1a1a', borderColor: 'rgba(255,255,255,0.06)', fontFamily: INTER }}
      >
        {renderPayload(msg.payload)}
      </div>
      <p className="text-[10.5px] text-[#4b5563] mt-1.5 pl-1">{msg.ts}</p>
    </div>
  </div>
)

/* ── Payload router ──────────────────────────────────────────── */
const renderPayload = (payload) => {
  switch (payload.type) {
    case 'welcome':  return <WelcomeContent />
    case 'projects': return <ProjectsContent projects={payload.projects} />
    case 'academic': return <AcademicContent education={payload.education} experiences={payload.experiences} />
    case 'skills':   return <SkillsContent skills={payload.skills} />
    case 'about':    return <AboutContent text={payload.text} certifications={payload.certifications} />
    case 'contact':  return <ContactContent contact={payload.contact} />
    default:         return null
  }
}

/* ── Welcome ─────────────────────────────────────────────────── */
const WelcomeContent = () => (
  <div className="space-y-3">
    <p>
      Hi! I'm Aadesh's portfolio assistant — here to help you explore his work and background.
    </p>
    <p>
      Aadesh is an <span className="text-white font-semibold">AI Engineer and Full-Stack Developer</span>{' '}
      pursuing his Master's in Computer Science (AI concentration) at the University of San Francisco.
      He builds production-grade AI systems — multi-agent LLM pipelines, cloud-native applications,
      and scalable full-stack products.
    </p>
    <p className="text-[#6b7280] text-[12.5px]">
      Choose a topic below to get started. ↓
    </p>
  </div>
)

/* ── Projects ────────────────────────────────────────────────── */
const ProjectsContent = ({ projects }) => (
  <div className="space-y-4">
    <p>Here are Aadesh's key projects, spanning AI systems, full-stack apps, and systems engineering:</p>
    <div className="space-y-3">
      {projects.map((p, i) => (
        <Card key={i}>
          {/* Header */}
          <div className="px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[#f4f4f5] font-semibold text-[13.5px] leading-snug">{p.title}</p>
                {p.category && (
                  <p className="text-[#6b7280] text-[11.5px] mt-0.5">{p.category}</p>
                )}
              </div>
              <div className="flex items-center gap-2.5 shrink-0 pt-0.5">
                {p.duration && <span className="text-[11.5px] text-[#4b5563]">{p.duration}</span>}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12.5px] text-[#3b82f6] hover:text-[#93c5fd] font-medium"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-4 py-3 space-y-3">
            <p className="text-[#a1a1aa] text-[13px] leading-[1.65]">{p.description}</p>

            {/* Log block */}
            {p.logs && p.logs.length > 0 && (
              <div className="rounded-lg px-3 py-2.5 space-y-0.5" style={{ background: '#0d0d0d', fontFamily: MONO }}>
                {p.logs.map((line, j) => (
                  <p key={j} className="text-[#22c55e] text-[11.5px] leading-[1.65]">{line}</p>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {p.technologies.map((t, j) => <Tag key={j}>{t}</Tag>)}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
)

/* ── Academic ────────────────────────────────────────────────── */
const AcademicContent = ({ education, experiences }) => (
  <div className="space-y-5">
    <p>Here's a breakdown of Aadesh's academic background and professional experience:</p>

    <div className="space-y-2.5">
      <SectionLabel>Education</SectionLabel>
      {education.map((e, i) => (
        <Card key={i}>
          <div className="px-4 py-3.5">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[#f4f4f5] font-semibold text-[13.5px] leading-snug">{e.institution}</p>
              {e.status && (
                <span className="text-[11px] text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                  {e.status}
                </span>
              )}
            </div>
            <p className="text-[#a1a1aa] text-[13px] mt-1">{e.degree}</p>
            <p className="text-[#4b5563] text-[12px] mt-0.5">{e.duration}</p>
            {e.coursework && (
              <p className="text-[#6b7280] text-[12px] mt-2.5 leading-[1.65]">
                <span className="text-[#52525b] font-medium">Coursework: </span>{e.coursework}
              </p>
            )}
          </div>
        </Card>
      ))}
    </div>

    <div className="space-y-2.5">
      <SectionLabel>Experience</SectionLabel>
      {experiences.map((e, i) => (
        <Card key={i}>
          <div className="px-4 py-3.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[#f4f4f5] font-semibold text-[13.5px] leading-snug">{e.role}</p>
                <p className="text-[#3b82f6] text-[12.5px] mt-0.5">{e.company}</p>
              </div>
              <p className="text-[11.5px] text-[#4b5563] shrink-0 text-right">{e.year}</p>
            </div>
            <p className="text-[#a1a1aa] text-[13px] leading-[1.65] mt-2.5">{e.description}</p>
            <ul className="mt-2.5 space-y-1.5">
              {e.achievements.slice(0, 2).map((a, j) => (
                <li key={j} className="flex gap-2 text-[12.5px] text-[#6b7280]">
                  <span className="text-[#22c55e] shrink-0 mt-0.5">·</span>
                  <span className="leading-[1.55]">{a}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {e.technologies.map((t, j) => <Tag key={j}>{t}</Tag>)}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
)

/* ── Skills ──────────────────────────────────────────────────── */
const SkillsContent = ({ skills }) => (
  <div className="space-y-5">
    <p>Here's Aadesh's full technical stack across all domains:</p>
    {Object.values(skills).map(({ category, items }) => (
      <div key={category} className="space-y-2">
        <SectionLabel>{category}</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {items.map(({ name, proficiency, certified }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{ background: '#1a1a1a', borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <span className="text-[#e4e4e7] text-[12.5px]">{name}</span>
              {certified && (
                <span className="text-[10px] text-[#22c55e] bg-[#22c55e]/10 px-1.5 py-0.5 rounded-full leading-none">
                  certified
                </span>
              )}
              <span className="text-[#4b5563] text-[11px]">{proficiency}%</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)

/* ── About ───────────────────────────────────────────────────── */
const AboutContent = ({ text, certifications }) => (
  <div className="space-y-4">
    {text.split('\n\n').filter(p => p.trim()).map((para, i) => (
      <p key={i} className="leading-[1.7]">{para.trim()}</p>
    ))}
    {certifications && certifications.length > 0 && (
      <div className="space-y-2.5 pt-1">
        <SectionLabel>Certifications</SectionLabel>
        {certifications.map((c, i) => (
          <Card key={i}>
            <div className="flex items-center gap-3.5 px-4 py-3.5">
              <div className="w-9 h-9 rounded-full bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                <span className="text-[#22c55e] text-[14px]">✓</span>
              </div>
              <div>
                <p className="text-[#f4f4f5] font-semibold text-[13.5px]">{c.name}</p>
                <p className="text-[#6b7280] text-[12px] mt-0.5">{c.issuer} · {c.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    )}
  </div>
)

/* ── Contact ─────────────────────────────────────────────────── */
const ContactContent = ({ contact }) => {
  const fields = [
    { label: 'Email',     value: contact.email,                       href: `mailto:${contact.email}` },
    { label: 'Phone',     value: contact.phoneNo                                                       },
    { label: 'GitHub',    value: 'github.com/Aadeshh',                href: contact.github            },
    { label: 'LinkedIn',  value: 'linkedin / aadesh-thoppae',         href: contact.linkedin          },
    { label: 'Portfolio', value: 'aadeshh.github.io/Portfolio',       href: contact.portfolio         },
  ]

  return (
    <div className="space-y-4">
      <p>
        Aadesh is actively looking for <span className="text-white font-medium">AI Engineering, MLOps,
        and Cloud Infrastructure</span> roles. Here's how to reach him:
      </p>
      <div className="space-y-2">
        {fields.map(({ label, value, href }) => (
          <Card key={label}>
            <div className="flex items-center gap-4 px-4 py-3">
              <p className="text-[#4b5563] text-[11.5px] font-medium w-20 shrink-0">{label}</p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                  className="text-[#60a5fa] hover:text-white text-[13px] truncate"
                >
                  {value}
                </a>
              ) : (
                <span className="text-[#d4d4d8] text-[13px]">{value}</span>
              )}
            </div>
          </Card>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[12.5px] text-[#22c55e]">
        <span className="w-2 h-2 rounded-full bg-[#22c55e] shrink-0" />
        Open to work · Response time under 24 hours
      </div>
    </div>
  )
}

/* ── Export ──────────────────────────────────────────────────── */
const MessageBlock = ({ msg }) => {
  if (msg.role === 'user') return <UserBubble msg={msg} />
  return <AgentBlock msg={msg} />
}

export default MessageBlock
