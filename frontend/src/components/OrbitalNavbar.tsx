

import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Github, Volume2, VolumeX, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    <>
      {/* =======================================
          DESKTOP NAVBAR (Hidden on Mobile) 
          ======================================= */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50"
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
                      animate={{ height: [4, 12, 4] }}
                      transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
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

      {/* =======================================
          MOBILE NAVBAR (Visible only on Mobile) 
          ======================================= */}
      <div className="md:hidden fixed top-4 left-0 right-0 z-50 px-4">
        <div className="glass rounded-full px-4 py-3 flex items-center justify-between relative bg-black/60 backdrop-blur-xl border border-white/10">
          
          {/* Left Side: Sound & Github */}
          <div className="flex items-center gap-3">
             <button onClick={toggleSound} className="text-muted-foreground hover:text-primary transition-colors">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
             </button>
             <a href="https://github.com/Kartikey1405" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
             </a>
          </div>

          {/* Right Side: Hamburger Menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-2 p-2 glass rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                      className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                        isActive 
                          ? 'bg-primary/20 text-primary pl-6' 
                          : 'text-muted-foreground hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default OrbitalNavbar;
