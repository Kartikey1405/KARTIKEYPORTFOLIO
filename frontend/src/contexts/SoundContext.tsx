// import { createContext, useContext, useState, useRef, useCallback, useEffect, ReactNode } from 'react';

// interface SoundContextType {
//   isMuted: boolean;
//   toggleSound: () => void;
// }

// const SoundContext = createContext<SoundContextType | undefined>(undefined);

// export const SoundProvider = ({ children }: { children: ReactNode }) => {
//   const [isMuted, setIsMuted] = useState(true);
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const fadeIntervalRef = useRef<number | null>(null);

//   useEffect(() => {
//     audioRef.current = new Audio('/assets/ambient.mp3');
//     audioRef.current.loop = true;
//     audioRef.current.volume = 0;
    
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current = null;
//       }
//       if (fadeIntervalRef.current) {
//         clearInterval(fadeIntervalRef.current);
//       }
//     };
//   }, []);

//   const fadeIn = useCallback(() => {
//     if (!audioRef.current) return;
    
//     audioRef.current.play().catch(console.error);
//     const targetVolume = 0.5;
//     const duration = 2000;
//     const steps = 40;
//     const volumeStep = targetVolume / steps;
//     const intervalTime = duration / steps;
    
//     let currentStep = 0;
//     fadeIntervalRef.current = window.setInterval(() => {
//       if (!audioRef.current) return;
//       currentStep++;
//       audioRef.current.volume = Math.min(currentStep * volumeStep, targetVolume);
//       if (currentStep >= steps) {
//         if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//       }
//     }, intervalTime);
//   }, []);

//   const fadeOut = useCallback(() => {
//     if (!audioRef.current) return;
    
//     const currentVolume = audioRef.current.volume;
//     const duration = 500;
//     const steps = 20;
//     const volumeStep = currentVolume / steps;
//     const intervalTime = duration / steps;
    
//     let currentStep = 0;
//     fadeIntervalRef.current = window.setInterval(() => {
//       if (!audioRef.current) return;
//       currentStep++;
//       audioRef.current.volume = Math.max(currentVolume - currentStep * volumeStep, 0);
//       if (currentStep >= steps) {
//         if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//         audioRef.current?.pause();
//       }
//     }, intervalTime);
//   }, []);

//   const toggleSound = useCallback(() => {
//     if (fadeIntervalRef.current) {
//       clearInterval(fadeIntervalRef.current);
//     }
    
//     if (isMuted) {
//       fadeIn();
//     } else {
//       fadeOut();
//     }
//     setIsMuted(!isMuted);
//   }, [isMuted, fadeIn, fadeOut]);

//   return (
//     <SoundContext.Provider value={{ isMuted, toggleSound }}>
//       {children}
//     </SoundContext.Provider>
//   );
// };

// export const useSound = () => {
//   const context = useContext(SoundContext);
//   if (!context) {
//     throw new Error('useSound must be used within a SoundProvider');
//   }
//   return context;
// };


import { createContext, useContext, useState, ReactNode } from 'react';

interface SoundContextType {
  isMuted: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};