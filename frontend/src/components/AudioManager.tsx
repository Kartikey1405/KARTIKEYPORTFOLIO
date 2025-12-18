

import { useEffect, useRef } from 'react';
import { useSound } from '@/contexts/SoundContext';

const AudioManager = () => {
  const { isMuted } = useSound();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  // --- FADE LOGIC ---
  const fadeIn = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    // Reset to 0 and start playing
    audio.volume = 0;
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(e => console.warn("Auto-play prevented (waiting for interaction):", e));
    }

    // "Electro Theme" can be loud/sharp, so we cap max volume at 0.35 (35%)
    // This ensures it stays in the background and doesn't overpower your content.
    const targetVolume = 0.35; 
    const duration = 2000; // 2 seconds fade in
    const steps = 40;
    const stepTime = duration / steps;
    const volStep = targetVolume / steps;

    let currentStep = 0;
    fadeIntervalRef.current = window.setInterval(() => {
      currentStep++;
      if (audio) {
        const newVol = Math.min(currentStep * volStep, targetVolume);
        audio.volume = newVol;
        
        if (currentStep >= steps) {
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        }
      }
    }, stepTime);
  };

  const fadeOut = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    const startVol = audio.volume;
    const duration = 1000; // 1 second fade out
    const steps = 20;
    const stepTime = duration / steps;
    const volStep = startVol / steps;

    let currentStep = 0;
    fadeIntervalRef.current = window.setInterval(() => {
      currentStep++;
      if (audio) {
        const newVol = Math.max(startVol - (currentStep * volStep), 0);
        audio.volume = newVol;

        if (currentStep >= steps || newVol <= 0) {
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
          audio.pause();
        }
      }
    }, stepTime);
  };

  // --- INITIALIZATION ---
  useEffect(() => {
    // ⚡ THE SPIDY THEME
    audioRef.current = new Audio('/sounds/spidytheme.mp3');
    audioRef.current.loop = true; // Infinite loop
    audioRef.current.volume = 0; 

    return () => {
      if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
      }
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, []);

  // --- WATCH MUTE TOGGLE ---
  useEffect(() => {
    if (isMuted) {
      fadeOut();
    } else {
      fadeIn();
    }
  }, [isMuted]);

  return null; 
};

export default AudioManager;
