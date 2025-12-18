// import { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, ExternalLink } from 'lucide-react';

// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   tech: string[];
//   orbitRadius: number;
//   orbitDuration: number;
//   color: string;
//   repoUrl: string;
//   liveUrl?: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     name: 'AI Chatbot Engine',
//     description: 'Intelligent conversational AI powered by transformer models with context-aware responses.',
//     tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
//     orbitRadius: 120,
//     orbitDuration: 20,
//     color: 'hsl(var(--neon-cyan))',
//     repoUrl: 'https://github.com',
//   },
//   {
//     id: 2,
//     name: 'Microservices Platform',
//     description: 'Scalable enterprise backend with event-driven architecture and real-time processing.',
//     tech: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL'],
//     orbitRadius: 180,
//     orbitDuration: 28,
//     color: 'hsl(var(--neon-green))',
//     repoUrl: 'https://github.com',
//   },
//   {
//     id: 3,
//     name: 'Data Analytics Dashboard',
//     description: 'Real-time visualization platform for business intelligence and predictive analytics.',
//     tech: ['React', 'D3.js', 'Python', 'Pandas'],
//     orbitRadius: 240,
//     orbitDuration: 35,
//     color: 'hsl(var(--neon-purple))',
//     repoUrl: 'https://github.com',
//     liveUrl: 'https://example.com',
//   },
//   {
//     id: 4,
//     name: 'ML Pipeline Framework',
//     description: 'End-to-end machine learning pipeline for model training, validation, and deployment.',
//     tech: ['Python', 'NumPy', 'Docker', 'MLflow'],
//     orbitRadius: 300,
//     orbitDuration: 42,
//     color: 'hsl(var(--neon-pink))',
//     repoUrl: 'https://github.com',
//   },
//   {
//     id: 5,
//     name: 'IoT Control System',
//     description: 'Embedded systems management platform with real-time monitoring and control.',
//     tech: ['Java', 'MQTT', 'React', 'TimescaleDB'],
//     orbitRadius: 360,
//     orbitDuration: 50,
//     color: 'hsl(187 94% 60%)',
//     repoUrl: 'https://github.com',
//   },
// ];

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <div className="min-h-screen flex items-center justify-center px-6 py-24">
//       <div
//         ref={containerRef}
//         className="relative w-full max-w-4xl aspect-square"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         {/* Sun (Avatar) */}
//         <motion.div
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
//           animate={{
//             boxShadow: [
//               '0 0 60px 20px hsl(var(--primary) / 0.3)',
//               '0 0 80px 30px hsl(var(--primary) / 0.5)',
//               '0 0 60px 20px hsl(var(--primary) / 0.3)',
//             ],
//           }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden border-2 border-primary/50">
//             <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
//               alt="Avatar"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>

//         {/* Orbit Paths & Planets */}
//         {projects.map((project) => (
//           <div key={project.id}>
//             {/* Orbit Path */}
//             <div
//               className="orbit-path"
//               style={{
//                 width: project.orbitRadius * 2,
//                 height: project.orbitRadius * 2,
//                 left: `calc(50% - ${project.orbitRadius}px)`,
//                 top: `calc(50% - ${project.orbitRadius}px)`,
//               }}
//             />

//             {/* Planet */}
//             <motion.button
//               className="absolute left-1/2 top-1/2 z-20 interactive"
//               style={{
//                 '--orbit-radius': `${project.orbitRadius}px`,
//               } as React.CSSProperties}
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration: project.orbitDuration,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//               whileHover={{ scale: 1.3 }}
//               onClick={() => setSelectedProject(project)}
//             >
//               <motion.div
//                 className="w-10 h-10 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 relative"
//                 style={{
//                   transform: `translateX(${project.orbitRadius}px) translateX(-50%) translateY(-50%)`,
//                   background: `radial-gradient(circle at 30% 30%, ${project.color}, ${project.color}80)`,
//                   boxShadow: `0 0 20px ${project.color}60`,
//                 }}
//                 animate={isHovering ? { scale: 0.9 } : { scale: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <span className="text-[10px] font-bold text-background">
//                   {project.id}
//                 </span>
//               </motion.div>
//             </motion.button>
//           </div>
//         ))}

//         {/* Title */}
//         <motion.div
//           className="absolute -top-16 left-1/2 -translate-x-1/2 text-center"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <h1 className="text-3xl font-display font-bold text-glow-cyan">
//             PROJECT SOLAR SYSTEM
//           </h1>
//           <p className="text-sm text-muted-foreground mt-2 font-mono">
//             Click a planet to explore
//           </p>
//         </motion.div>
//       </div>

//       {/* Project Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center px-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <div
//               className="absolute inset-0 bg-background/80 backdrop-blur-sm"
//               onClick={() => setSelectedProject(null)}
//             />

//             <motion.div
//               className="glass max-w-lg w-full p-6 relative z-10"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.5, opacity: 0 }}
//               transition={{ type: 'spring', damping: 25 }}
//             >
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 text-muted-foreground hover:text-foreground interactive"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="mb-4">
//                 <span
//                   className="inline-block w-3 h-3 rounded-full mr-3"
//                   style={{ background: selectedProject.color }}
//                 />
//                 <span className="text-xs font-mono text-muted-foreground">
//                   MISSION REPORT #{selectedProject.id}
//                 </span>
//               </div>

//               <h2 className="text-2xl font-display font-bold mb-3">
//                 {selectedProject.name}
//               </h2>

//               <p className="text-muted-foreground mb-4">
//                 {selectedProject.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {selectedProject.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-3">
//                 <a
//                   href={selectedProject.repoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors interactive"
//                 >
//                   <Github className="w-4 h-4" />
//                   View Code
//                 </a>
//                 {selectedProject.liveUrl && (
//                   <a
//                     href={selectedProject.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors interactive"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Projects;

// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, ExternalLink, Loader2 } from 'lucide-react';

// // 1. Define the Shape of our Frontend Project (Visual + Data)
// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   tech: string[];
//   orbitRadius: number;
//   orbitDuration: number;
//   color: string;
//   repoUrl: string;
//   liveUrl?: string;
//   imageUrl?: string; // Added in case you want to use the image later
// }

// // 2. Define the Palette for the planets (Cycling colors)
// const PLANET_COLORS = [
//   'hsl(var(--neon-cyan))',
//   'hsl(var(--neon-green))',
//   'hsl(var(--neon-purple))',
//   'hsl(var(--neon-pink))',
//   'hsl(187 94% 60%)'
// ];

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // 3. Fetch from Spring Boot on Load
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/projects');
//         if (!response.ok) throw new Error('Failed to connect to Motherboard');
        
//         const data = await response.json();

