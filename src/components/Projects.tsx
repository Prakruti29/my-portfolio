
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Management System",
      description: "A comprehensive healthcare platform that allows doctors to efficiently manage patient records, appointments, and medical histories. Features include role-based access control, HIPAA compliance, and real-time updates.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Material UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: [
        "Reduced patient data retrieval time by 60%",
        "HIPAA compliant architecture",
        "Real-time notifications system"
      ]
    },
    {
      title: "Educational Content Platform",
      description: "An interactive learning platform designed for K-12 students with personalized content delivery, progress tracking, and interactive assessments. Supports multiple languages and accessibility features.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Redux", "Node.js", "PostgreSQL", "Ant Design"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: [
        "25% improvement in student engagement",
        "Custom interactive content editor",
        "Advanced analytics dashboard"
      ]
    },
    {
      title: "Financial Portfolio Manager",
      description: "A personal finance application that helps users track investments, analyze portfolio performance, and make informed financial decisions with interactive charts and real-time market data.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "GraphQL", "Node.js", "MongoDB", "Recharts"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: [
        "Real-time stock market data integration",
        "Interactive performance visualization",
        "Custom alert system"
      ]
    },
    
  ];

  return (
    <section id="projects" className="section bg-white dark:bg-navy-900">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">
          Featured <span className="text-portfolio-teal">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm">{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge key={i} className="bg-portfolio-light-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 flex justify-between gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 bg-portfolio-teal hover:bg-portfolio-teal/90 text-white"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
