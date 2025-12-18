import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const StarField = () => {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, hsl(217 33% 12%) 0%, hsl(222 47% 2%) 100%)',
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url(/noise.png)',
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Ambient glow spots */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'hsl(var(--neon-cyan))',
          left: '20%',
          top: '10%',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
        style={{
          background: 'hsl(var(--neon-purple))',
          right: '10%',
          bottom: '20%',
        }}
      />
    </div>
  );
};

export default StarField;