//         // 4. The "Transformer": Convert DB Data -> Visual Solar System
//         const visualData = data.map((p: any, index: number) => ({
//           id: p.id,
//           name: p.title,              // Map 'title' to 'name'
//           description: p.description,
//           // Split "Java,React" string into array, or empty array if null
//           tech: p.techStack ? p.techStack.split(',').map((t: string) => t.trim()) : [],
//           repoUrl: p.githubUrl,
//           liveUrl: p.liveUrl,
//           imageUrl: p.imageUrl,

//           // CALCULATE PHYSICS DYNAMICALLY BASED ON INDEX
//           // Inner planets move faster, outer planets move slower
//           orbitRadius: 120 + (index * 70), 
//           orbitDuration: 20 + (index * 10),
//           color: PLANET_COLORS[index % PLANET_COLORS.length] // Cycle through colors
//         }));

//         setProjects(visualData);
//       } catch (error) {
//         console.error("Solar System Data Corrupted:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <Loader2 className="w-12 h-12 text-primary animate-spin" />
//         <span className="ml-4 font-mono text-primary">INITIALIZING ORBITS...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
//       <div
//         ref={containerRef}
//         className="relative w-full max-w-4xl aspect-square flex items-center justify-center"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         {/* Sun (Avatar) */}
//         <motion.div
//           className="absolute z-10"
//           animate={{
//             boxShadow: [
//               '0 0 60px 20px hsl(var(--primary) / 0.3)',
//               '0 0 80px 30px hsl(var(--primary) / 0.5)',
//               '0 0 60px 20px hsl(var(--primary) / 0.3)',
//             ],
//           }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden border-2 border-primary/50 relative z-20">
//             {/* REPLACE WITH YOUR ACTUAL PHOTO URL IF AVAILABLE */}
//             <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
//               alt="Avatar"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>

//         {/* Orbit Paths & Planets */}
//         {projects.map((project) => (
//           <div key={project.id} className="absolute inset-0 pointer-events-none">
//              {/* Centering Wrapper */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                
//                 {/* Orbit Path Ring */}
//                 <div
//                 className="absolute border border-white/10 rounded-full"
//                 style={{
//                     width: project.orbitRadius * 2,
//                     height: project.orbitRadius * 2,
//                     left: `50%`,
//                     top: `50%`,
//                     transform: 'translate(-50%, -50%)'
//                 }}
//                 />

//                 {/* Rotating Planet Container */}
//                 <motion.div
//                 className="absolute top-1/2 left-1/2 w-0 h-0"
//                 animate={{ rotate: 360 }}
//                 transition={{
//                     duration: project.orbitDuration,
//                     repeat: Infinity,
//                     ease: 'linear',
//                 }}
//                 >
//                 {/* The Planet Itself (Offset by Radius) */}
//                 <motion.button
//                     className="absolute w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer"
//                     style={{
//                         transform: `translateX(${project.orbitRadius}px)`,
//                         background: `radial-gradient(circle at 30% 30%, ${project.color}, ${project.color}80)`,
//                         boxShadow: `0 0 20px ${project.color}60`,
//                     }}
//                     whileHover={{ scale: 1.5 }}
//                     onClick={() => setSelectedProject(project)}
//                 >
//                     <span className="text-[10px] font-bold text-background/80">
//                     {project.name.substring(0, 2).toUpperCase()}
//                     </span>
//                 </motion.button>
//                 </motion.div>
//             </div>
//           </div>
//         ))}

//         {/* Title */}
//         <motion.div
//           className="absolute -top-16 left-1/2 -translate-x-1/2 text-center w-full z-20"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <h1 className="text-3xl font-display font-bold text-glow-cyan">
//             PROJECT SOLAR SYSTEM
//           </h1>
//           <p className="text-sm text-muted-foreground mt-2 font-mono">
//             Click a planet to explore data
//           </p>
//         </motion.div>
//       </div>

//       {/* Project Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center px-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <div
//               className="absolute inset-0 bg-background/80 backdrop-blur-sm"
//               onClick={() => setSelectedProject(null)}
//             />

//             <motion.div
//               className="glass max-w-lg w-full p-6 relative z-10 border border-primary/20"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.5, opacity: 0 }}
//               transition={{ type: 'spring', damping: 25 }}
//             >
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="mb-4">
//                 <span
//                   className="inline-block w-3 h-3 rounded-full mr-3"
//                   style={{ background: selectedProject.color }}
//                 />
//                 <span className="text-xs font-mono text-muted-foreground">
//                   MISSION REPORT #{selectedProject.id}
//                 </span>
//               </div>

//               {/* Use Image if available, otherwise just Title */}
//               {selectedProject.imageUrl && (
//                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden border border-white/10">
//                     <img src={selectedProject.imageUrl} alt={selectedProject.name} className="w-full h-full object-cover" />
//                  </div>
//               )}

//               <h2 className="text-2xl font-display font-bold mb-3 text-primary">
//                 {selectedProject.name}
//               </h2>

//               <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
//                 {selectedProject.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {selectedProject.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-3">
//                 <a
//                   href={selectedProject.repoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
//                 >
//                   <Github className="w-4 h-4" />
//                   View Code
//                 </a>
//                 {selectedProject.liveUrl && (
//                   <a
//                     href={selectedProject.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Projects;

// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, ExternalLink, Loader2 } from 'lucide-react';

// // 1. Define the Shape of our Frontend Project (Visual + Data)
// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   tech: string[];
//   orbitRadius: number;
//   orbitDuration: number;
//   color: string;
//   repoUrl: string;
//   liveUrl?: string;
//   imageUrl?: string; 
// }

// // 2. Define the Palette for the planets (Updated to Hex Codes for Visibility)
// const PLANET_COLORS = [
//   '#00F0FF', // Cyan
//   '#00FF94', // Neon Green
//   '#8B5CF6', // Purple
//   '#FF0055', // Pink
//   '#FBBF24'  // Amber
// ];

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // 3. Fetch from Spring Boot on Load
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/projects');
//         if (!response.ok) throw new Error('Failed to connect to Motherboard');
        
//         const data = await response.json();

//         // 4. The "Transformer": Convert DB Data -> Visual Solar System
//         const visualData = data.map((p: any, index: number) => ({
//           id: p.id,
//           name: p.title,              // Map 'title' to 'name'
//           description: p.description,
//           // Split "Java,React" string into array, or empty array if null
//           tech: p.techStack ? p.techStack.split(',').map((t: string) => t.trim()) : [],
//           repoUrl: p.githubUrl,
//           liveUrl: p.liveUrl,
//           imageUrl: p.imageUrl,

//           // CALCULATE PHYSICS DYNAMICALLY BASED ON INDEX
//           // Inner planets move faster, outer planets move slower
//           orbitRadius: 120 + (index * 70), 
//           orbitDuration: 20 + (index * 10),
//           color: PLANET_COLORS[index % PLANET_COLORS.length] // Cycle through colors
//         }));

