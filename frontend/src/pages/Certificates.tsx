

// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ExternalLink, Award, Trophy, Code } from 'lucide-react';
// // Import Brand Icons
// import { SiCoursera, SiPython, SiGeeksforgeeks, SiOracle, SiAdobe, SiCodechef } from 'react-icons/si'; 
// import { FaJava, FaRobot, FaTrophy } from 'react-icons/fa';

// // --- TYPES ---
// interface Certificate {
//   id: number;
//   title: string;
//   issuer: string;
//   date: string;
//   credentialUrl?: string;
//   image: string;
//   icon: any;
//   color: string;
// }

// // --- DATA: HONORS & ACHIEVEMENTS (Gold Theme) ---
// const honors: Certificate[] = [
//   {
//     id: 1,
//     title: 'Flipkart Grid 5.0 (Certificate of Appreciation)',
//     issuer: 'Flipkart',
//     date: '2025',
//     credentialUrl: 'https://drive.google.com/drive/folders/1TttQdom6cka-En4r_zxrrFLdGW1dvN_L?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1633419461186-7d40a2e12e7e?w=400&h=250&fit=crop',
//     icon: FaTrophy,
//     color: '#FBBF24' // Gold
//   },
//   {
//     id: 2,
//     title: 'Dean\'s List Award (GPA 9.2223)',
//     issuer: 'Manipal University Jaipur',
//     date: '2024',
//     credentialUrl: 'https://drive.google.com/drive/folders/1QcI4MWkBoYjF7gGkysWSfLhKFqt48VYs?usp=sharing', 
//     // Dean's List / University Theme
//     image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop',
//     icon: Award,
//     color: '#F59E0B' // Amber
//   },
//   {
//     id: 3,
//     title: 'Adobe India Hackathon (Round 2)',
//     issuer: 'Adobe & Unstop',
//     date: '2025',
//     credentialUrl: 'https://drive.google.com/drive/folders/1cbzWU8LIQaE7Ov-N1P4mmCQMCf4oZdXL?usp=sharing', 
//     // Hackathon Theme - Adobe Image Added
//     image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?w=400&h=250&fit=crop', 
//     icon: SiAdobe,
//     color: '#FF0000' // Adobe Red
//   },
//   {
//     id: 4,
//     title: 'Smart India Hackathon 2024 (Internal Round)',
//     issuer: 'Ministry of Education & AICTE',
//     date: 'Sep 2024',
//     credentialUrl: 'https://drive.google.com/drive/folders/1u-oDVWeD_t-xLbM8iIFy8vHeNttwGXQg?usp=sharing', 
//     // Innovation Theme
//     image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
//     icon: FaTrophy,
//     color: '#FF9933' // Saffron/Orange
//   }
// ];

// // --- DATA: COURSE CERTIFICATIONS (Tech Theme) ---
// const certifications: Certificate[] = [
//   {
//     id: 101,
//     title: 'Machine Learning Specialization',
//     issuer: 'Stanford & DeepLearning.AI',
//     date: '2024',
//     credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/J7UNX1QV81IQ',
//     image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
//     icon: FaRobot,
//     color: '#0056D2' 
//   },
//   {
//     id: 102,
//     title: 'Data Structures & Algorithms',
//     issuer: 'CodeChef',
//     date: 'Nov 2024',
//     credentialUrl: 'https://www.codechef.com/certificates/verify/6806da7',
//     // Code/Algorithm Theme
//     image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
//     icon: Code, // Using Lucide Code icon as generic fallback if SiCodechef fails
//     color: '#5B4326' // CodeChef Brown
//   },
//   {
//     id: 103,
//     title: 'Database Programming with SQL',
//     issuer: 'Oracle Academy',
//     date: 'Nov 2024',
//     credentialUrl: 'https://drive.google.com/drive/folders/1beYCaRh8fAJEp7_6cRWQTVIDyPpMWtnS?usp=sharing', 
//     // Database Theme
//     image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
//     icon: SiOracle,
//     color: '#F80000' // Oracle Red
//   },
//   {
//     id: 104,
//     title: 'Power BI Fundamentals',
//     issuer: 'Coursera',
//     date: '2025',
//     credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/L6R0MJ4LIDQH',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
//     icon: SiPython,
//     color: '#F2C811' 
//   },
//   {
//     id: 105,
//     title: 'OOPs in Java',
//     issuer: 'GeeksforGeeks',
//     date: '2024',
//     credentialUrl: 'https://media.geeksforgeeks.org/courses/certificates/70f5bc14d59c0092397b94880b2df4b6.pdf',
//     image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
//     icon: FaJava,
//     color: '#2F8D46' 
//   },
// ];

// // --- REUSABLE CAROUSEL COMPONENT ---
// const HolographicCarousel = ({ title, data, themeColor }: { title: string, data: Certificate[], themeColor: string }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const containerRef = useRef<HTMLDivElement>(null);

//   const next = () => setCurrentIndex((prev) => (prev + 1) % data.length);
//   const prev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     setMousePos({
//       x: (e.clientX - rect.left) / rect.width,
//       y: (e.clientY - rect.top) / rect.height,
//     });
//   };

