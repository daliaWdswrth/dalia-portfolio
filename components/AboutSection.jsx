'use client';
import BackgroundPattern from "./BackgroundPattern";


export default function AboutSection({ scrollProgress, scrollToProjects }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">


      <BackgroundPattern />


      <div className="max-w-5xl w-full flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-16 items-center relative z-10">
        {/* Profile Image */}
        <div className="md:col-span-2 w-48 md:w-full">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-2 border-black bg-neutral-50 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs tracking-widest opacity-90">
                    <img
                        src="/images/profile.jpeg"
                        alt="Dalia Wadsworth"
                        className="w-full h-full object-cover"
                    />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="md:col-span-3 space-y-6 md:space-y-8 text-center md:text-left">
          <div>
            <h1 className="text-5xl md:text-8xl font-bold mb-3 md:mb-4 leading-none tracking-tight">
              Dalia<br/>Wadsworth
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-xs md:text-sm tracking-widest font-mono opacity-40">
              <span>PRODUCT DESIGNER</span>
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-black rounded-full" />
              <span>DEVELOPER</span>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            <p>
              I design digital experiences that are thoughtful, intentional, and functional. 
              With degrees in computer science and fine arts from Tufts University, I work across the full arc of a project, from research and wireframes to a built, shipped product.
            </p>
            <p className="opacity-60">
              Currently based in Santa Monica.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 pt-2 md:pt-4">
            <a 
              href="https://github.com/daliaWdswrth"
              target="_blank" 
              className="group flex items-center gap-2 text-xs md:text-sm tracking-widest font-mono hover:opacity-60 transition-opacity"
            >
              GITHUB
              <span className="text-lg md:text-xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/daliawadsworth/" 
              target="_blank"
              className="group flex items-center gap-2 text-xs md:text-sm tracking-widest font-mono hover:opacity-60 transition-opacity"
            >
              LINKEDIN
              <span className="text-lg md:text-xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="mailto:daliawor@gmail.com" 
              className="group flex items-center gap-2 text-xs md:text-sm tracking-widest font-mono hover:opacity-60 transition-opacity"
            >
              EMAIL
              <span className="text-lg md:text-xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 cursor-pointer hover:opacity-60 transition-opacity"
      >
        <span className="text-xs tracking-widest font-mono opacity-40">SCROLL TO EXPLORE</span>
        <div className="w-5 md:w-6 h-8 md:h-10 border-2 border-black rounded-full flex justify-center pt-1.5 md:pt-2">
          <div className="w-1 h-1.5 md:h-2 bg-black rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
}
