


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HexagonAvatar from '@/components/HexagonAvatar';
import GlitchText from '@/components/GlitchText';
import TypewriterText from '@/components/TypewriterText';
import Dodecahedron from '@/components/Dodecahedron';
import SocialDock from '@/components/SocialDock';
import WireframeTorus from '@/components/WireframeTorus';
import SystemLog from '@/components/SystemLog';
import ContactFooter from '@/components/ContactFooter';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background 3D Object */}
      <Dodecahedron />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        {/* Left Side - Wireframe Torus */}
        <WireframeTorus />
        
        {/* Right Side - System Log */}
        <SystemLog />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <HexagonAvatar
              src="/assets/profilepic2.png"
              alt="Developer Avatar"
              size={180}
            />
          </motion.div>

          {/* NAME SECTION - With Cyan Glow Effect */}
          <motion.div variants={itemVariants} className="mb-2">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-glow-cyan tracking-tight uppercase">
              KARTIKEY KUSHAGRA
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-white/90">
              <GlitchText text="CREATIVE DEVELOPER" />
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            <span className="mr-2">Specializing in</span>
            <span className="text-accent font-semibold">
              <TypewriterText
                texts={['Java', 'Spring Boot', 'Machine Learning', 'React', 'Python','Data Structures and Algorithms']}
                typingSpeed={60}
              />
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Building next-generation applications at the intersection of
            <span className="text-primary"> robust backend systems</span> and
            <span className="text-accent"> intelligent AI solutions</span>.
          </motion.p>
        </div>
      </section>

      {/* About Section - Terminal Style */}
      <section className="py-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs font-mono text-muted-foreground">
                ~/profile.config
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="text-muted-foreground mb-4">
                <span className="text-primary">$</span> cat profile.json
              </div>

              <div className="pl-4 space-y-3">
                <p>
                  <span className="text-muted-foreground">{"{"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent">"name"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">"Kartikey Kushagra"</span>
                  <span className="text-muted-foreground">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent">"role"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">"Full Stack Developer","Backend Developer","Leetcoder","ML enthusiast"</span>
                  <span className="text-muted-foreground">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent">"expertise"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">
                    ["<span className="text-primary">Java</span>", "
                    <span className="text-primary">Spring Boot</span>", "
                    <span className="text-primary">React</span>", "
                    <span className="text-primary">Python</span>", "
                    <span className="text-primary">Machine Learning</span>"]
                  </span>
                  <span className="text-muted-foreground">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent">"passion"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">
                    "Building intelligent systems that solve real-world problems"
                  </span>
                  <span className="text-muted-foreground">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent">"status"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-accent">"Open to opportunities"</span>
                </p>
                <p>
                  <span className="text-muted-foreground">{"}"}</span>
                </p>
              </div>

              <motion.div
                className="mt-6 flex items-center"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              >
                <span className="text-primary">$</span>
                <span className="ml-2 w-2 h-4 bg-primary" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Footer */}
      <ContactFooter />

      {/* Social Dock */}
      <SocialDock />
    </motion.div>
  );
};

export default Home;
