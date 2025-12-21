





import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, FileText } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Kartikey1405',
    color: 'hsl(0 0% 100%)',
  },
  {
    name: 'Resume',
    icon: FileText,
    url: '/resume.pdf',
    color: 'hsl(150 100% 50%)',
    download: true,
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/kartikey-kushagra14',
    color: 'hsl(210 100% 50%)',
  },
  {
    name: 'X',
    icon: Twitter,
    url: 'https://x.com/Kartikey1405',
    color: 'hsl(0 0% 100%)',
  },
];

const SocialDock = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-fit px-4"
    >
      <div className="glass px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-6 rounded-2xl justify-center">
        
        {/* Hidden on mobile to save space */}
        <span className="hidden md:block text-xs font-mono text-muted-foreground tracking-wider">
          CONNECT
        </span>
        
        <div className="flex items-center gap-3 md:gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              download={social.download ? "Kartikey_Kushagra_Resume" : undefined}
              className="glass w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl transition-all interactive"
              whileHover={{
                y: -10,
                boxShadow: `0 20px 40px -10px ${social.color}40`,
                borderColor: social.color
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              title={social.name}
            >
              <social.icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: social.color }} />
            </motion.a>
          ))}
        </div>
        
        <div className="w-px h-6 md:h-8 bg-white/10" />
        
        {/* QR Code Animation Section */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {/* Text hidden on mobile */}
          <div className="hidden md:block text-right">
            <p className="text-xs font-mono text-muted-foreground">FUEL MY WORK</p>
            <p className="text-xs text-primary">Reactor Core</p>
          </div>
          
          <motion.div
            className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center interactive"
            whileHover={{ scale: 1.1 }}
            animate={{
              boxShadow: [
                '0 0 20px 0 hsl(var(--primary) / 0.2)',
                '0 0 40px 0 hsl(var(--primary) / 0.4)',
                '0 0 20px 0 hsl(var(--primary) / 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-5 h-5 md:w-6 md:h-6 grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`bg-primary ${i === 4 ? 'opacity-0' : 'opacity-80'}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialDock;
