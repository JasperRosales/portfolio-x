"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GridToImageHeroProps {
  imageSrc?: string;
  imageAlt?: string;
  gridSize?: number;
  animationDelay?: number;
}

export default function GridToImageHero({
  imageSrc = "/Jasper.jpg",
  imageAlt = "Profile",
  gridSize = 3,
  animationDelay = 2000,
}: GridToImageHeroProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate grid items
  const gridItems = Array.from({ length: gridSize * gridSize }, (_, i) => ({
    id: i,
    row: Math.floor(i / gridSize),
    col: i % gridSize,
  }));

  useEffect(() => {
    // Start animation after initial delay
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 800);

    // Show full image after grid animation completes
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, animationDelay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(imageTimer);
    };
  }, [animationDelay]);

  // Generate random start positions for grid items (memoized to prevent regeneration on re-renders)
  const gridItemStartPositions = useMemo(() => {
  return gridItems.map((item) => {
    const row = item.row;
    const col = item.col;

      
      // Calculate direction based on position (from corners/edges)
      const xDirection = col === 0 ? -1 : col === gridSize - 1 ? 1 : 0;
      const yDirection = row === 0 ? -1 : row === gridSize - 1 ? 1 : 0;
      
      // Random scattered start positions
      const startX = xDirection * (200 + Math.random() * 300);
      const startY = yDirection * (200 + Math.random() * 300);
      const startZ = -500 - Math.random() * 500;
      const startRotateX = Math.random() * 360;
      const startRotateY = Math.random() * 360;
      
      return { startX, startY, startZ, startRotateX, startRotateY };
    });
  }, [gridSize, gridItems]);

  // Variants for staggered animation - boxes fly from outside to form image
  const itemVariants = useMemo(() => {
    return gridItems.map((item, index) => {
      const { startX, startY, startZ, startRotateX, startRotateY } = gridItemStartPositions[index];
      
      return {
        initial: {
          x: startX,
          y: startY,
          z: startZ,
          rotateX: startRotateX,
          rotateY: startRotateY,
          opacity: 0,
        },
        animate: {
          x: 0,
          y: 0,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: index * 0.08,
            ease: [0.34, 1.56, 0.64, 1] as const,
          },
        },
      };
    });
  }, [gridItemStartPositions, gridItems]);

  return (
    <div 
      ref={containerRef}
      className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Grid Animation Phase */}
      <AnimatePresence>
        {!showImage && (
          <motion.div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize}, 1fr)`,
              gap: '4px',
              perspective: '1000px',
            }}
          >
            {gridItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants[index]}
                initial="initial"
                animate={isAnimating ? "animate" : "initial"}
                className="relative rounded-lg overflow-hidden shadow-xl"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Each grid cell shows a portion of the image using background position */}
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: `${gridSize * 100}%`,
                    backgroundPosition: `${(item.col / (gridSize - 1)) * 100}% ${(item.row / (gridSize - 1)) * 100}%`,
                  }}
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-white/0 hover:border-white/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Image Phase */}
      <AnimatePresence>
        {showImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              }
            }}
            className="absolute inset-0"
          >
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-2xl" />
            
            {/* Main image container */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              animate={isHovered ? {
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.4 }
              } : {
                rotateY: 0,
                rotateX: 0,
                transition: { duration: 0.4 }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

