
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section bg-white dark:bg-navy-900">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">
          <span className="text-portfolio-teal">About</span> Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="mb-4">
                  I'm a passionate Software Engineer with expertise in building modern web 
                  applications using React, TypeScript, and Node.js. With a strong foundation in
                  full-stack development, I specialize in creating performant and scalable solutions.
                </p>
                <p className="mb-4">
                  Currently working at Integrella IT Consulting, I've successfully delivered web 
                  applications for healthcare, education, and financial sectors. My expertise lies 
                  in developing responsive interfaces, optimizing database queries, and ensuring 
                  seamless integration between frontend and backend systems.
                </p>
                <p>
                  I'm enthusiastic about learning new technologies and constantly improving my skills.
                  My goal is to create digital experiences that are not only visually appealing but also 
                  efficient and user-friendly.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-teal text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">
                  1
                </span>
                Problem Solver
              </h3>
              <p className="pl-11">
                Efficiently identify and resolve complex technical challenges across the development stack,
                leading to a 40% reduction in critical issues and enhanced application stability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-teal text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">
                  2
                </span>
                Detail-Oriented
              </h3>
              <p className="pl-11">
                Meticulously designed and implemented reusable React components, leading to 30% reduction
                in development time and consistent code quality across projects.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-teal text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">
                  3
                </span>
                Team Player
              </h3>
              <p className="pl-11">
                Collaborated effectively with cross-functional teams, mentoring junior developers and
                contributing to a 20% improvement in team productivity and code quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
