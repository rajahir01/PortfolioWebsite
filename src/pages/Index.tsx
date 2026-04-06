import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FocusSection from "@/components/FocusSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import JourneySection from "@/components/JourneySection";
import ProjectsSection from "@/components/ProjectsSection";
import FreelanceSection from "@/components/FreelanceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FocusSection />
      <SkillsSection />
      <ExperienceSection />
      <JourneySection />
      <ProjectsSection />
      <FreelanceSection />
      <ContactSection />
    </div>
  );
};

export default Index;
