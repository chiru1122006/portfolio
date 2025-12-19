import { useRef, useState, MouseEvent, TouchEvent } from 'react';

/**
 * Interface for Testimonial Data
 */
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  feedback: string;
  image: string;
  gradient: string;
}

/**
 * Mock Data
 */
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Davis",
    role: "Founder/CTO",
    company: "Apex Consulting",
    quote: "An Artist with Code Who Delivers Real SEO Results",
    feedback: "Aayush is an artist with code. We went from 'I want something high-tech and fast' to a fully built, high-ranking website in just over a week. He is constantly advancing his craft.",
    image: "https://i.pravatar.cc/150?u=1",
    gradient: "radial-gradient(94.21% 78.4% at 50% 29.91%, rgba(39,61,180,0.4), rgba(15,9,38,0.4))"
  },
  {
    id: 2,
    name: "Jennifer Wilson",
    role: "Founder",
    company: "Blue Harbor Agency",
    quote: "Simply the best developer I've worked with.",
    feedback: "Aayush is the man! He is simply the best developer I've worked with. He took our design requirements and quite literally ran with them, translating everything into a robust platform.",
    image: "https://i.pravatar.cc/150?u=2",
    gradient: "radial-gradient(84.35% 70.19% at 50% 38.11%, rgba(2,96,101,0.4), rgba(5,136,178,0.1))"
  },
  {
    id: 3,
    name: "Robert Johnson",
    role: "Startup Agency Owner",
    company: "",
    quote: "Professional, Quick, and a Seamless Integration",
    feedback: "Aayush was quick to respond, very professional, and delivered our fully SEO-optimized site ahead of schedule. The integration with our headless CMS was seamless.",
    image: "https://i.pravatar.cc/150?u=3",
    gradient: "radial-gradient(86.88% 75.47% at 50% 24.53%, rgba(82,48,145,0.4), rgba(26,11,51,0.14))"
  },
  {
    id: 4,
    name: "Tony Parker",
    role: "Founder",
    company: "Metro Solutions",
    quote: "Excellent Communication & Core Web Vitals",
    feedback: "Excellent communication and professionalism from the start. Aayush calmly entertained a few additional requests. Our Core Web Vitals jumped immediately.",
    image: "https://i.pravatar.cc/150?u=4",
    gradient: "radial-gradient(90.35% 49.25% at 50% 59.06%, rgba(2,61,114,0.4), rgba(5,11,28,0.42))"
  },
  {
    id: 5,
    name: "Chris Taylor",
    role: "Chairperson",
    company: "Core Fitness Club",
    quote: "JavaScript/React Skills are Through the Roof",
    feedback: "I can't express enough how impressed I am with his talent. His JavaScript/React web UI programming skills are through the roof. Streamlined workflow and efficient.",
    image: "https://i.pravatar.cc/150?u=5",
    gradient: "radial-gradient(126.42% 76.6% at 50% 32.26%, rgba(84,95,102,0.4), rgba(0,36,69,0.13))"
  },
  {
    id: 6,
    name: "Sarah Chen",
    role: "Product Owner",
    company: "Digital Bridge",
    quote: "He's Not Just a Developer, He's a Partner",
    feedback: "Aayush is a genius. He takes your product vision—even the vague 'dark theme, high tech' ideas—and brings it to life. He’s not just a developer; he's a true partner.",
    image: "https://i.pravatar.cc/150?u=6",
    gradient: "radial-gradient(99.74% 100% at 50% 0%, rgba(74,21,75,0.4), rgba(29,5,29,0.42))"
  }
];

export default function Page7() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Events
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch Events for Mobile
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDown(false);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center justify-center py-20 overflow-x-hidden antialiased">
      {/* Injecting fonts and custom styles directly here for the single-file preview. 
        In a real Vite project, these would go in index.css or tailwind.config.js 
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap');

        .font-instrument-serif {
          font-family: 'Instrument Serif', serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* Custom Scrollbar Hiding */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Gradient Text Animation */
        .text-colorfull {
          background: linear-gradient(to right, #a78bfa, #f472b6, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        /* Cursor styles for grabbing */
        .cursor-grab { cursor: grab; }
        .cursor-grabbing { cursor: grabbing; }
      `}</style>

      <section className="w-full relative">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-12 md:mb-24 text-center">
          <div 
            className="relative z-10"
            style={{ textShadow: "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px" }}
          >
            <p className="mb-4 font-mono font-normal text-white/60 text-xs uppercase tracking-widest">
              TESTIMONIALS
            </p>
            <h2 className="text-balance font-medium text-5xl tracking-tight max-sm:px-5 sm:text-5xl md:text-6xl text-white">
              <span className="font-instrument-serif block md:inline">Word on the street </span>
              <span className="animate-gradient-x pe-2 font-instrument-serif italic tracking-tight text-colorfull">
                about me
              </span>
            </h2>
          </div>
        </div>

        {/* Slider Container with Mask */}
        <div 
          className="w-full relative overflow-hidden"
          style={{ 
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            className={`flex gap-4 px-4 md:px-10 overflow-x-auto no-scrollbar items-start pb-10 ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            style={{ scrollBehavior: isDown ? 'auto' : 'smooth' }}
          >
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div 
                  className="relative flex w-[300px] md:w-[400px] h-full select-none flex-col justify-between overflow-hidden rounded-xl bg-black p-6 antialiased shadow-2xl border border-white/10"
                  style={{ backgroundImage: item.gradient }}
                >
                  <div>
                    <h4 className="mb-3 font-bold font-instrument-serif text-xl md:text-2xl text-white/95 tracking-wide">
                      {item.quote}
                    </h4>
                    <p className="mb-6 font-light text-base md:text-lg text-white/70 leading-relaxed">
                      {item.feedback}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      alt={item.name} 
                      src={item.image} 
                      className="size-12 rounded-full border border-white/20 object-cover pointer-events-none" 
                    />
                    <div>
                      <span className="block font-medium text-base text-white/95">
                        {item.name}
                      </span>
                      <p className="text-white/50 text-xs uppercase tracking-wider">
                        {item.role} {item.company && `• ${item.company}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}