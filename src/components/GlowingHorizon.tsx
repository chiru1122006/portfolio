import React from 'react';

const GlowingHorizon: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes aurora {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .glowing-horizon-container {
          position: relative;
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .atmosphere-layer {
          position: absolute;
          width: 100%;
          height: 100%;
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
          filter: blur(25px);
          opacity: 0.8;
        }

        .core-beam {
          position: relative;
          width: 80%;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.6),
            0 0 30px rgba(255, 255, 255, 0.4),
            0 0 40px rgba(255, 255, 255, 0.2);
          z-index: 2;
        }
      `}</style>

      <div className="glowing-horizon-container">
        <div className="atmosphere-layer"></div>
        <div className="core-beam"></div>
      </div>
    </>
  );
};

export default GlowingHorizon;
