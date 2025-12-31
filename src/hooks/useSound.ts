import { useCallback, useRef } from 'react';

export function useSound(soundPath: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(soundPath);
      audioRef.current.volume = 1;
      audioRef.current.preload = 'auto';
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(error => {
      console.warn('Could not play sound:', error);
    });
  }, [soundPath]);

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  }, []);

  return { playSound, cleanup };
}

