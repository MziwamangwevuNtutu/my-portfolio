import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Have a project in mind? Let's create something amazing together.
        </p>
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1 mb-8"
        >
          Say Hello 👋
        </a>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;