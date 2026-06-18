# Portfolio Update — Content, Positioning, Consistency, and Scroll Fix

You're updating a React + Vite portfolio. Read these files first to understand the
structure before making changes: src/constants/index.js, src/components/Tech.jsx,
src/components/About.jsx, src/components/HeroSection.jsx, src/components/Main.jsx,
src/components/chat/KnowledgePanel.jsx, src/components/chat/MessageBlock.jsx,
src/components/ConversationalEngine.jsx, src/components/Projects.jsx,
src/components/ScrollChatLayout.jsx, and the global stylesheet (index.css / App.css).

## GROUND RULE: single source of truth
Treat src/constants/index.js as the ONE source of truth for all bio copy, skills,
experience, projects, and contact info. Several components currently hardcode their
own copies (About.jsx has its own ABOUT_TEXT; Tech.jsx has its own skills MODULES).
Refactor those components to import from constants/index.js instead of duplicating.
After your changes, a fact should appear in exactly one place in the codebase.

## TASK 1 — Add GeoThread (highest priority; currently missing entirely)
Add as the FIRST entry in the EXPERIENCES array, featured: true:

  year: "May 2026 - Present"
  role: "Founding AI Engineer"
  company: "GeoThread"
  description: "Building the AI layer of an AI-powered property inspection platform —
    PDF parsing, multimodal issue flagging, and the data architecture beneath it."
  achievements:
    - "Designed the PDF-parsing and pre-review issue-flagging pipeline; built a
       multi-tier cost model across AWS Textract, Google Document AI, and Claude
       Vision that surfaced a ~30x cost lever for MVP scoping"
    - "Prototyping multimodal consistency checks that cross-reference inspection
       photos, sensor readings, and text reports to flag discrepancies before
       human review"
    - "Own the AI direction for a sub-10-person startup, turning an ambiguous
       early-stage roadmap into scoped, shippable engineering work"
  technologies: ["Python", "Multimodal AI", "RAG", "Document AI", "GCP", "LLMs"]
  logo: Use a placeholder for now (reuse an existing neutral logo asset so the build
        doesn't break) — a GeoThread logo asset is coming later. Leave a clear
        // TODO: replace with GeoThread logo comment.

## TASK 2 — Add the DESI project
Add to the PROJECTS array, positioned right after Sentinels (so order is:
Sentinels, DESI, AI Learning Companion / EduForge, then the rest):

  title: "DESI Spectra Foundation Model"
  duration: "Mar 2026 - May 2026"
  category: "Deep Learning / Foundation Models"
  description: "Built a 21M-parameter decoder-only transformer foundation model from
    scratch in PyTorch, pretrained on DESI astronomical spectra with a two-phase
    masked-modeling curriculum. Achieved ~100x over a random baseline on
    masked-spectrum reconstruction, then adapted the learned representations for
    downstream redshift estimation."
  technologies: ["Python", "PyTorch", "Transformers", "Self-Supervised Learning",
    "Foundation Models"]
  logs:
    - "> architecture:    decoder-only transformer [21M params]"
    - "> pretraining:     two-phase masked-modeling curriculum"
    - "> reconstruction:  ~100x over random baseline"
    - "> downstream:      redshift estimation [adapted representations]"
  github: OMIT the GitHub button for this project — the repo doesn't exist yet. The
    Projects component already handles a missing github field gracefully; confirm it
    does and that no button renders when github is absent.
  image: Reuse an existing asset from src/assets/projects/ as a placeholder and leave
    a // TODO: replace with DESI image comment.

## TASK 3 — Fix Sentinels
- Change its duration to "Sep 2025" everywhere it appears (PROJECTS currently says
  "Dec 2025"; reconcile to "Sep 2025").
- Projects.jsx hardcodes a featured check: `project.title === "Sentinels -
  Autonomous Financial Analyst"`. Replace that title-string match by driving
  "featured" from a `featured: true` field on the project object instead, and set
  featured: true on the Sentinels project. This prevents breakage if the title
  string ever changes.

## TASK 4 — Update positioning copy (consistently, everywhere)
New positioning line, used wherever a tagline/subtitle appears:
  "AI Engineer — building multimodal LLM & agent systems"
Keep "Full-Stack Developer" only as secondary context in longer bios, never as the
lead. Search for the old "AI Engineer & Full-Stack Developer" string and its variants
and update ALL of these locations:
- constants/index.js: MAIN_CONTENT and ABOUT_TEXT
- HeroSection.jsx subtitle
- Main.jsx ("AI ENGINEER & FULL-STACK DEVELOPER" and SYS_INFO ROLE value)
- KnowledgePanel.jsx ("AI Engineer · Full-Stack Dev")
- ConversationalEngine.jsx header ("Online · AI Engineer")
- MessageBlock.jsx WelcomeContent and ContactContent

New ABOUT_TEXT (replace existing; this becomes the single source in constants/index.js):
"Hey, I'm Aadesh — an AI Engineer pursuing my Master's in Computer Science (AI
Concentration) at the University of San Francisco. I build production-grade AI
systems: multimodal LLM pipelines, multi-agent architectures, RAG systems, and the
serving and evaluation infrastructure that makes them reliable.

