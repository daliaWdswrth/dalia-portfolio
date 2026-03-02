'use client';

export default function ProjectCard({ project, index, totalProjects, scrollToProject, projects }) {
  return (
    <div className="min-w-full snap-start">
      {/* Project Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 md:px-16 relative pt-32 md:pt-0">
        <div className="max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Project Image */}
          <div className="relative w-full order-2 md:order-1">
            <div className="aspect-[4/3] border border-white/20 relative overflow-hidden group">
              {project.images?.hero ? (
                <img 
                  src={project.images.hero} 
                  alt={project.title}
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs md:text-sm tracking-widest opacity-20">PROJECT IMAGE</span>
                </div>
              )}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
            </div>
            {/* Decorative corner */}
            {/* <div className="hidden md:block absolute -right-4 -bottom-4 w-24 h-24 border border-white/20" /> */}
          </div>

          {/* Project Info */}
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <div>
              <div className="text-xs md:text-sm tracking-widest font-mono opacity-40 mb-2 md:mb-3">
                {project.category} · {project.year}
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                {project.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed opacity-80">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 text-sm md:text-base font-medium text-pink-600 hover:text-blue-500 underline underline-offset-4 transition-colors"
                >
                    {project.link}
              </a>
            </div>

            <div className="pt-2 md:pt-4 flex flex-wrap gap-6 md:gap-8">
              <div>
                <div className="text-xs tracking-widest font-mono opacity-40 mb-1 md:mb-2">ROLE</div>
                <div className="text-sm">{project.role}</div>
              </div>
              <div>
                <div className="text-xs tracking-widest font-mono opacity-40 mb-1 md:mb-2">TOOLS</div>
                <div className="text-sm">{project.tools}</div>
              </div>
            </div>

            {/* Scroll down indicator */}
            <div className="pt-4 md:pt-8 flex items-center gap-2 md:gap-3 text-xs md:text-sm tracking-widest font-mono opacity-40">
              <span>SCROLL DOWN FOR DETAILS</span>
              <span className="text-lg md:text-xl">↓</span>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        {index > 0 && (
          <button
            onClick={() => scrollToProject(index - 1)}
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/40 items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <span className="text-2xl">←</span>
          </button>
        )}
        {index < totalProjects - 1 && (
          <button
            onClick={() => scrollToProject(index + 1)}
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/40 items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <span className="text-2xl">→</span>
          </button>
        )}
      </div>

      {/* Project Details Section (Scrollable Below) */}
      <div className="px-4 md:px-16 py-12 md:py-16 bg-black">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          {/* Full Description */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-16">
            <div className="md:col-span-1">
              <h4 className="text-sm uppercase tracking-widest opacity-40">Overview</h4>
            </div>
            <div className="md:col-span-2">
              <p className="text-base md:text-lg leading-relaxed opacity-80">
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Additional Project Images */}
          <div className="space-y-12 md:space-y-16">
            {/* Main Detail Image */}
            {project.images?.main ? (
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.images.main} 
                  alt={`${project.title} - Detail`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ) : (
              <div className="aspect-[16/9] border-2 border-white/20 bg-white/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs md:text-sm uppercase tracking-widest opacity-20 mb-2">Main Image</div>
                  <div className="text-xs opacity-10">1920 × 1080</div>
                </div>
              </div>
            )}
            
            {/* Secondary Detail Image */}
            {project.images?.detail1 ? (
              <div className="aspect-[4/3] border border-white/20 bg-white/5 overflow-hidden">
                <img 
                  src={project.images.detail1} 
                  alt={`${project.title} - Detail 2`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] border border-white/20 bg-white/5 flex items-center justify-center">
                <div className="text-xs uppercase tracking-widest opacity-20">Image 2</div>
              </div>
            )}
            
            {/* Two Column Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Detail Image 2 */}
              {project.images?.detail2 ? (
                <div className="aspect-square border border-white/20 bg-white/5 overflow-hidden">
                  <img 
                    src={project.images.detail2} 
                    alt={`${project.title} - Detail 3`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ) : (
                <div className="aspect-square border border-white/20 bg-white/5 flex items-center justify-center">
                  <div className="text-xs uppercase tracking-widest opacity-20">Image 3</div>
                </div>
              )}
              
              {/* Detail Image 3 */}
              {project.images?.detail3 ? (
                <div className="aspect-square border border-white/20 bg-white/5 overflow-hidden">
                  <img 
                    src={project.images.detail3} 
                    alt={`${project.title} - Detail 4`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ) : (
                <div className="aspect-square border border-white/20 bg-white/5 flex items-center justify-center">
                  <div className="text-xs uppercase tracking-widest opacity-20">Image 4</div>
                </div>
              )}
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-12 md:py-16 border-t border-white/20">
            <div>
              <h5 className="text-sm uppercase tracking-widest font-mono opacity-40 mb-2 md:mb-3">Year</h5>
              <p className="text-base">{project.year}</p>
            </div>
            <div>
              <h5 className="text-sm uppercase tracking-widest font-mono opacity-40 mb-2 md:mb-3">Role</h5>
              <p className="text-base">{project.role}</p>
            </div>
            <div>
              <h5 className="text-sm uppercase tracking-widest font-mono opacity-40 mb-2 md:mb-3">Tools</h5>
              <p className="text-base">{project.tools}</p>
            </div>
          </div>

          {/* Next Project Navigation */}
          {index < totalProjects - 1 && (
            <div className="pt-12 md:pt-16 border-t border-white/20">
              <button
                onClick={() => {
                  scrollToProject(index + 1);
                  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }}
                className="group block w-full text-left"
              >
                <div className="text-xs md:text-sm uppercase tracking-widest font-mono opacity-40 mb-3 md:mb-4">Next Project</div>
                <div className="text-2xl md:text-3xl font-bold tracking-tight group-hover:opacity-50 transition-opacity">
                  {projects[index + 1].title} →
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