//         setProjects(visualData);
//       } catch (error) {
//         console.error("Solar System Data Corrupted:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <Loader2 className="w-12 h-12 text-primary animate-spin" />
//         <span className="ml-4 font-mono text-primary">INITIALIZING ORBITS...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
//       <div
//         ref={containerRef}
//         className="relative w-full max-w-4xl aspect-square flex items-center justify-center"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         {/* Sun (Avatar) */}
//         <motion.div
//           className="absolute z-10"
//           animate={{
//             boxShadow: [
//               '0 0 60px 20px hsl(var(--primary) / 0.3)',
//               '0 0 80px 30px hsl(var(--primary) / 0.5)',
//               '0 0 60px 20px hsl(var(--primary) / 0.3)',
//             ],
//           }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden border-2 border-primary/50 relative z-20">
//             {/* REPLACE WITH YOUR ACTUAL PHOTO URL IF AVAILABLE */}
//             <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
//               alt="Avatar"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>

//         {/* Orbit Paths & Planets */}
//         {projects.map((project) => (
//           <div key={project.id} className="absolute inset-0 pointer-events-none">
//              {/* Centering Wrapper */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                
//                 {/* Orbit Path Ring */}
//                 <div
//                 className="absolute border border-white/10 rounded-full"
//                 style={{
//                     width: project.orbitRadius * 2,
//                     height: project.orbitRadius * 2,
//                     left: `50%`,
//                     top: `50%`,
//                     transform: 'translate(-50%, -50%)'
//                 }}
//                 />

//                 {/* Rotating Planet Container */}
//                 <motion.div
//                 className="absolute top-1/2 left-1/2 w-0 h-0"
//                 animate={{ rotate: 360 }}
//                 transition={{
//                     duration: project.orbitDuration,
//                     repeat: Infinity,
//                     ease: 'linear',
//                 }}
//                 >
//                 {/* The Planet Itself (Offset by Radius) */}
//                 <motion.button
//                     className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer z-50"
//                     style={{
//                         transform: `translateX(${project.orbitRadius}px)`,
//                         // FIXED: Explicit Hex Gradient & Shadow for Visibility
//                         background: `radial-gradient(circle at 30% 30%, ${project.color}, #000000)`,
//                         boxShadow: `0 0 15px ${project.color}, 0 0 30px ${project.color}40`,
//                         border: `1px solid ${project.color}`
//                     }}
//                     whileHover={{ scale: 1.3, zIndex: 100 }}
//                     onClick={() => setSelectedProject(project)}
//                 >
//                     <span className="text-[10px] font-bold text-white drop-shadow-md">
//                     {project.name.substring(0, 2).toUpperCase()}
//                     </span>
//                 </motion.button>
//                 </motion.div>
//             </div>
//           </div>
//         ))}

//         {/* Title */}
//         <motion.div
//           className="absolute -top-16 left-1/2 -translate-x-1/2 text-center w-full z-20"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <h1 className="text-3xl font-display font-bold text-glow-cyan">
//             PROJECT SOLAR SYSTEM
//           </h1>
//           <p className="text-sm text-muted-foreground mt-2 font-mono">
//             Click a planet to explore data
//           </p>
//         </motion.div>
//       </div>

//       {/* Project Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center px-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <div
//               className="absolute inset-0 bg-background/80 backdrop-blur-sm"
//               onClick={() => setSelectedProject(null)}
//             />

//             <motion.div
//               className="glass max-w-lg w-full p-6 relative z-10 border border-primary/20"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.5, opacity: 0 }}
//               transition={{ type: 'spring', damping: 25 }}
//             >
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="mb-4">
//                 <span
//                   className="inline-block w-3 h-3 rounded-full mr-3"
//                   style={{ background: selectedProject.color }}
//                 />
//                 <span className="text-xs font-mono text-muted-foreground">
//                   MISSION REPORT #{selectedProject.id}
//                 </span>
//               </div>

//               {/* Use Image if available, otherwise just Title */}
//               {selectedProject.imageUrl && (
//                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden border border-white/10">
//                     <img src={selectedProject.imageUrl} alt={selectedProject.name} className="w-full h-full object-cover" />
//                  </div>
//               )}

//               <h2 className="text-2xl font-display font-bold mb-3 text-primary">
//                 {selectedProject.name}
//               </h2>

//               <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
//                 {selectedProject.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {selectedProject.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-3">
//                 <a
//                   href={selectedProject.repoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
//                 >
//                   <Github className="w-4 h-4" />
//                   View Code
//                 </a>
//                 {selectedProject.liveUrl && (
//                   <a
//                     href={selectedProject.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Projects;


// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, ExternalLink, Loader2 } from 'lucide-react';

// // 1. Define Project Structure
// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   tech: string[];
//   orbitRadius: number;
//   orbitDuration: number;
//   color: string;
//   repoUrl: string;
//   liveUrl?: string;
//   imageUrl?: string;
// }

// // 2. Safe Hex Colors (No HSL variables to prevent crashes)
// const PLANET_COLORS = [
//   '#00F0FF', // Cyan
//   '#00FF94', // Neon Green
//   '#8B5CF6', // Purple
//   '#FF0055', // Pink
//   '#FBBF24'  // Amber
// ];

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
  
//   // 3. Fetch Data
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/projects');
//         if (!response.ok) throw new Error('Failed to connect');
//         const data = await response.json();

//         const visualData = data.map((p: any, index: number) => ({
//           id: p.id,
//           name: p.title,
//           description: p.description,
//           tech: p.techStack ? p.techStack.split(',') : [],
//           repoUrl: p.githubUrl,
//           liveUrl: p.liveUrl,
//           imageUrl: p.imageUrl,
//           // Physics
//           orbitRadius: 160 + (index * 100), // WIDER ORBITS for bigger planets
//           orbitDuration: 25 + (index * 15),
//           color: PLANET_COLORS[index % PLANET_COLORS.length]
//         }));

//         setProjects(visualData);
//       } catch (error) {
//         console.error("Data Error:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-[#00F0FF]">
//         <Loader2 className="w-12 h-12 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      
//       {/* SOLAR SYSTEM CONTAINER */}
//       <div className="relative w-[800px] h-[800px] flex items-center justify-center">
        
//         {/* SUN (Profile) */}
//         <div className="absolute z-20 w-32 h-32 rounded-full border-4 border-[#00F0FF] shadow-[0_0_50px_#00F0FF] overflow-hidden bg-black">
//              <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
//               alt="Profile"
//               className="w-full h-full object-cover opacity-80"
//             />
//         </div>