//   const handleCardClick = (url?: string) => {
//     if (url && url !== '#') {
//       window.open(url, '_blank', 'noopener,noreferrer');
//     }
//   };

//   // --- AUTO ROTATION (2 Seconds) ---
//   useEffect(() => {
//     const interval = setInterval(next, 2000); // 2000ms = 2 seconds
//     return () => clearInterval(interval);
//   }, [currentIndex]); // Depend on currentIndex to reset timer on manual interaction

//   return (
//     <div className="w-full mb-24 relative">
//       <div className="flex items-center gap-4 mb-8 px-6">
//         <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
//         <h2 className="text-2xl font-display font-bold tracking-wider text-center" style={{ color: themeColor, textShadow: `0 0 20px ${themeColor}60` }}>
//           {title}
//         </h2>
//         <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
//       </div>

//       <div
//         ref={containerRef}
//         onMouseMove={handleMouseMove}
//         className="relative w-full h-[350px] flex items-center justify-center perspective-[1200px]"
//       >
//         <AnimatePresence mode="popLayout">
//           {data.map((item, index) => {
//             let offset = index - currentIndex;
//             if (offset > data.length / 2) offset -= data.length;
//             if (offset < -data.length / 2) offset += data.length;
            
//             const absOffset = Math.abs(offset);
//             if (absOffset > 2) return null;

//             return (
//               <motion.div
//                 key={item.id}
//                 className="absolute w-[340px] h-[220px] rounded-xl cursor-pointer"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{
//                   x: offset * 260, 
//                   z: -absOffset * 150, 
//                   rotateY: offset * -25, 
//                   scale: 1 - absOffset * 0.15,
//                   opacity: 1 - absOffset * 0.3,
//                   zIndex: 10 - absOffset, 
//                 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ type: 'spring', damping: 20, stiffness: 100 }}
//                 onClick={() => absOffset === 0 && handleCardClick(item.credentialUrl)}
//               >
//                 <div
//                   className="w-full h-full glass rounded-xl overflow-hidden relative group border border-white/10"
//                   style={{
//                     transformStyle: 'preserve-3d',
//                     backgroundColor: 'rgba(10, 10, 10, 0.9)',
//                     boxShadow: absOffset === 0 ? `0 0 40px ${item.color}30` : 'none',
//                     borderColor: absOffset === 0 ? `${item.color}40` : 'rgba(255,255,255,0.1)'
//                   }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
//                   />

//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
//                     style={{
//                       background: `linear-gradient(
//                         ${105 + (mousePos.x - 0.5) * 60}deg,
//                         transparent 40%,
//                         ${item.color} 50%,
//                         transparent 60%
//                       )`,
//                     }}
//                   />

//                   <div className="relative z-10 p-6 h-full flex flex-col justify-between">
//                     <div className="flex justify-between items-start">
//                         <div className="p-2 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md">
//                             <item.icon size={24} color={item.color} />
//                         </div>
//                         <span className="text-[10px] font-mono text-white/60 border border-white/10 px-2 py-1 rounded-full bg-black/40">
//                             {item.date}
//                         </span>
//                     </div>

//                     <div>
//                       <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-white transition-colors line-clamp-2">
//                         {item.title}
//                       </h3>
//                       <p className="text-xs text-gray-400 flex items-center gap-2 mt-2">
//                         {title.includes("HONORS") ? <Trophy className="w-3 h-3 text-amber-400" /> : <Award className="w-3 h-3 text-cyan-400" />}
//                         {item.issuer}
//                       </p>
//                     </div>

//                     {absOffset === 0 && item.credentialUrl && item.credentialUrl !== '#' && (
//                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
//                          <span className="text-xs text-white flex items-center gap-2">
//                             <ExternalLink className="w-3 h-3" /> Open Credential
//                          </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>

//       <div className="flex justify-center gap-8 -mt-10 relative z-20">
//         <button onClick={prev} className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all active:scale-95">
//           <ChevronLeft className="w-5 h-5 text-white" />
//         </button>
//         <button onClick={next} className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all active:scale-95">
//           <ChevronRight className="w-5 h-5 text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- MAIN PAGE COMPONENT ---
// const Certificates = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center px-4 py-24 overflow-x-hidden">
      
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
//           HOLOGRAPHIC REGISTRY
//         </h1>
//         <p className="text-sm text-gray-400 font-mono tracking-widest">
//           // ACCESSING ACADEMIC RECORDS...
//         </p>
//       </motion.div>

//       {/* 1. HONORS & AWARDS (Gold Theme) */}
//       <HolographicCarousel 
//         title="HONORS & ACHIEVEMENTS" 
//         data={honors} 
//         themeColor="#FBBF24" 
//       />

//       {/* 2. CERTIFICATIONS (Cyan/Tech Theme) */}
//       <HolographicCarousel 
//         title="COURSE CERTIFICATIONS" 
//         data={certifications} 
//         themeColor="#00F0FF" 
//       />

//     </div>
//   );
// };

