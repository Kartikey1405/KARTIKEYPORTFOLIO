import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HUDOverlay = () => {
  const [rulerNumbers, setRulerNumbers] = useState<{ left: number[]; right: number[] }>({
    left: [],
    right: [],
  });

  useEffect(() => {
    const generateNumbers = () => {
      const count = 20;
      return Array.from({ length: count }, () => Math.floor(Math.random() * 9999));
    };
    
    setRulerNumbers({ left: generateNumbers(), right: generateNumbers() });
    
    const interval = setInterval(() => {
      setRulerNumbers({ left: generateNumbers(), right: generateNumbers() });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Hexagonal Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Corner Brackets */}
      {/* Top Left */}
      <motion.div 
        className="absolute top-4 left-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-8 h-8 border-l-2 border-t-2 border-primary/60" />
        <div className="absolute top-1 left-1 w-4 h-4 border-l border-t border-primary/30" />
      </motion.div>
      
      {/* Top Right */}
      <motion.div 
        className="absolute top-4 right-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="w-8 h-8 border-r-2 border-t-2 border-primary/60" />
        <div className="absolute top-1 right-1 w-4 h-4 border-r border-t border-primary/30" />
      </motion.div>
      
      {/* Bottom Left */}
      <motion.div 
        className="absolute bottom-4 left-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="w-8 h-8 border-l-2 border-b-2 border-primary/60" />
        <div className="absolute bottom-1 left-1 w-4 h-4 border-l border-b border-primary/30" />
      </motion.div>
      
      {/* Bottom Right */}
      <motion.div 
        className="absolute bottom-4 right-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-8 h-8 border-r-2 border-b-2 border-primary/60" />
        <div className="absolute bottom-1 right-1 w-4 h-4 border-r border-b border-primary/30" />
      </motion.div>

      {/* Left Ruler */}
      <motion.div 
        className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ delay: 1 }}
      >
        {rulerNumbers.left.map((num, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="w-2 h-px bg-primary/50" />
            <span className="text-[8px] font-mono text-primary/70">{num.toString().padStart(4, '0')}</span>
          </div>
        ))}
      </motion.div>

      {/* Right Ruler */}
      <motion.div 
        className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ delay: 1 }}
      >
        {rulerNumbers.right.map((num, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className="text-[8px] font-mono text-primary/70">{num.toString().padStart(4, '0')}</span>
            <div className="w-2 h-px bg-primary/50" />
          </div>
        ))}
      </motion.div>

      {/* Scan Lines Effect */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />
    </div>
  );
};

export default HUDOverlay;
