import { motion } from "framer-motion";
import { useMemo } from "react";
import LightRays from "../components/LightRays";

const bgRoles = [
  "Software Developer",
  "Student Leader",
  "Problem Solver",
  "Tech Enthusiast",
];

export default function Home() {
  const lines = useMemo(
    () =>
      bgRoles.map((role, i) => ({
        role,
        top: 20 + i * 15,              
        direction: Math.random() > 0.5 ? "ltr" : "rtl",
        duration: 20 + Math.random() * 10,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <>
      <div className="fixed inset-0 z-[3] pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFCC62"
          raysSpeed={1.5}
          lightSpread={0.9}
          rayLength={2.5}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <div className="relative w-screen min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {lines.map((line) => {
            const fromX = line.direction === "ltr" ? "-100vw" : "100vw";
            const toX = line.direction === "ltr" ? "100vw" : "-100vw";

            return (
              <motion.div
                key={line.role}
                initial={{ x: fromX }}
                animate={{ x: toX }}
                transition={{
                  repeat: Infinity,
                  duration: line.duration,
                  ease: "linear",
                  delay: line.delay,
                }}
                className="absolute w-max font-extrabold tracking-widest text-white/10 whitespace-nowrap text-5xl sm:text-6xl md:text-7xl"
                style={{
                  top: `${line.top}%`,
                  textShadow: "0 0 30px rgba(255,255,255,0.08)",
                }}
              >
                {line.role}
              </motion.div>
            );
          })}
        </div>

        <div className="absolute inset-0 z-[2] flex items-center justify-center perspective-distant">
          <motion.div
            className="
              relative
              w-55 h-82.5
              sm:w-65 sm:h-97.5
              md:w-[320px] md:h-120
              transform-3d
            "
            animate={{ rotateY: 360 }}
            initial={{ rotateZ: -15 }}
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <div className="absolute inset-0 backface-hidden">
              <img
                src="/final-card-image.png"
                alt="Front"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>

            <div className="absolute inset-0 rotate-y-180 backface-hidden">
              <img
                src="/final-card-back.png"
                alt="Back"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
