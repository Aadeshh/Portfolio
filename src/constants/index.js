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

export const MAIN_CONTENT = `Software Developer & AI Enthusiast currently pursuing Master's in Computer Science with AI Concentration at University of San Francisco. Experienced in developing scalable applications, cybersecurity solutions, and autonomous vehicle technologies. AWS Solutions Architect Associate certified with expertise in full-stack development, machine learning, and secure system design. Passionate about leveraging cutting-edge technologies to create innovative solutions that drive meaningful impact.`;

export const ABOUT_TEXT = `Hello! I'm Aadesh Thoppae, a Computer Science graduate from UC Davis currently pursuing my Master's in Computer Science with AI Concentration at University of San Francisco (2025-2027). My journey in tech spans cybersecurity research, autonomous vehicle development, and cutting-edge AI applications.

As an AWS Solutions Architect Associate certified professional, I've spearheaded development of gaming platforms with Web3 integration, contributed to secure voting systems using advanced security kernels, and enhanced autonomous vehicle sensor fusion algorithms. My recent work includes developing sophisticated medical chatbots using Large Language Models and RAG pipelines.

I'm passionate about leveraging AI and machine learning to solve complex real-world problems. From achieving 200% user engagement increases to maintaining 99.9% system uptime, I focus on creating scalable, impactful solutions. Currently exploring the intersection of AI, healthcare, and autonomous systems while building my expertise in advanced machine learning techniques.

Let's connect and create something innovative together!`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Aug 2025",
    role: "Software Developer",
    company: "Soundromeda",
    logo: logoSoundromeda, // Placeholder for company logo
    description: `Spearheaded development of Odyssey, a gaming platform integrating Web3 payment systems and music streaming services, projecting 200% increase in user engagement. Optimized cross-platform architecture ensuring 99.9% uptime and sub-second response times while handling concurrent media streaming. Orchestrated secure payment processing and authentication workflows through multiple third-party APIs, while maintaining robust data management protocols.`,
    achievements: [
      "Projected 200% increase in user engagement through innovative platform design",
      "Achieved 99.9% system uptime with sub-second response times",
      "Integrated multiple Web3 payment systems and third-party APIs",
      "Optimized cross-platform architecture for concurrent media streaming"
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
      "Developed full-stack intelligent tutoring platform leveraging LLMs to auto-generate summaries, flashcards, quizzes, and interview questions from educational content, implementing RESTful APIs with Spring Boot and responsive UI.",
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
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. Built with modern React components and responsive design principles.",
    technologies: ["HTML", "Tailwind CSS", "React", "Vite"],
    github: "https://github.com/Aadeshh/Portfolio",
  },
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
      { name: "HTML/CSS", proficiency: 90, icon: "html" },
      { name: "Tailwind CSS", proficiency: 90, icon: "tailwind" },
      { name: "Three.js", proficiency: 70, icon: "threejs" }
    ]
  },
  backend: {
    category: "Backend & Infrastructure",
    items: [
      { name: "Node.js", proficiency: 80, icon: "nodejs" },
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
      { name: "LangChain", proficiency: 80, icon: "langchain" },
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