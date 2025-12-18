import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/contexts/SoundContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/tech', label: 'Tech' },
  { path: '/certificates', label: 'Certs' },
];

const OrbitalNavbar = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMuted, toggleSound } = useSound();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const spotlightX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const spotlightY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="glass glass-hover px-2 py-2 flex items-center gap-1 relative overflow-hidden"
        style={{ borderRadius: '9999px' }}
      >
        {/* Spotlight effect */}
        <motion.div
          className="absolute w-32 h-32 rounded-full pointer-events-none"
          style={{
            x: spotlightX,
            y: spotlightY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          }}
        />
        
        {/* Nav Links */}
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-4 py-2 text-sm font-medium transition-colors interactive"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/20 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
        
        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-2" />
        
        {/* Sound Visualizer */}
        <button
          onClick={toggleSound}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors interactive"
        >
          <div className="flex items-center gap-0.5">
            {!isMuted ? (
              <>
                <Volume2 className="w-4 h-4" />
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-primary rounded-full"
                    animate={{
                      height: [4, 12, 4],
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </>
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </div>
        </button>
        
        {/* GitHub */}
        <a
          href="https://github.com/Kartikey1405"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-muted-foreground hover:text-foreground transition-colors interactive"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </motion.nav>
  );
};

export default OrbitalNavbar;