//         {/* PLANETS & ORBITS */}
//         {projects.map((project) => (
//           <div key={project.id} className="absolute inset-0 pointer-events-none">
//             {/* 1. The Orbit Ring Line */}
//             <div 
//                 className="absolute top-1/2 left-1/2 rounded-full border border-white/10"
//                 style={{
//                     width: project.orbitRadius * 2,
//                     height: project.orbitRadius * 2,
//                     transform: 'translate(-50%, -50%)'
//                 }}
//             />

//             {/* 2. The Rotating Wrapper */}
//             <motion.div
//                 className="absolute top-1/2 left-1/2 w-0 h-0"
//                 animate={{ rotate: 360 }}
//                 transition={{
//                     duration: project.orbitDuration,
//                     repeat: Infinity,
//                     ease: "linear"
//                 }}
//             >
//                 {/* 3. THE PLANET (Big Button) */}
//                 <motion.button
//                     className="absolute rounded-full flex items-center justify-center cursor-pointer pointer-events-auto shadow-lg z-30"
//                     style={{
//                         width: '80px',   // BIGGER SIZE (was 40px)
//                         height: '80px',
//                         transform: `translateX(${project.orbitRadius}px) translate(-50%, -50%)`, // Centered on orbit line
//                         backgroundColor: 'black', // Solid background prevents transparency issues
//                         border: `2px solid ${project.color}`,
//                         boxShadow: `0 0 20px ${project.color}`,
//                     }}
//                     whileHover={{ scale: 1.2, zIndex: 50 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => setSelectedProject(project)}
//                 >
//                     {/* Planet Label */}
//                     <span className="text-xs font-bold text-white tracking-widest">
//                         {project.name.substring(0, 3).toUpperCase()}
//                     </span>
//                 </motion.button>
//             </motion.div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL OVERLAY (The Card) */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedProject(null)} // Click outside to close
//           >
//             {/* THE CARD ITSELF */}
//             <motion.div
//               className="relative w-full max-w-2xl bg-black/90 border border-[#00F0FF]/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)]"
//               initial={{ scale: 0.8, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.8, y: 50 }}
//               onClick={(e) => e.stopPropagation()} // Don't close when clicking inside
//             >
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white"
//               >
//                 <X className="w-6 h-6" />
//               </button>

//               <div className="flex items-center gap-4 mb-6">
//                 <div 
//                     className="w-4 h-4 rounded-full shadow-[0_0_10px]" 
//                     style={{ backgroundColor: selectedProject.color, boxShadow: `0 0 10px ${selectedProject.color}` }}
//                 />
//                 <h2 className="text-3xl font-bold text-white tracking-tight">
//                     {selectedProject.name}
//                 </h2>
//               </div>

//               {selectedProject.imageUrl && (
//                   <div className="w-full h-48 mb-6 rounded-lg overflow-hidden border border-white/10">
//                     <img 
//                         src={selectedProject.imageUrl} 
//                         alt="Project Preview" 
//                         className="w-full h-full object-cover"
//                     />
//                   </div>
//               )}

//               <p className="text-gray-300 text-lg leading-relaxed mb-8">
//                 {selectedProject.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-8">
//                 {selectedProject.tech.map((t) => (
//                   <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-[#00F0FF]">
//                     {t.trim()}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-4">
//                 <a
//                   href={selectedProject.repoUrl}
//                   target="_blank"
//                   className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors"
//                 >
//                   <Github className="w-5 h-5" />
//                   Code
//                 </a>
//                 {selectedProject.liveUrl && (
//                   <a
//                     href={selectedProject.liveUrl}
//                     target="_blank"
//                     className="flex items-center gap-2 px-6 py-3 bg-[#00F0FF] hover:bg-[#00F0FF]/80 rounded-lg text-black font-bold transition-colors"
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Projects;



// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, ExternalLink, Loader2, Code2, Database, Globe } from 'lucide-react';

// // 1. Structure
// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   tech: string[];
//   orbitRadius: number;
//   orbitDuration: number;
//   color: string;
//   repoUrl: string;
//   liveUrl?: string;
//   imageUrl?: string;
// }

// // 2. High-Contrast Hex Colors
// const PLANET_COLORS = [
//   '#00F0FF', // Cyan
//   '#00FF94', // Neon Green
//   '#8B5CF6', // Purple
//   '#FF0055', // Pink
//   '#FBBF24'  // Amber
// ];

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
  
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/projects');
//         if (!response.ok) throw new Error('Connection Error');
//         const data = await response.json();

//         const visualData = data.map((p: any, index: number) => ({
//           id: p.id,
//           name: p.title,
//           description: p.description,
//           tech: p.techStack ? p.techStack.split(',') : [],
//           repoUrl: p.githubUrl,
//           liveUrl: p.liveUrl,
//           imageUrl: p.imageUrl,
//           // Physics: Wider orbits to prevent overlapping the sun
//           orbitRadius: 180 + (index * 90), 
//           orbitDuration: 30 + (index * 15),
//           color: PLANET_COLORS[index % PLANET_COLORS.length]
//         }));

//         setProjects(visualData);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-[#00F0FF]">
//         <Loader2 className="w-12 h-12 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     // Note: removed overflow-hidden from parent to let modal break out if needed
//     <div className="min-h-screen w-full flex items-center justify-center relative bg-transparent">
      
//       {/* --- SOLAR SYSTEM WRAPPER --- */}
//       <div className="relative w-[900px] h-[900px] flex items-center justify-center">
        
//         {/* THE SUN (Your Profile) - Z-Index 20 */}
//         <div className="absolute z-20 w-32 h-32 rounded-full border-4 border-[#00F0FF] shadow-[0_0_50px_#00F0FF] overflow-hidden bg-black">
//              <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
//               alt="Profile"
//               className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
//             />
//         </div>

//         {/* ORBITS & PLANETS */}
//         {projects.map((project) => (
//           <div key={project.id} className="absolute inset-0 pointer-events-none">
//             {/* Orbit Ring */}
//             <div 
//                 className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
//                 style={{
//                     width: project.orbitRadius * 2,
//                     height: project.orbitRadius * 2,
//                     transform: 'translate(-50%, -50%)'
//                 }}
//             />

//             {/* Rotating Container */}
//             <motion.div
//                 className="absolute top-1/2 left-1/2 w-0 h-0"
//                 animate={{ rotate: 360 }}
//                 transition={{
//                     duration: project.orbitDuration,
//                     repeat: Infinity,
//                     ease: "linear"
//                 }}
//             >
//                 {/* THE PLANET BUTTON - Z-Index 30 */}
//                 <motion.button
//                     className="absolute rounded-full flex items-center justify-center cursor-pointer pointer-events-auto z-30"
//                     style={{
//                         width: '70px',
//                         height: '70px',
//                         transform: `translateX(${project.orbitRadius}px) translate(-50%, -50%)`,
//                         backgroundColor: '#000', // Solid black to hide orbit line behind it
//                         border: `2px solid ${project.color}`,
//                         boxShadow: `0 0 25px ${project.color}`,
//                     }}
//                     whileHover={{ scale: 1.2, zIndex: 50, boxShadow: `0 0 50px ${project.color}` }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => setSelectedProject(project)}
//                 >
//                     <span className="text-[10px] font-bold text-white tracking-widest drop-shadow-md">
//                         {project.name.substring(0, 3).toUpperCase()}
//                     </span>
//                 </motion.button>
//             </motion.div>
//           </div>
//         ))}
//       </div>

