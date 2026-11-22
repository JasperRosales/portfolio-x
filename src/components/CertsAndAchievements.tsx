import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { keyAchievements } from "@/data/achievements";

export default function CertsAndAchievements() {
  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Certifications & <span className="text-primary">Recognitions</span>
        </h2>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Certificates</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-[#e5e5e5] rounded-xl p-5 hover:border-primary/50 transition-colors"
            >
              <div className="text-primary text-xl shrink-0 mb-3">{cert.icon}</div>
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <p className="text-primary text-sm font-medium">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm mt-1">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-12 mb-4">Key Achievements</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {keyAchievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-[#e5e5e5] rounded-xl p-5 hover:border-primary/50 transition-colors"
            >
              <div className="text-primary text-xl shrink-0 mb-3">{achievement.icon}</div>
              <h3 className="text-lg font-semibold">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
