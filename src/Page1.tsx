import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Copy, Check } from 'lucide-react';
import Header from './components/Header';

// Interface for our generated Star data
interface StarData {
  id: number;
  left: number;
  top: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
  twinkleDuration: number;
  twinkleDelay: number;
}

const Page1: React.FC = () => {
  const [stars, setStars] = useState<StarData[]>([]);
  const [copied, setCopied] = useState(false);

  // Generate stars on mount
  useEffect(() => {
    const starCount = 100;
    const newStars: StarData[] = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 80, // Keep stars in upper 80%
      opacity: Math.random() * 0.6 + 0.2,
      animationDuration: Math.random() * 100 + 50, // 50s to 150s
      animationDelay: Math.random() * 20,
      twinkleDuration: Math.random() * 2 + 2,
      twinkleDelay: Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  // Handle clipboard copy
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('svcr@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-['Inter'] text-gray-100 selection:bg-blue-500/30" style={{ backgroundColor: 'rgb(10,10,10)' }}>
      {/* Injecting fonts and custom animations here.
        In a real project, fonts usually go in index.html and styles in a CSS file.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes moveStars {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100vw, 50vh); }
        }
      `}</style>

      {/* Left and Right Edge Fade */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[rgb(10,10,10)] via-[rgba(10,10,10,0.5)] to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[rgb(10,10,10)] via-[rgba(10,10,10,0.5)] to-transparent"></div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars Container */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full w-[1px] h-[1px]"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                opacity: star.opacity,
                animation: `twinkle ${star.twinkleDuration}s ease-in-out infinite ${star.twinkleDelay}s, moveStars ${star.animationDuration}s linear infinite ${star.animationDelay}s`
              }}
            />
          ))}
        </div>
        
        {/* Smooth black fade at bottom for section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-[rgb(5,5,5)] via-[rgba(5,5,5,0.6)] to-transparent"></div>
        </div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </div>

      {/* Header Component */}
      <Header activeTab="Home" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 pb-20 pt-32">
          
          {/* Upcoming Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm mb-8 group hover:bg-blue-500/25 transition-all cursor-pointer">
            <span className="px-2.5 py-0.5 text-xs font-semibold text-white bg-blue-500 rounded-full">
              Upcoming
            </span>
            <span className="text-sm text-gray-200 font-medium">
              Nextnode is launching <span className="text-gray-300">soon!</span>
            </span>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Main Headline */}
          <h1 className="text-center mb-12 max-w-6xl">
            <div className="text-4xl md:text-7xl leading-tight font-['Playfair_Display'] text-gray-100 tracking-tight">
              I help founders turn ideas
            </div>
            <div className="text-4xl md:text-7xl leading-tight font-['Playfair_Display'] tracking-tight mt-2 relative">
              into seamless{' '}
              <span className="relative inline-block italic font-['Playfair_Display']">
                <span className="text-premium-shine" style={{
                  background: 'linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.25)) drop-shadow(0 3px 12px rgba(255, 255, 255, 0.15))'
                }}>
                  digital experiences
                </span>
              </span>
            </div>
          </h1>

          {/* Subtitle with Avatar */}
          <div className="flex items-center gap-3 mb-12 flex-wrap justify-center animate-fade-in-up">
            <span className="text-base md:text-lg text-gray-300 font-light">Hello, I'm svcr</span>
            <div className="w-16 h-12 rounded-full overflow-hidden border border-gray-600/40 shadow-lg shadow-black/50 backdrop-blur-sm">
              <img src="/src/images/chiru123.png" alt="svcr" className="w-full h-full object-cover" />
            </div>
            <span className="text-base md:text-lg text-gray-300 font-light">a Full Stack Developer</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 text-white font-medium text-lg transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:scale-105 active:scale-95">
              Let's Connect
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-all group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>

            <button 
              onClick={handleCopy}
              className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="relative">
                <Copy className={`w-5 h-5 transition-all duration-300 ${copied ? 'opacity-0 scale-50' : 'opacity-100 scale-100 group-hover:scale-110'}`} />
                <Check className={`w-5 h-5 text-green-400 absolute top-0 left-0 transition-all duration-300 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
              </div>
              <span className="text-base font-light min-w-[170px] text-left">
                {copied ? 'Copied to clipboard!' : 'svcr@gmail.com'}
              </span>
            </button>
          </div>

          {/* Horizontal Divider Line with Aurora and Edge Fade */}
          <div className="relative w-full mt-24 pointer-events-none">
            <style>{`
              @keyframes aurora {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }

              .horizontal-divider {
                position: relative;
                width: 100%;
                height: 3px;
                background: linear-gradient(to right, transparent 0%, white 30%, white 70%, transparent 100%);
                box-shadow: 
                  0 0 10px rgba(255, 255, 255, 0.6),
                  0 0 20px rgba(255, 255, 255, 0.4),
                  0 0 30px rgba(255, 255, 255, 0.2);
              }

              .aurora-glow {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 400px;
                background: linear-gradient(
                  90deg,
                  #06b6d4,
                  #3b82f6,
                  #8b5cf6,
                  #ec4899,
                  #f97316,
                  #8b5cf6,
                  #3b82f6,
                  #06b6d4
                );
                background-size: 200% 100%;
                animation: aurora 8s ease-in-out infinite;
                filter: blur(60px);
                opacity: 0.4;
                mask-image: linear-gradient(
                  to top, 
                  rgba(0,0,0,1) 0%, 
                  rgba(0,0,0,0.7) 20%, 
                  rgba(0,0,0,0.4) 40%, 
                  rgba(0,0,0,0) 70%
                );
                -webkit-mask-image: linear-gradient(
                  to top, 
                  rgba(0,0,0,1) 0%, 
                  rgba(0,0,0,0.7) 20%, 
                  rgba(0,0,0,0.4) 40%, 
                  rgba(0,0,0,0) 70%
                );
              }

              .white-fade-below {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
                height: 200px;
                background: radial-gradient(
                  ellipse at center top, 
                  rgba(255, 255, 255, 0.06) 0%, 
                  rgba(255, 255, 255, 0.03) 30%, 
                  rgba(255, 255, 255, 0.01) 60%, 
                  transparent 100%
                );
                pointer-events: none;
              }
            `}</style>

            <div className="aurora-glow"></div>
            <div className="horizontal-divider"></div>
            <div className="white-fade-below"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page1;