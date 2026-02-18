import { motion } from "framer-motion";
import { PinList } from "@/components/animate-ui/components/community/pin-list";
import { pins } from "@/data/skills";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* 3x3 Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-2xl mx-auto"
        >
          {/* Row 1 */}
          <motion.div
            variants={itemVariants}
            className="glass dark:glass-dark rounded-xl shadow-lg row-span-2"
          >
            <img
              src="/Jasper.jpg"
              alt="Jasper"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="glass dark:glass-dark rounded-xl p-3 shadow-lg aspect-square"
          />

          {/* PinList - occupies positions 3 and 6 with row-span-2 */}
          <motion.div
            variants={itemVariants}
            className="glass dark:glass-dark rounded-xl shadow-lg row-span-2"
          >
            <PinList
              className="h-full p-2"
              items={pins.map((skill, index) => ({
                id: index,
                name: skill.name,
                info: "Technology",
                icon: () => skill.icon,
                pinned: index < 2,
              }))}
              labels={{ pinned: "Pinned Skills", unpinned: "All Skills" }}
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            variants={itemVariants}
            className="glass dark:glass-dark rounded-xl p-3 shadow-lg aspect-square"
          />
          <motion.div
            variants={itemVariants}
            className="glass dark:glass-dark rounded-xl p-3 shadow-lg aspect-square"
          />

          {/* Row 3 */}
          <motion.div
            variants={itemVariants}
            className="glass dark:glass-dark rounded-xl p-3 shadow-lg aspect-square"
          />
    

          <motion.div
            variants={itemVariants}
            className="glass dark:glass-dark rounded-xl p-3 shadow-lg aspect-square"
          />
        </motion.div>
      </div>
    </div>
  );
}