//       {/* --- THE "GOD MODE" MODAL --- */}
//       {/* Z-Index 9999 ensures it sits on top of EVERYTHING */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedProject(null)}
//           >
//             {/* CARD ANIMATION: Fly Up + Scale In */}
//             <motion.div
//               className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
//               style={{ boxShadow: `0 0 100px -20px ${selectedProject.color}40` }} // Dynamic colored glow
//               initial={{ scale: 0.8, y: 100, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.8, y: 100, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               onClick={(e) => e.stopPropagation()} 
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               {/* 1. Project Image (Top Half) */}
//               <div className="relative h-64 w-full bg-gray-900 group overflow-hidden">
//                 {selectedProject.imageUrl ? (
//                    <img 
//                     src={selectedProject.imageUrl} 
//                     alt={selectedProject.name} 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                    />
//                 ) : (
//                     <div className="w-full h-full flex items-center justify-center text-gray-700">
//                         <Code2 className="w-16 h-16 opacity-20" />
//                     </div>
//                 )}
//                 {/* Gradient Overlay for Text Readability */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                
//                 {/* Title Overlay */}
//                 <div className="absolute bottom-4 left-6">
//                      <div className="flex items-center gap-3 mb-2">
//                         <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: selectedProject.color }} />
//                         <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">Mission #{selectedProject.id}</span>
//                      </div>
//                      <h2 className="text-3xl font-bold text-white tracking-tight">{selectedProject.name}</h2>
//                 </div>
//               </div>

