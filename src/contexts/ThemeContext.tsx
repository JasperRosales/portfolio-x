import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSound } from '../hooks/useSound';

export type ThemeName = 'root' | 'neon' | 'metallic' | 'starry';

interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (themeName: ThemeName) => void;
  cycleTheme: () => void;
  availableThemes: ThemeName[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = 'portfolio-theme';

const AVAILABLE_THEMES: ThemeName[] = ['root', 'neon', 'metallic', 'starry'];

function getInitialTheme(): ThemeName {
  const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeName;
  if (AVAILABLE_THEMES.includes(savedTheme)) {
    return savedTheme;
  }

  return 'root';
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(getInitialTheme);
  const { playSound } = useSound('/finger-snap.mp3');

  const setTheme = (themeName: ThemeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem(STORAGE_KEY, themeName);
    playSound();
  };

  const cycleTheme = () => {
    const currentIndex = AVAILABLE_THEMES.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % AVAILABLE_THEMES.length;
    const nextTheme = AVAILABLE_THEMES[nextIndex];
    setTheme(nextTheme);
    playSound();
  };

  useEffect(() => {
    const root = document.documentElement;

    AVAILABLE_THEMES.forEach(theme => {
      root.classList.remove(theme);
    });
    
    root.classList.add(currentTheme);

    root.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    const timeout = setTimeout(() => {
      root.style.transition = '';
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentTheme]);

  const contextValue: ThemeContextType = {
    currentTheme,
    setTheme,
    cycleTheme,
    availableThemes: AVAILABLE_THEMES,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
