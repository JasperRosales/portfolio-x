'use client';

import { motion, AnimatePresence } from 'motion/react';

interface TransitionCoords {
  x: number;
  y: number;
}

interface PageTransitionProps {
  transitionCoords: TransitionCoords | null;
  onAnimationComplete: () => void;
}

export default function PageTransition({ transitionCoords, onAnimationComplete }: PageTransitionProps) {
  return (
    <AnimatePresence>
      {transitionCoords && (
        <>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] bg-black"
            style={{ pointerEvents: 'none' }}
          />

          <motion.div
            initial={{
              opacity: 1,
              scale: 80,
              x: transitionCoords.x,
              y: transitionCoords.y,
            }}
            animate={{
              opacity: 0,
              scale: 0,
              x: transitionCoords.x,
              y: transitionCoords.y,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            onAnimationComplete={onAnimationComplete}
            className="fixed z-[101] rounded-full bg-black"
            style={{
              width: 20,
              height: 20,
              transformOrigin: 'center center',
              pointerEvents: 'none',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}

