import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LearnerChoiceSection } from "@/components/sections/LearnerChoiceSection";
import {
  AboutProblemSection,
  CategoriesSection,
  CtaSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  RoadmapSection,
  SolutionSection,
  TeamSection,
} from "@/components/sections/LandingSections";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <HeroSection />
        <LearnerChoiceSection />
        <AboutProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <CategoriesSection />
        <HowItWorksSection />
        <RoadmapSection />
        <TeamSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
