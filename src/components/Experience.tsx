
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      id: "software-consultant",
      role: "Software Consultant",
      company: "Integrella IT Consulting Pvt Ltd",
      location: "Ahmedabad, Gujarat",
      period: "April 2024 - Present",
      achievements: [
        "Built web applications for Dubai Health allowing doctors to efficiently view and manage patient data",
        "Engineered optimized SQL queries improving data retrieval efficiency",
        "Led both frontend and backend development efforts for seamless integration",
        "Currently developing IntegrellaHire, a recruitment platform using .NET and React"
      ],
      technologies: ["React", "TypeScript", "SQL", ".NET", "UI/UX"]
    },
    {
      id: "junior-software-consultant",
      role: "Junior Software Consultant",
      company: "Integrella IT Consulting Pvt Ltd",
      location: "Ahmedabad, Gujarat",
      period: "July 2022 - March 2024",
      achievements: [
        "Enhanced Twig Education portal with new features and bug fixes",
        "Automated portal expansion to new territories, reducing rollout time",
        "Led Node.js upgrade to LTS version across multiple repositories",
        "Developed financial portfolio management features for MorningStar"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Cypress", "Ant Design"]
    },
    {
      id: "software-trainee",
      role: "Software Trainee",
      company: "Integrella IT Consulting Pvt Ltd",
      location: "Ahmedabad, Gujarat",
      period: "Jan 2022 - June 2022",
      achievements: [
        "Designed reusable React components reducing development time",
        "Optimized server-side logic using Node.js for better performance",
        "Created RESTful APIs facilitating data exchange between systems",
        "Designed modern interfaces with Material UI for better UX"
      ],
      technologies: ["React", "Node.js", "REST APIs", "Material UI"]
    }
  ];

  const [activeTab, setActiveTab] = useState("software-consultant");

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">
          Professional <span className="text-portfolio-teal dark:text-portfolio-light-teal">Experience</span>
        </h2>

        <Tabs defaultValue="software-consultant" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap mb-8 justify-center">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.id} 
                value={exp.id}
                className={`px-4 py-2 ${activeTab === exp.id ? 'bg-portfolio-teal text-white dark:bg-portfolio-light-teal dark:text-gray-900' : 'text-gray-700 dark:text-gray-300'}`}
              >
                {exp.role}
              </TabsTrigger>
            ))}
          </TabsList>

          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="animate-fade-in">
              <Card className="dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{exp.company} | {exp.location}</p>
                    </div>
                    <p className="text-portfolio-teal dark:text-portfolio-light-teal font-medium mt-2 md:mt-0">{exp.period}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((item, index) => (
                      <li key={index} className="flex">
                        <span className="text-portfolio-teal dark:text-portfolio-light-teal mr-2">•</span>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-portfolio-light-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white dark:bg-gray-700 dark:text-portfolio-light-teal dark:hover:bg-portfolio-teal dark:hover:text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
