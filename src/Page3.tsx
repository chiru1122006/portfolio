import React, { useEffect, useRef, useState } from 'react';
import { 
  Database, 
  Layers, 
  Shield, 
  Terminal, 
  Box, 
  CreditCard, 
  Zap, 
  PieChart, 
  Sparkles 
} from 'lucide-react';

// --- Types ---
type ThemeColor = 'blue' | 'pink' | 'orange';

interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  theme: ThemeColor;
  badges: BadgeData[];
  visualComponent: React.ReactNode;
}

interface BadgeData {
  label: string;
  icon?: React.ReactNode;
}

// --- Icons (Custom SVGs) ---
const Icons = {
  NextJS: () => (
    <svg viewBox="0 0 180 180" className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none">
      <mask id="nextjs_mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#nextjs_mask)">
        <circle cx="90" cy="90" r="87" fill="black" stroke="currentColor" strokeWidth="6" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
        <rect fill="white" height="72" width="12" x="115" y="54" />
      </g>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#61DAFB]">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3178C6]" fill="currentColor">
      <path d="M1.125 0C0.502 0 0 0.502 0 1.125v21.75C0 23.498 0.502 24 1.125 24h21.75c0.623 0 1.125-.502 1.125-1.125V1.125C24 0.502 23.498 0 22.875 0H1.125zM12.9 11.5h2.9v1.4h-1.05v6.2h-1.85v-6.2h-1.05v-1.4h1.05zm4.85 0h2.4c.9 0 1.6.4 1.6 1.3v.1c0 .7-.4 1.1-1.1 1.3.8.1 1.2.6 1.2 1.4v2.7h-1.75v-2.5c0-.4-.2-.6-.7-.6h-.05v3.1h-1.75v-7.6h.15z" />
    </svg>
  ),
  Node: () => (
    <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#339933]" fill="currentColor">
      <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm0 2.2l6 3.3-2.2 1.2-3.8-2.1V6.5l.01-.01zM11 6.6v4.3l-3.8 2.1-2.2-1.2 6-5.2zM5.5 12.1l2.8 1.6-2.8 1.6V12.1zm6.5 7.8l-6-3.4 2.2-1.2 3.8 2.1v2.5zm1-2.5l3.8-2.1 2.2 1.2-6 3.4v-2.5zm6.5-4.2l-2.8-1.6 2.8-1.6v3.2z" />
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#38B2AC]" fill="currentColor">
      <path d="M12.001 10.375c-1.25.0-2.25-.5-2.25-1.125s1.0-1.125 2.25-1.125 2.25.5 2.25 1.125-1.0 1.125-2.25 1.125zm6.0 6.75c-1.25.0-2.25-.5-2.25-1.125s1.0-1.125 2.25-1.125 2.25.5 2.25 1.125-1.0 1.125-2.25 1.125zm-12.0-3.375c-1.25.0-2.25-.5-2.25-1.125s1.0-1.125 2.25-1.125 2.25.5 2.25 1.125-1.0 1.125-2.25 1.125zM18.75 6.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zM6.75 13.25c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zM12.75 3.125c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z" />
    </svg>
  ),
  Sanity: () => (
    <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F03E2F]" fill="currentColor">
      <path d="M12.78 4.75a1.8 1.8 0 00-2.58 0L7.61 7.34l-.44.44-.06.06c-.19.2-.31.45-.35.73l-.04.28V15.7l.01.12.03.11c.05.21.15.4.29.56l.08.09 3.03 3.03.13.13.04.04c.73.73 2.11.51 2.58-.41l.06-.11.02-.05V9.45l.01-.13.03-.11c.05-.21.15-.4.29-.56l.08-.09 3.03-3.03.13-.13.04-.04c.73-.73.51-2.11-.41-2.58l-.11-.06-.05-.02H6.9l.06.03c.12.06.23.14.33.24l5.49 5.49z" />
    </svg>
  )
};

// --- Helper Components ---

