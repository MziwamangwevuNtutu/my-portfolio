import React from 'react';

const experiences = [
  // {
  //   id: 1,
  //   role: "Senior Frontend Developer",
  //   company: "TechCorp Inc.",
  //   period: "2022 - Present",
  //   description: "Led development of customer-facing applications using React and TypeScript. Improved performance by 40% through code splitting and lazy loading."
  // },
  // {
  //   id: 2,
  //   role: "Full Stack Developer",
  //   company: "StartupXYZ",
  //   period: "2020 - 2022",
  //   description: "Built and maintained REST APIs with Node.js. Implemented CI/CD pipelines and automated testing strategies."
  // },
  {
    id: 3,
    role: "Junior Developer",
    company: "Plum Systems",
    period: "2025 - 2025",
    description: "Developed responsive mobile applications and websites for clients. Collaborated with clients and senior developers to deliver high quality solutions."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-indigo-200 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;