//               {/* 2. Content Body (Bottom Half) */}
//               <div className="p-8">
//                 {/* Tech Stack Pills */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                     {selectedProject.tech.map((t) => (
//                     <span 
//                         key={t} 
//                         className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-gray-300 rounded-full flex items-center gap-1"
//                     >
//                         <Database className="w-3 h-3 text-[#00F0FF]" />
//                         {t.trim()}
//                     </span>
//                     ))}
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-400 leading-relaxed mb-8 border-l-2 border-[#00F0FF]/30 pl-4">
//                     {selectedProject.description}
//                 </p>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4">
//                     <a
//                     href={selectedProject.repoUrl}
//                     target="_blank"
//                     className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all group"
//                     >
//                     <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//                     Source Code
//                     </a>
                    
//                     {selectedProject.liveUrl && (
//                     <a
//                         href={selectedProject.liveUrl}
//                         target="_blank"
//                         className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-black font-bold transition-all hover:brightness-110"
//                         style={{ backgroundColor: selectedProject.color }}
//                     >
//                         <Globe className="w-5 h-5" />
//                         Live Demo
//                     </a>
//                     )}
//                 </div>
//               </div>

//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Projects;


// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, ExternalLink, Loader2, Code2, Database, Globe } from 'lucide-react';

// // 1. Structure
// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   tech: string[];
//   orbitRadius: number;
//   orbitDuration: number;
//   color: string;
//   repoUrl: string;
//   liveUrl?: string;
//   imageUrl?: string;
// }

// // 2. High-Contrast Hex Colors
// const PLANET_COLORS = [
//   '#00F0FF', // Cyan
//   '#00FF94', // Neon Green
//   '#8B5CF6', // Purple
//   '#FF0055', // Pink
//   '#FBBF24'  // Amber
// ];

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
  
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/projects');
//         if (!response.ok) throw new Error('Connection Error');
//         const data = await response.json();

//         const visualData = data.map((p: any, index: number) => ({
//           id: p.id,
//           name: p.title,
//           description: p.description,
//           tech: p.techStack ? p.techStack.split(',') : [],
//           repoUrl: p.githubUrl,
//           liveUrl: p.liveUrl,
//           imageUrl: p.imageUrl,
//           // Physics: Wider orbits to prevent overlapping the sun
//           orbitRadius: 180 + (index * 90), 
//           orbitDuration: 30 + (index * 15),
//           color: PLANET_COLORS[index % PLANET_COLORS.length]
//         }));

//         setProjects(visualData);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-[#00F0FF]">
//         <Loader2 className="w-12 h-12 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center relative bg-transparent overflow-hidden">
      
//       {/* --- SOLAR SYSTEM WRAPPER --- */}
//       {/* When a project is selected, we push this to the background */}
//       <div className={`relative w-[900px] h-[900px] flex items-center justify-center transition-all duration-500 ${selectedProject ? 'scale-90 opacity-50 blur-sm pointer-events-none' : 'scale-100 opacity-100'}`}>
        
//         {/* THE SUN (Your Profile) - Z-Index 10 */}
//         <div className="absolute z-10 w-32 h-32 rounded-full border-4 border-[#00F0FF] shadow-[0_0_50px_#00F0FF] overflow-hidden bg-black">
//              <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
//               alt="Profile"
//               className="w-full h-full object-cover opacity-90"
//             />
//         </div>

//         {/* ORBITS & PLANETS */}
//         {projects.map((project) => (
//           <div key={project.id} className="absolute inset-0 pointer-events-none">
//             {/* Orbit Ring */}
//             <div 
//                 className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
//                 style={{
//                     width: project.orbitRadius * 2,
//                     height: project.orbitRadius * 2,
//                     transform: 'translate(-50%, -50%)'
//                 }}
//             />

//             {/* Rotating Container */}
//             <motion.div
//                 className="absolute top-1/2 left-1/2 w-0 h-0"
//                 animate={{ rotate: 360 }}
//                 transition={{
//                     duration: project.orbitDuration,
//                     repeat: Infinity,
//                     ease: "linear"
//                 }}
//             >
//                 {/* THE PLANET BUTTON - Z-Index 20 */}
//                 <motion.button
//                     className="absolute rounded-full flex items-center justify-center cursor-pointer pointer-events-auto z-20"
//                     style={{
//                         width: '70px',
//                         height: '70px',
//                         transform: `translateX(${project.orbitRadius}px) translate(-50%, -50%)`,
//                         backgroundColor: '#000', 
//                         border: `2px solid ${project.color}`,
//                         boxShadow: `0 0 25px ${project.color}`,
//                     }}
//                     whileHover={{ scale: 1.2, zIndex: 30, boxShadow: `0 0 50px ${project.color}` }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => setSelectedProject(project)}
//                 >
//                     <span className="text-[10px] font-bold text-white tracking-widest drop-shadow-md">
//                         {project.name.substring(0, 3).toUpperCase()}
//                     </span>
//                 </motion.button>
//             </motion.div>
//           </div>
//         ))}
//       </div>

//       {/* --- THE "GOD MODE" MODAL --- */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedProject(null)}
//           >
//             {/* CARD: Clean Layout with Image on Top */}
//             <motion.div
//               className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
//               style={{ boxShadow: `0 0 60px -10px ${selectedProject.color}30` }}
//               initial={{ scale: 0.5, y: 100, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.5, y: 100, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               onClick={(e) => e.stopPropagation()} 
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 z-50 p-2 bg-black/60 rounded-full text-white hover:bg-white/20 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               {/* SECTION 1: Image Header (Fixed Height, No Text Overlap) */}
//               <div className="relative h-48 w-full bg-gray-900 shrink-0 border-b border-white/10">
//                 {selectedProject.imageUrl ? (
//                    <img 
//                     src={selectedProject.imageUrl} 
//                     alt={selectedProject.name} 
//                     className="w-full h-full object-cover"
//                    />
//                 ) : (
//                     <div className="w-full h-full flex items-center justify-center text-gray-700">
//                         <Code2 className="w-16 h-16 opacity-20" />
//                     </div>
//                 )}
//                 {/* Subtle gradient at bottom of image */}
//                 <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
//               </div>

//               {/* SECTION 2: Content Body (Scrollable if needed) */}
//               <div className="p-8 flex flex-col gap-6 overflow-y-auto">
                
//                 {/* Header: Title & Mission ID */}
//                 <div>
//                      <div className="flex items-center gap-2 mb-2">
//                         <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedProject.color }} />
//                         <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Mission #{selectedProject.id}</span>
//                      </div>
//                      <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">{selectedProject.name}</h2>
//                 </div>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2">
//                     {selectedProject.tech.map((t) => (
//                     <span 
//                         key={t} 
//                         className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-[#00F0FF] rounded-full"
//                     >
//                         {t.trim()}
//                     </span>
//                     ))}
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-400 leading-relaxed text-sm">
//                     {selectedProject.description}
//                 </p>

//                 {/* Footer Buttons */}
//                 <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
//                     <a
//                     href={selectedProject.repoUrl}
//                     target="_blank"
//                     className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all"
//                     >
//                     <Github className="w-4 h-4" />
//                     Source
//                     </a>
                    
//                     {selectedProject.liveUrl && (
//                     <a
//                         href={selectedProject.liveUrl}
//                         target="_blank"
//                         className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-black font-bold transition-all hover:brightness-110"
//                         style={{ backgroundColor: selectedProject.color }}
//                     >
//                         <Globe className="w-4 h-4" />
//                         Demo
//                     </a>
//                     )}
//                 </div>
//               </div>

//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Projects;



// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, ExternalLink, Loader2, Code2, Database, Globe } from 'lucide-react';

// // 1. Structure
// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   tech: string[];
//   orbitRadius: number;
//   orbitDuration: number;
//   color: string;
//   repoUrl: string;
//   liveUrl?: string;
//   imageUrl?: string;
// }

// // 2. High-Contrast Hex Colors
// const PLANET_COLORS = [
//   '#00F0FF', // Cyan
//   '#00FF94', // Neon Green
//   '#8B5CF6', // Purple
//   '#FF0055', // Pink
//   '#FBBF24'  // Amber
// ];

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
  
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/projects');
//         if (!response.ok) throw new Error('Connection Error');
//         const data = await response.json();

//         const visualData = data.map((p: any, index: number) => ({
//           id: p.id,
//           name: p.title,
//           description: p.description,
//           tech: p.techStack ? p.techStack.split(',') : [],
//           repoUrl: p.githubUrl,
//           liveUrl: p.liveUrl,
//           imageUrl: p.imageUrl,
//           orbitRadius: 180 + (index * 90), 
//           orbitDuration: 30 + (index * 15),
//           color: PLANET_COLORS[index % PLANET_COLORS.length]
//         }));

//         setProjects(visualData);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-[#00F0FF]">
//         <Loader2 className="w-12 h-12 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center relative bg-transparent overflow-hidden">
      
//       {/* SOLAR SYSTEM CONTAINER */}
//       <div className={`relative w-[900px] h-[900px] flex items-center justify-center transition-all duration-500 ${selectedProject ? 'scale-90 opacity-50 blur-sm pointer-events-none' : 'scale-100 opacity-100'}`}>
        
//         {/* THE SUN (Your Profile) - Fixed Z-Index */}
//         <div className="absolute z-10 w-32 h-32 rounded-full border-4 border-[#00F0FF] shadow-[0_0_50px_#00F0FF] overflow-hidden bg-black">
//              <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
//               alt="Profile"
//               className="w-full h-full object-cover opacity-90"
//             />
//         </div>

//         {/* ORBITS & PLANETS */}
//         {projects.map((project) => (
//           <div key={project.id} className="absolute inset-0 pointer-events-none">
//             {/* Orbit Ring */}
//             <div 
//                 className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
//                 style={{
//                     width: project.orbitRadius * 2,
//                     height: project.orbitRadius * 2,
//                     transform: 'translate(-50%, -50%)'
//                 }}
//             />

//             {/* Rotating Container - Using standard CSS animation to prevent Framer crashes */}
//             <div
//                 className="absolute top-1/2 left-1/2 w-0 h-0"
//                 style={{
//                     animation: `spin ${project.orbitDuration}s linear infinite`
//                 }}
//             >
//                 {/* THE PLANET BUTTON */}
//                 <button
//                     className="absolute rounded-full flex items-center justify-center cursor-pointer pointer-events-auto z-20 transition-transform duration-300 hover:scale-125 hover:z-50"
//                     style={{
//                         width: '70px',
//                         height: '70px',
//                         transform: `translateX(${project.orbitRadius}px) translate(-50%, -50%)`, // Fixed position relative to rotator
//                         backgroundColor: '#000', 
//                         border: `2px solid ${project.color}`,
//                         boxShadow: `0 0 25px ${project.color}`
//                     }}
//                     onClick={() => setSelectedProject(project)}
//                 >
//                     <span className="text-[10px] font-bold text-white tracking-widest drop-shadow-md">
//                         {project.name.substring(0, 3).toUpperCase()}
//                     </span>
//                 </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL OVERLAY - Z-Index 100 ensures it is ALWAYS on top */}
//       <AnimatePresence>
//         {selectedProject && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
//             <motion.div
//               className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
//               style={{ boxShadow: `0 0 60px -10px ${selectedProject.color}30` }}
//               initial={{ scale: 0.5, opacity: 0, y: 100 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.5, opacity: 0, y: 100 }}
//               onClick={(e) => e.stopPropagation()} 
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 z-50 p-2 bg-black/60 rounded-full text-white hover:bg-white/20 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               {/* Image Header */}
//               <div className="relative h-48 w-full bg-gray-900 shrink-0 border-b border-white/10">
//                 {selectedProject.imageUrl ? (
//                    <img 
//                     src={selectedProject.imageUrl} 
//                     alt={selectedProject.name} 
//                     className="w-full h-full object-cover"
//                    />
//                 ) : (
//                     <div className="w-full h-full flex items-center justify-center text-gray-700">
//                         <Code2 className="w-16 h-16 opacity-20" />
//                     </div>
//                 )}
//                 <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
//               </div>

//               {/* Content Body */}
//               <div className="p-8 flex flex-col gap-6 overflow-y-auto">
//                 <div>
//                      <div className="flex items-center gap-2 mb-2">
//                         <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedProject.color }} />
//                         <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Mission #{selectedProject.id}</span>
//                      </div>
//                      <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">{selectedProject.name}</h2>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                     {selectedProject.tech.map((t) => (
//                     <span key={t} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-[#00F0FF] rounded-full">
//                         {t.trim()}
//                     </span>
//                     ))}
//                 </div>

//                 <p className="text-gray-400 leading-relaxed text-sm">
//                     {selectedProject.description}
//                 </p>

//                 <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
//                     <a href={selectedProject.repoUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all">
//                         <Github className="w-4 h-4" /> Source
//                     </a>
//                     {selectedProject.liveUrl && (
//                     <a href={selectedProject.liveUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-black font-bold transition-all hover:brightness-110" style={{ backgroundColor: selectedProject.color }}>
//                         <Globe className="w-4 h-4" /> Demo
//                     </a>
//                     )}
//                 </div>
//               </div>

//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
      
//       {/* GLOBAL CSS FOR ROTATION (Put this in index.css normally, but here works too) */}
//       <style>{`
//         @keyframes spin {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Projects;




// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, ExternalLink, Loader2, Code2, Database, Globe } from 'lucide-react';

// // 1. Structure
// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   tech: string[];
//   orbitRadius: number;
//   orbitDuration: number;
//   color: string;
//   repoUrl: string;
//   liveUrl?: string;
//   imageUrl?: string;
// }

// // 2. High-Contrast Hex Colors
// const PLANET_COLORS = [
//   '#00F0FF', // Cyan
//   '#00FF94', // Neon Green
//   '#8B5CF6', // Purple
//   '#FF0055', // Pink
//   '#FBBF24'  // Amber
// ];

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
  
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/projects');
//         if (!response.ok) throw new Error('Connection Error');
//         const data = await response.json();

//         const visualData = data.map((p: any, index: number) => ({
//           id: p.id,
//           name: p.title,
//           description: p.description,
//           tech: p.techStack ? p.techStack.split(',') : [],
//           repoUrl: p.githubUrl,
//           liveUrl: p.liveUrl,
//           imageUrl: p.imageUrl,
//           // Physics: Wider orbits to prevent overlapping the sun
//           orbitRadius: 180 + (index * 90), 
//           // UPDATED SPEED: Reduced duration from 30s to 15s base to make them spin faster
//           orbitDuration: 15 + (index * 5), 
//           color: PLANET_COLORS[index % PLANET_COLORS.length]
//         }));

//         setProjects(visualData);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-[#00F0FF]">
//         <Loader2 className="w-12 h-12 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center relative bg-transparent overflow-hidden">
      
//       {/* SOLAR SYSTEM CONTAINER */}
//       <div className={`relative w-[900px] h-[900px] flex items-center justify-center transition-all duration-500 ${selectedProject ? 'scale-90 opacity-50 blur-sm pointer-events-none' : 'scale-100 opacity-100'}`}>
        
//         {/* THE SUN (Your Profile) - Fixed Z-Index */}
//         <div className="absolute z-10 w-32 h-32 rounded-full border-4 border-[#00F0FF] shadow-[0_0_50px_#00F0FF] overflow-hidden bg-black">
//              <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
//               alt="Profile"
//               className="w-full h-full object-cover opacity-90"
//             />
//         </div>

//         {/* ORBITS & PLANETS */}
//         {projects.map((project) => (
//           <div key={project.id} className="absolute inset-0 pointer-events-none">
//             {/* Orbit Ring */}
//             <div 
//                 className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
//                 style={{
//                     width: project.orbitRadius * 2,
//                     height: project.orbitRadius * 2,
//                     transform: 'translate(-50%, -50%)'
//                 }}
//             />

//             {/* Rotating Container - Using standard CSS animation to prevent Framer crashes */}
//             <div
//                 className="absolute top-1/2 left-1/2 w-0 h-0"
//                 style={{
//                     animation: `spin ${project.orbitDuration}s linear infinite`
//                 }}
//             >
//                 {/* THE PLANET BUTTON */}
//                 <button
//                     className="absolute rounded-full flex items-center justify-center cursor-pointer pointer-events-auto z-20 transition-transform duration-300 hover:scale-125 hover:z-50"
//                     style={{
//                         width: '70px',
//                         height: '70px',
//                         transform: `translateX(${project.orbitRadius}px) translate(-50%, -50%)`, // Fixed position relative to rotator
//                         backgroundColor: '#000', 
//                         border: `2px solid ${project.color}`,
//                         boxShadow: `0 0 25px ${project.color}`
//                     }}
//                     onClick={() => setSelectedProject(project)}
//                 >
//                     <span className="text-[10px] font-bold text-white tracking-widest drop-shadow-md">
//                         {project.name.substring(0, 3).toUpperCase()}
//                     </span>
//                 </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL OVERLAY - Z-Index 100 ensures it is ALWAYS on top */}
//       <AnimatePresence>
//         {selectedProject && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
//             <motion.div
//               className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
//               style={{ boxShadow: `0 0 60px -10px ${selectedProject.color}30` }}
//               initial={{ scale: 0.5, opacity: 0, y: 100 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.5, opacity: 0, y: 100 }}
//               onClick={(e) => e.stopPropagation()} 
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 z-50 p-2 bg-black/60 rounded-full text-white hover:bg-white/20 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               {/* Image Header */}
//               <div className="relative h-48 w-full bg-gray-900 shrink-0 border-b border-white/10">
//                 {selectedProject.imageUrl ? (
//                    <img 
//                     src={selectedProject.imageUrl} 
//                     alt={selectedProject.name} 
//                     className="w-full h-full object-cover"
//                    />
//                 ) : (
//                     <div className="w-full h-full flex items-center justify-center text-gray-700">
//                         <Code2 className="w-16 h-16 opacity-20" />
//                     </div>
//                 )}
//                 <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
//               </div>

//               {/* Content Body */}
//               <div className="p-8 flex flex-col gap-6 overflow-y-auto">
//                 <div>
//                      <div className="flex items-center gap-2 mb-2">
//                         <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedProject.color }} />
//                         <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Mission #{selectedProject.id}</span>
//                      </div>
//                      <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">{selectedProject.name}</h2>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                     {selectedProject.tech.map((t) => (
//                     <span key={t} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-[#00F0FF] rounded-full">
//                         {t.trim()}
//                     </span>
//                     ))}
//                 </div>

//                 <p className="text-gray-400 leading-relaxed text-sm">
//                     {selectedProject.description}
//                 </p>

//                 <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
//                     <a href={selectedProject.repoUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all">
//                         <Github className="w-4 h-4" /> Source
//                     </a>
//                     {selectedProject.liveUrl && (
//                     <a href={selectedProject.liveUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-black font-bold transition-all hover:brightness-110" style={{ backgroundColor: selectedProject.color }}>
//                         <Globe className="w-4 h-4" /> Demo
//                     </a>
//                     )}
//                 </div>
//               </div>

//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
      
//       {/* GLOBAL CSS FOR ROTATION (Put this in index.css normally, but here works too) */}
//       <style>{`
//         @keyframes spin {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Projects;


import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Loader2, Code2, Database, Globe } from 'lucide-react';