const Badge = ({ label, icon, delay }: { label: string; icon: React.ReactNode; delay: number }) => (
  <span 
    className="group border border-white/10 inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap font-mono text-neutral-600 text-sm shadow-sm transition-all duration-300 hover:border-white/30 hover:bg-white/5 bg-white/5 gap-1.5 rounded-md px-2 py-1 sm:px-2.5 sm:py-1.5 cursor-default select-none backdrop-blur-sm animate-slide-down opacity-0"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <span className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
      {icon}
    </span>
    <span className="font-medium text-[9px] text-neutral-400 uppercase tracking-wide sm:text-[10px] group-hover:text-white transition-colors">
      {label}
    </span>
  </span>
);

// --- Visual Mockups ---

const ZenithVisual = () => (
  <div className="relative mb-8 lg:mb-0">
    <div className="absolute inset-0 bg-blue-600 rounded-[2rem] transform rotate-[-1deg] group-hover:rotate-0 transition-transform duration-700 ease-out opacity-80 blur-sm"></div>
    <div className="relative bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] rounded-[2rem] p-8 sm:p-12 overflow-hidden min-h-[500px] sm:min-h-[600px] flex items-center justify-center border border-white/10 shadow-2xl">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 w-full flex justify-center items-center gap-8 perspective-1000">
        <div className="hidden sm:block transform translate-y-12 translate-x-12 scale-90 opacity-60">
           <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[280px] shadow-xl flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-105">
             <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
             <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
             <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
             <div className="rounded-[2rem] overflow-hidden w-full h-full bg-neutral-900 relative">
               <div className="absolute top-0 inset-x-0 h-6 bg-neutral-900 z-20 flex justify-center"><div className="w-24 h-5 bg-black rounded-b-xl"></div></div>
               <div className="w-full h-full bg-neutral-800 p-4 pt-10 flex flex-col gap-4 overflow-hidden">
                 <div className="flex justify-between items-center text-white/80 px-2"><span className="text-xs font-medium">9:41</span><div className="flex gap-1.5"><div className="w-4 h-2.5 bg-white/20 rounded-[1px]"></div><div className="w-4 h-2.5 bg-white/60 rounded-[1px]"></div></div></div>
                 <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/5"><div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 mb-3"></div><div className="h-4 w-24 bg-white/20 rounded-full mb-2"></div><div className="h-8 w-32 bg-white/90 rounded-full"></div></div>
               </div>
             </div>
           </div>
        </div>
        <div className="transform sm:-translate-x-12 z-20">
           <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[280px] shadow-xl flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-105">
             <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
             <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
             <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
             <div className="rounded-[2rem] overflow-hidden w-full h-full bg-neutral-900 relative">
               <div className="absolute top-0 inset-x-0 h-6 bg-neutral-900 z-20 flex justify-center"><div className="w-24 h-5 bg-black rounded-b-xl"></div></div>
               <div className="w-full h-full bg-black p-4 pt-10 flex flex-col gap-4 overflow-hidden">
                 <div className="flex justify-between items-center text-white/80 px-2"><span className="text-xs font-medium">9:41</span><div className="flex gap-1.5"><div className="w-4 h-2.5 bg-white/20 rounded-[1px]"></div><div className="w-4 h-2.5 bg-white/60 rounded-[1px]"></div></div></div>
                 <div className="bg-neutral-900/40 rounded-3xl p-5 border border-white/5 flex-1">
                   <div className="flex justify-between mb-6"><div className="h-3 w-16 bg-white/20 rounded-full"></div><div className="h-3 w-16 bg-white/20 rounded-full"></div></div>
                   <div className="flex items-end justify-between h-32 gap-2 mb-6">
                     <div style={{ height: '40%' }} className="w-full bg-white/10 rounded-t-sm"></div>
                     <div style={{ height: '70%' }} className="w-full bg-white/10 rounded-t-sm"></div>
                     <div style={{ height: '45%' }} className="w-full bg-white/10 rounded-t-sm"></div>
                     <div style={{ height: '90%' }} className="w-full bg-blue-500 rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                     <div style={{ height: '60%' }} className="w-full bg-white/10 rounded-t-sm"></div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
      <div className="absolute top-8 left-8 right-8 z-30 pointer-events-none">
        <p className="text-blue-100/90 text-lg sm:text-xl font-light leading-snug max-w-md">
          An intuitive mobile companion for organizing your digital wallets.
        </p>
      </div>
    </div>
  </div>
);

