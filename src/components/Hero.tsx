import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-12">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30"></div>
              <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Aditya Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-4xl font-bold mb-6 text-center md:text-left">
              Hi, I'm <span className="gradient-text">Aditya Gupta</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 text-center md:text-left">
              Software Developer & Database Executive
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-center md:text-left">
              Hi, I'm Aditya Gupta, a dedicated professional transitioning from
              database management to software development with expertise in
              <b> Java, JavaScript, React.js, Node.js and TypeScript</b>. I specialize
              in full-stack development, and I have a comprehensive approach to
              building user-centric applications, ensuring efficiency and
              scalability in software solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                Get in touch
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#experience"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Quick Overview
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-bold">1+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Years Experience</h4>
                      <p className="text-gray-600">In Software Development</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <span className="text-pink-600 font-bold">5+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Live-Projects</h4>
                      <p className="text-gray-600">Completed</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-4 text-white bg-midnight rounded-full px-4 py-2 inline-block">
                      Live-Projects
                    </h4>

                    <div className="flex flex-wrap gap-4 justify-center">
                      <a
                        href="https://helloadiitya.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Portfolio
                      </a>
                      <a
                        href="https://justsay.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        JustSay
                      </a>
                      {/* <a
                        href="https://project3.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Project 3
                      </a>
                      <a
                        href="https://project4.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Project 4
                      </a>
                      <a
                        href="https://project5.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Project 5
                      </a>
                      <a
                        href="https://project5.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Project 5
                      </a>
                      <a
                        href="https://project5.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Project 5
                      </a>
                      <a
                        href="https://project5.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Project 5
                      </a>
                      <a
                        href="https://project5.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Project 5
                      </a>
                      <a
                        href="https://project5.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Project 5
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
