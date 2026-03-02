'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ProgressIndicator from '@/components/ProgressIndicator';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import { projects } from '@/data/projects';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position for animations - Discontinued
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrolled < windowHeight * 0.5) {
        setActiveSection('about');
      } else {
        setActiveSection('projects');
      }

      setScrollProgress(Math.min(scrolled / windowHeight, 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

    return (
    <>
        

        <div className="relative text-black bg-white">
        <Navigation scrollToProjects={scrollToProjects} />

        <ProgressIndicator activeSection={activeSection} />

        <AboutSection 
            scrollProgress={scrollProgress} 
            scrollToProjects={scrollToProjects} 
        />

        <ProjectsSection 
            projects={projects}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
        />

        <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
            display: none;
            }
            .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
            }
        `}</style>
        </div>
    </>
    );
}
