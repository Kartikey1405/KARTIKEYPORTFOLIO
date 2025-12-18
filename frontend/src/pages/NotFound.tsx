import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-9xl font-display font-bold text-glow-cyan mb-4"
          animate={{
            textShadow: [
              "0 0 20px hsl(var(--neon-cyan) / 0.5)",
              "0 0 40px hsl(var(--neon-cyan) / 0.8)",
              "0 0 20px hsl(var(--neon-cyan) / 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>
        
        <h2 className="text-2xl font-display mb-2">Signal Lost</h2>
        <p className="text-muted-foreground mb-8 font-mono text-sm">
          The coordinates you entered don't exist in this system
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/5 transition-colors rounded-full interactive"
        >
          <Home className="w-4 h-4" />
          <span className="font-medium">Return to Base</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;