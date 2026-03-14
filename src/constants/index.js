import project1 from "../assets/projects/breal.png";
import project2 from "../assets/projects/3D.png";
import project3 from "../assets/projects/url.png";
import project4 from "../assets/projects/enigma.jpeg";
import project5 from "../assets/projects/DOC.png";
import project6 from "../assets/projects/image6.jpg";
import project7 from "../assets/projects/project6.png";

import logoSoundromeda from "../assets/Soundromeda.webp";
import logoUCD from "../assets/UCD.jpg";
import logoUCDEv from "../assets/UCDEV2.jpg";
import logoIOURING from "../assets/IOURING.jpeg";
import logoUSF from "../assets/usf.jpeg";

export const MAIN_CONTENT = `AI Engineer & Full-Stack Developer pursuing a Master's in Computer Science (AI Concentration) at the University of San Francisco. I build production-grade AI systems — from multi-agent LLM pipelines to cloud-native applications — with a focus on making them fast, reliable, and cost-efficient. AWS Solutions Architect Associate certified.`;

export const ABOUT_TEXT = `Hey, I'm Aadesh — an AI Engineer and Full-Stack Developer pursuing my Master's in Computer Science (AI Concentration) at the University of San Francisco. I specialize in building production-grade AI systems: multi-agent LLM architectures, cloud-native deployments, and full-stack applications that are fast, reliable, and built to scale.

As an AWS Solutions Architect Associate certified professional, I've led development of gaming platforms with Web3 integration, contributed to secure voting systems using advanced security kernels, and optimized autonomous vehicle sensor fusion algorithms.

My recent work focuses on multi-agent AI systems — from an autonomous financial analyst that runs a cyclic Analyst-Critic architecture on AWS Lambda to self-correct hallucinations, to a full-stack AI learning platform with a sandboxed code execution engine and a multi-model pipeline routing tasks between Gemini Pro and Gemini Flash for optimal cost and latency.

I'm passionate about building AI systems that are not just functional but production-grade — scalable, reliable, and cost-efficient. Currently deepening my expertise in LLMs, agentic architectures, and applied machine learning at USF.

Let's connect and create something innovative together!`;