// export default Certificates;


// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ExternalLink, Award, Trophy, Code, FileText } from 'lucide-react';
// // Import Brand Icons
// import { SiCoursera, SiPython, SiGeeksforgeeks, SiOracle, SiAdobe, SiCodechef } from 'react-icons/si'; 
// import { FaJava, FaRobot, FaTrophy, FaMicroscope } from 'react-icons/fa';

// // --- TYPES ---
// interface Certificate {
//   id: number;
//   title: string;
//   issuer: string;
//   date: string;
//   credentialUrl?: string;
//   image: string;
//   icon: any;
//   color: string;
// }

// // --- DATA: RESEARCH PAPERS (Purple Theme) ---
// const researchPapers: Certificate[] = [
//   {
//     id: 201,
//     title: 'Medi Assistant: A Multinomial Naive Bayes-Based Symptom Checker',
//     issuer: 'Manipal University Jaipur',
//     date: '2025',
//     credentialUrl: 'https://drive.google.com/file/d/1SMOSD5KvM8k5JEySpIfBgnf6N3NIy491/view?usp=sharing',
//     // Medical AI Theme
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
//     icon: FaMicroscope,
//     color: '#A855F7' // Purple
//   }
// ];

// // --- DATA: HONORS & ACHIEVEMENTS (Gold Theme) ---
// const honors: Certificate[] = [
//   {
//     id: 1,
//     title: 'Flipkart Grid 5.0 (Certificate of Appreciation)',
//     issuer: 'Flipkart',
//     date: '2025',
//     credentialUrl: 'https://drive.google.com/drive/folders/1TttQdom6cka-En4r_zxrrFLdGW1dvN_L?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1633419461186-7d40a2e12e7e?w=400&h=250&fit=crop',
//     icon: FaTrophy,
//     color: '#FBBF24' // Gold
//   },
//   {
//     id: 2,
//     title: 'Dean\'s List Award (GPA 9.2223)',
//     issuer: 'Manipal University Jaipur',
//     date: '2024',
//     credentialUrl: 'https://drive.google.com/drive/folders/1QcI4MWkBoYjF7gGkysWSfLhKFqt48VYs?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop',
//     icon: Award,
//     color: '#F59E0B' // Amber
//   },
//   {
//     id: 3,
//     title: 'Adobe India Hackathon (Round 2)',
//     issuer: 'Adobe & Unstop',
//     date: '2025',
//     credentialUrl: 'https://drive.google.com/drive/folders/1cbzWU8LIQaE7Ov-N1P4mmCQMCf4oZdXL?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?w=400&h=250&fit=crop', 
//     icon: SiAdobe,
//     color: '#FF0000' // Adobe Red
//   },
//   {
//     id: 4,
//     title: 'Smart India Hackathon 2024 (Internal Round)',
//     issuer: 'Ministry of Education & AICTE',
//     date: 'Sep 2024',
//     credentialUrl: 'https://drive.google.com/drive/folders/1u-oDVWeD_t-xLbM8iIFy8vHeNttwGXQg?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
//     icon: FaTrophy,
//     color: '#FF9933' // Saffron/Orange
//   }
// ];

// // --- DATA: COURSE CERTIFICATIONS (Tech Theme) ---
// const certifications: Certificate[] = [
//   {
//     id: 101,
//     title: 'Machine Learning Specialization',
//     issuer: 'Stanford & DeepLearning.AI',
//     date: '2024',
//     credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/J7UNX1QV81IQ',
//     image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
//     icon: FaRobot,
//     color: '#0056D2' 
//   },
//   {
//     id: 102,
//     title: 'Data Structures & Algorithms',
//     issuer: 'CodeChef',
//     date: 'Nov 2024',
//     credentialUrl: 'https://www.codechef.com/certificates/verify/6806da7',
//     image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
//     icon: Code,
//     color: '#5B4326' // CodeChef Brown
//   },
//   {
//     id: 103,
//     title: 'Database Programming with SQL',
//     issuer: 'Oracle Academy',
//     date: 'Nov 2024',
//     credentialUrl: 'https://drive.google.com/drive/folders/1beYCaRh8fAJEp7_6cRWQTVIDyPpMWtnS?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
//     icon: SiOracle,
//     color: '#F80000' // Oracle Red
//   },
//   {
//     id: 104,
//     title: 'Power BI Fundamentals',
//     issuer: 'Coursera',
//     date: '2025',
//     credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/L6R0MJ4LIDQH',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
//     icon: SiPython,
//     color: '#F2C811' 
//   },
//   {
//     id: 105,
//     title: 'OOPs in Java',
//     issuer: 'GeeksforGeeks',
//     date: '2024',
//     credentialUrl: 'https://media.geeksforgeeks.org/courses/certificates/70f5bc14d59c0092397b94880b2df4b6.pdf',
//     image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
//     icon: FaJava,
//     color: '#2F8D46' 
//   },
// ];

// // --- REUSABLE CAROUSEL COMPONENT ---
// const HolographicCarousel = ({ title, data, themeColor }: { title: string, data: Certificate[], themeColor: string }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const containerRef = useRef<HTMLDivElement>(null);

