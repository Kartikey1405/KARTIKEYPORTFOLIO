import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

  useEffect(() => {
    if (!isGlitching) return;
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
        setIsGlitching(false);
      }
      
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, isGlitching]);

  // Hover glitch effect
  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char) => {
            if (char === ' ') return ' ';
            if (Math.random() > 0.1) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
    }, 50);

    return () => {
      clearInterval(interval);
      setDisplayText(text);
    };
  }, [isHovered, text]);

  return (
    <motion.span
      className={`font-display inline-block relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
      
      {/* Distortion layers on hover */}
      {isHovered && (
        <>
          <motion.span
            className="absolute inset-0 text-primary/50"
            style={{ clipPath: 'inset(0 0 50% 0)' }}
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            {displayText}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-accent/50"
            style={{ clipPath: 'inset(50% 0 0 0)' }}
            animate={{ x: [2, -2, 2] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            {displayText}
          </motion.span>
        </>
      )}
    </motion.span>
  );
};

export default GlitchText;
