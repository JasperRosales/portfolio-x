import { motion, AnimatePresence } from 'framer-motion';

interface EyeOpeningAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function EyeOpeningAnimation({ isVisible, onComplete }: EyeOpeningAnimationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgb(180, 83, 9) 0%, rgb(251, 251, 251) 100%)',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          onAnimationComplete={onComplete}
        >
          {/* Eye Container */}
          <motion.div
            className="relative w-32 h-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Eye White */}
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              initial={{ scaleY: 0.1, scaleX: 1 }}
              animate={{ 
                scaleY: 1,
                scaleX: 1
              }}
              transition={{ 
                duration: 1.2, 
                ease: "easeInOut",
                delay: 0.3
              }}
            >
              {/* Upper Eyelid */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"
                initial={{ y: -20 }}
                animate={{ y: -40 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
              
              {/* Red Iris */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-8 h-8 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: 1,
                  rotate: 360
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut",
                  delay: 0.8
                }}
              >
                {/* Iris Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-red-500 rounded-full blur-sm"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 1.4
                  }}
                />
              </motion.div>

              {/* Pupil */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeOut",
                  delay: 1.4
                }}
              />

              {/* Eye Reflection */}
              <motion.div
                className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeOut",
                  delay: 1.6
                }}
              />
            </motion.div>

            {/* Eye Lash Effect */}
            <motion.div
              className="absolute -top-2 left-0 right-0 h-4 bg-amber-800 rounded-t-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeInOut",
                delay: 0.9
              }}
            />
          </motion.div>

          {/* Subtle Background Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, -40]
              }}
              transition={{
                duration: 2,
                delay: 1 + (i * 0.1),
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
