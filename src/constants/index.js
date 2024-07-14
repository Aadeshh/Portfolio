import project1 from "../assets/projects/breal.png";
import project2 from "../assets/projects/3D.png";
import project3 from "../assets/projects/url.png";
import project4 from "../assets/projects/Enigma.png"

export const MAIN_CONTENT = `Passionate and industrious software engineering graduate from the University of California, Davis, with hands-on experience in cybersecurity, software development, and autonomous vehicle technology. Adept at creating innovative solutions and eager to contribute to impactful projects. Skilled in various programming languages and frameworks, with a strong foundation in data structures, algorithms, and machine learning. Motivated to collaborate with senior engineers and continuously learn in a dynamic and growth-oriented environment.`;

export const ABOUT_TEXT = `Hello! I’m Aadesh Thoppae, a recent graduate from UC Davis with a degree in Software Engineering. My journey in tech has been fueled by a deep curiosity and a drive to solve complex problems. From working on high-level security projects in a cybersecurity lab to developing a 3D T-Shirt Customization App, I’ve gained diverse experience that has honed my skills and broadened my perspective.

In my free time, I enjoy exploring new technologies and working on personal projects that challenge my creativity and technical abilities. I’m particularly passionate about leveraging AI and machine learning to create innovative solutions. I’m excited to bring my enthusiasm and expertise to a forward-thinking team where I can continue to grow and make a meaningful impact.

Feel free to connect with me on LinkedIn or reach out via email. Let’s create something amazing together!`;

export const EXPERIENCES = [
  {
    year: "August 2023 - June 2024",
    role: "Cybersecurity Lab Assistant",
    company: "UC Davis",
    description: `Collaborated with professors on the high-level security kernel GEMSOS, spearheading a multi-year initiative to develop a secure and reliable voting system. Completed various smaller projects to deepen understanding of advanced security concepts.`,
    technologies: ["GEMSOS","C++"],
  },
  {
    year: "August 2023 - October 2023",
    role: "Software Engineering Intern",
    company: "IOURING",
    description: `Developed and deployed a Client-Server Application in Go for optimal data storage. Managed numerous client connections using Client Pooling and MySQL for data storage. Designed a RESTful API to efficiently handle tasks in a ToDo list format.`,
    technologies: ["Go", "mySQL"],
  },
  {
    year: "June 2023 - June 2024",
    role: "CAVS Team",
    company: "Facebook",
    description: `Enhanced the technologies used by the Connected and Autonomous Vehicle team to prepare an electric vehicle for competition. Improved the sensor fusion system by integrating various algorithms to achieve superior results in competitions.`,
    technologies: ["Python", "C++", "MATLAB", "RTMaps"],
  },
];

export const PROJECTS = [
  {
    title: "BeFake(BeReal Clone)",
    image: project1,
    description:
      "Developed a fully functional clone of the popular app “BeReal” using React.js for the frontend and Firebase for the backend. Implemented key features such as secure user authentication, real-time commenting, and posting capabilities.",
    technologies: ["HTML", "Tailwind CSS", "React", "Firebase"],
  },
  {
    title: "3D T-Shirt Builder",
    image: project2,
    description:
      "Created an innovative 3D T-Shirt Customization App using React.js, Three.js, and OpenAI. Enabled users to dynamically generate, personalize, and download unique 3D shirts. Integrated AI-generated logos and textures for intelligent design, ensuring responsive design and smooth animations with Framer Motion.",
    technologies: ["HTML", "Tailwind CSS", "Three.js", "React.js","OpenAI","Framer Motion"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.(what you're looking at right now :) )",
    technologies: ["HTML", "Tailwind CSS", "React", "Bootstrap"],
  },
  {
    title: "Enigma Machine",
    image: project4,
    description:
      "Implemented an Enigma machine in C, a historical cipher device used for securing communications. Developed key components including the plugboard, reflector, and rotors. Utilized predefined and custom rotors, and employed an online Enigma simulator for debugging and testing. This project demonstrates proficiency in replicating complex encryption mechanisms.",
    technologies: ["C"],
  },
];

export const CONTACT = {
  phoneNo: "+1(408)-355-8589",
  email: "athoppae@gmail.com",
};
