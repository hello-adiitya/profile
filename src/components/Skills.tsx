import React from 'react';
import { Code, Database, Palette } from 'lucide-react';

const SkillCategory = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
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
                   transform hover:translate-y-[-2px] transition-all duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skills = {
    development: ['Java', 'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Nest.js', 'HTML', 'CSS'],
    database: ['MySQL', 'MongoDB', 'SQL', 'Data Structures'],
    tools: ['Git', 'Github', 'Adobe Photoshop', 'Power BI', 'EXCEL']
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory icon={Code} title="Development" skills={skills.development} />
          <SkillCategory icon={Database} title="Database" skills={skills.database} />
          <SkillCategory icon={Palette} title="Tools" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;