// 1. Structure
interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  orbitRadius: number;
  orbitDuration: number;
  color: string;
  repoUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

// 2. High-Contrast Hex Colors
const PLANET_COLORS = [
  '#00F0FF', // Cyan
  '#00FF94', // Neon Green
  '#8B5CF6', // Purple
  '#FF0055', // Pink
  '#FBBF24'  // Amber
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/projects');
        if (!response.ok) throw new Error('Connection Error');
        const data = await response.json();

        const visualData = data.map((p: any, index: number) => ({
          id: p.id,
          name: p.title,
          description: p.description,
          tech: p.techStack ? p.techStack.split(',') : [],
          repoUrl: p.githubUrl,
          liveUrl: p.liveUrl,
          imageUrl: p.imageUrl,
          // Physics: Wider orbits to prevent overlapping the sun
          orbitRadius: 180 + (index * 90), 
          // UPDATED SPEED: Reduced duration from 30s to 15s base to make them spin faster
          orbitDuration: 15 + (index * 5), 
          color: PLANET_COLORS[index % PLANET_COLORS.length]
        }));

        setProjects(visualData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#00F0FF]">
        <Loader2 className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-transparent overflow-hidden">
      
      {/* --- BACKGROUND ASTEROID BELTS (Visual Only) --- */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
         {/* Inner Fast Belt */}
         <div 
            className="absolute border border-dashed border-white/10 rounded-full w-[1000px] h-[1000px] opacity-20"
            style={{ animation: 'spin 120s linear infinite' }} 
         />
         {/* Outer Slow Dust Belt */}
         <div 
            className="absolute border-[2px] border-dotted border-white/5 rounded-full w-[1400px] h-[1400px] opacity-20"
            style={{ animation: 'spin 200s linear infinite reverse' }} 
         />
      </div>

      {/* SOLAR SYSTEM CONTAINER */}
      <div className={`relative w-[900px] h-[900px] flex items-center justify-center transition-all duration-500 ${selectedProject ? 'scale-90 opacity-50 blur-sm pointer-events-none' : 'scale-100 opacity-100'}`}>
        
        {/* THE SUN (Your Profile) - UPDATED TO "HOT STAR" LOOK */}
        <div className="absolute z-10 w-36 h-36 rounded-full flex items-center justify-center">
            {/* Fiery Glow Layers */}
            <div className="absolute inset-0 rounded-full bg-orange-500 blur-2xl opacity-40 animate-pulse" />
            <div 
                className="relative w-32 h-32 rounded-full overflow-hidden bg-black border-2 border-orange-400"
                style={{
                    boxShadow: '0 0 40px #f59e0b, 0 0 80px #ea580c, inset 0 0 20px #f59e0b'
                }}
            >
                 <img
                  src="/assets/profilepic2.png"
                  alt="Profile"
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                />
            </div>
        </div>

        {/* ORBITS & PLANETS */}
        {projects.map((project) => (
          <div key={project.id} className="absolute inset-0 pointer-events-none">
            {/* Orbit Ring */}
            <div 
                className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
                style={{
                    width: project.orbitRadius * 2,
                    height: project.orbitRadius * 2,
                    transform: 'translate(-50%, -50%)'
                }}
            />

            {/* Rotating Container - Using standard CSS animation to prevent Framer crashes */}
            <div
                className="absolute top-1/2 left-1/2 w-0 h-0"
                style={{
                    animation: `spin ${project.orbitDuration}s linear infinite`
                }}
            >
                {/* THE PLANET BUTTON */}
                <button
                    className="absolute rounded-full flex items-center justify-center cursor-pointer pointer-events-auto z-20 transition-transform duration-300 hover:scale-125 hover:z-50"
                    style={{
                        width: '70px',
                        height: '70px',
                        transform: `translateX(${project.orbitRadius}px) translate(-50%, -50%)`, // Fixed position relative to rotator
                        backgroundColor: '#000', 
                        border: `2px solid ${project.color}`,
                        boxShadow: `0 0 25px ${project.color}`
                    }}
                    onClick={() => setSelectedProject(project)}
                >
                    <span className="text-[10px] font-bold text-white tracking-widest drop-shadow-md">
                        {project.name.substring(0, 3).toUpperCase()}
                    </span>
                </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL OVERLAY - Z-Index 100 ensures it is ALWAYS on top */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              style={{ boxShadow: `0 0 60px -10px ${selectedProject.color}30` }}
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/60 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Header */}
              <div className="relative h-48 w-full bg-gray-900 shrink-0 border-b border-white/10">
                {selectedProject.imageUrl ? (
                   <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.name} 
                    className="w-full h-full object-cover"
                   />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-700">
                        <Code2 className="w-16 h-16 opacity-20" />
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col gap-6 overflow-y-auto">
                <div>
                     <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedProject.color }} />
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Mission #{selectedProject.id}</span>
                     </div>
                     <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">{selectedProject.name}</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-[#00F0FF] rounded-full">
                        {t.trim()}
                    </span>
                    ))}
                </div>

                <p className="text-gray-400 leading-relaxed text-sm">
                    {selectedProject.description}
                </p>

                <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
                    <a href={selectedProject.repoUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all">
                        <Github className="w-4 h-4" /> Source
                    </a>
                    {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-black font-bold transition-all hover:brightness-110" style={{ backgroundColor: selectedProject.color }}>
                        <Globe className="w-4 h-4" /> Demo
                    </a>
                    )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* GLOBAL CSS FOR ROTATION */}
      <style>{`
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Projects;