






// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, Loader2, Code2, Globe } from 'lucide-react';

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
//         const response = await fetch('https://kartikeyportfolio.onrender.com/api/projects'); 
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
//     <div className="min-h-screen w-full relative bg-transparent overflow-hidden">
        
//       {/* ========================================================
//           BACKGROUND ASTEROID BELTS (Desktop Only for Performance)
//           ======================================================== */}
//       <div className="hidden md:flex absolute inset-0 pointer-events-none items-center justify-center overflow-hidden">
//          <div 
//             className="absolute border border-dashed border-white/10 rounded-full w-[1000px] h-[1000px] opacity-20"
//             style={{ animation: 'spin 120s linear infinite' }} 
//          />
//          <div 
//             className="absolute border-[2px] border-dotted border-white/5 rounded-full w-[1400px] h-[1400px] opacity-20"
//             style={{ animation: 'spin 200s linear infinite reverse' }} 
//          />
//       </div>

//       {/* ========================================================
//           MOBILE VIEW: CINEMATIC CARDS (Visible < 768px)
//           ======================================================== */}
//       <div className="md:hidden pt-24 pb-32 px-4 flex flex-col gap-6">
//         <div className="text-center mb-2">
//             <h2 className="text-3xl font-display font-bold text-white mb-2">MISSION LOG</h2>
//             <p className="text-xs text-muted-foreground font-mono">Tap a mission to engage</p>
//         </div>

//         {projects.map((project) => (
//             <motion.div 
//                 key={project.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 // Increased height to h-[450px] to show off the image
//                 className="rounded-2xl border border-white/10 relative overflow-hidden h-[450px] flex flex-col justify-end group"
//                 style={{ boxShadow: `0 0 20px -5px ${project.color}20` }}
//             >
//                 {/* 1. BACKGROUND IMAGE (If available) */}
//                 {project.imageUrl ? (
//                     <>
//                         <img 
//                             src={project.imageUrl} 
//                             alt={project.name} 
//                             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         />
//                         {/* 2. GRADIENT OVERLAY (Crucial for text readability) */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
//                     </>
//                 ) : (
//                     // Fallback Background if no image
//                     <div className="absolute inset-0 bg-[#0F0F0F]" />
//                 )}

//                 {/* Decorative Color Bar (Moved to top right) */}
//                 <div className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.color }} />

//                 {/* 3. CONTENT (Sits on top of the image) */}
//                 <div className="relative z-10 p-5 flex flex-col gap-3">
                    
//                     <div className="flex justify-between items-end">
//                         <div>
//                             <span className="text-[10px] font-mono text-cyan-400 mb-1 block">
//                                 MISSION #{project.id.toString().padStart(3, '0')}
//                             </span>
//                             <h3 className="text-2xl font-bold text-white leading-tight">{project.name}</h3>
//                         </div>
//                     </div>

//                     <p className="text-sm text-gray-300 line-clamp-3">
//                         {project.description}
//                     </p>

//                     {/* Tech Stack Bubbles */}
//                     <div className="flex flex-wrap gap-2">
//                         {project.tech.slice(0, 3).map((t) => (
//                             <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10">
//                                 {t.trim()}
//                             </span>
//                         ))}
//                         {project.tech.length > 3 && (
//                             <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10">
//                                 +{project.tech.length - 3}
//                             </span>
//                         )}
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex gap-3 mt-2">
//                         <a href={project.repoUrl} target="_blank" className="flex-1 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-2 text-sm text-white font-medium hover:bg-white/20 transition-all">
//                             <Github className="w-4 h-4" /> Code
//                         </a>
//                         {project.liveUrl && (
//                             <a href={project.liveUrl} target="_blank" className="flex-1 py-3 rounded-xl flex items-center justify-center gap-2 text-sm text-black font-bold transition-all shadow-lg hover:brightness-110" style={{ backgroundColor: project.color }}>
//                                 <Globe className="w-4 h-4" /> Demo
//                             </a>
//                         )}
//                     </div>
//                 </div>
//             </motion.div>
//         ))}
//       </div>

//       {/* ========================================================
//           DESKTOP VIEW: SOLAR SYSTEM (Visible > 768px)
//           ======================================================== */}
//       <div className="hidden md:flex min-h-screen items-center justify-center">
//           <div className={`relative w-[900px] h-[900px] flex items-center justify-center transition-all duration-500 ${selectedProject ? 'scale-90 opacity-50 blur-sm pointer-events-none' : 'scale-100 opacity-100'}`}>
            
