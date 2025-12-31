import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StarryFormationAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function StarryFormationAnimation({ isVisible, onComplete }: StarryFormationAnimationProps) {
  const [showConstellation, setShowConstellation] = useState(false);
  const [showStars, setShowStars] = useState(false);

  // Generate constellation pattern
  const generateConstellation = (): Star[] => {
    const stars: Star[] = [];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Create a constellation pattern (like a constellation shape)
    const constellationPoints = [
      { x: -200, y: -100 }, { x: -100, y: -150 }, { x: 0, y: -200 },
      { x: 100, y: -150 }, { x: 200, y: -100 }, { x: 150, y: 0 },
      { x: 200, y: 100 }, { x: 100, y: 150 }, { x: 0, y: 200 },
      { x: -100, y: 150 }, { x: -200, y: 100 }, { x: -150, y: 0 }
    ];

    constellationPoints.forEach((point, index) => {
      stars.push({
        id: index,
        x: centerX + point.x,
        y: centerY + point.y,
        size: Math.random() * 3 + 2,
        delay: index * 0.2
      });
    });

    return stars;
  };

  const [constellationStars, setConstellationStars] = useState<Star[]>([]);

  useEffect(() => {
    if (isVisible) {
      setConstellationStars(generateConstellation());
      
      // Start star appearance
      const starTimer = setTimeout(() => {
        setShowStars(true);
      }, 500);

      // Show constellation formation
      const constellationTimer = setTimeout(() => {
        setShowConstellation(true);
      }, 1500);

      // Complete animation
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 2500);

      return () => {
        clearTimeout(starTimer);
        clearTimeout(constellationTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgb(13, 18, 32) 0%, rgb(25, 30, 50) 100%)',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          onAnimationComplete={onComplete}
        >
          {/* Background Star Field */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  backgroundColor: Math.random() > 0.7 ? 'rgb(147, 197, 253)' : 'rgb(59, 130, 246)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.7, 1],
                  scale: [0, 1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>

          {/* Constellation Formation */}
          <AnimatePresence>
            {showConstellation && (
              <svg
                className="absolute inset-0 pointer-events-none"
                style={{ width: '100%', height: '100%' }}
              >
                {/* Constellation Lines */}
                {constellationStars.map((star, index) => {
                  const nextStar = constellationStars[(index + 1) % constellationStars.length];
                  return (
                    <motion.line
                      key={`line-${index}`}
                      x1={star.x}
                      y1={star.y}
                      x2={nextStar.x}
                      y2={nextStar.y}
                      stroke="rgb(147, 197, 253)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  );
                })}
              </svg>
            )}
          </AnimatePresence>

          {/* Constellation Stars */}
          <AnimatePresence>
            {showStars && constellationStars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute pointer-events-none"
                style={{
                  left: `${star.x}px`,
                  top: `${star.y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ 
                  scale: 0,
                  opacity: 0
                }}
                animate={{ 
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0.8],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 1,
                  delay: star.delay,
                  ease: "easeOut"
                }}
              >
                {/* Star Core */}
                <motion.div
                  className="relative"
                  style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: star.delay
                    }}
                  />
                  
                  {/* Star Glow */}
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full blur-sm"
                    style={{
                      width: `${star.size * 2}px`,
                      height: `${star.size * 2}px`,
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 1,
                      delay: star.delay + 0.5,
                      ease: "easeOut"
                    }}
                  />

                  {/* Star Rays */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-primary"
                      style={{
                        width: '1px',
                        height: '8px',
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'center',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg)`
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ 
                        scaleY: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 0.8,
                        delay: star.delay + 0.3,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Floating Stardust */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`stardust-${i}`}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ 
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Constellation Title */}
          <AnimatePresence>
            {showConstellation && (
              <motion.div
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-light text-primary text-center tracking-wider">
                  Constellation
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
