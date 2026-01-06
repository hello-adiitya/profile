import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SidebarContact from "./components/SidebarContact";
import WhatsappFloat from "./components/WhatsappFloat";
import { Theme, applyTheme } from '@/utils/theme';


function App() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Apply initial theme
    applyTheme(theme);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <SidebarContact />
        <WhatsappFloat />
      </main>
      <Footer />
    </div>
  );
}

export default App;