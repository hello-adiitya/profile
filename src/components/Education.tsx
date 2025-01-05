import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Arunachal University of Studies(AU)",
      period: "July-2023 - June-2025",
      location: "India"
    },
    {
      degree: "Bachelor's degree(BCA)",
      institution: "Makhan Lal Chaturvedi National University",
      period: "July-2020 -June-2023",
      location: "Bhopal, India"
    },
    {
      degree: "Intermediate",
      institution: "Yug Nirman Senior Secondary School",
      period: "2019 - 2020",
      location: "Deoria, India"
    },
    {
      degree: "High School",
      institution: "Yug Nirman Senior Secondary School",
      period: "2017 - 2018",
      location: "Deoria, India"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray hero-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gradient mb-12">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                <div className="bg-blue-100 rounded-full p-3 mr-4 hero-bg relative overflow-hidden">
                  <GraduationCap className="text-blue-600 " size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-gray-300">{edu.degree}</h3>
                  <p className="text-gray-500 mt-1 dark:text-gray-400">{edu.institution}</p>
                  <div className="flex items-center mt-2 text-gray-500">
                    <span>{edu.period}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;