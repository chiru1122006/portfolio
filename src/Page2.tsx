import React, { useState } from 'react';
import { HeartHandshake, MapPin, Copy, PanelTop, ArrowRight, Check } from 'lucide-react';

const Page2: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('hello@design.in');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    // Forced dark mode colors directly: #050505 background
    <div className="min-h-screen bg-[#050505] text-neutral-50 p-4 md:p-8 font-sans selection:bg-indigo-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');

        .font-instrument-serif {
          font-family: 'Instrument Serif', serif;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - var(--gap))); }
        }
        
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
      `}</style>

      {/* Grid Container */}
      <div className="grid w-full grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[19rem] container mx-auto py-10">
        
        {/* Tile 1: Connect / Network */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-black/40 border border-white/10 shadow-[0_-20px_80px_-20px_#ffffff1f_inset] md:col-span-3 lg:col-span-4 min-h-[21rem] md:min-h-0 transform-gpu">
          <div className="size-full">
            <div className="absolute flex h-[300px] w-full flex-col">
              <div className="relative h-full [mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]">
                {/* Complex Background SVG */}
                <svg className="-translate-x-1/2 absolute top-0 left-1/2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)] opacity-30" height="250" viewBox="0 0 637 250" width="704">
                  <defs>
                    <filter id="filter0_i_170_308" x="-91" y="33.8782" width="818" height="173.744" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="0.75" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_170_308" />
                    </filter>
                    <clipPath id="clip0_170_308">
                      <rect width="704" height="250" fill="white" transform="translate(-34)" />
                    </clipPath>
                    <mask id="path-2-inside-1_170_308" fill="white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M530.935 62.0924C527.084 67.0776 518.876 67.0706 515.032 62.0796C512.556 58.8646 509.846 55.772 506.902 52.8249C469.842 15.725 409.756 15.725 372.696 52.8249L362.342 63.1907C359.509 66.0262 355.041 66.2786 351.611 64.2065C341.932 58.3606 330.605 55 318.5 55C306.004 55 294.338 58.581 284.458 64.7802C281.014 66.9409 276.466 66.7264 273.593 63.8501L262.942 53.1878C226.082 16.2884 166.321 16.2884 129.462 53.1878C126.674 55.9787 124.097 58.9007 121.73 61.9341C117.882 66.8675 109.765 66.8619 105.928 61.9195C88.6146 39.6164 61.5624 25.266 31.1621 25.266C-21.1017 25.266 -63.4698 67.6799 -63.4698 120C-63.4698 172.32 -21.1017 214.734 31.1621 214.734C61.5623 214.734 88.6146 200.384 105.928 178.081C109.765 173.138 117.882 173.133 121.73 178.066C124.097 181.099 126.674 184.021 129.462 186.812C166.321 223.712 226.082 223.712 262.942 186.812L273.593 176.15C276.466 173.274 281.014 173.059 284.458 175.22C294.338 181.419 306.004 185 318.5 185C330.605 185 341.932 181.639 351.611 175.793C355.041 173.721 359.509 173.974 362.342 176.809L372.696 187.175C409.756 224.275 469.842 224.275 506.902 187.175C509.846 184.228 512.556 181.135 515.032 177.92C518.876 172.929 527.084 172.922 530.935 177.908C548.243 200.309 575.356 214.734 605.835 214.734C658.099 214.734 700.467 172.32 700.467 120C700.467 67.6799 658.099 25.266 605.835 25.266C575.356 25.266 548.243 39.6906 530.935 62.0924Z" />
                    </mask>
                  </defs>
                  <g clipPath="url(#clip0_170_308)">
                    <g filter="url(#filter0_i_170_308)">
                      <path clipRule="evenodd" d="M-24.5145 175.237C5.95935 205.744 55.3673 205.744 85.8412 175.237C116.315 144.731 116.315 95.2694 85.8412 64.7626C55.3673 34.2558 5.95935 34.2558 -24.5145 64.7626L-79.6924 120L-24.5145 175.237ZM-30.1683 59.1027L-85.3462 114.34L-91 120L-85.3462 125.66L-30.1683 180.897C3.42807 214.53 57.8986 214.53 91.495 180.897C102.486 169.894 109.882 156.654 113.681 142.641C117.481 156.654 124.876 169.894 135.868 180.897C169.464 214.53 223.935 214.53 257.531 180.897L312.709 125.66L318.363 120L312.709 114.34L257.531 59.1027C223.935 25.47 169.464 25.47 135.868 59.1027C124.876 70.106 117.481 83.3459 113.681 97.359C109.882 83.3459 102.486 70.106 91.495 59.1027C57.8986 25.47 3.42807 25.47 -30.1683 59.1027ZM251.877 175.237C221.403 205.744 171.995 205.744 141.522 175.237C111.048 144.731 111.048 95.2694 141.522 64.7626C171.995 34.2558 221.403 34.2558 251.877 64.7626L307.055 120L251.877 175.237ZM385.118 175.237C415.592 205.744 465 205.744 495.474 175.237C525.948 144.731 525.948 95.2694 495.474 64.7626C465 34.2558 415.592 34.2558 385.118 64.7626L329.94 120L385.118 175.237ZM379.464 59.1027L324.287 114.34L318.633 120L324.287 125.66L379.464 180.897C413.061 214.53 467.531 214.53 501.128 180.897C511.657 170.356 518.887 157.762 522.816 144.403C526.746 157.762 533.975 170.356 544.505 180.897C578.101 214.53 632.572 214.53 666.168 180.897L721.346 125.66L727 120L721.346 114.34L666.168 59.1027C632.572 25.47 578.101 25.47 544.505 59.1027C533.975 69.6438 526.746 82.2376 522.816 95.5975C518.887 82.2376 511.657 69.6438 501.128 59.1027C467.531 25.47 413.061 25.47 379.464 59.1027ZM550.159 175.237C580.633 205.744 630.041 205.744 660.514 175.237L715.692 120L660.514 64.7626C630.041 34.2558 580.633 34.2558 550.159 64.7626C519.685 95.2694 519.685 144.731 550.159 175.237Z" fill="#2A2A2A" fillOpacity="0.3" fillRule="evenodd" />
                    </g>
                    <path d="M506.902 52.8249L506.194 53.5316L506.194 53.5316L506.902 52.8249ZM372.696 52.8249L371.989 52.1181L371.989 52.1181L372.696 52.8249ZM262.942 53.1878L262.234 53.8945L262.234 53.8945L262.942 53.1878ZM129.462 53.1878L128.754 52.4811L128.754 52.4811L129.462 53.1878ZM129.462 186.812L128.754 187.519L128.754 187.519L129.462 186.812ZM262.942 186.812L262.234 186.106L262.234 186.106L262.942 186.812ZM372.696 187.175L371.989 187.882L371.989 187.882L372.696 187.175ZM506.902 187.175L507.609 187.882L507.609 187.882L506.902 187.175ZM515.032 177.92L515.824 178.531L515.032 177.92ZM530.935 177.908L531.726 177.296L530.935 177.908ZM351.611 175.793L352.128 176.649L351.611 175.793ZM362.342 176.809L363.049 176.103L362.342 176.809ZM273.593 176.15L272.885 175.443L273.593 176.15ZM284.458 175.22L283.926 176.067L284.458 175.22ZM515.032 62.0796L515.824 61.4694L515.032 62.0796ZM530.935 62.0924L531.726 62.7038L530.935 62.0924ZM105.928 178.081L105.138 177.467L105.928 178.081ZM121.73 178.066L122.519 177.451L121.73 178.066ZM284.458 64.7802L284.989 65.6273L284.458 64.7802ZM273.593 63.8501L274.3 63.1433L273.593 63.8501ZM105.928 61.9195L106.718 61.3063L105.928 61.9195ZM362.342 63.1907L363.049 63.8975L362.342 63.1907ZM351.611 64.2065L352.128 63.3506L351.611 64.2065ZM507.609 52.1181C510.583 55.0957 513.322 58.2206 515.824 61.4694L514.24 62.6898C511.79 59.5087 509.108 56.4483 506.194 53.5316L507.609 52.1181ZM371.989 52.1181C409.439 14.6273 470.159 14.6273 507.609 52.1181L506.194 53.5316C469.525 16.8228 410.073 16.8228 373.404 53.5316L371.989 52.1181ZM361.634 62.484L371.989 52.1181L373.404 53.5316L363.049 63.8975L361.634 62.484ZM318.5 54C330.793 54 342.297 57.4132 352.128 63.3506L351.094 65.0625C341.566 59.308 330.418 56 318.5 56V54ZM283.926 63.9331C293.961 57.6371 305.81 54 318.5 54V56C306.198 56 294.715 59.5249 284.989 65.6273L283.926 63.9331ZM263.649 52.4811L274.3 63.1433L272.885 64.5568L262.234 53.8945L263.649 52.4811ZM128.754 52.4811C166.004 15.1906 226.399 15.1906 263.649 52.4811L262.234 53.8945C225.766 17.3861 166.638 17.3861 130.169 53.8945L128.754 52.4811ZM120.942 61.3191C123.333 58.2536 125.937 55.3009 128.754 52.4811L130.169 53.8945C127.41 56.6565 124.86 59.5479 122.519 62.5492L120.942 61.3191ZM31.1621 24.266C61.8846 24.266 89.2234 38.7699 106.718 61.3063L105.138 62.5327C88.0058 40.4629 61.2402 26.266 31.1621 26.266V24.266ZM-64.4698 120C-64.4698 67.1286 -21.655 24.266 31.1621 24.266V26.266C-20.5484 26.266 -62.4698 68.2311 -62.4698 120H-64.4698ZM31.1621 215.734C-21.655 215.734 -64.4698 172.871 -64.4698 120H-62.4698C-62.4698 171.769 -20.5484 213.734 31.1621 213.734V215.734ZM106.718 178.694C89.2234 201.23 61.8846 215.734 31.1621 215.734V213.734C61.2401 213.734 88.0058 199.537 105.138 177.467L106.718 178.694ZM128.754 187.519C125.937 184.699 123.333 181.746 120.942 178.681L122.519 177.451C124.86 180.452 127.41 183.344 130.169 186.106L128.754 187.519ZM263.649 187.519C226.399 224.809 166.004 224.809 128.754 187.519L130.169 186.106C166.638 222.614 225.766 222.614 262.234 186.106L263.649 187.519ZM274.3 176.857L263.649 187.519L262.234 186.106L272.885 175.443L274.3 176.857ZM318.5 186C305.81 186 293.961 182.363 283.926 176.067L284.989 174.373C294.715 180.475 306.198 184 318.5 184V186ZM352.128 176.649C342.297 182.587 330.793 186 318.5 186V184C330.418 184 341.566 180.692 351.094 174.937L352.128 176.649ZM371.989 187.882L361.634 177.516L363.049 176.103L373.404 186.468L371.989 187.882ZM507.609 187.882C470.159 225.373 409.439 225.373 371.989 187.882L373.404 186.468C410.073 223.177 469.525 223.177 506.194 186.468L507.609 187.882ZM515.824 178.531C513.322 181.779 510.583 184.904 507.609 187.882L506.194 186.468C509.108 183.552 511.79 180.491 514.24 177.31L515.824 178.531ZM605.835 215.734C575.033 215.734 547.632 201.155 530.144 178.519L531.726 177.296C548.853 199.464 575.679 213.734 605.835 213.734V215.734ZM701.467 120C701.467 172.871 658.652 215.734 605.835 215.734V213.734C657.545 213.734 699.467 171.769 699.467 120H701.467ZM605.835 24.266C658.652 24.266 701.467 67.1286 701.467 120H699.467C699.467 68.2311 657.545 26.266 605.835 26.266V24.266ZM530.144 61.481C547.632 38.8448 575.033 24.266 605.835 24.266V26.266C575.679 26.266 548.853 40.5363 531.726 62.7038L530.144 61.481ZM514.24 177.31C518.484 171.8 527.474 171.792 531.726 177.296L530.144 178.519C526.693 174.053 519.269 174.059 515.824 178.531L514.24 177.31ZM351.094 174.937C354.862 172.662 359.847 172.897 363.049 176.103L361.634 177.516C359.171 175.051 355.221 174.781 352.128 176.649L351.094 174.937ZM272.885 175.443C276.134 172.191 281.207 172 284.989 174.373L283.926 176.067C280.82 174.118 276.798 174.356 274.3 176.857L272.885 175.443ZM515.824 61.4694C519.269 65.9413 526.693 65.9475 530.144 61.481L531.726 62.7038C527.474 68.2078 518.484 68.1999 514.24 62.6898L515.824 61.4694ZM105.138 177.467C109.375 172.009 118.27 172.004 122.519 177.451L120.942 178.681C117.494 174.261 110.154 174.267 106.718 178.694L105.138 177.467ZM284.989 65.6273C281.207 68.0001 276.134 67.8087 272.885 64.5568L274.3 63.1433C276.798 65.6441 280.82 65.8818 283.926 63.9331L284.989 65.6273ZM122.519 62.5492C118.27 67.996 109.375 67.9906 105.138 62.5327L106.718 61.3063C110.154 65.7332 117.494 65.739 120.942 61.3191L122.519 62.5492ZM363.049 63.8975C359.847 67.103 354.862 67.3383 351.094 65.0625L352.128 63.3506C355.221 65.2188 359.171 64.9494 361.634 62.484L363.049 63.8975Z" fill="#505050" fillOpacity="0.2" mask="url(#path-2-inside-1_170_308)" />
                  </g>
                </svg>

                <span className="-translate-x-1/2 absolute top-2.5 left-1/2">
                  <div className="relative mt-9">
                    {/* SVG Circle Frame */}
                    <svg className="mx-auto" fill="none" height="148" viewBox="0 0 148 148" width="148" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_i_0_1)">
                        <rect fill="#2A2A2A" height="116" rx="58" width="116" x="16" y="16" />
                        <rect className="stroke-[#494949] transition-colors delay-200 duration-500 group-hover:stroke-indigo-400" height="114.5" rx="57.25" stroke="#494949" strokeWidth="1.5" width="114.5" x="16.75" y="16.75" />
                      </g>
                    </svg>
                    {/* Avatar Placeholder */}
                   <img alt="Profile" className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-[100px] w-[100px] transform rounded-full object-cover" src="/images/chiru.png" />
                  </div>
                </span>
                
                {/* Connection bubbles - Desktop */}
                <div className="hidden lg:block">
                    <div className="absolute w-12 h-12 p-1 z-10 transition-all duration-500 ease-out delay-100 group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-0" style={{top: '55%', left: '28%'}}>
                        <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-12 h-12 p-1"><img alt="Connection" className="rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" /></div>
                    </div>
                    <div className="absolute w-16 h-16 p-1 z-10 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-0" style={{top: '53%', left: '63%'}}>
                        <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-16 h-16 p-1"><img alt="Connection" className="rounded-full" src="https://randomuser.me/api/portraits/men/7.jpg" /></div>
                    </div>
                    <div className="absolute w-14 h-14 p-1 z-10 transition-all duration-500 ease-out delay-300 group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-0" style={{top: '4%', left: '32%'}}>
                        <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-14 h-14 p-1"><img alt="Connection" className="rounded-full" src="https://randomuser.me/api/portraits/women/24.jpg" /></div>
                    </div>
                    <div className="absolute w-10 h-10 p-1 z-10 transition-all duration-500 ease-out delay-150 group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-0" style={{top: '8%', left: '78%'}}>
                        <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-10 h-10 p-1"><img alt="Connection" className="rounded-full" src="https://randomuser.me/api/portraits/women/35.jpg" /></div>
                    </div>
                    <div className="absolute w-9 h-9 p-1 z-10 transition-all duration-500 ease-out delay-75 group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-0" style={{top: '7%', left: '11%'}}>
                        <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-9 h-9 p-1"><img alt="Connection" className="rounded-full" src="https://randomuser.me/api/portraits/women/45.jpg" /></div>
                    </div>
                </div>

                {/* Mobile bubbles */}
                <div className="lg:hidden">
                    <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-10 h-10 p-1 absolute top-6 left-4"><img alt="Connection" className="rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" /></div>
                    <div className="rounded-full border border-white/5 bg-[#2A2A2A] size-9 p-1 absolute bottom-24 left-18"><img alt="Connection" className="rounded-full" src="https://randomuser.me/api/portraits/men/7.jpg" /></div>
                    <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-14 h-14 p-1 absolute top-4 right-16"><img alt="Connection" className="rounded-full" src="https://randomuser.me/api/portraits/women/24.jpg" /></div>
                    <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-11 h-11 p-1 absolute right-4 bottom-20"><img alt="Connection" className="rounded-full" src="https://randomuser.me/api/portraits/women/35.jpg" /></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 group-hover:-translate-y-10 transform-gpu transition-all duration-300">
            <HeartHandshake className="size-12 origin-left text-neutral-700 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="max-w-lg font-mono text-neutral-400 text-xs uppercase">Collaboration</h3>
            <p className="text-neutral-300 text-xl tracking-wide">I prioritize client collaboration, fostering open communication</p>
          </div>
          
          <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 text-base tracking-wider opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button className="inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all hover:bg-neutral-800/50 h-8 gap-1.5 rounded-md px-3 pointer-events-auto">
              Book a call <ArrowRight className="ml-2 size-4" />
            </button>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
        </div>

        {/* Tile 2: Technology Stack (Marquee) */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-black/40 border border-white/10 shadow-[0_-20px_80px_-20px_#ffffff1f_inset] md:col-span-3 lg:col-span-2 md:row-span-2 min-h-[35rem] md:min-h-0 transform-gpu">
          <div className="size-full">
            <div className="absolute inset-0">
              <div className="relative size-full">
                <h3 className="absolute top-6 w-full select-none bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text px-4 pb-2 text-center font-bold font-instrument-serif text-2xl text-transparent leading-[120%] tracking-wide">Passionate about cutting-edge technologies</h3>
                <div className="relative flex h-full flex-col items-center justify-start">
                  <div className="-bottom-32 absolute size-56 rounded-full bg-[#4f46e5] blur-3xl" />
                  
                  {/* Tech Stack Marquee Container */}
                  <div className="z-20 flex flex-col gap-y-5 md:gap-y-6 mt-20 md:mt-20">
                    {/* Marquee Row 1 (Left direction) */}
                    <div className="flex overflow-hidden p-2 flex-row" style={{'--duration': '25s', '--gap': '1rem'} as React.CSSProperties}>
                        <div className="flex shrink-0 justify-around gap-[1rem] animate-marquee flex-row">
                          {[
                            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                            { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
                            { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
                            { name: 'Markdown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg' },
                          ].map((tech) => (
                            <span key={tech.name} className="inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-3 py-1 font-mono text-neutral-300 text-sm shadow-sm border border-white/[0.14] bg-neutral-900 dark:text-neutral-300 dark:border-white/[0.14] dark:bg-neutral-900">
                              <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                              <span>{tech.name}</span>
                            </span>
                          ))}
                        </div>
                        <div className="flex shrink-0 justify-around gap-[1rem] animate-marquee flex-row">
                          {[
                            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                            { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
                            { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
                            { name: 'Markdown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg' },
                          ].map((tech) => (
                            <span key={`${tech.name}-dup`} className="inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-3 py-1 font-mono text-neutral-300 text-sm shadow-sm border border-white/[0.14] bg-neutral-900 dark:text-neutral-300 dark:border-white/[0.14] dark:bg-neutral-900">
                              <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                              <span>{tech.name}</span>
                            </span>
                          ))}
                        </div>
                    </div>

                    {/* Marquee Row 2 (Right direction - reverse) */}
                    <div className="flex overflow-hidden p-2 flex-row" style={{'--duration': '30s', '--gap': '1rem'} as React.CSSProperties}>
                        <div className="flex shrink-0 justify-around gap-[1rem] animate-marquee flex-row" style={{ animationDirection: 'reverse' }}>
                          {[
                            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
                            { name: 'Prisma ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
                            { name: 'Drizzle ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drizzle/drizzle-original.svg' },
                          ].map((tech) => (
                            <span key={tech.name} className="inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-3 py-1 font-mono text-neutral-300 text-sm shadow-sm border border-white/[0.14] bg-neutral-900 dark:text-neutral-300 dark:border-white/[0.14] dark:bg-neutral-900">
                              <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                              <span>{tech.name}</span>
                            </span>
                          ))}
                        </div>
                        <div className="flex shrink-0 justify-around gap-[1rem] animate-marquee flex-row" style={{ animationDirection: 'reverse' }}>
                          {[
                            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
                            { name: 'Prisma ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
                            { name: 'Drizzle ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drizzle/drizzle-original.svg' },
                          ].map((tech) => (
                            <span key={`${tech.name}-dup`} className="inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-3 py-1 font-mono text-neutral-300 text-sm shadow-sm border border-white/[0.14] bg-neutral-900 dark:text-neutral-300 dark:border-white/[0.14] dark:bg-neutral-900">
                              <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                              <span>{tech.name}</span>
                            </span>
                          ))}
                        </div>
                    </div>

                    {/* Marquee Row 3 (Left direction) */}
                    <div className="flex overflow-hidden p-2 flex-row" style={{'--duration': '28s', '--gap': '1rem'} as React.CSSProperties}>
                        <div className="flex shrink-0 justify-around gap-[1rem] animate-marquee flex-row">
                          {[
                            { name: 'Biome.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/biome/biome-original.svg' },
                            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                            { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
                          ].map((tech) => (
                            <span key={tech.name} className="inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-3 py-1 font-mono text-neutral-300 text-sm shadow-sm border border-white/[0.14] bg-neutral-900 dark:text-neutral-300 dark:border-white/[0.14] dark:bg-neutral-900">
                              <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                              <span>{tech.name}</span>
                            </span>
                          ))}
                        </div>
                        <div className="flex shrink-0 justify-around gap-[1rem] animate-marquee flex-row">
                          {[
                            { name: 'Biome.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/biome/biome-original.svg' },
                            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                            { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
                          ].map((tech) => (
                            <span key={`${tech.name}-dup`} className="inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-3 py-1 font-mono text-neutral-300 text-sm shadow-sm border border-white/[0.14] bg-neutral-900 dark:text-neutral-300 dark:border-white/[0.14] dark:bg-neutral-900">
                              <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                              <span>{tech.name}</span>
                            </span>
                          ))}
                        </div>
                    </div>
                  </div>

                  {/* Browser Mockup - Positioned at the bottom */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[88%] max-w-[300px]">
                  <div className="rounded-xl bg-[#1a1a1a] border border-white/10 shadow-2xl overflow-hidden">
                    {/* Browser Header */}
                    <div className="flex items-center gap-2 px-3 py-2.5 bg-[#2a2a2a] border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="flex items-center gap-1.5 bg-[#1a1a1a] rounded-md px-3 py-1 text-[10px] text-neutral-400">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          svcr.dev
                        </div>
                      </div>
                    </div>
                    {/* Browser Content */}
                    <div className="p-4 bg-[#0f0f0f] relative overflow-hidden">
                      {/* Grid Pattern Background */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}></div>

                      {/* Semi-circles with grid lines */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Left semi-circle */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-32 h-32 rounded-full border border-neutral-700/40 flex items-center justify-center">
                          {/* Horizontal lines */}
                          <div className="absolute inset-0 flex flex-col justify-around">
                            <div className="w-full h-px bg-neutral-700/30"></div>
                            <div className="w-full h-px bg-neutral-700/30"></div>
                            <div className="w-full h-px bg-neutral-700/30"></div>
                            <div className="w-full h-px bg-neutral-700/30"></div>
                          </div>
                          {/* Vertical lines */}
                          <div className="absolute inset-0 flex justify-around">
                            <div className="h-full w-px bg-neutral-700/30"></div>
                            <div className="h-full w-px bg-neutral-700/30"></div>
                            <div className="h-full w-px bg-neutral-700/30"></div>
                            <div className="h-full w-px bg-neutral-700/30"></div>
                          </div>
                        </div>

                        {/* Right semi-circle */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-32 h-32 rounded-full border border-neutral-700/40 flex items-center justify-center">
                          {/* Horizontal lines */}
                          <div className="absolute inset-0 flex flex-col justify-around">
                            <div className="w-full h-px bg-neutral-700/30"></div>
                            <div className="w-full h-px bg-neutral-700/30"></div>
                            <div className="w-full h-px bg-neutral-700/30"></div>
                            <div className="w-full h-px bg-neutral-700/30"></div>
                          </div>
                          {/* Vertical lines */}
                          <div className="absolute inset-0 flex justify-around">
                            <div className="h-full w-px bg-neutral-700/30"></div>
                            <div className="h-full w-px bg-neutral-700/30"></div>
                            <div className="h-full w-px bg-neutral-700/30"></div>
                            <div className="h-full w-px bg-neutral-700/30"></div>
                          </div>
                        </div>
                      </div>

                      <div className="relative text-center py-4 z-10">
                        <h4 className="text-white font-bold text-sm mb-1">Websites that</h4>
                        <p className="text-indigo-400 font-bold text-lg">Impact.</p>
                        <div className="flex justify-center gap-2 mt-4">
                          <button className="bg-white text-black text-[10px] font-medium px-4 py-1.5 rounded-full flex items-center gap-1">
                            Start <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                          <button className="border border-neutral-600 text-neutral-300 text-[10px] font-medium px-4 py-1.5 rounded-full">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
        </div>

        {/* Tile 3: Timezone / Globe */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-black/40 border border-white/10 shadow-[0_-20px_80px_-20px_#ffffff1f_inset] md:col-span-3 lg:col-span-2 md:row-span-2 min-h-[32rem] md:min-h-0 transform-gpu">
            <div className="size-full flex flex-col items-center">
              <h3 className="mt-6 w-full select-none text-balance bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text px-4 text-center font-bold font-instrument-serif text-3xl text-transparent leading-[100%] tracking-wide md:mt-12">I'm very flexible with time zone communications</h3>
              
              <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-sky-500/10 text-sky-500 text-xs rounded border border-sky-500/20 font-mono">UK</span>
                  <span className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded border border-neutral-700 font-mono">India</span>
                  <span className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded border border-neutral-700 font-mono">USA</span>
              </div>

              {/* Globe Placeholder */}
              <div className="relative w-full h-full flex items-center justify-center mt-4">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-neutral-900 to-neutral-800 border border-neutral-700 opacity-80 flex items-center justify-center">
                      <div className="text-neutral-600 text-xs">[Globe Visual]</div>
                  </div>
              </div>
            </div>
            
            <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 group-hover:-translate-y-10 transform-gpu transition-all duration-300">
              <MapPin className="size-12 origin-left text-neutral-700 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
              <h3 className="max-w-lg font-mono text-neutral-400 text-xs uppercase">Remote</h3>
              <p className="text-neutral-300 text-xl tracking-wide">India</p>
            </div>
            
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 text-base tracking-wider opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <button className="inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all hover:bg-neutral-800/50 h-8 gap-1.5 rounded-md px-3 pointer-events-auto">
                Connect now <ArrowRight className="ml-2 size-4" />
              </button>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
        </div>

        {/* Tile 4: Copy Email */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-black/40 border border-white/10 shadow-[0_-20px_80px_-20px_#ffffff1f_inset] md:col-span-3 lg:col-span-2 min-h-[19rem] md:min-h-0 transform-gpu">
            <div className="size-full">
              <div className="flex size-full flex-col items-center justify-center bg-center bg-cover">
                  <span className="relative text-[rgb(255,255,255,90%)] -translate-y-4 w-full max-w-80 text-balance py-2 text-center font-bold font-instrument-serif text-4xl">Let's work together on your next project</span>
                  <button 
                    onClick={handleCopy}
                    className="inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md py-1 text-neutral-300 text-sm border border-white/[0.14] bg-neutral-900 px-8 hover:bg-neutral-800/60 cursor-pointer transition-colors"
                  >
                      <div className="relative flex items-center gap-2 py-2 font-light text-base">
                          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                          hello@design.in
                      </div>
                  </button>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
        </div>

        {/* Tile 5: The Inside Scoop / SaaS Project */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-black/40 border border-white/10 shadow-[0_-20px_80px_-20px_#ffffff1f_inset] md:col-span-6 lg:col-span-4 min-h-[21rem] md:min-h-0 transform-gpu">
          <div className="size-full">
            {/* Scrolling Cards Marquee */}
            <div className="group flex overflow-hidden p-2 flex-row absolute top-10 font-instrument-serif mask-[linear-gradient(to_top,transparent_40%,#000_100%)]" style={{'--gap': '1rem', '--duration': '30s'} as React.CSSProperties}>
                <div className="flex shrink-0 justify-around gap-[1rem] animate-marquee flex-row">
                    {[
                      { title: 'Payment System', desc: 'Recurring billing logic.' },
                      { title: 'Analytics', desc: 'Real-time user insights.' },
                      { title: 'Design System', desc: 'Consistent UI components.' },
                      { title: 'API Gateway', desc: 'Secure endpoint management.' },
                    ].map((card, idx) => (
                      <figure key={idx} className="relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/10 bg-gray-50/10 hover:bg-gray-50/15 transform-gpu transition-all duration-300 ease-out">
                        <div className="flex flex-col">
                            <figcaption className="font-medium text-sm text-white">{card.title}</figcaption>
                            <blockquote className="mt-2 text-xs opacity-70">{card.desc}</blockquote>
                        </div>
                      </figure>
                    ))}
                </div>
                {/* Duplicate Row for Infinite Scroll */}
                <div className="flex shrink-0 justify-around gap-[1rem] animate-marquee flex-row">
                    {[
                      { title: 'Payment System', desc: 'Recurring billing logic.' },
                      { title: 'Analytics', desc: 'Real-time user insights.' },
                      { title: 'Design System', desc: 'Consistent UI components.' },
                      { title: 'API Gateway', desc: 'Secure endpoint management.' },
                    ].map((card, idx) => (
                      <figure key={`dup-${idx}`} className="relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/10 bg-gray-50/10 hover:bg-gray-50/15 transform-gpu transition-all duration-300 ease-out">
                        <div className="flex flex-col">
                            <figcaption className="font-medium text-sm text-white">{card.title}</figcaption>
                            <blockquote className="mt-2 text-xs opacity-70">{card.desc}</blockquote>
                        </div>
                      </figure>
                    ))}
                </div>
            </div>
          </div>
          
          <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 group-hover:-translate-y-10 transform-gpu transition-all duration-300 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent">
            <PanelTop className="size-12 origin-left text-neutral-700 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="max-w-lg font-mono text-neutral-400 text-xs uppercase">The Inside Scoop</h3>
            <p className="text-neutral-300 text-xl tracking-wide">Currently building a SaaS Application</p>
          </div>
          
          <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 text-base tracking-wider opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button className="inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all hover:bg-neutral-800/50 h-8 gap-1.5 rounded-md px-3 pointer-events-auto">
              View Recent work <ArrowRight className="ml-2 size-4" />
            </button>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
        </div>

      </div>
    </div>
  );
};


export default Page2;
