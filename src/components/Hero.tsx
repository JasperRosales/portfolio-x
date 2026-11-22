import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RubiksCubeHero from "@/components/RubiksCubeHero";
import GridToImageHero from "@/components/GridToImageHero";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

export default function Hero() {
  const [is3D, setIs3D] = useState(true);
  const isMobile = useIsMobile();

  const toggleVisual = () => setIs3D((v) => !v);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pt-14 md:pt-16 md:min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left space-y-5 lg:pr-8"
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Helping companies improve their technology and operations
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-shadow-2xs tracking-tight">
                Jasper Rosales
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground">
                Improving technology and businesses through digital systems
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                I help companies move faster, make better decisions, and scale with
                reliable software and cleaner operations.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={toggleVisual}
                  aria-pressed={is3D}
                  className="flex items-center border border-[#e5e5e5] rounded-md overflow-hidden"
                >
                  {(["3D", "2D"] as const).map((mode) => {
                    const active = is3D === (mode === "3D");
                    return (
                      <span
                        key={mode}
                        className={`px-3.5 py-2 text-sm font-medium transition-colors ${
                          active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {mode}
                      </span>
                    );
                  })}
                </button>

                <a
                  href="#improvements"
                  className="inline-flex items-center justify-center border border-[#e5e5e5] px-4 py-2.5 rounded-md text-sm font-medium hover:border-primary transition-colors"
                >
                  See My Improvements
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border border-[#e5e5e5] px-4 py-2.5 rounded-md text-sm font-medium hover:border-primary transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>

            {/* Hero visual: 3D or 2D */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center items-center order-1 lg:order-2"
            >
              {is3D ? (
                <RubiksCubeHero transformDelay={2147483647} size={isMobile ? 300 : 360} />
              ) : (
                <GridToImageHero />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
