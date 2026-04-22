import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
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
        <AboutProblemSection />
        <TeamSection />
        <SolutionSection />
        <FeaturesSection />
        <CategoriesSection />
        <HowItWorksSection />
        <RoadmapSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
