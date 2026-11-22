import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImprovementsSection from "@/components/ImprovementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertsAndAchievements from "@/components/CertsAndAchievements";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

      <Navigation />
      <Hero />
      <ImprovementsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertsAndAchievements />
      <ContactSection />
      <Footer />
    </div>
  );
}
