import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <ContactWidget />
    </div>
  );
};

export default Index;
