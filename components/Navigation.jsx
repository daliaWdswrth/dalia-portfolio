'use client';

export default function Navigation({ scrollToProjects }) {
  return (
    <nav className="fixed top-4 md:top-8 right-4 md:right-8 z-50 mix-blend-difference">
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white text-xs font-mono tracking-wider hover:scale-110 transition-transform"
        >
          01
        </button>
        <div className="w-full h-px bg-white/30" />
        <button
          onClick={scrollToProjects}
          className="text-white text-xs font-mono tracking-wider hover:scale-110 transition-transform"
        >
          02
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-12 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white text-sm font-mono tracking-wider hover:scale-110 transition-transform"
        >
          <span className="opacity-50">01</span> ABOUT
        </button>
        <div className="w-px h-6 bg-white/30" />
        <button
          onClick={scrollToProjects}
          className="text-white text-sm font-mono tracking-wider hover:scale-110 transition-transform"
        >
          <span className="opacity-50">02</span> WORK
        </button>
      </div>
    </nav>
  );
}