//   const next = () => setCurrentIndex((prev) => (prev + 1) % data.length);
//   const prev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     setMousePos({
//       x: (e.clientX - rect.left) / rect.width,
//       y: (e.clientY - rect.top) / rect.height,
//     });
//   };

//   const handleCardClick = (url?: string) => {
//     if (url && url !== '#') {
//       window.open(url, '_blank', 'noopener,noreferrer');
//     }
//   };

//   // --- AUTO ROTATION (2 Seconds) ---
//   useEffect(() => {
//     if (data.length <= 1) return; // Don't auto-rotate if single item
//     const interval = setInterval(next, 3000); // Slowed down slightly for readability
//     return () => clearInterval(interval);
//   }, [currentIndex, data.length]);

//   return (
//     <div className="w-full mb-24 relative">
//       <div className="flex items-center gap-4 mb-8 px-6">
//         <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
//         <h2 className="text-xl md:text-2xl font-display font-bold tracking-wider text-center" style={{ color: themeColor, textShadow: `0 0 20px ${themeColor}60` }}>
//           {title}
//         </h2>
//         <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
//       </div>

//       <div
//         ref={containerRef}
//         onMouseMove={handleMouseMove}
//         className="relative w-full h-[350px] flex items-center justify-center perspective-[1200px]"
//       >
//         <AnimatePresence mode="popLayout">
//           {data.map((item, index) => {
//             let offset = index - currentIndex;
//             if (offset > data.length / 2) offset -= data.length;
//             if (offset < -data.length / 2) offset += data.length;
            
//             const absOffset = Math.abs(offset);
//             if (absOffset > 2) return null;

//             return (
//               <motion.div
//                 key={item.id}
//                 className="absolute w-[340px] h-[220px] rounded-xl cursor-pointer"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{
//                   x: offset * 260, 
//                   z: -absOffset * 150, 
//                   rotateY: offset * -25, 
//                   scale: 1 - absOffset * 0.15,
//                   opacity: 1 - absOffset * 0.3,
//                   zIndex: 10 - absOffset, 
//                 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ type: 'spring', damping: 20, stiffness: 100 }}
//                 onClick={() => absOffset === 0 && handleCardClick(item.credentialUrl)}
//               >
//                 <div
//                   className="w-full h-full glass rounded-xl overflow-hidden relative group border border-white/10"
//                   style={{
//                     transformStyle: 'preserve-3d',
//                     backgroundColor: 'rgba(10, 10, 10, 0.9)',
//                     boxShadow: absOffset === 0 ? `0 0 40px ${item.color}30` : 'none',
//                     borderColor: absOffset === 0 ? `${item.color}40` : 'rgba(255,255,255,0.1)'
//                   }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
//                   />

//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
//                     style={{
//                       background: `linear-gradient(
//                         ${105 + (mousePos.x - 0.5) * 60}deg,
//                         transparent 40%,
//                         ${item.color} 50%,
//                         transparent 60%
//                       )`,
//                     }}
//                   />

//                   <div className="relative z-10 p-6 h-full flex flex-col justify-between">
//                     <div className="flex justify-between items-start">
//                         <div className="p-2 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md">
//                             <item.icon size={24} color={item.color} />
//                         </div>
//                         <span className="text-[10px] font-mono text-white/60 border border-white/10 px-2 py-1 rounded-full bg-black/40">
//                             {item.date}
//                         </span>
//                     </div>

//                     <div>
//                       <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-white transition-colors line-clamp-2">
//                         {item.title}
//                       </h3>
//                       <p className="text-xs text-gray-400 flex items-center gap-2 mt-2">
//                          {item.issuer === 'Manipal University Jaipur' ? <FileText className="w-3 h-3 text-purple-400" /> : <Award className="w-3 h-3 text-cyan-400" />}
//                         {item.issuer}
//                       </p>
//                     </div>

//                     {absOffset === 0 && item.credentialUrl && item.credentialUrl !== '#' && (
//                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
//                           <span className="text-xs text-white flex items-center gap-2">
//                             <ExternalLink className="w-3 h-3" /> View Document
//                           </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>

//       <div className="flex justify-center gap-8 -mt-10 relative z-20">
//         <button onClick={prev} className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all active:scale-95">
//           <ChevronLeft className="w-5 h-5 text-white" />
//         </button>
//         <button onClick={next} className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all active:scale-95">
//           <ChevronRight className="w-5 h-5 text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- MAIN PAGE COMPONENT ---
// const Certificates = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center px-4 py-24 overflow-x-hidden">
      
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
//           HOLOGRAPHIC REGISTRY
//         </h1>
//         <p className="text-sm text-gray-400 font-mono tracking-widest">
//           // ACCESSING ACADEMIC RECORDS...
//         </p>
//       </motion.div>

//       {/* 1. RESEARCH PAPERS (Purple Theme) */}
//       <HolographicCarousel 
//         title="RESEARCH & PUBLICATIONS" 
//         data={researchPapers} 
//         themeColor="#A855F7" 
//       />

