import { motion } from 'framer-motion';
import { VscArrowRight, VscFileCode, VscGithubInverted } from 'react-icons/vsc';
import { PageWrapper, Section } from '../components/shared';
import { useNavigate } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <Section className="flex-1 flex items-center justify-center min-h-screen">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col lg:flex-row items-center justify-between gap-12"
            >
              {/* Text Content */}
              <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
                <motion.p
                  variants={itemVariants}
                  className="text-primary font-medium mb-4 tracking-wide uppercase"
                >
                  Hello, I'm
                </motion.p>
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                >
                  Jasper Rosales
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-xl sm:text-2xl text-muted-foreground mb-6"
                >
                  Freelance Developer
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  Building clean, efficient, and scalable solutions for clients worldwide.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/portfolio')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <VscFileCode className="text-lg" />
                    View My Work
                    <VscArrowRight className="text-lg" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[rgb(var(--border))] rounded-lg font-medium hover:bg-accent transition-colors"
                  >
                    <VscGithubInverted className="text-lg" />
                    Get In Touch
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Hero Image/Visual */}
              <motion.div
                variants={itemVariants}
                className="flex-1 flex justify-center lg:justify-end"
              >
                <motion.div
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  className="relative"
                >
                  <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-[rgb(var(--border))] flex items-center justify-center overflow-hidden">
                    <img
                      src="/Jasper.jpg"
                      alt="Jasper Rosales"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute -inset-8 border-2 border-dashed border-primary/30 rounded-full"
                  />
                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute -inset-12 border border-primary/20 rounded-full"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        
      </div>
    </PageWrapper>
  );
}

