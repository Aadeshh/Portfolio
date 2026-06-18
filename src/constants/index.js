import project1 from "../assets/projects/breal.png";
import project2 from "../assets/projects/3D.png";
import project4 from "../assets/projects/enigma.jpeg";
import project5 from "../assets/projects/DOC.png";
import project6 from "../assets/projects/image6.jpg";
import project7 from "../assets/projects/project6.png";
import desiImage from "../assets/DESI.jpg";

import logoGeoThread from "../assets/GeoThread.png";
import logoSoundromeda from "../assets/Soundromeda.webp";
import logoUCD from "../assets/UCD.jpg";
import logoUCDEv from "../assets/UCDEV2.jpg";
import logoIOURING from "../assets/IOURING.jpeg";
import logoUSF from "../assets/usf.jpeg";

export const MAIN_CONTENT = `AI Engineer pursuing a Master's in Computer Science (AI Concentration) at the University of San Francisco. As Founding AI Engineer at GeoThread, I build multimodal LLM pipelines, multi-agent architectures, and RAG systems — with a focus on making them fast, reliable, and cost-efficient. AWS Solutions Architect Associate certified.`;

export const ABOUT_TEXT = `Hey, I'm Aadesh — an AI Engineer pursuing my Master's in Computer Science (AI Concentration) at the University of San Francisco. I build production-grade AI systems: multimodal LLM pipelines, multi-agent architectures, RAG systems, and the serving and evaluation infrastructure that makes them reliable.

Right now I'm the founding AI Engineer at GeoThread, building the AI layer of a property-inspection platform — PDF parsing, multimodal issue flagging, and the data architecture beneath it. Before that I led development of a Web3-integrated gaming platform, built secure systems research on the GEMSOS kernel, and optimized autonomous-vehicle sensor fusion.

I'm most interested in the boundary between AI and production systems — retrieval, agents, evaluation, serving, and cost. Currently sharpening that edge through hands-on work in LLM serving, multimodal AI, and applied machine learning.`;

