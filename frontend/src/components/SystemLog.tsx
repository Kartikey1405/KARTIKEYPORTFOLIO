import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const bootSequence = [
  { text: '> Initializing system...', delay: 0 },
  { text: '> Loading modules...', delay: 500 },
  { text: '> Java Runtime: OK', delay: 1000 },
  { text: '> Spring Boot: OK', delay: 1400 },
  { text: '> React: OK', delay: 1800 },
  { text: '> TensorFlow: OK', delay: 2200 },
  { text: '> Neural Network: ONLINE', delay: 2600 },
  { text: '> Database: CONNECTED', delay: 3000 },
  { text: '> System ready.', delay: 3500 },
  { text: '> Awaiting input...', delay: 4000 },
];

const SystemLog = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    setVisibleLines([]);
    
    const timeouts: NodeJS.Timeout[] = [];
    
    bootSequence.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
      }, line.delay);
      timeouts.push(timeout);
    });

    const resetTimeout = setTimeout(() => {
      setCycleCount((c) => c + 1);
    }, 8000);
    timeouts.push(resetTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, [cycleCount]);

  return (
    <motion.div
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-64 hidden lg:block"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 0.6, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="glass p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
            System Log
          </span>
        </div>
        <div className="space-y-1 h-48 overflow-hidden">
          {visibleLines.map((line, i) => (
            <motion.div
              key={`${cycleCount}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-[10px] font-mono ${
                line.includes('OK') || line.includes('ONLINE') || line.includes('CONNECTED')
                  ? 'text-accent'
                  : line.includes('ready')
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {line}
            </motion.div>
          ))}
          <motion.span
            className="inline-block w-2 h-3 bg-primary"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SystemLog;