Right now I'm the founding AI Engineer at GeoThread, building the AI layer of a
property-inspection platform — PDF parsing, multimodal issue flagging, and the data
architecture beneath it. Before that I led development of a Web3-integrated gaming
platform, built secure systems research on the GEMSOS kernel, and optimized
autonomous-vehicle sensor fusion.

I'm most interested in the boundary between AI and production systems — retrieval,
agents, evaluation, serving, and cost. Currently sharpening that edge through
hands-on work in LLM serving, multimodal AI, and applied machine learning."

Also update MAIN_CONTENT to a one-paragraph version with the same positioning (lead
with AI Engineer, mention GeoThread, multimodal/agents/RAG, AWS SAA certified).

## TASK 5 — Update skills (reconcile Tech.jsx MODULES and constants SKILLS)
Make both reflect this grouping (keep whatever proficiency/icon scaffolding each
component needs structurally — just update the contents):
- Languages: Python, Go, Java, TypeScript, JavaScript, SQL, C/C++
- AI/ML: LangGraph, LangChain, PyTorch, Transformers, RAG (hybrid retrieval,
  reranking), FAISS, pgvector, LLM Evaluation (Ragas), Multi-Agent Systems,
  Multimodal AI, Prompt Engineering, NLP, Machine Learning
- Infrastructure: AWS, GCP, Docker, Kubernetes, FastAPI, Spring Boot, PostgreSQL,
  Firestore, REST APIs
- Frontend (keep, secondary): React, Next.js, Tailwind CSS, Three.js
Remove TensorFlow and Scikit-learn. Keep Pinecone ONLY attached to the Doc Medical
Chatbot project, not in the top-level skills.

