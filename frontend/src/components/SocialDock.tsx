// import { motion } from 'framer-motion';
// import { Github, Linkedin, Twitter } from 'lucide-react';

// const socials = [
//   {
//     name: 'GitHub',
//     icon: Github,
//     url: 'https://github.com/Kartikey1405',
//     color: 'hsl(0 0% 100%)',
//   },
//   {
//     name: 'LinkedIn',
//     icon: Linkedin,
//     url: 'https://www.linkedin.com/in/kartikey-kushagra14',
//     color: 'hsl(210 100% 50%)',
//   },
//   {
//     name: 'X',
//     icon: Twitter,
//     url: 'https://x.com/Kartikey1405',
//     color: 'hsl(0 0% 100%)',
//   },
// ];

// const SocialDock = () => {
//   return (
//     <motion.div
//       initial={{ y: 100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
//     >
//       <div className="glass px-6 py-4 flex items-center gap-6">
//         <span className="text-xs font-mono text-muted-foreground tracking-wider">
//           CONNECT
//         </span>
        
//         <div className="flex items-center gap-4">
//           {socials.map((social, index) => (
//             <motion.a
//               key={social.name}
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="glass w-12 h-12 flex items-center justify-center rounded-xl transition-all interactive"
//               whileHover={{
//                 y: -10,
//                 boxShadow: `0 20px 40px -10px ${social.color}40`,
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2 + index * 0.1 }}
//             >
//               <social.icon className="w-5 h-5" />
//             </motion.a>
//           ))}
//         </div>
        
//         <div className="w-px h-8 bg-white/10" />
        
//         {/* QR Code Section */}
//         <motion.div
//           className="flex items-center gap-3"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//         >
//           <div className="text-right">
//             <p className="text-xs font-mono text-muted-foreground">FUEL MY WORK</p>
//             <p className="text-xs text-primary">Reactor Core</p>
//           </div>
//           <motion.div
//             className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center interactive"
//             whileHover={{ scale: 1.1 }}
//             animate={{
//               boxShadow: [
//                 '0 0 20px 0 hsl(var(--primary) / 0.2)',
//                 '0 0 40px 0 hsl(var(--primary) / 0.4)',
//                 '0 0 20px 0 hsl(var(--primary) / 0.2)',
//               ],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <div className="w-6 h-6 grid grid-cols-3 gap-0.5">
//               {[...Array(9)].map((_, i) => (
//                 <div
//                   key={i}
//                   className={`bg-primary ${i === 4 ? 'opacity-0' : 'opacity-80'}`}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default SocialDock;
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, FileText } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Kartikey1405',
    color: 'hsl(0 0% 100%)',
  },
  // --- ADDED RESUME HERE (Right of GitHub) ---
  {
    name: 'Resume',
    icon: FileText,
    url: '/resume.pdf',
    color: 'hsl(150 100% 50%)', // Bright Green to stand out
    download: true, // Custom flag to trigger download
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
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="glass px-6 py-4 flex items-center gap-6">
        <span className="text-xs font-mono text-muted-foreground tracking-wider">
          CONNECT
        </span>
        
        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              // Only apply download attribute if it exists in the object
              download={social.download ? "Kartikey_Kushagra_Resume" : undefined}
              className="glass w-12 h-12 flex items-center justify-center rounded-xl transition-all interactive"
              whileHover={{
                y: -10,
                boxShadow: `0 20px 40px -10px ${social.color}40`,
                borderColor: social.color
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              title={social.name} // Shows text on hover
            >
              <social.icon className="w-5 h-5" style={{ color: social.color }} />
            </motion.a>
          ))}
        </div>
        
        <div className="w-px h-8 bg-white/10" />
        
        {/* QR Code Section - Unchanged */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-right">
            <p className="text-xs font-mono text-muted-foreground">FUEL MY WORK</p>
            <p className="text-xs text-primary">Reactor Core</p>
          </div>
          <motion.div
            className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center interactive"
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
            <div className="w-6 h-6 grid grid-cols-3 gap-0.5">
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
