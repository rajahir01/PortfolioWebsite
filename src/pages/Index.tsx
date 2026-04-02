import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FocusSection from "@/components/FocusSection";
import TechSphere3D from "@/components/TechSphere3D";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FocusSection />
      <TechSphere3D />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
