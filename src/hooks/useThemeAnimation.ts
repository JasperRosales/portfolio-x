import { useState, useEffect, useCallback } from 'react';
import type { ThemeName } from '../contexts/ThemeContext';

interface AnimationState {
  isAnimating: boolean;
  animationKey: string;
  startTime: number;
}

interface ThemeAnimationOptions {
  duration?: number;
  delay?: number;
  easing?: string;
}

const ANIMATION_STORAGE_KEY = 'portfolio-theme-animation';

export function useThemeAnimation() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isAnimating: false,
    animationKey: '',
    startTime: 0,
  });

  const [preferences, setPreferences] = useState<Record<ThemeName, ThemeAnimationOptions>>({
    root: { duration: 600, delay: 0, easing: 'ease-out' },
    neon: { duration: 4000, delay: 0, easing: 'linear' },
    metallic: { duration: 1200, delay: 100, easing: 'ease-out' },
    starry: { duration: 6000, delay: 0, easing: 'ease-in-out' },
  });

  // Load saved preferences from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(ANIMATION_STORAGE_KEY);
      if (saved) {
        const parsedPreferences = JSON.parse(saved);
        setPreferences(prev => ({ ...prev, ...parsedPreferences }));
      }
    } catch (error) {
      console.warn('Failed to load animation preferences:', error);
    }
  }, []);

  // Save preferences to localStorage
  const savePreferences = useCallback((newPreferences: Record<ThemeName, ThemeAnimationOptions>) => {
    try {
      localStorage.setItem(ANIMATION_STORAGE_KEY, JSON.stringify(newPreferences));
    } catch (error) {
      console.warn('Failed to save animation preferences:', error);
    }
  }, []);

  // Start animation for a specific theme
  const startAnimation = useCallback((theme: ThemeName) => {
    const now = Date.now();
    const animationKey = `${theme}-${now}`;
    
    setAnimationState({
      isAnimating: true,
      animationKey,
      startTime: now,
    });

    // Auto-complete animation after duration
    const duration = preferences[theme]?.duration || 1000;
    setTimeout(() => {
      setAnimationState(prev => ({
        ...prev,
        isAnimating: false,
      }));
    }, duration);
  }, [preferences]);

  // Check if animation should run
  const shouldAnimate = useCallback((theme: ThemeName) => {
    // Don't animate if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }

    // Don't animate if already animating
    if (animationState.isAnimating) {
      return false;
    }

    return true;
  }, [animationState.isAnimating]);

  // Get animation class names for theme
  const getAnimationClasses = useCallback((theme: ThemeName): string => {
    const classes = ['theme-animation'];
    
    switch (theme) {
      case 'root':
        classes.push('animate-fade-in');
        break;
      case 'neon':
        classes.push('animate-neon-pulse');
        break;
      case 'metallic':
        classes.push('animate-metallic-reveal');
        break;
      case 'starry':
        classes.push('animate-star-field');
        break;
    }
    
    return classes.join(' ');
  }, []);

  // Get theme-specific animation configuration
  const getAnimationConfig = useCallback((themeName: ThemeName) => {
    if (!shouldAnimate(themeName)) return null;

    const config = {
      key: animationState.animationKey,
      theme: themeName,
      classes: getAnimationClasses(themeName),
    };

    switch (themeName) {
      case 'neon':
        return {
          ...config,
          elements: ['neon-border', 'neon-glow'],
        };
      
      case 'metallic':
        return {
          ...config,
          elements: ['metallic-doors', 'metallic-door-left', 'metallic-door-right', 'metallic-shine'],
        };
      
      case 'starry':
        return {
          ...config,
          elements: ['starry-background', 'stars-bg', 'floating-stars'],
          starCount: 6,
        };
      
      case 'root':
      default:
        return {
          ...config,
          elements: ['root-fade'],
        };
    }
  }, [shouldAnimate, animationState.animationKey, getAnimationClasses]);

  // Update animation preferences
  const updatePreferences = useCallback((theme: ThemeName, options: ThemeAnimationOptions) => {
    const newPreferences = { ...preferences, [theme]: options };
    setPreferences(newPreferences);
    savePreferences(newPreferences);
  }, [preferences, savePreferences]);

  // Reset animation state
  const resetAnimation = useCallback(() => {
    setAnimationState({
      isAnimating: false,
      animationKey: '',
      startTime: 0,
    });
  }, []);

  // Get animation timing CSS
  const getAnimationTiming = useCallback((theme: ThemeName): string => {
    const options = preferences[theme];
    if (!options) return '0.6s ease-out';
    
    const { duration = 600, delay = 0, easing = 'ease-out' } = options;
    return `${duration}ms ${easing} ${delay}ms`;
  }, [preferences]);

  return {
    // State
    animationState,
    preferences,
    
    // Actions
    startAnimation,
    shouldAnimate,
    getAnimationClasses,
    getAnimationConfig,
    getAnimationTiming,
    updatePreferences,
    resetAnimation,
    
    // Utilities
    isAnimating: animationState.isAnimating,
    animationKey: animationState.animationKey,
  };
}

// Hook for page-level theme animations
export function usePageThemeAnimation(theme: ThemeName) {
  const { startAnimation, shouldAnimate, getAnimationConfig } = useThemeAnimation();
  
  useEffect(() => {
    if (shouldAnimate(theme)) {
      startAnimation(theme);
    }
  }, [theme, startAnimation, shouldAnimate]);

  return {
    animationConfig: getAnimationConfig(theme),
  };
}

// Hook for component-level theme animations  
export function useComponentThemeAnimation(theme: ThemeName, componentId: string) {
  const { startAnimation, shouldAnimate, getAnimationClasses } = useThemeAnimation();
  
  useEffect(() => {
    if (shouldAnimate(theme)) {
      startAnimation(theme);
    }
  }, [theme, startAnimation, shouldAnimate]);

  return {
    animationClasses: getAnimationClasses(theme),
  };
}