//             {/* THE SUN (Your Profile) */}
//             <div className="absolute z-10 w-36 h-36 rounded-full flex items-center justify-center">
//                 <div className="absolute inset-0 rounded-full bg-orange-500 blur-2xl opacity-40 animate-pulse" />
//                 <div 
//                     className="relative w-32 h-32 rounded-full overflow-hidden bg-black border-2 border-orange-400"
//                     style={{ boxShadow: '0 0 40px #f59e0b, 0 0 80px #ea580c, inset 0 0 20px #f59e0b' }}
//                 >
//                      <img src="/assets/profilepic2.png" alt="Profile" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700" />
//                 </div>
//             </div>

//             {/* ORBITS & PLANETS */}
//             {projects.map((project) => (
//               <div key={project.id} className="absolute inset-0 pointer-events-none">
//                 <div 
//                     className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
//                     style={{
//                         width: project.orbitRadius * 2,
//                         height: project.orbitRadius * 2,
//                         transform: 'translate(-50%, -50%)'
//                     }}
//                 />
//                 <div
//                     className="absolute top-1/2 left-1/2 w-0 h-0"
//                     style={{ animation: `spin ${project.orbitDuration}s linear infinite` }}
//                 >
//                     <button
//                         className="absolute rounded-full flex items-center justify-center cursor-pointer pointer-events-auto z-20 transition-transform duration-300 hover:scale-125 hover:z-50"
//                         style={{
//                             width: '70px',
//                             height: '70px',
//                             transform: `translateX(${project.orbitRadius}px) translate(-50%, -50%)`,
//                             backgroundColor: '#000', 
//                             border: `2px solid ${project.color}`,
//                             boxShadow: `0 0 25px ${project.color}`
//                         }}
//                         onClick={() => setSelectedProject(project)}
//                     >
//                         <span className="text-[10px] font-bold text-white tracking-widest drop-shadow-md">
//                             {project.name.substring(0, 3).toUpperCase()}
//                         </span>
//                     </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//       </div>

//       {/* DESKTOP MODAL OVERLAY */}
//       <AnimatePresence>
//         {selectedProject && (
//           <div className="hidden md:flex fixed inset-0 z-[100] items-center justify-center px-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
//             <motion.div
//               className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
//               style={{ boxShadow: `0 0 60px -10px ${selectedProject.color}30` }}
//               initial={{ scale: 0.5, opacity: 0, y: 100 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.5, opacity: 0, y: 100 }}
//               onClick={(e) => e.stopPropagation()} 
//             >
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 z-50 p-2 bg-black/60 rounded-full text-white hover:bg-white/20 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="relative h-48 w-full bg-gray-900 shrink-0 border-b border-white/10">
//                 {selectedProject.imageUrl ? (
//                    <img src={selectedProject.imageUrl} alt={selectedProject.name} className="w-full h-full object-cover"/>
//                 ) : (
//                     <div className="w-full h-full flex items-center justify-center text-gray-700">
//                         <Code2 className="w-16 h-16 opacity-20" />
//                     </div>
//                 )}
//                 <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
//               </div>

//               <div className="p-8 flex flex-col gap-6 overflow-y-auto">
//                 <div>
//                       <div className="flex items-center gap-2 mb-2">
//                         <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedProject.color }} />
//                         <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Mission #{selectedProject.id}</span>
//                       </div>
//                       <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">{selectedProject.name}</h2>
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
       
//       {/* GLOBAL CSS FOR ROTATION */}
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













