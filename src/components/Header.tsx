import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
        <div className="flex items-center justify-between space-x-6 bg-navyblue rounded-full py-1 px-4 text-white">
          <a
            href="#"
            className="text-2xl font-bold text-primary bg-midnighthover:text-secondary transition-colors"
          >
            @aditya
          </a>
          
            <a
              href="https://www.linkedin.com/in/hello-adiitya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/hello-adiitya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.instagram.com/hello_adiitya/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:adityagupta2253@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Experience", "Skills", "Education", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-dark hover:text-primary font-medium transition-all duration-200 
                         hover:transform hover:translate-y-[-2px]"
                >
                  {item}
                </a>
              )
            )}
            <a href="#contact" className="btn-3d">
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden text-dark hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              {["Home", "Experience", "Skills", "Education", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-dark hover:text-primary font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
