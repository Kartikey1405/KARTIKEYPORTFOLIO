// import { useRef, useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// interface DodecahedronProps {
//   mouseX: number;
//   mouseY: number;
// }

// const Dodecahedron = ({ mouseX, mouseY }: DodecahedronProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const targetY = (mouseX / window.innerWidth - 0.5) * 30;
//     const targetX = (mouseY / window.innerHeight - 0.5) * -30;
    
//     setRotation({ x: targetX, y: targetY });
//   }, [mouseX, mouseY]);

//   // SVG wireframe dodecahedron projection
//   const vertices = [
//     // Pentagon 1 (top)
//     { x: 0, y: -90 },
//     { x: 85, y: -30 },
//     { x: 52, y: 73 },
//     { x: -52, y: 73 },
//     { x: -85, y: -30 },
//     // Pentagon 2 (bottom)
//     { x: 0, y: 90 },
//     { x: -85, y: 30 },
//     { x: -52, y: -73 },
//     { x: 52, y: -73 },
//     { x: 85, y: 30 },
//   ];

//   const edges = [
//     [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], // Top pentagon
//     [5, 6], [6, 7], [7, 8], [8, 9], [9, 5], // Bottom pentagon
//     [0, 7], [1, 8], [2, 9], [3, 5], [4, 6], // Connecting edges
//   ];

//   return (
//     <motion.div
//       ref={containerRef}
//       className="absolute inset-0 flex items-center justify-center pointer-events-none"
//       style={{
//         perspective: '1000px',
//       }}
//     >
//       <motion.svg
//         viewBox="-150 -150 300 300"
//         className="w-[600px] h-[600px] opacity-20"
//         animate={{
//           rotateX: rotation.x,
//           rotateY: rotation.y,
//         }}
//         transition={{ type: 'spring', damping: 30, stiffness: 100 }}
//         style={{ transformStyle: 'preserve-3d' }}
//       >
//         <defs>
//           <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="hsl(var(--neon-cyan))" stopOpacity="0.8" />
//             <stop offset="100%" stopColor="hsl(var(--neon-purple))" stopOpacity="0.3" />
//           </linearGradient>
//         </defs>
        
//         {/* Edges */}
//         {edges.map(([start, end], i) => (
//           <motion.line
//             key={i}
//             x1={vertices[start].x}
//             y1={vertices[start].y}
//             x2={vertices[end].x}
//             y2={vertices[end].y}
//             stroke="url(#wireGradient)"
//             strokeWidth="1"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, delay: i * 0.1 }}
//           />
//         ))}
        
//         {/* Vertices */}
//         {vertices.map((v, i) => (
//           <motion.circle
//             key={i}
//             cx={v.x}
//             cy={v.y}
//             r="3"
//             fill="hsl(var(--neon-cyan))"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.3, delay: i * 0.05 }}
//           />
//         ))}
//       </motion.svg>
//     </motion.div>
//   );
// };

// export default Dodecahedron;


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