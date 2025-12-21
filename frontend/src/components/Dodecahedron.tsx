


import { motion } from 'framer-motion';

const Dodecahedron = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* 3D Container - Rotates continuously without re-rendering React */}
      <motion.div
        className="relative w-[600px] h-[600px] opacity-20"
        animate={{ 
          rotate: 360
        }}
        transition={{ 
          duration: 60, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
           {/* Outer Ring */}
           <circle 
             cx="50" cy="50" r="45" 
             fill="none" 
             stroke="#00F0FF" 
             strokeWidth="0.2" 
             strokeDasharray="4 2" 
             opacity="0.5"
           />
           
           {/* Inner Geometric Shape (Simplified Dodecahedron projection) */}
           <path 
             d="M50 5 L93 28 V72 L50 95 L7 72 V28 Z" 
             fill="none" 
             stroke="#8B5CF6" 
             strokeWidth="0.3"
             className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
           />
           
           {/* Inner Connecting Lines */}
           <path 
             d="M50 5 L50 50 M93 28 L50 50 M93 72 L50 50 M50 95 L50 50 M7 72 L50 50 M7 28 L50 50" 
             fill="none" 
             stroke="#00F0FF" 
             strokeWidth="0.1" 
             opacity="0.3"
           />
           
           {/* Floating Particles */}
           <circle cx="50" cy="5" r="1" fill="#00F0FF" />
           <circle cx="93" cy="28" r="1" fill="#00F0FF" />
           <circle cx="93" cy="72" r="1" fill="#00F0FF" />
           <circle cx="50" cy="95" r="1" fill="#00F0FF" />
           <circle cx="7" cy="72" r="1" fill="#00F0FF" />
           <circle cx="7" cy="28" r="1" fill="#00F0FF" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Dodecahedron;
