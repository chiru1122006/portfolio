import { useEffect, useRef, useState } from 'react';
import { Linkedin, Github, Twitter, ArrowRight } from 'lucide-react';

export default function Page6() {
  // Refs for direct DOM manipulation (high performance for cursor physics)
  const wandRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const revealImageRef = useRef<HTMLImageElement>(null);
  const requestRef = useRef<number>();
  const page6Ref = useRef<HTMLDivElement>(null);
  const [isPage6Visible, setIsPage6Visible] = useState(false);

  // Physics state (kept out of React state to avoid re-renders)
  const physicsState = useRef({
    mouseX: 0,
    mouseY: 0,
    wandRotation: 15,
    targetRotation: 15,
    isHovering: false
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const state = physicsState.current;
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;

      // Wand Tilt Logic
      // The wand tilts based on horizontal speed (movementX)
      const tiltSensitivity = 1.5;
      const maxTilt = 45;
      const baseRotation = 15;
      
      const deltaRotation = e.movementX * tiltSensitivity;
      let newTarget = baseRotation + deltaRotation;
      
      // Clamp rotation
      newTarget = Math.max(baseRotation - maxTilt, Math.min(baseRotation + maxTilt, newTarget));
      state.targetRotation = newTarget;

      // Image Reveal Logic
      if (imageContainerRef.current && revealImageRef.current) {
        const rect = imageContainerRef.current.getBoundingClientRect();
        // Calculate position relative to the container
        const relativeX = e.clientX - rect.left;
        
        // Calculate percentage (0 to 100)
        let percentage = (relativeX / rect.width) * 100;
        
        // Clamp value between 0 and 100
        percentage = Math.max(0, Math.min(100, percentage));
        
        // Apply clip-path directly to the DOM element
        revealImageRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        const state = physicsState.current;
        state.mouseX = touch.clientX;
        state.mouseY = touch.clientY;
        
         // Simplified reveal for touch
         if (imageContainerRef.current && revealImageRef.current) {
            const rect = imageContainerRef.current.getBoundingClientRect();
            let relativeX = touch.clientX - rect.left;
            let percentage = (relativeX / rect.width) * 100;
            percentage = Math.max(0, Math.min(100, percentage));
            revealImageRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
         }
    };

    const animate = () => {
      const state = physicsState.current;
      const wand = wandRef.current;

      if (wand) {
        // Physics Decay:
        // 1. Decay target rotation back to base (restoring force)
        state.targetRotation += (15 - state.targetRotation) * 0.1;

        // 2. Move current rotation towards target (following force)
        state.wandRotation += (state.targetRotation - state.wandRotation) * 0.15;

        // Apply transforms
        const offsetX = -20; // Half width of wand (increased for larger wand)
        const offsetY = -40; // Tip offset (increased for larger wand)
        
        wand.style.transform = `translate(${state.mouseX + offsetX}px, ${state.mouseY + offsetY}px) rotate(${state.wandRotation}deg)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    // Scroll detection for Page 6 visibility
    const checkPage6Visibility = () => {
      if (page6Ref.current) {
        const rect = page6Ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsPage6Visible(isVisible);
      }
    };

    // Attach listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', checkPage6Visibility);
    
    // Initial check
    checkPage6Visibility();
    
    // Start loop
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', checkPage6Visibility);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div ref={page6Ref} className="page6-container min-h-screen flex items-center justify-center overflow-x-hidden bg-[rgb(10,10,10)] text-[#d4d4d4] font-sans selection:bg-[#ff4d9e] selection:text-white">
      
      {/* Styles for fonts and custom animations - Scoped to Page 6 only */}
      <style>{`
        @media (min-width: 1024px) {
          .page6-container,
          .page6-container * {
            cursor: none !important;
          }
        }
      `}</style>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-instrument-serif {
          font-family: 'Instrument Serif', serif;
        }
        
        .text-colorfull {
          background: linear-gradient(to right, #ff4d9e, #ff9e64, #ffd700, #ff4d9e);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
        }

        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
        }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .text-shadow-custom {
          text-shadow: rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px;
        }
      `}</style>

      {/* Magic Wand - Only visible when Page 6 is in viewport and on desktop */}
      {isPage6Visible && (
        <div 
          ref={wandRef}
          id="wand"
          className="hidden lg:block fixed top-0 left-0 w-[40px] h-[500px] pointer-events-none z-[9999] rounded-[99px] shadow-[10px_10px_40px_rgba(0,0,0,0.7)] origin-[center_15%] will-change-transform"
          style={{
            background: 'linear-gradient(90deg, #2a2a2a, #000000)',
          }}
        >
          <div 
            className="absolute top-0 left-0 w-full h-[80px] rounded-[99px_99px_10px_10px] shadow-[0_0_30px_rgba(255,255,255,0.7)]"
            style={{
              background: 'linear-gradient(90deg, #e0e0e0, #ffffff, #b0b0b0)'
            }}
          />
        </div>
      )}

      {/* Main Container */}
      <div className="relative py-10 lg:max-h-[1300px] w-full px-4" id="about">
        <section className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 lg:size-full lg:flex-row lg:justify-between">
          
          {/* Text Content */}
          <div className="max-w-full lg:max-w-[60%] relative z-10">
            
            <h2 className="relative z-2 mb-10 font-medium text-5xl tracking-tight max-sm:px-5 sm:text-5xl md:mb-16 md:text-6xl text-center lg:text-left text-balance md:mt-10 text-shadow-custom text-white">
              <p className="mb-3 font-mono font-normal text-white/50 text-xs uppercase tracking-widest">
                KNOW ABOUT ME
              </p>
              <span className="font-instrument-serif">
                <span className="">Full-Stack Developer and a little bit of </span> 
                <span className="animate-gradient-x pe-2 font-instrument-serif italic tracking-tight text-colorfull">everything</span>
              </span>
            </h2>

            <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center font-light text-base text-neutral-300 tracking-wider lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg">
              <p>
                I'm chirudeep, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
              </p>
              <p>
                I believe in waking up each day eager to make a difference!
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 -mt-2 mx-auto w-fit lg:mx-0">
                <a className="text-neutral-300 transition-colors hover:text-white cursor-none" href="#" rel="noopener noreferrer" target="_blank">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
                <a className="text-neutral-300 transition-colors hover:text-white cursor-none" href="#" rel="noopener noreferrer" target="_blank">
                  <span className="sr-only">GitHub</span>
                  <Github size={24} strokeWidth={1.5} />
                </a>
                <a className="text-neutral-300 transition-colors hover:text-white cursor-none" href="#" rel="noopener noreferrer" target="_blank">
                  <span className="sr-only">Twitter</span>
                  <Twitter size={24} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Work Experience Button */}
            <a className="group flex w-fit items-center justify-center gap-2 font-mono text-neutral-300 transition-colors hover:text-white mt-10 lg:justify-start cursor-none mx-auto lg:mx-0" href="#experience">
              Work Experience
              <div className="size-[25px] overflow-hidden rounded-full border border-neutral-700 bg-white/5 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 relative">
                <div className="flex w-12 transition-transform duration-500 ease-in-out -translate-x-1/2 group-hover:translate-x-0 absolute top-0 bottom-0 items-center">
                  <span className="flex size-[25px] items-center justify-center">
                    <ArrowRight className="size-[14px]" />
                  </span>
                  <span className="flex size-[25px] items-center justify-center">
                    <ArrowRight className="size-[14px]" />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Interactive Image Tile Section */}
          <div 
            ref={imageContainerRef}
            className="image-reveal-container relative grid aspect-square w-64 place-content-center lg:me-10 lg:w-[400px] xl:w-[500px] select-none touch-none"
          >
            {/* Fallback abstract decoration */}
            <div className="absolute inset-0 rotate-3 border border-white/10 rounded-[58px] animate-pulse opacity-20 pointer-events-none"></div>
            
            {/* Layer 1: Blurred/Grayscale Background - Hidden on mobile */}
            <img 
              alt="chirudeep Blur" 
              className="hidden lg:block absolute inset-0 rotate-3 rounded-[58px] object-cover w-full h-full grayscale blur-sm brightness-75 transition-transform pointer-events-none"
              src="/images/chiru.png"
            />

            {/* Layer 2: Clear/Color Foreground (Revealed by clip-path on desktop, always visible on mobile) */}
            <img 
              ref={revealImageRef}
              id="reveal-image"
              alt="chirudeep Clear" 
              className="absolute inset-0 rotate-3 rounded-[58px] object-cover w-full h-full shadow-2xl shadow-blue-900/20 pointer-events-none"
              src="/images/chiru.png"
              style={{
                clipPath: 'inset(0 100% 0 0)' // Initial state
              }}
            />
            
            {/* Simple clear image for mobile - Always visible */}
            <img 
              alt="chirudeep" 
              className="lg:hidden absolute inset-0 rotate-3 rounded-[58px] object-cover w-full h-full shadow-2xl shadow-blue-900/20 pointer-events-none"
              src="/images/chiru.png"
            />
            
            {/* Overlay Gradient/Effect */}
            <div className="absolute inset-0 rotate-3 rounded-[58px] bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none mix-blend-overlay"></div>
          </div>

        </section>
      </div>
    </div>
  );

}
