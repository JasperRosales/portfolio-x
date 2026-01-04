import { motion } from 'framer-motion';
import { useState, lazy, Suspense } from 'react';
import { Section, PageWrapper } from '../components/shared';
import { VscLink, VscCode, VscFilePdf, VscFolderOpened } from 'react-icons/vsc';

const Experience = lazy(() => import('./resume'));
const Project = lazy(() => import('./projects'));

type TabType = 'experience' | 'projects';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const renderTabContent = () => {
    return (
      <Suspense
        fallback={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center py-20"
          >
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
        }
      >
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'projects' && <Project />}
      </Suspense>
    );
  };

  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Section className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Portfolio</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Explore my Resume, Projects, and Technical Achievements.
              </p>

              <div className="flex justify-center gap-2 mb-8">
                <motion.button
                  onClick={() => setActiveTab('experience')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                    activeTab === 'experience'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                  }`}
                >
                  <VscFilePdf size={20} />
                  Experience
                </motion.button>
                <motion.button
                  onClick={() => setActiveTab('projects')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                    activeTab === 'projects'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                  }`}
                >
                  <VscFolderOpened size={20} />
                  Projects
                </motion.button>
              </div>
            </motion.div>
          </div>
        </Section>

        {renderTabContent()}

        <Section className="pb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary/5 border-primary/20 p-8 rounded-lg">
                <VscCode className="text-5xl text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Interested in working together?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80 transition-colors cursor-pointer"
                >
                  Get In Touch
                  <VscLink />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}
