import React from 'react';
import { Briefcase, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Experience & Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Database Executive</h3>
            </div>
            <p className="text-gray-600 mb-2">Justdial Limited | Noida, India</p>
            <p className="text-gray-500 mb-4">06/2024 - Present</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Crafting efficient MySQL queries for data extraction and manipulation</li>
              <li>• Automating processes and performing advanced analytics using Python</li>
              <li>• Creating compelling visualizations for complex datasets</li>
              <li>• Conducting regular audits for data quality and compliance</li>
              <li>• Managing data input and recordkeeping systems</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Key Achievements</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <span className="text-blue-600 font-semibold">30%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Enhanced Data Processing</h4>
                    <p className="text-gray-600">Increased data processing speed through MySQL query optimization</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <span className="text-blue-600 font-semibold">40%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Script Automation Success</h4>
                    <p className="text-gray-600">Developed five automated Python scripts, reducing manual tasks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <span className="text-blue-600 font-semibold">25%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Data Visualization Expert</h4>
                    <p className="text-gray-600">Created over 20 data visualizations, improving decision-making accuracy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <span className="text-blue-600 font-semibold">30%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Continuous Self-Improvement</h4>
                    <p className="text-gray-600">Consistently enhancing skills through daily learning, experience, and feedback.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;