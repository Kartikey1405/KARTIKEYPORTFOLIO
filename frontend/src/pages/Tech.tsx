



import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiSpring, SiSpringboot, SiPython, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, 
  SiThymeleaf, SiMysql, SiMongodb, SiPostgresql, SiFastapi, SiNumpy, SiPandas, SiScikitlearn, 
  SiVercel, SiRender, SiIntellijidea, SiEclipseide, SiGit, SiGithub,
  SiDocker, SiPlotly 
} from 'react-icons/si';
import { FaJava, FaServer, FaCode } from 'react-icons/fa'; 
import { VscVscode } from "react-icons/vsc"; 

interface TechNode {
  id: string;
  name: string;
  icon: any; 
  x: number; 
  y: number;
  size: 'core' | 'satellite' | 'tiny';
  color: string;
}

interface Connection {
  from: string;
  to: string;
}

// All Tech Data
const techNodes: TechNode[] = [
  { id: 'java', name: 'Java', icon: FaJava, x: 50, y: 45, size: 'core', color: '#ED8B00' },
  { id: 'python', name: 'Python', icon: SiPython, x: 42, y: 62, size: 'core', color: '#3776AB' },
  { id: 'js', name: 'JavaScript', icon: SiJavascript, x: 58, y: 62, size: 'core', color: '#F7DF1E' },
  { id: 'springboot', name: 'Spring Boot', icon: SiSpringboot, x: 72, y: 42, size: 'core', color: '#6DB33F' },
  { id: 'github', name: 'GitHub', icon: SiGithub, x: 50, y: 22, size: 'core', color: '#ffffff' },
  { id: 'react', name: 'React', icon: SiReact, x: 32, y: 52, size: 'core', color: '#61DAFB' },
  
  { id: 'spring', name: 'Spring', icon: SiSpring, x: 62, y: 48, size: 'satellite', color: '#6DB33F' },
  { id: 'servlet', name: 'Servlet', icon: FaServer, x: 65, y: 32, size: 'tiny', color: '#E0E0E0' },
  { id: 'jsp', name: 'JSP', icon: FaCode, x: 75, y: 30, size: 'tiny', color: '#E0E0E0' },
  { id: 'html', name: 'HTML5', icon: SiHtml5, x: 22, y: 48, size: 'satellite', color: '#E34F26' },
  { id: 'css', name: 'CSS3', icon: SiCss3, x: 25, y: 38, size: 'satellite', color: '#1572B6' },
  { id: 'tailwind', name: 'Tailwind', icon: SiTailwindcss, x: 35, y: 38, size: 'satellite', color: '#06B6D4' },
  { id: 'thymeleaf', name: 'Thymeleaf', icon: SiThymeleaf, x: 55, y: 35, size: 'satellite', color: '#005F0F' },
  { id: 'numpy', name: 'NumPy', icon: SiNumpy, x: 28, y: 72, size: 'satellite', color: '#013243' },
  { id: 'pandas', name: 'Pandas', icon: SiPandas, x: 38, y: 78, size: 'satellite', color: '#150458' },
  { id: 'matplotlib', name: 'Matplotlib', icon: SiPlotly, x: 22, y: 82, size: 'tiny', color: '#ffffff' },
  { id: 'scikit', name: 'Scikit-Learn', icon: SiScikitlearn, x: 48, y: 82, size: 'satellite', color: '#F7931E' },
  { id: 'fastapi', name: 'FastAPI', icon: SiFastapi, x: 32, y: 65, size: 'satellite', color: '#009688' },
  { id: 'mysql', name: 'MySQL', icon: SiMysql, x: 60, y: 78, size: 'satellite', color: '#4479A1' },
  { id: 'postgres', name: 'PostgreSQL', icon: SiPostgresql, x: 68, y: 72, size: 'satellite', color: '#4169E1' },
  { id: 'mongo', name: 'MongoDB', icon: SiMongodb, x: 72, y: 82, size: 'satellite', color: '#47A248' },
  { id: 'git', name: 'Git', icon: SiGit, x: 45, y: 32, size: 'satellite', color: '#F05032' },
  { id: 'intellij', name: 'IntelliJ', icon: SiIntellijidea, x: 82, y: 22, size: 'tiny', color: '#FE315D' },
  { id: 'vscode', name: 'VS Code', icon: VscVscode, x: 18, y: 22, size: 'tiny', color: '#007ACC' },
  { id: 'eclipse', name: 'Eclipse', icon: SiEclipseide, x: 88, y: 32, size: 'tiny', color: '#2C2255' },
  { id: 'vercel', name: 'Vercel', icon: SiVercel, x: 12, y: 32, size: 'tiny', color: '#ffffff' },
  { id: 'render', name: 'Render', icon: SiRender, x: 12, y: 42, size: 'tiny', color: '#ffffff' },
  { id: 'docker', name: 'Docker', icon: SiDocker, x: 12, y: 52, size: 'tiny', color: '#2496ED' }, // Added fallback coord just in case
];

const connections: Connection[] = [
  { from: 'java', to: 'springboot' }, { from: 'java', to: 'spring' },
  { from: 'java', to: 'servlet' }, { from: 'servlet', to: 'jsp' },
  { from: 'js', to: 'react' }, { from: 'html', to: 'css' },
  { from: 'css', to: 'tailwind' }, { from: 'react', to: 'tailwind' },
  { from: 'thymeleaf', to: 'springboot' }, { from: 'python', to: 'fastapi' },
  { from: 'python', to: 'numpy' }, { from: 'python', to: 'pandas' },
  { from: 'pandas', to: 'matplotlib' }, { from: 'numpy', to: 'scikit' },
  { from: 'springboot', to: 'postgres' }, { from: 'springboot', to: 'mysql' },
  { from: 'springboot', to: 'mongo' }, { from: 'git', to: 'github' },
  { from: 'react', to: 'vercel' }, { from: 'springboot', to: 'render' },
];