export const EXPERIENCES = [
  {
    year: "May 2026 - Present",
    role: "Founding AI Engineer",
    company: "GeoThread",
    logo: logoGeoThread,
    description: `Building the AI layer of an AI-powered property inspection platform — PDF parsing, multimodal issue flagging, and the data architecture beneath it.`,
    achievements: [
      "Designed the PDF-parsing and pre-review issue-flagging pipeline; built a multi-tier cost model across AWS Textract, Google Document AI, and Claude Vision that surfaced a ~30x cost lever for MVP scoping",
      "Prototyping multimodal consistency checks that cross-reference inspection photos, sensor readings, and text reports to flag discrepancies before human review",
      "Own the AI direction for a sub-10-person startup, turning an ambiguous early-stage roadmap into scoped, shippable engineering work",
    ],
    technologies: ["Python", "Multimodal AI", "RAG", "Document AI", "GCP", "LLMs"],
    featured: true,
  },
  {
  year: "Jan 2026 - Present",
    role: "Student Research Assistant",
    company: "Center for Law, Tech, and Social Good (USF)",
    logo: logoUSF, // Placeholder for company logo
    description: `Administer and maintain a blockchain validator node as part of a grant-funded initiative to explore socially beneficial decentralized infrastructure. Orchestrated a campus-wide hackathon focused on ”Blockchain for Social Good,” leading event promotion and technical programming to
                  increase blockchain fluency among CS students.`,
    achievements: [
      "Deployed and actively maintain an XRPL validator node as part of a Ripple-funded grant initiative exploring decentralized infrastructure for social good",
      "Organized a campus-wide 'Blockchain for Social Good' hackathon from scratch — drove technical programming, speaker outreach, and event promotion",
      "Expanded XRP Ledger literacy among CS students through structured hackathon challenges and hands-on workshops with live blockchain infrastructure",
      "Bridging decentralized technology with law and social policy as part of USF's interdisciplinary Center for Law, Tech, and Social Good",
    ],
    technologies: ["XRPL", "XRP", "Blockchain", "Node.js", "TypeScript"],
    featured: false,
  },
  {
    year: "Aug 2024 - Aug 2025",
    role: "Lead Software Developer",
    company: "Soundromeda",
    logo: logoSoundromeda, // Placeholder for company logo
    description: `Spearheaded development of Odyssey, a gaming platform integrating Web3 payment systems and music streaming services, architected to support a projected 200% increase in user engagement. Optimized cross-platform architecture ensuring 99.9% uptime and sub-second response times while handling concurrent media streaming. Orchestrated secure payment processing and authentication workflows through multiple third-party APIs, while maintaining robust data management protocols.`,
    achievements: [
      "Architected to support a projected 200% increase in user engagement",
      "Achieved 99.9% system uptime with sub-second response times across concurrent media streaming",
      "Defined product requirements and delivered scalable architecture balancing UX, compliance, and reliability",
      "Integrated multiple Web3 payment systems and third-party APIs with secure, robust payment workflows",
      "Partnered with leadership on product roadmaps, aligning technical execution with company growth goals",
    ],
    technologies: ["TypeScript", "Next.js", "Docker", "Firebase", "Web3"],
    featured: true,
  },
  {
    year: "Aug 2023 - Jun 2024",
    role: "Cybersecurity Lab Assistant",
    company: "UC Davis",
    logo: logoUCD, // Placeholder for company logo
    description: `Collaborated with professors on the GEMSOS security kernel, enhancing security features and gaining valuable insights into advanced security protocols. Established a multi-year project to implement a secure voting system, improving system reliability and security protocols.`,
    achievements: [
      "Enhanced GEMSOS security kernel with advanced security protocols",
      "Established multi-year secure voting system project",
      "Improved system reliability and security protocol implementation",
      "Collaborated on cutting-edge cybersecurity research initiatives"
    ],
    technologies: ["GEMSOS", "C++", "Security Protocols", "Cryptography"],
  },
  {
    year: "Aug 2023 - Oct 2023",
    role: "Software Engineering Intern",
    company: "IOURING",
    logo: logoIOURING, 
    description: `Designed and developed high-performance Client-Server Application in Go, leveraging client pooling and MySQL for efficient data storage. Engineered a RESTful API to organize and handle tasks in a ToDo list fashion.`,
    achievements: [
      "Developed high-performance Client-Server Application in Go",
      "Implemented efficient client pooling for optimized resource management",
      "Engineered RESTful API with MySQL integration",
      "Delivered scalable task management system architecture"
    ],
    technologies: ["Go", "MySQL", "RESTful API", "Client Pooling"],
  },
  {
    year: "Jun 2023 - Jun 2024",
    role: "Developer - Connected and Autonomous Vehicles Team",
    company: "UCD EcoCar",
    logo: logoUCDEv, 
    description: `Enhanced EV's performance for competition by upgrading technologies used by the Connected and Autonomous Vehicle team. Conducted Vehicle benchmark tests to identify and mitigate inefficiencies in the sensor fusion algorithms. Developed an enhanced sensor fusion algorithm, increasing reliability by 20% to produce greater results in competition.`,
    achievements: [
      "Increased sensor fusion algorithm reliability by 20%",
      "Enhanced EV performance for competitive advantage",
      "Conducted comprehensive vehicle benchmark testing",
      "Optimized Connected and Autonomous Vehicle technologies"
    ],
    technologies: ["Python", "C++", "MATLAB", "RTMaps", "Sensor Fusion", "Autonomous Systems"],
  },
];