//       {/* 2. HONORS & AWARDS (Gold Theme) */}
//       <HolographicCarousel 
//         title="HONORS & ACHIEVEMENTS" 
//         data={honors} 
//         themeColor="#FBBF24" 
//       />

//       {/* 3. CERTIFICATIONS (Cyan/Tech Theme) */}
//       <HolographicCarousel 
//         title="COURSE CERTIFICATIONS" 
//         data={certifications} 
//         themeColor="#00F0FF" 
//       />

//     </div>
//   );
// };

// export default Certificates;

// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ExternalLink, Award, Trophy, Code, FileText } from 'lucide-react';
// // Import Brand Icons
// import { SiCoursera, SiPython, SiGeeksforgeeks, SiOracle, SiAdobe, SiCodechef } from 'react-icons/si'; 
// import { FaJava, FaRobot, FaTrophy, FaMicroscope } from 'react-icons/fa';

// // --- TYPES ---
// interface Certificate {
//   id: number;
//   title: string;
//   issuer: string;
//   date: string;
//   credentialUrl?: string;
//   image: string;
//   icon: any;
//   color: string;
// }

// // --- DATA: RESEARCH PAPERS (Purple Theme) ---
// const researchPapers: Certificate[] = [
//   {
//     id: 201,
//     title: 'Medi Assistant: A Multinomial Naive Bayes-Based Symptom Checker',
//     issuer: 'Manipal University Jaipur',
//     date: '2025',
//     credentialUrl: 'https://drive.google.com/file/d/1SMOSD5KvM8k5JEySpIfBgnf6N3NIy491/view?usp=sharing',
//     // Medical AI Theme
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
//     icon: FaMicroscope,
//     color: '#A855F7' // Purple
//   }
// ];

// // --- DATA: HONORS & ACHIEVEMENTS (Gold Theme) ---
// const honors: Certificate[] = [
//   {
//     id: 1,
//     title: 'Flipkart Grid 5.0 (Certificate of Appreciation)',
//     issuer: 'Flipkart',
//     date: '2025',
//     credentialUrl: 'https://drive.google.com/drive/folders/1TttQdom6cka-En4r_zxrrFLdGW1dvN_L?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1633419461186-7d40a2e12e7e?w=400&h=250&fit=crop',
//     icon: FaTrophy,
//     color: '#FBBF24' // Gold
//   },
//   {
//     id: 2,
//     title: 'Dean\'s List Award (GPA 9.2223)',
//     issuer: 'Manipal University Jaipur',
//     date: '2024',
//     credentialUrl: 'https://drive.google.com/drive/folders/1QcI4MWkBoYjF7gGkysWSfLhKFqt48VYs?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop',
//     icon: Award,
//     color: '#F59E0B' // Amber
//   },
//   {
//     id: 3,
//     title: 'Adobe India Hackathon (Round 2)',
//     issuer: 'Adobe & Unstop',
//     date: '2025',
//     credentialUrl: 'https://drive.google.com/drive/folders/1cbzWU8LIQaE7Ov-N1P4mmCQMCf4oZdXL?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?w=400&h=250&fit=crop', 
//     icon: SiAdobe,
//     color: '#FF0000' // Adobe Red
//   },
//   {
//     id: 4,
//     title: 'Smart India Hackathon 2024 (Internal Round)',
//     issuer: 'Ministry of Education & AICTE',
//     date: 'Sep 2024',
//     credentialUrl: 'https://drive.google.com/drive/folders/1u-oDVWeD_t-xLbM8iIFy8vHeNttwGXQg?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
//     icon: FaTrophy,
//     color: '#FF9933' // Saffron/Orange
//   }
// ];

// // --- DATA: COURSE CERTIFICATIONS (Tech Theme) ---
// const certifications: Certificate[] = [
//   {
//     id: 101,
//     title: 'Machine Learning Specialization',
//     issuer: 'Stanford & DeepLearning.AI',
//     date: '2024',
//     credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/J7UNX1QV81IQ',
//     image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
//     icon: FaRobot,
//     color: '#0056D2' 
//   },
//   {
//     id: 102,
//     title: 'Data Structures & Algorithms',
//     issuer: 'CodeChef',
//     date: 'Nov 2024',
//     credentialUrl: 'https://www.codechef.com/certificates/verify/6806da7',
//     image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
//     icon: Code,
//     color: '#5B4326' // CodeChef Brown
//   },
//   {
//     id: 103,
//     title: 'Database Programming with SQL',
//     issuer: 'Oracle Academy',
//     date: 'Nov 2024',
//     credentialUrl: 'https://drive.google.com/drive/folders/1beYCaRh8fAJEp7_6cRWQTVIDyPpMWtnS?usp=sharing', 
//     image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
//     icon: SiOracle,
//     color: '#F80000' // Oracle Red
//   },
//   {
//     id: 104,
//     title: 'Power BI Fundamentals',
//     issuer: 'Coursera',
//     date: '2025',
//     credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/L6R0MJ4LIDQH',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
//     icon: SiPython,
//     color: '#F2C811' 
//   },
//   {
//     id: 105,
//     title: 'OOPs in Java',
//     issuer: 'GeeksforGeeks',
//     date: '2024',
//     credentialUrl: 'https://media.geeksforgeeks.org/courses/certificates/70f5bc14d59c0092397b94880b2df4b6.pdf',
//     image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
//     icon: FaJava,
//     color: '#2F8D46' 
//   },
// ];

