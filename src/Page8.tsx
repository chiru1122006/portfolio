import React from 'react';
import { 
  ArrowUpRight, 
  Code2, 
  Terminal, 
  Command, 
  PenTool, 
  Chrome, 
  FileText 
} from 'lucide-react';

// --- Types & Interfaces ---
interface IconItem {
  icon: React.ElementType;
  color: string;
  delay: string;
}

// --- Styles & Animations ---
// In a real Vite app, these would go in index.css or tailwind.config.js
// We inject them here to ensure the preview works perfectly in one file.
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

    .font-instrument-serif { font-family: "Instrument Serif", serif; }
    .font-mono { font-family: "JetBrains Mono", monospace; }
    .font-sans { font-family: "Inter", sans-serif; }

    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #050505; }
    ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #555; }

    /* Animations */
    @keyframes gradient-x {
      0%, 100% { background-size: 200% 200%; background-position: left center; }
      50% { background-size: 200% 200%; background-position: right center; }
    }
    .animate-gradient-x { animation: gradient-x 3s ease infinite; }

    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow { animation: spin-slow 8s linear infinite; }
  `}</style>
);

// --- Components ---

const UsesCard = () => {
  const icons: IconItem[] = [
    { icon: Code2, color: "text-blue-500", delay: "delay-0" },
    { icon: Chrome, color: "text-pink-400", delay: "delay-75" },
    { icon: Terminal, color: "text-gray-300", delay: "delay-100" },
    { icon: FileText, color: "text-white", delay: "delay-150" },
    { icon: Command, color: "text-orange-400", delay: "delay-200" },
    { icon: PenTool, color: "text-purple-400", delay: "delay-300" },
  ];

  return (
    <a href="#" className="group relative md:col-span-6 lg:col-span-4 h-[320px] rounded-2xl bg-[#111111] border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300">
      {/* Hover Arrow */}
      <div className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1">
        <ArrowUpRight className="h-4 w-4 text-white" />
      </div>

      {/* Icons Grid */}
      <div className="absolute inset-0 p-6 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 w-full max-w-[280px]">
          {icons.map((Item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 group/icon">
              <div className={`w-16 h-16 rounded-2xl bg-[#1A1B1E] border border-white/5 flex items-center justify-center shadow-inner transition-transform duration-500 group-hover/icon:-translate-y-2 ${Item.delay}`}>
                <Item.icon className={`w-8 h-8 ${Item.color}`} strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
        <h3 className="font-mono text-xs uppercase text-white/40 mb-1">Uses</h3>
        <p className="text-lg text-white/90">Check out my favorite tools</p>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
    </a>
  );
};

const GuestbookCard = () => {
  return (
    <a href="#" className="group relative md:col-span-6 lg:col-span-4 h-[320px] rounded-2xl bg-[#111111] border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300">
      <div className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1">
        <ArrowUpRight className="h-4 w-4 text-white" />
      </div>

      {/* SVG Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out">
        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" className="rotate-12">
          <rect x="40" y="40" width="120" height="120" rx="20" fill="#2A2A2A" fillOpacity="0.5"/>
          <circle cx="100" cy="100" r="40" fill="#a18cd1" fillOpacity="0.2" className="animate-pulse"/>
          <rect x="60" y="60" width="80" height="80" rx="15" stroke="url(#paint0_linear)" strokeWidth="2"/>
          <path d="M70 130L130 70" stroke="white" strokeOpacity="0.2" strokeWidth="2"/>
          <circle cx="130" cy="130" r="10" fill="#ff9a9e" fillOpacity="0.8"/>
          <circle cx="70" cy="70" r="10" fill="#a18cd1" fillOpacity="0.8"/>
          <defs>
            <linearGradient id="paint0_linear" x1="60" y1="60" x2="140" y2="140" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff9a9e"/>
              <stop offset="1" stopColor="#a18cd1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
        <h3 className="font-mono text-xs uppercase text-white/40 mb-1">Guestbook</h3>
        <p className="text-lg text-white/90">Let me know you were here</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
    </a>
  );
};

const MusicCard = () => {
  return (
    <a href="#" className="group relative md:col-span-12 lg:col-span-4 h-[320px] rounded-2xl bg-[#111111] border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300">
      {/* Blurred Background Art */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>

      <div className="relative h-full p-6 flex flex-col justify-between z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <svg viewBox="0 0 168 168" className="h-5 w-5 text-[#1ED760] fill-current">
              <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"></path>
            </svg>
            <h3 className="font-medium text-white/90">Last Played</h3>
          </div>
          <p className="text-sm text-white/60 line-clamp-3">
            <span className="text-white hover:underline cursor-pointer">Midnight City</span> by <span className="text-white hover:underline cursor-pointer">M83</span> from <span className="text-white hover:underline cursor-pointer">Hurry Up, We're Dreaming</span>
          </p>
        </div>

        <div className="relative w-full flex justify-center mt-4">
          <div className="relative w-48 h-48 flex items-center justify-center group-hover:-translate-y-4 transition-transform duration-500 ease-out">
            {/* Vinyl Record */}
            <div className="absolute w-40 h-40 rounded-full bg-[#111] border border-white/10 shadow-2xl flex items-center justify-center animate-spin-slow">
              <div className="absolute inset-2 rounded-full border border-white/5"></div>
              <div className="absolute inset-4 rounded-full border border-white/5"></div>
              <div className="absolute inset-6 rounded-full border border-white/5"></div>
              <div className="w-16 h-16 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop')" }}></div>
              <div className="absolute w-2 h-2 bg-black rounded-full"></div>
            </div>
            
            {/* Album Cover */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-cover bg-center rounded shadow-2xl group-hover:-bottom-20 transition-all duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop')" }}></div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default function Page8() {
  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen flex flex-col items-center justify-center py-12 selection:bg-purple-500/30 bg-[#050505] text-white">
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header Section */}
          <div className="relative z-10 text-center mb-16">
            <p className="mb-4 font-mono text-xs font-medium text-white/50 uppercase tracking-[0.2em]">My Site</p>
            <h2 className="text-5xl md:text-7xl font-instrument-serif font-medium tracking-tight text-white relative inline-block">
              Explore, experiment
              <br className="md:hidden" />
              <span className="italic bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#fbc2eb] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x pr-2 ml-2">
                && say hello
              </span>
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <UsesCard />
            <GuestbookCard />
            <MusicCard />
          </div>

        </div>
      </div>
    </>
  );
}