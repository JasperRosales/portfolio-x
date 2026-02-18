import { motion } from "framer-motion";
import { allSkills } from "../data/skills";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            About <span className="text-primary">Me</span>
          </h1>
          
          {/* Introduction */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                I'm a passionate Full Stack Developer and Software Engineer based in the Philippines. 
                With a strong foundation in both frontend and backend development, I specialize in 
                building scalable applications using modern technologies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey in software development started with a curiosity for building things that 
                solve real-world problems. Since then, I've worked on various projects ranging from 
                web applications to mobile apps, always focusing on writing clean, maintainable code.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-card rounded-2xl flex items-center justify-center border border-[#e5e5e5]">
                  <div className="text-center p-6">
                    <p className="text-4xl font-bold text-primary mb-2">2+</p>
                    <p className="text-muted-foreground">Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border border-[#e5e5e5] rounded-lg p-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
                >
                  <span className="text-primary text-xl">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">What I Do</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Web Development",
                  description: "Build responsive, performant web applications using modern frameworks like React and Next.js",
                },
                {
                  title: "Backend Development",
                  description: "Create robust APIs and microservices using Go, Java, and Node.js",
                },
                {
                  title: "Database Design",
                  description: "Design and optimize databases with PostgreSQL, MongoDB, and other database technologies",
                },
                {
                  title: "DevOps",
                  description: "Set up CI/CD pipelines, containerize applications with Docker, and manage cloud infrastructure",
                },
                {
                  title: "Mobile Development",
                  description: "Develop cross-platform mobile applications using React Native",
                },
                {
                  title: "Technical Writing",
                  description: "Create clear documentation and technical specifications for projects",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-[#e5e5e5] rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