## TASK 6 — Soften Soundromeda's "projecting 200%" language
Anywhere it says "projecting 200% increase in user engagement" (or "Projected 200%
increase..."), change to "architected to support a projected 200% increase in user
engagement." Keep the 99.9% uptime / sub-second latency metrics as-is.

## TASK 7 — GitHub username consistency
The codebase uses both github.com/Aadeshh and github.com/AadeshThoppae.
- Standardize all PROFILE links (CONTACT.github, Navbar, HeroSection, KnowledgePanel,
  any social links) to: https://github.com/aadeshh
- Do NOT blanket-replace project repo URLs — each project's github field must keep
  pointing to wherever that repo actually lives. Specifically: the "AI Learning
  Companion" / EduForge project repo lives under AadeshThoppae
  (https://github.com/AadeshThoppae/AI-Learning-Companion) — leave that one as-is.
  All other existing project repos are under Aadeshh — leave those as-is too.
- Only the profile/social links get normalized to aadeshh.

## TASK 8 — Replace vanity stats
"20+ projects" and "5+ years coding" appear in Main.jsx METRICS, KnowledgePanel.jsx
STATS, and Navbar.jsx diagnostic params. Replace with concrete, defensible signals,
e.g.: "AWS SAA-C03 certified", "MSc CS (AI) @ USF", "Founding AI Engineer @
GeoThread", "Multi-agent & RAG systems". Drop unverifiable counts. Keep the 99.9%
uptime stat only where it's tied to the Soundromeda context, not as a global metric.

## TASK 9 — Resume file
The download links point to public/resume/Aadesh_Thoppae.pdf (referenced in
HeroSection.jsx, Main.jsx, KnowledgePanel.jsx, and any LINKS array). A new resume PDF
will be dropped into that same path. Keep the path and download filename consistent
across all references — don't rename anything, just confirm every link points to
public/resume/Aadesh_Thoppae.pdf with download="Aadesh_Thoppae.pdf".

## TASK 10 — Fix buggy scroll-snap (root cause + refined component)
The scroll currently behaves badly: it won't magnet to the next section properly and
is overly sensitive. ROOT CAUSE: full-page mandatory scroll-snapping
(scroll-snap-type: y mandatory in global CSS) combined with scrollSnapStop: 'always',
scrollSnapAlign, and minHeight: 100vh on sections taller than the viewport. Mandatory
snap traps scroll on tall sections and fights the programmatic smooth-scroll from the
ChatBar/TimelineNav. A prior band-aid added a ~2.2s content-reveal delay — remove that
entirely.

Do BOTH of these:

(a) In the global stylesheet (index.css / App.css), find and REMOVE any
`scroll-snap-type` rule (likely `html { scroll-snap-type: y mandatory; }`). Keep
`scroll-behavior: smooth` if present.

(b) Replace src/components/ScrollChatLayout.jsx entirely with this refined version
(free-scroll, reveal-once at ~420ms, AnimatePresence typing→response swap,
scrollIntoView navigation, widened active-section observer band, dropped the
heavy center radial gradient):

```jsx
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

/* Each section reveals as a chat exchange: user bubble -> brief typing -> response.
   Free-scrolling (no snap). Animation plays ONCE, fast, and never gates the content. */
const ChatSection = ({ id, prompt, children }) => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [showResponse, setShowResponse] = useState(false)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setShowResponse(true), 420)
    return () => clearTimeout(t)
  }, [inView])

  return (
    <section
      id={`snap-${id}`}
      ref={ref}
      className="flex flex-col justify-center py-20 sm:py-24"
      style={{ scrollMarginTop: '2rem' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-end px-4 sm:px-6 pt-2 pb-3"
      >
        <div
          className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-white max-w-xs sm:max-w-sm leading-relaxed"
          style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)', boxShadow: '0 4px 24px rgba(124,58,237,0.28)' }}
        >
          {prompt}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {inView && !showResponse && (
          <motion.div key="typing"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}>
            <TypingIndicator />
          </motion.div>
        )}
        {showResponse && (
          <motion.div key="response"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}>
            <AIAvatar />
            {children}
          </motion.div>
        )}
      </AnimatePresence>
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
```

After replacing it: search the codebase for any remaining scrollSnapAlign,
scrollSnapStop, or minHeight: '100vh' tied to these sections and remove them too.
Verify scroll feels free (no magnet trapping on tall sections like Projects), the
ChatBar and TimelineNav jumps land cleanly with a little top margin, and content is
readable immediately with no multi-second delay.

## OUT OF SCOPE (don't touch unless it breaks the build)
- The IOURING experience entry — leave it for now, I'll decide separately.
- scripts/convert-images.js and src/utils/imageOptimization.js — leave as-is.
- The overall color system and fonts — keep the current aesthetic.

## WHEN DONE
- Run the dev build and confirm: no broken imports, no missing-asset errors, no
  console errors on load.
- Manually sanity-check scroll behavior per Task 10.
- List every file you changed and exactly what changed in each.
- Flag anything you had to guess, any placeholder/TODO you left, and anything that
  didn't compile on the first try and how you resolved it.