// // --- REUSABLE CAROUSEL COMPONENT ---
// const HolographicCarousel = ({ title, data, themeColor }: { title: string, data: Certificate[], themeColor: string }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const containerRef = useRef<HTMLDivElement>(null);

//   const next = () => setCurrentIndex((prev) => (prev + 1) % data.length);
//   const prev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     setMousePos({
//       x: (e.clientX - rect.left) / rect.width,
//       y: (e.clientY - rect.top) / rect.height,
//     });
//   };

//   const handleCardClick = (url?: string) => {
//     if (url && url !== '#') {
//       window.open(url, '_blank', 'noopener,noreferrer');
//     }
//   };

//   // --- AUTO ROTATION (2 Seconds) ---
//   useEffect(() => {
//     if (data.length <= 1) return; 
//     const interval = setInterval(next, 3000); 
//     return () => clearInterval(interval);
//   }, [currentIndex, data.length]);

//   return (
//     <div className="w-full mb-24 relative">
//       <div className="flex items-center gap-4 mb-8 px-6">
//         <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
//         <h2 className="text-xl md:text-2xl font-display font-bold tracking-wider text-center" style={{ color: themeColor, textShadow: `0 0 20px ${themeColor}60` }}>
//           {title}
//         </h2>
//         <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
//       </div>

//       <div
//         ref={containerRef}
//         onMouseMove={handleMouseMove}
//         className="relative w-full h-[350px] flex items-center justify-center perspective-[1200px]"
//       >
//         <AnimatePresence mode="popLayout">
//           {data.map((item, index) => {
//             let offset = index - currentIndex;
//             if (offset > data.length / 2) offset -= data.length;
//             if (offset < -data.length / 2) offset += data.length;
            
//             const absOffset = Math.abs(offset);
//             if (absOffset > 2) return null;

//             return (
//               <motion.div
//                 key={item.id}
//                 className="absolute w-[340px] h-[220px] rounded-xl cursor-pointer"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{
//                   x: offset * 260, 
//                   z: -absOffset * 150, 
//                   rotateY: offset * -25, 
//                   scale: 1 - absOffset * 0.15,
//                   opacity: 1 - absOffset * 0.3,
//                   zIndex: 10 - absOffset, 
//                 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ type: 'spring', damping: 20, stiffness: 100 }}
//                 onClick={() => absOffset === 0 && handleCardClick(item.credentialUrl)}
//               >
//                 <div
//                   className="w-full h-full glass rounded-xl overflow-hidden relative group border border-white/10"
//                   style={{
//                     transformStyle: 'preserve-3d',
//                     backgroundColor: 'rgba(10, 10, 10, 0.9)',
//                     boxShadow: absOffset === 0 ? `0 0 40px ${item.color}30` : 'none',
//                     borderColor: absOffset === 0 ? `${item.color}40` : 'rgba(255,255,255,0.1)'
//                   }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
//                   />

//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
//                     style={{
//                       background: `linear-gradient(
//                         ${105 + (mousePos.x - 0.5) * 60}deg,
//                         transparent 40%,
//                         ${item.color} 50%,
//                         transparent 60%
//                       )`,
//                     }}
//                   />

//                   <div className="relative z-10 p-6 h-full flex flex-col justify-between">
//                     <div className="flex justify-between items-start">
//                         <div className="p-2 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md">
//                             <item.icon size={24} color={item.color} />
//                         </div>
//                         <span className="text-[10px] font-mono text-white/60 border border-white/10 px-2 py-1 rounded-full bg-black/40">
//                             {item.date}
//                         </span>
//                     </div>

//                     <div>
//                       <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-white transition-colors line-clamp-2">
//                         {item.title}
//                       </h3>
//                       <p className="text-xs text-gray-400 flex items-center gap-2 mt-2">
//                          {item.issuer === 'Manipal University Jaipur' ? <FileText className="w-3 h-3 text-purple-400" /> : <Award className="w-3 h-3 text-cyan-400" />}
//                         {item.issuer}
//                       </p>
//                     </div>

//                     {absOffset === 0 && item.credentialUrl && item.credentialUrl !== '#' && (
//                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
//                           <span className="text-xs text-white flex items-center gap-2">
//                             <ExternalLink className="w-3 h-3" /> View Document
//                           </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>

//       <div className="flex justify-center gap-8 -mt-10 relative z-20">
//         <button onClick={prev} className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all active:scale-95">
//           <ChevronLeft className="w-5 h-5 text-white" />
//         </button>
//         <button onClick={next} className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all active:scale-95">
//           <ChevronRight className="w-5 h-5 text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- MAIN PAGE COMPONENT ---
// const Certificates = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center px-4 py-24 overflow-x-hidden">
      
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
//           HOLOGRAPHIC REGISTRY
//         </h1>
//         <p className="text-sm text-gray-400 font-mono tracking-widest">
//           // ACCESSING ACADEMIC RECORDS...
//         </p>
//       </motion.div>

