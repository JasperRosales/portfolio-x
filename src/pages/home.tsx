import { motion } from "framer-motion";
import { useMemo } from "react";
import GridToImageHero from "@/components/GridToImageHero";
import { socialLinks } from "@/data/contact";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "@/components/animate-ui/primitives/radix/hover-card";

// Memoized animation variants for better performance
const textVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

export default function Home() {
  // Memoize animation configurations
  const animationProps = useMemo(() => ({
    welcomeText: { duration: 0.6, delay: 0.3 },
    heading: { duration: 0.6, delay: 0.4 },
    description: { duration: 0.6, delay: 0.5 },
    buttons: { duration: 0.6, delay: 0.6 },
    stats: { duration: 0.6, delay: 0.7 },
  }), []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8 md:py-0">
      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          
          {/* Text Content - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-lg lg:max-w-xl order-2 lg:order-1 will-change-transform"
          >
            <motion.p 
              initial={textVariants.fadeInUp.initial}
              animate={textVariants.fadeInUp.animate}
              transition={{ ...animationProps.welcomeText }}
              className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-2 sm:mb-3"
            >
              Welcome to my portfolio
            </motion.p>
            
            <motion.h1 
              initial={textVariants.fadeInUp.initial}
              animate={textVariants.fadeInUp.animate}
              transition={{ ...animationProps.heading }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-shadow-2xs font-bold mb-3 sm:mb-4"
            >
              I'm Jasper Rosales
            </motion.h1>
            
            <motion.p 
              initial={textVariants.fadeInUp.initial}
              animate={textVariants.fadeInUp.animate}
              transition={{ ...animationProps.description }}
              className="text-sm sm:text-base md:text-md text-muted-foreground mb-5 sm:mb-6"
            >
              A creative developer crafting beautiful digital experiences with modern technologies.
            </motion.p>

            <motion.div 
              initial={textVariants.fadeInUp.initial}
              animate={textVariants.fadeInUp.animate}
              transition={{ ...animationProps.buttons }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start"
            >
              <a
                href="/projects"
                className="inline-flex items-center justify-center border p-2.5 sm:p-2 text-sm sm:text-base rounded-md"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border p-2.5 sm:p-2 text-sm sm:text-base rounded-md"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats / Quick Info - Hover Cards for Social Links */}
            <motion.div 
              initial={textVariants.fadeInUp.initial}
              animate={textVariants.fadeInUp.animate}
              transition={{ ...animationProps.stats }}
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/30 will-change-transform"
            >
              {socialLinks.slice(0, 3).map((link, index) => (
                <HoverCard key={link.label} openDelay={200} closeDelay={200}>
                  <HoverCardTrigger 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-full border border-border bg-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {link.icon}
                  </HoverCardTrigger>
                  <HoverCardPortal>
                    <HoverCardContent 
                      className="w-44 sm:w-48 p-3 sm:p-4 bg-white z-10 backdrop-blur-md border border-border/50 rounded-lg shadow-lg"
                      side="top" 
                      sideOffset={8}
                    >
                      <div className="text-center">
                        <p className="font-semibold text-sm">{link.label}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {link.label === 'GitHub' && 'View my repositories'}
                          {link.label === 'LinkedIn' && 'Connect with me'}
                          {link.label === 'Facebook' && 'Follow me on FB'}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCardPortal>
                </HoverCard>
              ))}
            </motion.div>
          </motion.div>

          {/* Grid to Image Hero - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg order-1 lg:order-2 will-change-transform"
          >
            <GridToImageHero 
              imageSrc="/Jasper.jpg" 
              imageAlt="Jasper - Creative Developer"
              gridSize={3}
              animationDelay={2500}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