import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Loader2, Code2, Globe } from 'lucide-react';

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
        const response = await fetch('https://kartikeyportfolio.onrender.com/api/projects'); 
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
          orbitRadius: 180 + (index * 90), 
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
    <div className="min-h-screen w-full relative bg-transparent overflow-hidden">
        
      {/* ========================================================
          BACKGROUND ASTEROID BELTS (Desktop Only for Performance)
          ======================================================== */}
      <div className="hidden md:flex absolute inset-0 pointer-events-none items-center justify-center overflow-hidden">
         <div 
            className="absolute border border-dashed border-white/10 rounded-full w-[1000px] h-[1000px] opacity-20"
            style={{ animation: 'spin 120s linear infinite' }} 
         />
         <div 
            className="absolute border-[2px] border-dotted border-white/5 rounded-full w-[1400px] h-[1400px] opacity-20"
            style={{ animation: 'spin 200s linear infinite reverse' }} 
         />
      </div>

      {/* ========================================================
          MOBILE VIEW: CINEMATIC CARDS WITH NEON GLOW (Visible < 768px)
          ======================================================== */}
      <div className="md:hidden pt-24 pb-32 px-4 flex flex-col gap-8">
        <div className="text-center mb-2">
            <h2 className="text-3xl font-display font-bold text-white mb-2">MISSION LOG</h2>
            <p className="text-xs text-muted-foreground font-mono">Tap a mission to engage</p>
        </div>

        {projects.map((project) => (
            <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                // UPDATED: Removed specific border color class, added transition
                className="rounded-2xl border relative overflow-hidden h-[450px] flex flex-col justify-end group transition-all duration-300"
                // UPDATED: Added dynamic border color and stronger glow shadow
                style={{ 
                    borderColor: project.color,
                    boxShadow: `0 0 25px -5px ${project.color}70, inset 0 0 15px -10px ${project.color}50`
                }}
            >
                {/* 1. BACKGROUND IMAGE (If available) */}
                {project.imageUrl ? (
                    <>
                        <img 
                            src={project.imageUrl} 
                            alt={project.name} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* 2. GRADIENT OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                    </>
                ) : (
                    // Fallback Background
                    <div className="absolute inset-0 bg-[#0F0F0F]" />
                )}

                {/* Decorative Color Bar (Top Right) */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.color, boxShadow: `0 0 10px ${project.color}` }} />

                {/* 3. CONTENT */}
                <div className="relative z-10 p-5 flex flex-col gap-3">
                    
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="text-[10px] font-mono mb-1 block" style={{ color: project.color }}>
                                MISSION #{project.id.toString().padStart(3, '0')}
                            </span>
                            <h3 className="text-2xl font-bold text-white leading-tight">{project.name}</h3>
                        </div>
                    </div>

                    <p className="text-sm text-gray-300 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tech Stack Bubbles */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-black/50 text-white backdrop-blur-md border" style={{ borderColor: `${project.color}60` }}>
                                {t.trim()}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-[10px] px-2 py-1 rounded-full bg-black/50 text-white backdrop-blur-md border" style={{ borderColor: `${project.color}60` }}>
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-2">
                        <a href={project.repoUrl} target="_blank" className="flex-1 py-3 rounded-xl bg-black/50 backdrop-blur-md border flex items-center justify-center gap-2 text-sm text-white font-medium hover:bg-white/10 transition-all" style={{ borderColor: `${project.color}60` }}>
                            <Github className="w-4 h-4" /> Code
                        </a>
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" className="flex-1 py-3 rounded-xl flex items-center justify-center gap-2 text-sm text-black font-bold transition-all shadow-lg hover:brightness-110" style={{ backgroundColor: project.color, boxShadow: `0 0 15px ${project.color}50` }}>
                                <Globe className="w-4 h-4" /> Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        ))}
      </div>

      {/* ========================================================
          DESKTOP VIEW: SOLAR SYSTEM (Visible > 768px)
          ======================================================== */}
      <div className="hidden md:flex min-h-screen items-center justify-center">
          <div className={`relative w-[900px] h-[900px] flex items-center justify-center transition-all duration-500 ${selectedProject ? 'scale-90 opacity-50 blur-sm pointer-events-none' : 'scale-100 opacity-100'}`}>
            
            {/* THE SUN (Your Profile) */}
            <div className="absolute z-10 w-36 h-36 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-orange-500 blur-2xl opacity-40 animate-pulse" />
                <div 
                    className="relative w-32 h-32 rounded-full overflow-hidden bg-black border-2 border-orange-400"
                    style={{ boxShadow: '0 0 40px #f59e0b, 0 0 80px #ea580c, inset 0 0 20px #f59e0b' }}
                >
                     <img src="/assets/profilepic2.png" alt="Profile" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700" />
                </div>
            </div>

            {/* ORBITS & PLANETS */}
            {projects.map((project) => (
              <div key={project.id} className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
                    style={{
                        width: project.orbitRadius * 2,
                        height: project.orbitRadius * 2,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-0 h-0"
                    style={{ animation: `spin ${project.orbitDuration}s linear infinite` }}
                >
                    <button
                        className="absolute rounded-full flex items-center justify-center cursor-pointer pointer-events-auto z-20 transition-transform duration-300 hover:scale-125 hover:z-50"
                        style={{
                            width: '70px',
                            height: '70px',
                            transform: `translateX(${project.orbitRadius}px) translate(-50%, -50%)`,
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
      </div>

      {/* DESKTOP MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="hidden md:flex fixed inset-0 z-[100] items-center justify-center px-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              style={{ boxShadow: `0 0 60px -10px ${selectedProject.color}30` }}
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/60 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-48 w-full bg-gray-900 shrink-0 border-b border-white/10">
                {selectedProject.imageUrl ? (
                   <img src={selectedProject.imageUrl} alt={selectedProject.name} className="w-full h-full object-cover"/>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-700">
                        <Code2 className="w-16 h-16 opacity-20" />
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
              </div>

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