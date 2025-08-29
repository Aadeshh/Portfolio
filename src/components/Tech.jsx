import React, { useState } from 'react';

const Tech = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Streamlined to only the most important skills for recruiters
  const techStack = {
    core: {
      title: "Core Technologies",
      icon: "⚡",
      color: "from-cyan-500 to-blue-600",
      skills: ["Python", "JavaScript", "C/C++", "Go", "Java"]
    },
    frontend: {
      title: "Frontend",
      icon: "🎨",
      color: "from-purple-500 to-pink-600",
      skills: ["React", "Next.js", "Tailwind CSS", "Pixi.js"]
    },
    backend: {
      title: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-teal-600",
      skills: ["RESTful APIs", "SQL", "Authentication", "Firebase"]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "from-orange-500 to-red-600",
      skills: ["AWS", "Docker", "Git", "CI/CD"],
      highlight: true
    },
    data: {
      title: "Data & AI",
      icon: "🤖",
      color: "from-yellow-500 to-orange-600",
      skills: ["Machine Learning", "LLMs", "Pinecone", "Langchain","RAG"]
    }
  };

  return (
    <section className='py-20 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className='text-4xl lg:text-5xl font-bold mb-3'>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Technical
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Stack
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Proficient in modern technologies with a focus on scalable, cloud-native solutions
          </p>
        </div>

        {/* AWS Certification Highlight - Smaller, integrated */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full">
            <span className="text-2xl mr-2">🏆</span>
            <span className="text-white font-semibold">AWS Solutions Architect</span>
            <span className="text-orange-300 ml-2">• Certified 2024</span>
          </div>
        </div>

        {/* Compact Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Object.entries(techStack).map(([key, category]) => (
            <div
              key={key}
              className={`group relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                category.highlight 
                  ? 'border-orange-500/30 hover:border-orange-400/50' 
                  : 'border-gray-800 hover:border-purple-500/30'
              }`}
              onMouseEnter={() => setHoveredCategory(key)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className={`text-lg font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List - Compact */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                      hoveredCategory === key
                        ? 'bg-gradient-to-r ' + category.color + ' text-white'
                        : 'bg-gray-800/50 text-gray-400'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Highlight badge for AWS */}
              {category.highlight && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-2 py-1 shadow-lg">
                  <span className="text-xs font-bold text-black">Certified</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Minimal Stats Bar */}
        {/* <div className="mt-12 flex justify-center">
          <div className="inline-flex gap-8 px-8 py-4 bg-gray-900/30 backdrop-blur-sm rounded-full border border-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">25+</div>
              <div className="text-xs text-gray-500">Technologies</div>
            </div>
            <div className="border-l border-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">5+</div>
              <div className="text-xs text-gray-500">Years Exp</div>
            </div>
            <div className="border-l border-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">20+</div>
              <div className="text-xs text-gray-500">Projects</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Tech;