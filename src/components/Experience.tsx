import React from "react";
import { Briefcase, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Experience & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Database Executive</h3>
            </div>
            <p className="text-gray-600 mb-2">
              <b>Justdial Limited | Noida, India </b>
            </p>
            <p className="text-gray-500 mb-4 ">June-2024 - Present</p>
            <p className="text-gray-600 mb-1 text-sm">
              Justdial Limited is an India-based local search service provider.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>
                • Crafting efficient MySQL queries for data extraction and
                manipulation.
              </li>
              <li>
                • Creating compelling visualizations to translate complex
                datasets into actionable insights.
              </li>
              <li>
                • Conducted regular audits to ensure data quality and compliance
                with regulations.
              </li>
              <li>
                • Regularly updated documentation related to processes,
                standards, and procedures.
              </li>
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
                    <h4 className="font-semibold">
                      Enhanced Problem Visualization
                    </h4>
                    <p className="text-gray-600">
                      Improved problem visualization through effective analysis
                      and design, resulting in more accurate and scalable
                      software solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <span className="text-blue-600 font-semibold">40%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Database Optimization Success
                    </h4>
                    <p className="text-gray-600">
                      Reduced query execution time by 40% using optimized
                      database indexing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <span className="text-blue-600 font-semibold">60%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Efficiency and Adaptability
                    </h4>
                    <p className="text-gray-600">
                      Skilled in leveraging new tools and AI technologies to
                      enhance accuracy and reduce project timelines.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <span className="text-blue-600 font-semibold">70%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      15+ Projects Independently
                    </h4>
                    <p className="text-gray-600">
                      Successfully completed 15 projects independently,
                      enhancing personal growth and satisfaction while meeting
                      deadlines effectively.
                    </p>
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
