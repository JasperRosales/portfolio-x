import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRandomQuote } from '../../utils/quotes';

interface MetallicCutAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function MetallicCutAnimation({ isVisible, onComplete }: MetallicCutAnimationProps) {
  const [currentQuote, setCurrentQuote] = useState('');
  const [showQuote, setShowQuote] = useState(false);
  const [showLeaves, setShowLeaves] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Start the sequence
      setCurrentQuote(getRandomQuote());
      
      // Show quote after cut effect
      const quoteTimer = setTimeout(() => {
        setShowQuote(true);
      }, 800);

      // Start falling leaves after quote appears
      const leavesTimer = setTimeout(() => {
        setShowLeaves(true);
      }, 1200);

      // Complete animation after sequence
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 2500);

      return () => {
        clearTimeout(quoteTimer);
        clearTimeout(leavesTimer);
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
            background: 'linear-gradient(135deg, rgb(85, 85, 85) 0%, rgb(128, 128, 128) 100%)',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          onAnimationComplete={onComplete}
        >
          {/* Metallic Background with Gradient */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, rgb(192, 192, 192) 0%, rgb(211, 211, 211) 50%, rgb(169, 169, 169) 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Cut Effect - Left Side */}
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-gray-300 to-gray-400"
            initial={{ width: '0%' }}
            animate={{ width: '50%' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)',
              background: 'linear-gradient(90deg, rgb(169, 169, 169) 0%, rgb(192, 192, 192) 50%, rgb(211, 211, 211) 100%)',
            }}
          />

          {/* Cut Effect - Right Side */}
          <motion.div
            className="absolute right-0 top-0 h-full bg-gradient-to-l from-gray-300 to-gray-400"
            initial={{ width: '0%' }}
            animate={{ width: '50%' }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            style={{
              clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)',
              background: 'linear-gradient(270deg, rgb(169, 169, 169) 0%, rgb(192, 192, 192) 50%, rgb(211, 211, 211) 100%)',
            }}
          />

          {/* Cut Line Effect */}
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            }}
          />

          {/* Inspirational Quote */}
          <AnimatePresence>
            {showQuote && (
              <motion.div
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl px-8"
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.p
                  className="text-2xl font-medium text-center text-gray-800 leading-relaxed"
                  style={{
                    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
                    filter: 'drop-shadow(0 0 10px rgba(192, 192, 192, 0.8))'
                  }}
                >
                  "{currentQuote}"
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Falling Leaves */}
          <AnimatePresence>
            {showLeaves && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-8"
                    initial={{ 
                      x: Math.random() * window.innerWidth,
                      y: -50,
                      rotate: 0,
                      opacity: 1
                    }}
                    animate={{ 
                      y: window.innerHeight + 50,
                      x: Math.random() * window.innerWidth + (Math.random() - 0.5) * 200,
                      rotate: [0, 360, 720],
                      opacity: [1, 0.8, 0.6, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Leaf Shape */}
                    <svg
                      viewBox="0 0 100 120"
                      className="w-full h-full text-amber-600"
                      fill="currentColor"
                    >
                      <path d="M50 10 C30 10, 20 30, 20 50 C20 70, 35 85, 50 90 C65 85, 80 70, 80 50 C80 30, 70 10, 50 10 Z" />
                      <path d="M50 50 L50 110" stroke="currentColor" strokeWidth="2" />
                      <path d="M50 70 C40 65, 35 55, 30 45" stroke="currentColor" strokeWidth="1" />
                      <path d="M50 80 C60 75, 65 65, 70 55" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Metallic Shine Effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
            }}
            initial={{ x: '-100%', rotate: 45 }}
            animate={{ x: '100%', rotate: 45 }}
            transition={{ 
              duration: 1.5, 
              delay: 1.5,
              ease: "easeInOut"
            }}
          />

          {/* Floating Metallic Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gray-300 rounded-full"
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
                y: [0, -30, -60],
                x: [0, (Math.random() - 0.5) * 50]
              }}
              transition={{
                duration: 2,
                delay: 1 + (i * 0.2),
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
