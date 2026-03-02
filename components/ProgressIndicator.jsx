'use client';

export default function ProgressIndicator({ activeSection }) {
  return (
    <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      <div 
        className={`w-px h-20 bg-black transition-opacity ${activeSection === 'about' ? 'opacity-100' : 'opacity-20'}`}
      />
      <div 
        className={`w-px h-20 bg-black transition-opacity ${activeSection === 'projects' ? 'opacity-100' : 'opacity-20'}`}
      />
    </div>
  );
}
