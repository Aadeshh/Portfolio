import React from 'react'
import profImg from '../../assets/Prof.jpg'
import { CONTACT } from '../../constants/index'

const INTER = 'Inter, system-ui, -apple-system, sans-serif'

const STATS = [
  { label: 'Certification', value: 'AWS SAA-C03'       },
  { label: 'Degree',        value: 'MSc CS (AI)'       },
  { label: 'Current role',  value: 'Founding AI Eng.'  },
  { label: 'Focus',         value: 'Agents · RAG · LLMs' },
]

const LINKS = [
  {
    label: 'Download Resume',
    href: `${import.meta.env.BASE_URL}resume/Aadesh_Thoppae.pdf`,
    download: 'Aadesh_Thoppae.pdf',
  },
  { label: 'GitHub',    href: CONTACT.github              },
  { label: 'LinkedIn',  href: CONTACT.linkedin            },
  { label: 'Email',     href: `mailto:${CONTACT.email}`  },
]

const KnowledgePanel = () => (
  <div
    className="flex flex-col h-full overflow-y-auto"
    style={{ fontFamily: INTER, background: '#0a0a0a' }}
  >
    {/* Profile section */}
    <div className="flex flex-col items-center px-5 py-8 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      {/* Hexagon photo with soft green glow ring */}
      <div className="relative mb-4">
        <div
          className="absolute clip-hex"
          style={{
            inset: '-5px',
            background: 'linear-gradient(135deg, rgba(34,197,94,0.25) 0%, rgba(37,99,235,0.15) 100%)',
          }}
        />
        <div className="relative w-24 h-24 clip-hex overflow-hidden">
          <img
            src={profImg}
            alt="Aadesh Thoppae"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <p className="text-[#f4f4f5] font-semibold text-[15px] leading-none">Aadesh Thoppae</p>
      <p className="text-[#3b82f6] text-[12.5px] mt-1.5 text-center leading-tight">
        AI Engineer — multimodal LLM &amp; agent systems
      </p>
      <div className="flex items-center gap-1.5 mt-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
        <span className="text-[#6b7280] text-[11.5px]">Open to work</span>
      </div>
    </div>

    {/* Quick stats */}
    <div className="px-4 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <p className="text-[#4b5563] text-[11px] font-medium uppercase tracking-wider mb-3">Quick stats</p>
      <div className="grid grid-cols-2 gap-2">
        {STATS.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl px-3 py-2.5 border"
            style={{ background: '#141414', borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <p className="text-[#f4f4f5] font-semibold text-[13.5px] leading-none">{value}</p>
            <p className="text-[#6b7280] text-[11px] mt-1 leading-snug">{label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Links */}
    <div className="px-4 py-5">
      <p className="text-[#4b5563] text-[11px] font-medium uppercase tracking-wider mb-3">Links</p>
      <div className="space-y-2">
        {LINKS.map(({ label, href, download }) => (
          <a
            key={label}
            href={href}
            download={download || undefined}
            target={download ? undefined : '_blank'}
            rel={download ? undefined : 'noreferrer'}
            className="flex items-center gap-2 w-full px-3.5 py-2.5 rounded-xl text-[12.5px] text-[#9ca3af] hover:text-[#f4f4f5] border"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
          >
            {label}
          </a>
        ))}
      </div>
    </div>

    {/* Footer */}
    <div className="mt-auto px-5 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <p className="text-[#374151] text-[11px] leading-[1.7]">
        University of San Francisco<br />
        MSc Computer Science · AI Concentration<br />
        2025 – 2027
      </p>
    </div>
  </div>
)

export default KnowledgePanel
