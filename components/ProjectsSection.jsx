'use client';

import { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects, currentProject, setCurrentProject }) {
  const projectsRef = useRef(null);

  // Horizontal scroll for projects
  const scrollToProject = (index) => {
    if (projectsRef.current) {
      const scrollAmount = index * window.innerWidth;
      projectsRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    setCurrentProject(index);
  };

  // Handle horizontal scroll detection
  useEffect(() => {
    const handleProjectScroll = () => {
      if (projectsRef.current) {
        const scrollLeft = projectsRef.current.scrollLeft;
        const projectIndex = Math.round(scrollLeft / window.innerWidth);
        setCurrentProject(projectIndex);
      }
    };

    const projectsElement = projectsRef.current;
    if (projectsElement) {
      projectsElement.addEventListener('scroll', handleProjectScroll);
      return () => projectsElement.removeEventListener('scroll', handleProjectScroll);
    }
  }, [setCurrentProject]);

  return (
    <section className="relative bg-black text-white">
      {/* Projects Header */}
      <div className="sticky top-0 left-0 right-0 z-30 px-4 md:px-16 py-6 md:py-12 bg-black border-b border-white/10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-2 md:mb-4">Selected Work</h2>
            <p className="text-xs md:text-sm tracking-widest font-mono opacity-40">
              {String(currentProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex gap-2 md:gap-4 pb-1 md:pb-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`transition-all ${
                  currentProject === index 
                    ? 'w-8 md:w-12 h-1 bg-white' 
                    : 'w-6 md:w-8 h-1 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Projects */}
      <div
        ref={projectsRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide items-start"
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalProjects={projects.length}
            scrollToProject={scrollToProject}
            projects={projects}
            currentProject={currentProject}
          />
        ))}
      </div>

      {/* Scroll hint for horizontal navigation - Hidden on mobile */}
      <div className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 items-center gap-4 text-sm tracking-widest font-mono opacity-40 pointer-events-none">
        <span>←</span>
        <span>SCROLL HORIZONTALLY</span>
        <span>→</span>
      </div>

      {/* Mobile swipe hint */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xs tracking-widest font-mono opacity-40 pointer-events-none">
        <span>←</span>
        <span>SWIPE</span>
        <span>→</span>
      </div>
    </section>
  );
}