// Define Categories for Mobile View
const mobileCategories = [
  { title: "Languages", ids: ['java', 'python', 'js', 'html', 'css'] },
  { title: "Frameworks", ids: ['springboot', 'spring', 'react', 'tailwind', 'thymeleaf', 'fastapi'] },
  { title: "Data Science & AI", ids: ['numpy', 'pandas', 'scikit', 'matplotlib'] },
  { title: "Databases", ids: ['mysql', 'postgres', 'mongo'] },
  { title: "Tools & DevOps", ids: ['git', 'github', 'docker', 'vercel', 'render'] },
  { title: "IDEs", ids: ['intellij', 'vscode', 'eclipse'] },
];

const Tech = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodePositions, setNodePositions] = useState<{ [key: string]: { x: number; y: number } }>({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const newPositions: { [key: string]: { x: number; y: number } } = {};
    techNodes.forEach((node) => {
      const nodeX = node.x / 100;
      const nodeY = node.y / 100;
      const dx = mousePos.x - nodeX;
      const dy = mousePos.y - nodeY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const pullStrength = distance < 0.25 ? (0.25 - distance) * 15 : 0;
      newPositions[node.id] = {
        x: node.x + dx * pullStrength,
        y: node.y + dy * pullStrength,
      };
    });
    setNodePositions(newPositions);
  }, [mousePos]);

  const getParallaxOffset = (depth: number) => ({
    x: (mousePos.x - 0.5) * depth * -50,
    y: (mousePos.y - 0.5) * depth * -50,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-24 relative overflow-hidden">
      
      {/* HEADER (Shared) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 z-30"
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold text-glow-cyan mb-2">
          TECH CONSTELLATION
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          Interactive star map of technologies
        </p>
      </motion.div>

      {/* ========================================================
          MOBILE VIEW: CATEGORIZED GRIDS (Visible < 768px)
          ======================================================== */}
      <div className="md:hidden w-full max-w-sm flex flex-col gap-8 pb-20">
        {mobileCategories.map((category) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-5 border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
              {category.title}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {category.ids.map((id) => {
                const node = techNodes.find((n) => n.id === id);
                if (!node) return null;
                return (
                  <div key={id} className="flex flex-col items-center gap-2">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10"
                      style={{ 
                        background: `radial-gradient(circle at 30% 30%, ${node.color}20, transparent)`,
                        boxShadow: `0 0 10px ${node.color}20`
                      }}
                    >
                      <node.icon size={20} color={node.color} />
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono text-center">
                      {node.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========================================================
          DESKTOP VIEW: CONSTELLATION (Visible > 768px)
          ======================================================== */}
      <div
        ref={containerRef}
        className="hidden md:block relative w-full max-w-6xl aspect-[16/10] overflow-hidden rounded-2xl z-20"
        style={{
          background: 'radial-gradient(ellipse at center, #0a0e1a 0%, #020408 100%)',
          boxShadow: '0 0 40px rgba(0,0,0,0.5), inset 0 0 100px rgba(0,240,255,0.05)'
        }}
      >
        {/* NEBULA CLOUDS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', left: '5%', top: '10%' }}
            animate={getParallaxOffset(0.3)}
          />
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full blur-[100px] opacity-15"
            style={{ background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)', right: '10%', bottom: '15%' }}
            animate={getParallaxOffset(0.4)}
          />
        </div>

        {/* TWINKLING STARS */}
        <motion.div className="absolute inset-0 opacity-40 pointer-events-none" animate={getParallaxOffset(0.5)}>
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
        </motion.div>

        {/* CONNECTIONS LAYER */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map((conn, i) => {
            const fromNode = techNodes.find(n => n.id === conn.from);
            const toNode = techNodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null;
            const fromPos = nodePositions[conn.from] || { x: fromNode.x, y: fromNode.y };
            const toPos = nodePositions[conn.to] || { x: toNode.x, y: toNode.y };
            const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;
            return (
              <g key={i}>
                <motion.line
                  x1={`${fromPos.x}%`} y1={`${fromPos.y}%`}
                  x2={`${toPos.x}%`} y2={`${toPos.y}%`}
                  stroke={isHighlighted ? '#00F0FF' : '#ffffff20'}
                  strokeWidth={isHighlighted ? 2 : 1}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                />
              </g>
            );
          })}
        </svg>

        {/* TECH NODES LAYER */}
        <motion.div className="absolute inset-0" animate={getParallaxOffset(1)}>
          {techNodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            const isConnected = hoveredNode && connections.some(c => (c.from === hoveredNode && c.to === node.id) || (c.to === hoveredNode && c.from === node.id));
            const pos = nodePositions[node.id] || { x: node.x, y: node.y };
            const size = node.size === 'core' ? 75 : node.size === 'satellite' ? 55 : 42;

            return (
              <motion.div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <motion.div 
                  className="flex flex-col items-center gap-2"
                  animate={{ scale: isHovered ? 1.4 : isConnected ? 1.2 : 1 }}
                >
                  <div
                    className="rounded-full flex items-center justify-center border border-white/20 shadow-lg"
                    style={{
                      width: size, height: size,
                      background: `radial-gradient(circle at 30% 30%, ${node.color}, ${node.color}60)`,
                      boxShadow: `0 0 20px ${node.color}40`,
                    }}
                  >
                    <node.icon size={size * 0.55} color="#ffffff" />
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold whitespace-nowrap drop-shadow-lg transition-opacity ${isHovered || isConnected ? 'opacity-100' : 'opacity-60'}`}
                    style={{ color: isHovered ? node.color : '#e2e8f0' }}
                  >
                    {node.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
