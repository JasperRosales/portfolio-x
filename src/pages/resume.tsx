import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import { workExperience, education } from "../data/experience";

export default function Resume() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                My <span className="text-primary">Resume</span>
              </h1>
              <p className="text-muted-foreground">
                My professional journey and qualifications
              </p>
            </div>
            <a
              href="/Jasper-Rosales-Resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Work Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.title + job.date}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-black/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border border-[#e5e5e5] rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-primary">{job.subtitle}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                        {job.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      {job.location}
                    </div>
                    <ul className="space-y-2 mb-4">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution + edu.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-black/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full" />
                  <div className="bg-card border border-[#e5e5e5] rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">{edu.institution}</h3>
                        <p className="text-secondary">{edu.degree}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    {edu.achievements && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Achievements</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="sm:hidden text-center">
            <a
              href="/Jasper-Rosales-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaDownload />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

