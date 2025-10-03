import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex items-center hero-bg relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12">
          {/* Left Side */}
          <div className="md:w-1/2 md:pr-12 flex flex-col items-center md:items-start">
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 dark:opacity-40"></div>
              <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl 
                transition-colors duration-300 group
                dark:border-primary/20 dark:shadow-navyblue dark:hover:border-primary">
                <img
                  src="/profile.webp"
                  alt="Aditya Gupta"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left dark:text-neutral">
              Hi, I'm <span className="gradient-text">Aditya Gupta</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-500 font-semibold mb-6 text-center md:text-left">
              UI/UX & Front-end Developer
            </h2>

            {/* Short Intro */}
            <p className="text-gray-600 dark:text-neutral/80 mb-8 leading-relaxed text-center md:text-left">
              Dedicated professional transitioning from database management to software development with expertise in{" "}
              <b>HTML5, CSS, Tailwind CSS, Bootstrap, Figma, JavaScript (ES6+), TypeScript, AngularJS, and Core Java</b>, with hands-on experience in designing modern, responsive, and user-centric web applications.
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start space-x-4 relative z-10">
              <a
                href="#contact"
                className="px-5 py-4 border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-all duration-300 dark:border-primary/50 dark:text-white dark:hover:border-primary dark:hover:shadow-glow rounded-full font-semibold flex items-center hover:scale-105"
              >
                Get in touch
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/Aditya Gupta UI_UX & Frontend Developer.pdf"
                download
                className="px-5 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-gradient-to-r from-blue-500 to-green-500 hover:text-white transition-all duration-300 dark:border-primary/50 dark:text-white dark:hover:border-primary dark:hover:shadow-glow flex items-center hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Project Overview */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative bg-white p-8 rounded-2xl shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30 space-y-6">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Quick Overview</h3>

              {/* Portfolio */}
              <div className="bg-gray-50 dark:bg-dark p-4 rounded-lg shadow-inner">
                <h4 className="font-bold text-lg mb-2 dark:text-white">Portfolio</h4>
                <p className="text-gray-700 dark:text-neutral/80 mb-2">
                  <span className="font-semibold">Tech:</span> TypeScript, Tailwind CSS, Vite, EmailJS, Lucide-React
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-neutral/80 space-y-1">
                  <li>Developed a personal portfolio website to showcase skills and projects.</li>
                  <li>Integrated EmailJS for contact form functionality, improving interactivity.</li>
                  <li>Utilized AI tools for exploring new libraries and self-learning.</li>
                  <li>Built with Vite for optimized performance and deployed on Netlify.</li>
                  <li>Implemented responsive design principles for cross-device compatibility.</li>
                </ul>
              </div>

              {/* JustSay */}
              <div className="bg-gray-50 dark:bg-dark p-4 rounded-lg shadow-inner">
                <h4 className="font-bold text-lg mb-2 dark:text-white">JustSay</h4>
                <p className="text-gray-700 dark:text-neutral/80 mb-2">
                  <span className="font-semibold">Tech:</span> React.js, TypeScript, Firebase, Cloudinary, Tailwind CSS, Vite
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-neutral/80 space-y-1">
                  <li>Built a real-time chat application with Firebase Authentication and Firestore.</li>
                  <li>Integrated Cloudinary for image upload, compression, and optimized delivery.</li>
                  <li>Designed responsive UI with Tailwind CSS, ensuring mobile-first layouts.</li>
                  <li>Implemented secure session management and improved user experience with timestamp handling.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
    </section>
  );
};

export default Hero;
