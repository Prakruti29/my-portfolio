
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Set default theme to dark if not already set
    if (!theme) {
      setTheme('dark');
    }
  }, [theme, setTheme]);

  useEffect(() => {
    // Function to handle scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Trigger once on initial load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.title = "Prakruti Gandhi | Software Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Navbar />
      
      {/* Theme toggle button */}
      {mounted && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 shadow-md rounded-full h-12 w-12"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
      
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
