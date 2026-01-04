import { motion } from "framer-motion";
import LightRays from "../components/LightRays";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
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

      <div className="absolute inset-0 flex flex-col items-center justify-center perspective-distant">
        <div className="absolute left-10 sm:left-16 md:left-20 text-left z-20 flex flex-col gap-2">
          <span className="text-lg sm:text-sm text-gray-300 tracking-widest uppercase animate-pulse">
            What's up
          </span>

          <h1 className="text-2xl sm:text-4xl drop-shadow-lg">
            <span className="text-white/80 tracking-wide">It's</span>{" "}
            <span className="bg-clip-text font-extrabold  text-amber-400">
              Jasper Rosales
            </span>
          </h1>
          <p className="text-2xl sm:text-lg font-semibold text-white/80 tracking-wide">
            Aspiring Software Engineer
          </p>

          <p className="text-2xl sm:text-xs font-semibold text-white/80 tracking-wide">
            Adores learning, cooking, animation, weapon arts, <br/>and  exploring new
            skills.
            Open fo collaborations!
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="/Jasper_Rosales_CV.pdf"
              target="_blank"
              className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
            >
              Download my CV
            </a>
            <a
              href="/portfolio"
              target="_blank"
              className="px-3 py-1 border-2 border-yellow-400 text-yellow-400 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
            >
              View my Portfolio
            </a>
          </div>
        </div>

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
          {/* FRONT */}
          <div className="absolute inset-0 backface-hidden">
            <img
              src="/final-card-image.png"
              alt="Front"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* BACK */}
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
  );
}