const NextVisual = () => (
  <div className="relative mb-8 lg:mb-0">
    <div className="absolute inset-0 bg-pink-600 rounded-[2rem] transform rotate-[1deg] group-hover:rotate-0 transition-transform duration-700 ease-out opacity-80 blur-sm"></div>
    <div className="relative bg-gradient-to-br from-[#E11D48] to-[#9F1239] rounded-[2rem] p-8 sm:p-12 overflow-hidden min-h-[500px] flex items-center justify-center border border-white/10 shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-400/20 via-transparent to-transparent"></div>
      
      <div className="w-full mt-20 h-[350px] sm:h-[400px]">
        <div className="relative w-full h-full bg-[#1C1C1E] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col transform transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="h-8 bg-[#2C2C2E] flex items-center px-3 gap-2 border-b border-white/5">
            <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div><div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div><div className="w-3 h-3 rounded-full bg-[#28C840]"></div></div>
            <div className="flex-1 flex justify-center"><div className="w-48 h-5 bg-[#1C1C1E] rounded-md text-[8px] flex items-center justify-center text-neutral-500 font-mono">nextventures.app</div></div>
          </div>
          <div className="flex-1 p-6 relative flex flex-col items-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 blur-[80px] pointer-events-none"></div>
            <div className="flex w-full justify-between items-center mb-8 px-4">
               <div className="flex gap-4"><div className="h-4 w-12 bg-white/20 rounded-full"></div><div className="h-4 w-12 bg-white/20 rounded-full"></div></div>
              <div className="h-8 w-20 bg-pink-600 rounded-full"></div>
            </div>
            <div className="text-center mb-10 space-y-4 max-w-sm">
               <div className="inline-block px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-[10px] text-pink-400 mb-2">Secured £7.5M in Seed Funding</div>
               <h2 className="text-3xl font-bold text-white leading-tight">Pitch Your Startup, <br/>Connect With <span className="text-pink-500">Entrepreneurs</span></h2>
            </div>
            <div className="absolute right-4 bottom-12 p-3 bg-[#2C2C2E] rounded-lg border border-white/10 shadow-xl rotate-[3deg] w-28">
               <div className="flex justify-between items-center mb-2"><div className="text-[8px] text-neutral-400">Nov 9, 2024</div></div>
               <div className="w-full h-2 bg-white/50 rounded-full mb-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-8 left-8 right-8 z-30 mb-8 pointer-events-none">
        <p className="text-pink-100/90 text-lg sm:text-xl font-light leading-snug max-w-md">
          A space for entrepreneurs to pitch ideas, explore others, and gain exposure.
        </p>
      </div>
    </div>
  </div>
);

const FinoteVisual = () => (
  <div className="relative mb-8 lg:mb-0">
    <div className="absolute inset-0 bg-amber-600 rounded-[2rem] transform rotate-[-1deg] group-hover:rotate-0 transition-transform duration-700 ease-out opacity-80 blur-sm"></div>
    <div className="relative bg-gradient-to-br from-[#D97706] to-[#92400E] rounded-[2rem] p-8 sm:p-12 overflow-hidden min-h-[500px] flex items-center justify-center border border-white/10 shadow-2xl">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative w-full h-[350px] flex items-center justify-center mt-12">
         <div className="relative w-64 h-40 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl transform rotate-[-15deg] skew-x-12 translate-y-[-40px] z-30 hover:translate-y-[-50px] transition-transform duration-500">
             <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
               <div className="w-12 h-12 bg-amber-500 rounded-full mb-2 flex items-center justify-center"><PieChart className="text-white" size={24} /></div>
               <div className="text-white font-bold text-lg">Analytics</div>
             </div>
         </div>
         <div className="relative w-64 h-40 bg-neutral-800 border border-white/10 rounded-xl shadow-2xl transform rotate-[-15deg] skew-x-12 translate-y-[20px] translate-x-[40px] z-20 opacity-80">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
               <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
               <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
             </div>
         </div>
      </div>
      
      <div className="absolute top-8 left-8 right-8 z-30 pointer-events-none">
        <p className="text-amber-100/90 text-lg sm:text-xl font-light leading-snug max-w-md">
           Smart financial tracking for the modern age. Sync accounts and visualize wealth.
        </p>
      </div>
    </div>
  </div>
);

// --- Data ---

const projects: Project[] = [
  {
    id: 'zenith',
    title: 'Zenith Minds',
    theme: 'blue',
    description: 'Developed ZenithMinds, an educational platform connecting students and instructors, fostering global collaboration and continuous learning.',
    features: [
      'Built with Next.js, React, and TypeScript for scalability.',
      'Styled using Tailwind CSS with animations by Motion.dev.',
      'Used Zustand for state management and Zod for validation.',
      'Integrated MongoDB and RESTful APIs with Node.js.'
    ],
    badges: [
      { label: 'Next.js', icon: <Icons.NextJS /> },
      { label: 'React', icon: <Icons.React /> },
      { label: 'Node.js', icon: <Icons.Node /> },
      { label: 'TypeScript', icon: <Icons.TypeScript /> },
      { label: 'MongoDB', icon: <Database className="w-3.5 h-3.5" /> },
      { label: 'Zustand', icon: <Layers className="w-3.5 h-3.5" /> },
      { label: 'Zod', icon: <Shield className="w-3.5 h-3.5" /> },
      { label: 'Tailwind', icon: <Icons.Tailwind /> },
    ],
    visualComponent: <ZenithVisual />
  },
  {
    id: 'next',
    title: 'Next Ventures',
    theme: 'pink',
    description: 'A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. Built to impress both users and investors.',
    features: [
      'Leveraged Partial Prerendering and After for faster loading.',
      'Simplified idea submission with a clean, intuitive design.',
      'Enhanced browsing with seamless performance optimization.'
    ],
    badges: [
      { label: 'Next.js', icon: <Icons.NextJS /> },
      { label: 'React', icon: <Icons.React /> },
      { label: 'Sanity CMS', icon: <Icons.Sanity /> },
      { label: 'TypeScript', icon: <Icons.TypeScript /> },
      { label: 'Better Auth', icon: <Shield className="w-3.5 h-3.5" /> },
      { label: 'Groq', icon: <Database className="w-3.5 h-3.5" /> },
      { label: 'Sentry', icon: <Terminal className="w-3.5 h-3.5" /> },
      { label: 'Tailwind', icon: <Icons.Tailwind /> },
      { label: 'Motion.dev', icon: <Box className="w-3.5 h-3.5" /> },
    ],
    visualComponent: <NextVisual />
  },
  {
    id: 'finote',
    title: 'Finote',
    theme: 'orange',
    description: 'An all-in-one financial dashboard. Finote helps users gain clarity on their spending habits through AI-powered categorization and predictive budgeting.',
    features: [
      'Secure bank syncing via Plaid integration.',
      'Real-time subscription tracking and alerts.',
      'Cross-platform availability on iOS and Android.'
    ],
    badges: [
      { label: 'React Native', icon: <Icons.React /> },
      { label: 'Plaid', icon: <CreditCard className="w-3.5 h-3.5" /> },
      { label: 'Firebase', icon: <Zap className="w-3.5 h-3.5" /> },
      { label: 'Node.js', icon: <Icons.Node /> },
      { label: 'Tailwind', icon: <Icons.Tailwind /> },
    ],
    visualComponent: <FinoteVisual />
  }
];

// --- Main Component ---

export default function Page3() {
  const [activeTheme, setActiveTheme] = useState<ThemeColor>('blue');
  const [activeProjectId, setActiveProjectId] = useState<string>('zenith');
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          const theme = entry.target.getAttribute('data-theme') as ThemeColor;
          if (id) setActiveProjectId(id);
          if (theme) setActiveTheme(theme);
        }
      });
    }, { 
      threshold: 0.5,
      rootMargin: "-10% 0px -10% 0px" 
    });

    const sections = document.querySelectorAll('.project-section');
    sections.forEach(s => observerRef.current?.observe(s));

    return () => observerRef.current?.disconnect();
  }, []);

  const getThemeColors = (theme: ThemeColor) => {
    switch (theme) {
      case 'blue': return { bg: 'bg-[#050505]', accent: 'text-blue-500', selection: 'selection:bg-blue-500/30' };
      case 'pink': return { bg: 'bg-[#050505]', accent: 'text-pink-500', selection: 'selection:bg-pink-500/30' };
      case 'orange': return { bg: 'bg-[#050505]', accent: 'text-orange-500', selection: 'selection:bg-orange-500/30' };
      default: return { bg: 'bg-[#050505]', accent: 'text-blue-500', selection: 'selection:bg-blue-500/30' };
    }
  };

  const themeClasses = getThemeColors(activeTheme);
  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

  return (
    <div className={`min-h-screen pb-24 text-white antialiased transition-colors duration-1000 ease-in-out font-sans ${themeClasses.bg} ${themeClasses.selection}`}>
      
      {/* Styles for animations & fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .work-text {
          background: linear-gradient(90deg, #3b82f6, #ec4899, #f97316, #3b82f6);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slideDown 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="mb-32 text-center space-y-6">
          <h3 className="text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase">Case Studies</h3>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight">
            Curated <span className="italic font-light work-text">work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Scrollable Left Column (Visuals) */}
          <div className="lg:col-span-7 space-y-32">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-section group" 
                data-id={project.id} 
                data-theme={project.theme}
              >
                {/* Visual */}
                {project.visualComponent}

                {/* Mobile Info (Visible only on small screens) */}
                <div className="lg:hidden mt-8 block">
                   <div className="space-y-4 mb-8">
                     <div className="flex items-center gap-3">
                       <div className={`w-8 h-[2px] transition-colors duration-700 ${activeTheme === 'blue' ? 'bg-blue-500' : activeTheme === 'pink' ? 'bg-pink-500' : 'bg-orange-500'}`}></div>
                       <h3 className="text-3xl font-serif font-bold text-white tracking-wide">{project.title}</h3>
                     </div>
                     <p className="text-neutral-400 leading-relaxed text-lg">{project.description}</p>
                   </div>
                   <ul className="space-y-4">
                     {project.features.map((feature, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-neutral-400 text-sm sm:text-[15px] leading-relaxed">
                         <Sparkles className={`size-4 mt-1 shrink-0 ${themeClasses.accent}`} />
                         <span>{feature}</span>
                       </li>
                     ))}
                   </ul>
                   <div className="pt-8 flex flex-wrap gap-2">
                     {project.badges.map((b, idx) => (
                        <Badge key={idx} label={b.label} icon={b.icon} delay={0} />
                     ))}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Right Column (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32 self-start h-fit pl-8">
            <div key={activeProject.id} className="space-y-8">
              
              {/* Title & Desc */}
              <div className="space-y-4 opacity-0 animate-slide-down" style={{ animationDelay: '0ms' }}>
                 <div className="flex items-center gap-3">
                   <div className={`w-8 h-[2px] transition-colors duration-700 ${activeTheme === 'blue' ? 'bg-blue-500' : activeTheme === 'pink' ? 'bg-pink-500' : 'bg-orange-500'}`}></div>
                   <h3 className="text-3xl font-serif font-bold text-white tracking-wide">{activeProject.title}</h3>
                 </div>
                 <p className="text-neutral-400 leading-relaxed text-lg">
                   {activeProject.description}
                 </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4">
                {activeProject.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 text-neutral-400 text-sm sm:text-[15px] leading-relaxed opacity-0 animate-slide-down"
                    style={{ animationDelay: `${150 + (index * 70)}ms` }}
                  >
                    <Sparkles className={`size-4 mt-1 shrink-0 ${themeClasses.accent} transition-colors duration-1000`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Badges */}
              <div className="pt-8 flex flex-wrap gap-2">
                {activeProject.badges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    label={badge.label} 
                    icon={badge.icon} 
                    delay={450 + (index * 50)} 
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}