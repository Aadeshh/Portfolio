import React from 'react'
import profImg from '../assets/Prof.jpg'
import resume from '../../public/resume/Aadesh_Thoppae.pdf'

const METRICS = [
  { label: 'CODING_EXP',       value: '5+ YRS',  bar: 72,  pass: false },
  { label: 'PROJECTS_SHIPPED', value: '20+',      bar: 100, pass: false },
  { label: 'AWS_CERT',         value: 'SAA-C03',  bar: null, pass: true },
  { label: 'LANGUAGES',        value: '6 ACTIVE', bar: 60,  pass: false },
]

const SYS_INFO = [
  { k: 'ROLE',   v: 'AI ENGINEER'  },
  { k: 'STATUS', v: 'OPEN TO WORK' },
  { k: 'DEGREE', v: 'MSc CS (AI)'  },
  { k: 'CERT',   v: 'AWS SAA-C03'  },
]

const Main = () => {
  const handleContactClick = () => {
    const el = document.getElementById('contact')
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
  }

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = resume
    link.download = 'Aadesh_Thoppae.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className='min-h-screen flex items-center justify-center relative py-8 px-4 sm:px-6'>
      <div className='relative z-10 w-full max-w-6xl mx-auto'>

        {/* Frame label */}
        <div className="text-xs text-slate-500 mb-1.5 tracking-widest">
          PROFILE: AADESH_THOPPAE // OPERATOR_RECORD
        </div>

        {/* Main panel */}
        <div className='border border-slate-700 bg-panel lg:grid lg:grid-cols-5'>

          {/* ── Left: content (3 cols) ─────────────────────────── */}
          <div className='lg:col-span-3 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-700 flex flex-col gap-7'>

            {/* Header row */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <span className="text-xs text-slate-400 tracking-widest">// OPERATOR</span>
              <span className="flex items-center gap-2 text-xs">
                <span className="status-dot" />
                <span className="text-green-400 font-medium tracking-wide">OPEN TO WORK</span>
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 tracking-tight leading-none'>
                AADESH<br />THOPPAE
              </h1>
              <div className="mt-3 text-sky-400 text-xs tracking-[0.2em]">
                AI ENGINEER &amp; FULL-STACK DEVELOPER
              </div>
            </div>

            {/* Affiliation */}
            <div className="space-y-1.5 text-xs border-l-2 border-slate-700 pl-4">
              <div className="text-slate-300">MSc Computer Science [AI Concentration]</div>
              <div className="text-slate-300">University of San Francisco &nbsp;→&nbsp; 2025–2027</div>
              <div className="pt-1 text-slate-500">
                BSc Computer Science &nbsp;•&nbsp; UC Davis &nbsp;•&nbsp; 2020–2024
              </div>
            </div>

            {/* Metric array */}
            <div className="space-y-3">
              <div className="text-xs text-slate-500 tracking-widest mb-1">// METRIC_ARRAY</div>
              {METRICS.map(({ label, value, bar, pass }) => (
                <div key={label} className="flex items-center gap-3 text-xs">
                  <span className="text-slate-400 w-44 shrink-0">{label}</span>
                  {bar !== null ? (
                    <div className="flex-1 h-1.5 bg-slate-800">
                      <div
                        className="h-full bg-sky-400 metric-bar-fill"
                        style={{ width: `${bar}%` }}
                      />
                    </div>
                  ) : (
                    <div className="flex-1" />
                  )}
                  <span className={`shrink-0 font-medium ${pass ? 'text-green-400' : 'text-sky-300'}`}>
                    {pass ? `[PASS] ${value}` : value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className='flex flex-col sm:flex-row gap-3 pt-1'>
              <button
                onClick={handleContactClick}
                className='flex-1 flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-canvas tracking-widest'
              >
                &gt;&nbsp;./connect.sh
              </button>
              <button
                onClick={handleResumeDownload}
                className='flex-1 flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-slate-100 tracking-widest'
              >
                &gt;&nbsp;./resume.pdf
              </button>
            </div>
          </div>

          {/* ── Right: photo + sys info (2 cols) ─────────────── */}
          <div className='lg:col-span-2 flex flex-col'>

            {/* Profile image — full color */}
            <div className='flex items-center justify-center p-8 border-b border-slate-700 bg-canvas flex-1'>
              <div className='relative'>
                <div className="absolute -inset-px border border-sky-400/40 pointer-events-none" />
                <img
                  src={profImg}
                  alt="Aadesh Thoppae"
                  className='w-44 h-44 sm:w-52 sm:h-52 object-cover object-top'
                />
              </div>
            </div>

            {/* System info 2×2 grid — meaningful labels */}
            <div className='grid grid-cols-2 text-xs'>
              {SYS_INFO.map(({ k, v }, i) => (
                <div
                  key={k}
                  className={`p-4 border-slate-700 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border`}
                >
                  <div className="text-slate-500 mb-1">{k}</div>
                  <div className="text-sky-300 font-medium">{v}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Frame footer */}
        <div className="mt-2 text-xs text-slate-600 tracking-widest text-right">
          SCROLL_TO_CONTINUE ↓
        </div>
      </div>
    </section>
  )
}

export default Main