//       {/* 1. COURSE CERTIFICATIONS (Cyan/Tech Theme) */}
//       <HolographicCarousel 
//         title="COURSE CERTIFICATIONS" 
//         data={certifications} 
//         themeColor="#00F0FF" 
//       />

//       {/* 2. HONORS & ACHIEVEMENTS (Gold Theme) */}
//       <HolographicCarousel 
//         title="HONORS & ACHIEVEMENTS" 
//         data={honors} 
//         themeColor="#FBBF24" 
//       />

//       {/* 3. RESEARCH PAPERS (Purple Theme) */}
//       <HolographicCarousel 
//         title="RESEARCH & PUBLICATIONS" 
//         data={researchPapers} 
//         themeColor="#A855F7" 
//       />

//     </div>
//   );
// };

// export default Certificates;






import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Award, Trophy, Code, FileText } from 'lucide-react';
// Import Brand Icons
import { SiCoursera, SiPython, SiGeeksforgeeks, SiOracle, SiAdobe, SiCodechef, SiGoogle } from 'react-icons/si'; 
import { FaJava, FaRobot, FaTrophy, FaMicroscope } from 'react-icons/fa';

// --- TYPES ---
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
  icon: any;
  color: string;
}

// --- DATA: RESEARCH PAPERS (Purple Theme) ---
const researchPapers: Certificate[] = [
  {
    id: 201,
    title: 'Medi Assistant: A Multinomial Naive Bayes-Based Symptom Checker',
    issuer: 'Manipal University Jaipur',
    date: '2025',
    credentialUrl: 'https://drive.google.com/file/d/1SMOSD5KvM8k5JEySpIfBgnf6N3NIy491/view?usp=sharing',
    // Medical AI Theme
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
    icon: FaMicroscope,
    color: '#A855F7' // Purple
  }
];

// --- DATA: HONORS & ACHIEVEMENTS (Gold Theme) ---
const honors: Certificate[] = [
  {
    id: 1,
    title: 'Flipkart Grid 5.0 (Certificate of Appreciation)',
    issuer: 'Flipkart',
    date: '2025',
    credentialUrl: 'https://drive.google.com/drive/folders/1TttQdom6cka-En4r_zxrrFLdGW1dvN_L?usp=sharing', 
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a2e12e7e?w=400&h=250&fit=crop',
    icon: FaTrophy,
    color: '#FBBF24' // Gold
  },
  {
    id: 5, // New Entry ID
    title: 'Solution Challenge Participation',
    issuer: 'Google Developer Groups',
    date: '2025',
    credentialUrl: 'https://drive.google.com/file/d/1Eyx0GaaLES5oD_ejwPsWUrczs2o6hCoV/view?usp=sharing',
    // Google / Innovation Theme
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop', 
    icon: SiGoogle,
    color: '#4285F4' // Google Blue
  },
  {
    id: 2,
    title: 'Dean\'s List Award (GPA 9.2223)',
    issuer: 'Manipal University Jaipur',
    date: '2024',
    credentialUrl: 'https://drive.google.com/drive/folders/1QcI4MWkBoYjF7gGkysWSfLhKFqt48VYs?usp=sharing', 
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop',
    icon: Award,
    color: '#F59E0B' // Amber
  },
  {
    id: 3,
    title: 'Adobe India Hackathon (Round 2)',
    issuer: 'Adobe & Unstop',
    date: '2025',
    credentialUrl: 'https://drive.google.com/drive/folders/1cbzWU8LIQaE7Ov-N1P4mmCQMCf4oZdXL?usp=sharing', 
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?w=400&h=250&fit=crop', 
    icon: SiAdobe,
    color: '#FF0000' // Adobe Red
  },
  {
    id: 4,
    title: 'Smart India Hackathon 2024 (Internal Round)',
    issuer: 'Ministry of Education & AICTE',
    date: 'Sep 2024',
    credentialUrl: 'https://drive.google.com/drive/folders/1u-oDVWeD_t-xLbM8iIFy8vHeNttwGXQg?usp=sharing', 
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
    icon: FaTrophy,
    color: '#FF9933' // Saffron/Orange
  }
];

