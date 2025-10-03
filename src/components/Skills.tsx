import React from 'react';
import { Code, Database, Palette } from 'lucide-react';

const SkillCategory = ({ icon: Icon, title, skills, skillLinks }: { icon: any, title: string, skills: string[], skillLinks: Record<string, string> }) => (
  <div className="section-3d p-8 hover:border-2 hover:border-primary transition-all duration-300">
    <div className="flex items-center mb-6">
      <Icon className="text-primary mr-3" size={24} />
      <h3 className="text-xl font-semibold text-dark">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-4 py-2 bg-neutral rounded-full text-dark hover:bg-primary hover:text-white
                   transform hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
          onClick={() => window.open(skillLinks[skill], '_blank')} // Open link in a new tab
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skills = {
    development: ['HTML', 'CSS',' Bootstrap', 'Tailwind CSS', 'Core Java', 'JavaScript (ES6+)', 'AngularJS', 'TypeScript'],
    database: ['MySQL', 'MongoDB', 'SQL', 'Data Structures','Firebase','Cloudinary'],
    tools: ['Git', 'Github', 'VPS Hosting', 'Netlify', 'Adv. AI Tools for Development','Figma (Wireframing, Prototyping)','Canva', 'Adobe Photoshop'],
  };

  const skillLinks = {
    HTML: 'https://www.w3schools.com/html/default.asp',
    CSS: 'https://www.w3schools.com/css/default.asp',
    'Tailwind CSS' :'https://www.w3schools.com/w3css/defaulT.asp',
    'Core Java': 'https://www.w3schools.com/java/default.asp',
    JavaScript: 'https://www.w3schools.com/js/js_es6.asp',
    AngularJS: 'https://www.w3schools.com/angular/',
    TypeScript: 'https://www.w3schools.com/typescript/index.php',
    Figma: 'https://www.figma.com/community/design-tutorials/figma',
    MySQL: 'https://www.w3schools.com/mysql/default.asp',
    MongoDB: 'https://www.w3schools.com/mongodb/index.php',
    Firebase: 'https://firebase.google.com/docs',
    SQL: 'https://www.w3schools.com/sql/default.asp',
    'Data Structures': 'https://www.w3schools.com/dsa/index.php',
    Git: 'https://www.w3schools.com/git/default.asp',
    Github: 'https://github.com/',
    VPS: 'https://monovm.com/blog/how-to-setup-vps-for-beginners/',
    Netlify: 'https://www.netlify.com/',
    'Adv. AI Tools': 'https://www.w3schools.com/ai/ai_tensorflow_example_2d.asp',
    'Adobe Photoshop': 'https://www.adobe.com/products/photoshop.html',
    EXCEL: 'https://www.w3schools.com/excel/index.php',
  };
  



  return (
    <section id="skills" className="py-25 hero-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 ">
          <SkillCategory icon={Code} title="Development" skills={skills.development} skillLinks={skillLinks} />
          <SkillCategory icon={Database} title="Database" skills={skills.database} skillLinks={skillLinks} />
          <SkillCategory icon={Palette} title="Tools" skills={skills.tools} skillLinks={skillLinks} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