export const PROJECTS = [
  {
    title: "Sentinels - Autonomous Financial Analyst",
    image: project7,
    duration: "Sep 2025",
    category: "AI & Cloud Infrastructure",
    featured: true,
    description:
      "Architected a proactive, multi-agent system that autonomously manages financial portfolio risk. Unlike passive chatbots, this 'push-based' agent wakes up daily via AWS EventBridge to research, analyze, and critique market data before the bell rings. Features a cyclic LangGraph architecture where 'Analyst' and 'Critic' agents engage in iterative debate to self-correct hallucinations, deployed as a containerized serverless function on AWS Lambda to ensure 99.9% reliability at near-zero cost.",
    technologies: ["LangGraph (Multi-Agent)", "AWS Lambda (Docker)", "AWS EventBridge", "Python", "Slack API"],
    github: "https://github.com/Aadeshh/FinancialAgent",
    logs: [
      "> scheduler:       EventBridge trigger [06:00 EST / daily]",
      "> agent_graph:     Analyst → Critic → Analyst [cyclic]",
      "> hallucinate_chk: PASS [0 flagged this run]",
      "> runtime:         Lambda [Docker container] @ us-east-1",
      "> cost_per_run:    ~$0.00 [serverless invocation]",
    ],
  },
  {
    title: "DESI Spectra Foundation Model",
    image: desiImage,
    duration: "Mar 2026 - May 2026",
    category: "Deep Learning / Foundation Models",
    description:
      "Built a 21M-parameter decoder-only transformer foundation model from scratch in PyTorch, pretrained on DESI astronomical spectra with a two-phase masked-modeling curriculum. Achieved ~100x over a random baseline on masked-spectrum reconstruction, then adapted the learned representations for downstream redshift estimation.",
    technologies: ["Python", "PyTorch", "Transformers", "Self-Supervised Learning", "Foundation Models"],
    logs: [
      "> architecture:    decoder-only transformer [21M params]",
      "> pretraining:     two-phase masked-modeling curriculum",
      "> reconstruction:  ~100x over random baseline",
      "> downstream:      redshift estimation [adapted representations]",
    ],
  },
  {
    title: "AI Learning Companion",
    image: project6,
    duration: "Sep 2025 - Nov 2025",
    category: "AI & Full-Stack",
    description:
      "Built a secure In-Memory Code Execution Engine (JavaCompiler API) mirroring LeetCode's backend, with Regex-based sandboxing and custom ClassLoaders to prevent malicious I/O. Designed a Multi-Model AI Pipeline using LangChain4j that dynamically routes complex tasks to Gemini Pro and latency-sensitive tasks to Gemini Flash, reducing latency by ~60%. Implemented a RAG-based PDF processor (Apache PDFBox) that parses documents into structured study artifacts, cached via session repositories to eliminate redundant API calls.",
    technologies: ["Java", "TypeScript", "Spring Boot", "Next.js", "React", "Tailwind CSS","LangChain4j", "Large Language Models (LLMs)", "Prompt Engineering", "Apache PDFBox", "Maven", "Git"],
    github: "https://github.com/AadeshThoppae/AI-Learning-Companion",
    logs: [
      "> sandbox:         JavaCompiler API + ClassLoader [isolated JVM]",
      "> model_router:    complex → gemini-pro | fast → gemini-flash",
      "> latency_delta:   -60% vs single-model baseline",
      "> rag_pipeline:    PDFBox → chunk → embed → session cache",
      "> redundant_calls: 0 [session repo hit rate: high]",
    ],
  },
  {
    title: "Doc - Medical Chatbot",
    image: project5,
    duration: "Jan 2025 - Feb 2025",
    category: "AI & Healthcare",
    description:
      "Architected a sophisticated medical chatbot using Large Language Models (LLM), LangChain, and Pinecone. Implemented a robust Retrieval-Augmented Generation (RAG) pipeline for accurate healthcare information retrieval.",
    technologies: ["OpenAI", "LangChain", "Pinecone", "Python", "NLP", "RAG Pipeline"],
    github: "https://github.com/Aadeshh/Doc",
    logs: [
      "> vector_store:    Pinecone [medical knowledge corpus]",
      "> chain:           LangChain RAG [OpenAI backbone]",
      "> domain:          healthcare Q&A [structured output]",
      "> index_status:    PASS [0 stale chunks detected]",
    ],
  },
  {
    title: "BeFake (BeReal Clone)",
    image: project1,
    category: "Full-Stack / Social",
    description:
      "Developed a fully functional clone of the popular app 'BeReal' using React.js for the frontend and Firebase for the backend. Implemented key features such as secure user authentication, real-time commenting, and posting capabilities.",
    technologies: ["HTML", "Tailwind CSS", "React", "Firebase"],
    github: "https://github.com/Aadeshh/BeFake",
    logs: [
      "> auth:            Firebase [session tokens secured]",
      "> realtime_feed:   Firestore [sub-50ms update latency]",
      "> media_store:     Firebase Storage [active]",
      "> ui_layer:        React + Tailwind [mobile-responsive]",
    ],
  },
  {
    title: "3D T-Shirt Builder",
    image: project2,
    category: "AI & Creative Tools",
    description:
      "Created an innovative 3D T-Shirt Customization App using React.js, Three.js, and OpenAI. Enabled users to dynamically generate, personalize, and download unique 3D shirts with AI-generated logos and textures.",
    technologies: ["HTML", "Tailwind CSS", "Three.js", "React.js", "OpenAI", "Framer Motion"],
    github: "https://github.com/Aadeshh/TshirtCreator",
    logs: [
      "> renderer:        Three.js [WebGL pipeline @ 60fps]",
      "> ai_texture:      DALL-E API [on-demand generation]",
      "> animation:       Framer Motion [frame-perfect transitions]",
      "> export:          PNG download [user-defined resolution]",
    ],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information. Built with modern React components and responsive design principles.",
  //   technologies: ["HTML", "Tailwind CSS", "React", "Vite"],
  //   github: "https://github.com/Aadeshh/Portfolio",
  // },
  {
    title: "Enigma Machine",
    image: project4,
    category: "Cryptography / Systems",
    description:
      "Implemented an Enigma machine in C, a historical cipher device used for securing communications. Developed key components including the plugboard, reflector, and rotors with advanced encryption mechanisms.",
    technologies: ["C", "Cryptography", "Algorithm Implementation"],
    github: "https://github.com/Aadeshh/Enigma",
    logs: [
      "> components:      plugboard + 3 rotors + reflector",
      "> cipher_spec:     Enigma M3 [historical Wehrmacht config]",
      "> build:           C [zero external dependencies]",
      "> compile:         PASS [0 errors | 0 warnings]",
    ],
  },
];

// Education information
export const EDUCATION = [
  {
    institution: "University of San Francisco",
    degree: "Master's, Computer Science - AI Concentration",
    duration: "Aug 2025 - Jun 2027",
    status: "Current",
  },
  {
    institution: "University of California - Davis",
    degree: "Bachelor's, Computer Science",
    duration: "Sep 2020 - Jun 2024",
    coursework: "Data Structures/Algorithms, Artificial Intelligence, Machine Learning, Computer Architecture, Computer Networks, Operating Systems, Computer Security, Parallel Programming, Multithreaded/Concurrent programming",
  },
];

// Certifications
export const CERTIFICATIONS = [
  {
    name: "AWS Solutions Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "Sept 2024",
    featured: true,
  },
];

// Skills organized by category with proficiency levels
export const SKILLS = {
  languages: {
    category: "Languages",
    items: [
      { name: "Python",     proficiency: 90, icon: "python"     },
      { name: "Go",         proficiency: 80, icon: "go"         },
      { name: "Java",       proficiency: 75, icon: "java"       },
      { name: "TypeScript", proficiency: 80, icon: "typescript" },
      { name: "JavaScript", proficiency: 85, icon: "javascript" },
      { name: "SQL",        proficiency: 80, icon: "sql"        },
      { name: "C/C++",      proficiency: 80, icon: "cpp"        },
    ]
  },
  aiml: {
    category: "AI / ML",
    items: [
      { name: "LangGraph",              proficiency: 85, icon: "langgraph"   },
      { name: "LangChain",              proficiency: 80, icon: "langchain"   },
      { name: "PyTorch",                proficiency: 80, icon: "pytorch"     },
      { name: "Transformers",           proficiency: 80, icon: "transformers"},
      { name: "RAG",                    proficiency: 85, icon: "rag"         },
      { name: "FAISS",                  proficiency: 75, icon: "faiss"       },
      { name: "pgvector",               proficiency: 70, icon: "pgvector"    },
      { name: "LLM Evaluation (Ragas)", proficiency: 75, icon: "ragas"       },
      { name: "Multi-Agent Systems",    proficiency: 85, icon: "agents"      },
      { name: "Multimodal AI",          proficiency: 80, icon: "multimodal"  },
      { name: "Prompt Engineering",     proficiency: 85, icon: "prompt"      },
      { name: "NLP",                    proficiency: 80, icon: "nlp"         },
      { name: "Machine Learning",       proficiency: 85, icon: "ml"          },
    ]
  },
  infra: {
    category: "Infrastructure",
    items: [
      { name: "AWS",         proficiency: 85, icon: "aws",        certified: true },
      { name: "GCP",         proficiency: 75, icon: "gcp"         },
      { name: "Docker",      proficiency: 80, icon: "docker"      },
      { name: "Kubernetes",  proficiency: 70, icon: "kubernetes"  },
      { name: "FastAPI",     proficiency: 80, icon: "fastapi"     },
      { name: "Spring Boot", proficiency: 75, icon: "springboot"  },
      { name: "PostgreSQL",  proficiency: 80, icon: "postgresql"  },
      { name: "Firestore",   proficiency: 75, icon: "firestore"   },
      { name: "REST APIs",   proficiency: 85, icon: "api"         },
    ]
  },
  frontend: {
    category: "Frontend",
    items: [
      { name: "React",       proficiency: 85, icon: "react"   },
      { name: "Next.js",     proficiency: 80, icon: "nextjs"  },
      { name: "Tailwind CSS",proficiency: 85, icon: "tailwind"},
      { name: "Three.js",    proficiency: 70, icon: "threejs" },
    ]
  },
};

export const CONTACT = {
  phoneNo: "+1 (408) 355-8589",
  email: "athoppae@gmail.com",
  linkedin: "https://linkedin.com/in/aadesh-thoppae-5b10311b4/",
  github: "https://github.com/aadeshh",
  portfolio: "https://aadeshh.github.io/Portfolio/",
};