// --- DATA: COURSE CERTIFICATIONS (Tech Theme) ---
const certifications: Certificate[] = [
  {
    id: 101,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford & DeepLearning.AI',
    date: '2024',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/J7UNX1QV81IQ',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
    icon: FaRobot,
    color: '#0056D2' 
  },
  {
    id: 102,
    title: 'Data Structures & Algorithms',
    issuer: 'CodeChef',
    date: 'Nov 2024',
    credentialUrl: 'https://drive.google.com/file/d/1IYB3PJVnZPGXnw1JXxPmpdLEFdpJ4FYZ/view?usp=sharing',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
    icon: Code,
    color: '#5B4326' // CodeChef Brown
  },
  {
    id: 103,
    title: 'Database Programming with SQL',
    issuer: 'Oracle Academy',
    date: 'Nov 2024',
    credentialUrl: 'https://drive.google.com/drive/folders/1beYCaRh8fAJEp7_6cRWQTVIDyPpMWtnS?usp=sharing', 
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
    icon: SiOracle,
    color: '#F80000' // Oracle Red
  },
  {
    id: 104,
    title: 'Power BI Fundamentals',
    issuer: 'Coursera',
    date: '2025',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/L6R0MJ4LIDQH',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    icon: SiPython,
    color: '#F2C811' 
  },
  {
    id: 105,
    title: 'OOPs in Java',
    issuer: 'GeeksforGeeks',
    date: '2024',
    credentialUrl: 'https://media.geeksforgeeks.org/courses/certificates/70f5bc14d59c0092397b94880b2df4b6.pdf',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
    icon: FaJava,
    color: '#2F8D46' 
  },
];

// --- REUSABLE CAROUSEL COMPONENT ---
const HolographicCarousel = ({ title, data, themeColor }: { title: string, data: Certificate[], themeColor: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % data.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const handleCardClick = (url?: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // --- AUTO ROTATION (2 Seconds) ---
  useEffect(() => {
    if (data.length <= 1) return; 
    const interval = setInterval(next, 3000); 
    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  return (
    <div className="w-full mb-24 relative">
      <div className="flex items-center gap-4 mb-8 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
        <h2 className="text-xl md:text-2xl font-display font-bold tracking-wider text-center" style={{ color: themeColor, textShadow: `0 0 20px ${themeColor}60` }}>
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full h-[350px] flex items-center justify-center perspective-[1200px]"
      >
        <AnimatePresence mode="popLayout">
          {data.map((item, index) => {
            let offset = index - currentIndex;
            if (offset > data.length / 2) offset -= data.length;
            if (offset < -data.length / 2) offset += data.length;
            
            const absOffset = Math.abs(offset);
            if (absOffset > 2) return null;

            return (
              <motion.div
                key={item.id}
                className="absolute w-[340px] h-[220px] rounded-xl cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: offset * 260, 
                  z: -absOffset * 150, 
                  rotateY: offset * -25, 
                  scale: 1 - absOffset * 0.15,
                  opacity: 1 - absOffset * 0.3,
                  zIndex: 10 - absOffset, 
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                onClick={() => absOffset === 0 && handleCardClick(item.credentialUrl)}
              >
                <div
                  className="w-full h-full glass rounded-xl overflow-hidden relative group border border-white/10"
                  style={{
                    transformStyle: 'preserve-3d',
                    backgroundColor: 'rgba(10, 10, 10, 0.9)',
                    boxShadow: absOffset === 0 ? `0 0 40px ${item.color}30` : 'none',
                    borderColor: absOffset === 0 ? `${item.color}40` : 'rgba(255,255,255,0.1)'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(
                        ${105 + (mousePos.x - 0.5) * 60}deg,
                        transparent 40%,
                        ${item.color} 50%,
                        transparent 60%
                      )`,
                    }}
                  />

                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="p-2 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md">
                            <item.icon size={24} color={item.color} />
                        </div>
                        <span className="text-[10px] font-mono text-white/60 border border-white/10 px-2 py-1 rounded-full bg-black/40">
                            {item.date}
                        </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-white transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 flex items-center gap-2 mt-2">
                         {item.issuer === 'Manipal University Jaipur' ? <FileText className="w-3 h-3 text-purple-400" /> : <Award className="w-3 h-3 text-cyan-400" />}
                        {item.issuer}
                      </p>
                    </div>

                    {absOffset === 0 && item.credentialUrl && item.credentialUrl !== '#' && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                          <span className="text-xs text-white flex items-center gap-2">
                            <ExternalLink className="w-3 h-3" /> View Document
                          </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-8 -mt-10 relative z-20">
        <button onClick={prev} className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all active:scale-95">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button onClick={next} className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all active:scale-95">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const Certificates = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-24 overflow-x-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
          HOLOGRAPHIC REGISTRY
        </h1>
        <p className="text-sm text-gray-400 font-mono tracking-widest">
          // ACCESSING ACADEMIC RECORDS...
        </p>
      </motion.div>

      {/* 1. COURSE CERTIFICATIONS (Cyan/Tech Theme) */}
      <HolographicCarousel 
        title="COURSE CERTIFICATIONS" 
        data={certifications} 
        themeColor="#00F0FF" 
      />

      {/* 2. HONORS & ACHIEVEMENTS (Gold Theme) */}
      <HolographicCarousel 
        title="HONORS & ACHIEVEMENTS" 
        data={honors} 
        themeColor="#FBBF24" 
      />

      {/* 3. RESEARCH PAPERS (Purple Theme) */}
      <HolographicCarousel 
        title="RESEARCH & PUBLICATIONS" 
        data={researchPapers} 
        themeColor="#A855F7" 
      />

    </div>
  );
};

export default Certificates;