export const EXPERIENCES = [
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
    description: `Spearheaded development of Odyssey, a gaming platform integrating Web3 payment systems and music streaming services, projecting 200% increase in user engagement. Optimized cross-platform architecture ensuring 99.9% uptime and sub-second response times while handling concurrent media streaming. Orchestrated secure payment processing and authentication workflows through multiple third-party APIs, while maintaining robust data management protocols.`,
    achievements: [
      "Projected 200% increase in user engagement through innovative platform design",
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
    duration: "Dec 2025",
    description:
      "Architected a proactive, multi-agent system that autonomously manages financial portfolio risk. Unlike passive chatbots, this 'push-based' agent wakes up daily via AWS EventBridge to research, analyze, and critique market data before the bell rings. Features a cyclic LangGraph architecture where 'Analyst' and 'Critic' agents engage in iterative debate to self-correct hallucinations, deployed as a containerized serverless function on AWS Lambda to ensure 99.9% reliability at near-zero cost.",
    technologies: ["LangGraph (Multi-Agent)", "AWS Lambda (Docker)", "AWS EventBridge", "Python", "Slack API"],
    github: "https://github.com/Aadeshh/FinancialAgent",
  },
  {
    title: "AI Learning Companion",
    image: project6,
    description:
      "Built a secure In-Memory Code Execution Engine (JavaCompiler API) mirroring LeetCode's backend, with Regex-based sandboxing and custom ClassLoaders to prevent malicious I/O. Designed a Multi-Model AI Pipeline using LangChain4j that dynamically routes complex tasks to Gemini Pro and latency-sensitive tasks to Gemini Flash, reducing latency by ~60%. Implemented a RAG-based PDF processor (Apache PDFBox) that parses documents into structured study artifacts, cached via session repositories to eliminate redundant API calls.",
    technologies: ["Java", "TypeScript", "Spring Boot", "Next.js", "React", "Tailwind CSS","LangChain4j", "Large Language Models (LLMs)", "Prompt Engineering", "Apache PDFBox", "Maven", "Git"],
    duration: "Sep 2025 - Nov 2025",
    github: "https://github.com/AadeshThoppae/AI-Learning-Companion",
  },
  {
    title: "Doc - Medical Chatbot",
    image: project5,
    description:
      "Architected a sophisticated medical chatbot using Large Language Models (LLM), LangChain, and Pinecone. Implemented a robust Retrieval-Augmented Generation (RAG) pipeline for accurate healthcare information retrieval.",
    technologies: ["OpenAI", "LangChain", "Pinecone", "Python", "NLP", "RAG Pipeline"],
    duration: "Jan 2025 - Feb 2025",
    github: "https://github.com/Aadeshh/Doc",
  },
  {
    title: "BeFake (BeReal Clone)",
    image: project1,
    description:
      "Developed a fully functional clone of the popular app 'BeReal' using React.js for the frontend and Firebase for the backend. Implemented key features such as secure user authentication, real-time commenting, and posting capabilities.",
    technologies: ["HTML", "Tailwind CSS", "React", "Firebase"],
    github: "https://github.com/Aadeshh/BeFake",
  },
  {
    title: "3D T-Shirt Builder",
    image: project2,
    description:
      "Created an innovative 3D T-Shirt Customization App using React.js, Three.js, and OpenAI. Enabled users to dynamically generate, personalize, and download unique 3D shirts with AI-generated logos and textures.",
    technologies: ["HTML", "Tailwind CSS", "Three.js", "React.js", "OpenAI", "Framer Motion"],
    github: "https://github.com/Aadeshh/TshirtCreator",
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
    description:
      "Implemented an Enigma machine in C, a historical cipher device used for securing communications. Developed key components including the plugboard, reflector, and rotors with advanced encryption mechanisms.",
    technologies: ["C", "Cryptography", "Algorithm Implementation"],
    github: "https://github.com/Aadeshh/Enigma",
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
    category: "Programming Languages",
    items: [
      { name: "Python", proficiency: 90, icon: "python" },
      { name: "JavaScript", proficiency: 85, icon: "javascript" },
      { name: "Go", proficiency: 80, icon: "go" },
      { name: "Java", proficiency: 75, icon: "java" },
      { name: "C/C++", proficiency: 80, icon: "cpp" }
    ]
  },
  frontend: {
    category: "Frontend Technologies",
    items: [
      { name: "React.js", proficiency: 85, icon: "react" },
      { name: "Next.js", proficiency: 80, icon: "nextjs" },
      { name: "TypeScript", proficiency: 80, icon: "typescript" },
      { name: "HTML/CSS", proficiency: 90, icon: "html" },
      { name: "Tailwind CSS", proficiency: 90, icon: "tailwind" },
      { name: "Three.js", proficiency: 70, icon: "threejs" }
    ]
  },
  backend: {
    category: "Backend & Infrastructure",
    items: [
      { name: "Node.js", proficiency: 80, icon: "nodejs" },
      { name: "Spring Boot", proficiency: 75, icon: "springboot" },
      { name: "RESTful APIs", proficiency: 85, icon: "api" },
      { name: "Docker", proficiency: 75, icon: "docker" },
      { name: "Firebase", proficiency: 80, icon: "firebase" },
      { name: "MySQL", proficiency: 75, icon: "mysql" }
    ]
  },
  aiml: {
    category: "AI/ML & Data Science",
    items: [
      { name: "Machine Learning", proficiency: 85, icon: "ml" },
      { name: "PyTorch", proficiency: 80, icon: "pytorch" },
      { name: "Scikit-learn", proficiency: 80, icon: "sklearn" },
      { name: "LangChain", proficiency: 80, icon: "langchain" },
      { name: "LangGraph", proficiency: 80, icon: "langgraph" },
      { name: "OpenAI", proficiency: 85, icon: "openai" },
      { name: "Pinecone", proficiency: 75, icon: "pinecone" },
      { name: "NLP", proficiency: 80, icon: "nlp" },
      { name: "TensorFlow", proficiency: 70, icon: "tensorflow" }
    ]
  },
  cloud: {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", proficiency: 85, icon: "aws", certified: true },
      { name: "Cloud Architecture", proficiency: 80, icon: "cloud" },
      { name: "Git", proficiency: 90, icon: "git" },
      { name: "JIRA", proficiency: 75, icon: "jira" }
    ]
  },
  tools: {
    category: "Tools & Specialties",
    items: [
      { name: "Web3", proficiency: 70, icon: "web3" },
      { name: "Cybersecurity", proficiency: 80, icon: "security" },
      { name: "MATLAB", proficiency: 70, icon: "matlab" },
      { name: "RTMaps", proficiency: 65, icon: "rtmaps" }
    ]
  }
};

export const CONTACT = {
  phoneNo: "+1 (408) 355-8589",
  email: "athoppae@gmail.com",
  linkedin: "https://linkedin.com/in/aadesh-thoppae-5b10311b4/",
  github: "https://github.com/Aadeshh",
  portfolio: "https://aadeshh.github.io/Portfolio/",
};