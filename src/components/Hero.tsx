import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 hero-gradient pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-hero.svg')] bg-cover bg-center opacity-70 mix-blend-soft-light"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-portfolio-teal/20 dark:bg-portfolio-teal/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-32 -left-32 w-80 h-80 bg-portfolio-light-teal/10 dark:bg-portfolio-light-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-400/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-portfolio-teal dark:text-portfolio-light-teal font-medium mb-2">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Prakruti Gandhi
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-300 mb-6">
            Software Engineer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            I build exceptional digital experiences with modern web technologies. 
            Specialized in React, Node, and full-stack development.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in touch
            </Button>
            
            <Button 
              variant="outline" 
              className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white hover:border-portfolio-teal dark:text-portfolio-light-teal dark:border-portfolio-light-teal dark:hover:bg-portfolio-light-teal dark:hover:text-navy-900"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View my work
            </Button>
            
            <Button 
              variant="outline" 
              className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white hover:border-portfolio-teal dark:text-portfolio-light-teal dark:border-portfolio-light-teal dark:hover:bg-portfolio-light-teal dark:hover:text-navy-900"
              asChild
            >
              <a href="/PrakrutiGandhiResume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-4 mt-8">
            <a 
              href="https://linkedin.com/in/prakrutigandhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-teal dark:text-gray-400 dark:hover:text-portfolio-light-teal transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Prakruti29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-teal dark:text-gray-400 dark:hover:text-portfolio-light-teal transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="mailto:prakrutigandhi294@gmail.com"
              className="text-gray-400 hover:text-portfolio-teal dark:text-gray-400 dark:hover:text-portfolio-light-teal transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a 
              href="tel:+917600063875"
              className="text-gray-400 hover:text-portfolio-teal dark:text-gray-400 dark:hover:text-portfolio-light-teal transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span className="sr-only">Phone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
