import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImprovementsSection from "@/components/ImprovementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--clay)] overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <ImprovementsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
