


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import StarField from "@/components/StarField";
import OrbitalNavbar from "@/components/OrbitalNavbar";
import HUDOverlay from "@/components/HUDOverlay";
import AudioManager from "@/components/AudioManager"; // <--- 1. Import AudioManager
import { SoundProvider } from "@/contexts/SoundContext";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Tech from "@/pages/Tech";
import Certificates from "@/pages/Certificates";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SoundProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative min-h-screen">
            <CustomCursor />
            <StarField />
            <HUDOverlay />
            <OrbitalNavbar />
            
            {/* 2. Add the Invisible DJ here */}
            <AudioManager />
            
            <AnimatedRoutes />
          </div>
        </BrowserRouter>
      </SoundProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
