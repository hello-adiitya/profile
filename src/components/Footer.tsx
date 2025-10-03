import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-2 hero-bg relative overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-2 md:mb-0">
        <h3 className="text-xl font-bold mt-0">Aditya Gupta</h3>
        <p className="mt-1 text-gray-300 text-sm">UI/UX & Front-end Developer</p>
      </div>

      <div className="flex space-x-4 z-10">
        <a href="https://www.linkedin.com/in/hello-adiitya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/hello-adiitya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <Github size={20} />
        </a>
        <a href="mailto:adityagupta2253@gmail.com" className="hover:text-blue-400 transition-colors">
          <Mail size={20} />
        </a>
        <a href="https://www.instagram.com/hello_adiitya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          <Instagram size={20} />
        </a>
      </div>
    </div>

    <div className="mt-3 pt-2 border-t border-gray-800 text-center text-gray-400 text-sm">
      <p>&copy; {new Date().getFullYear()} Aditya Gupta. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;