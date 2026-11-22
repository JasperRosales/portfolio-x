import { motion } from "framer-motion";
import { improvements } from "@/data/services";

export default function ImprovementsSection() {
  return (
    <section
      id="improvements"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          How I Improve <span className="text-primary">Technology & Businesses</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          I help companies move faster, make better decisions, and scale with
          reliable software and cleaner operations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {improvements.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-[#e5e5e5] rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
