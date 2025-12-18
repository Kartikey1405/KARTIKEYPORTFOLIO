import { motion } from 'framer-motion';

interface HexagonAvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const HexagonAvatar = ({ src, alt, size = 200 }: HexagonAvatarProps) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Rotating border ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--neon-cyan))" />
              <stop offset="50%" stopColor="transparent" />
              <stop offset="100%" stopColor="hsl(var(--neon-cyan))" />
            </linearGradient>
          </defs>
          <polygon
            points="50,3 97,25 97,75 50,97 3,75 3,25"
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 hexagon bg-primary/20 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Image container */}
      <div className="absolute inset-2 hexagon overflow-hidden bg-background">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        
        {/* Scanner beam */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"
          initial={{ top: '0%' }}
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
};

export default HexagonAvatar;
