import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, title, bio, socials } = portfolioData.personal;

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">{name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
          {title}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          {bio}
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg text-indigo-600 font-semibold transition-all duration-200 hover:-translate-y-1 border border-indigo-100"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <a 
          href="#projects" 
          className="inline-flex flex-col items-center text-gray-400 hover:text-indigo-600 transition-colors duration-200"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;