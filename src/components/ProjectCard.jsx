import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
      <div className="h-48 overflow-hidden bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=${encodeURIComponent(project.title)}`;
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4">
          {[
            { href: project.repo, label: 'Front-end Code', icon: '📁' },
            { href: project.repoBackend, label: 'Backend Code', icon: '📁' },
            { href: project.link, label: 'Click here for a Live Demo' },
          ]
            .filter(({ href }) => href && href !== 'https://demo.com')
            .map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1"
              >
                <span>{icon}</span> {label}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;