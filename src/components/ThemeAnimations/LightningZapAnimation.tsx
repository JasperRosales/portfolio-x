import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightningZapAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function LightningZapAnimation({ isVisible, onComplete }: LightningZapAnimationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgb(13, 13, 13) 0%, rgb(20, 20, 20) 100%)',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onAnimationComplete={onComplete}
        >
          {/* Electric Background Pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Lightning Bolt 1 */}
          <motion.svg
            className="absolute w-16 h-32 text-primary"
            viewBox="0 0 100 200"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <path
              d="M50 10 L30 70 L50 70 L30 130 L70 70 L50 70 L70 10 Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
          </motion.svg>

          {/* Lightning Bolt 2 */}
          <motion.svg
            className="absolute w-12 h-24 text-accent"
            viewBox="0 0 100 200"
            style={{ right: '20%', top: '30%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 1.5],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <path
              d="M50 10 L30 70 L50 70 L30 130 L70 70 L50 70 L70 10 Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
          </motion.svg>

          {/* Electric Zap Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-0.5 bg-primary"
              style={{
                left: `${20 + (i * 12)}%`,
                top: `${30 + (i * 8)}%`,
              }}
              initial={{ 
                scaleX: 0,
                opacity: 0
              }}
              animate={{ 
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, Math.random() * 20 - 10]
              }}
              transition={{
                duration: 0.4,
                delay: 0.4 + (i * 0.1),
                ease: "easeOut"
              }}
            />
          ))}

          {/* Thunder Flash Effect */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 0.2,
              delay: 0.8,
              times: [0, 0.3, 1]
            }}
          />

          {/* Electric Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
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
                duration: 1,
                delay: 0.5 + (i * 0.05),
                ease: "easeOut"
              }}
            />
          ))}

          {/* Main Electric Core */}
          <motion.div
            className="relative w-24 h-24"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: 1,
              rotate: 360
            }}
            transition={{ 
              duration: 1,
              delay: 0.6,
              ease: "easeOut"
            }}
          >
            {/* Electric Core Glow */}
            <motion.div
              className="absolute inset-0 bg-primary rounded-full blur-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1.5,
                opacity: [0, 0.8, 0.3, 0]
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut"
              }}
            />
            
            {/* Core Ring */}
            <motion.div
              className="absolute inset-2 border-2 border-primary rounded-full"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1.5,
                delay: 1,
                ease: "linear",
                repeat: Infinity
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
