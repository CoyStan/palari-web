import CapabilitiesSection from "./components/CapabilitiesSection";
import DemoSection from "./components/DemoSection";
import EarlyAccessSection from "./components/EarlyAccessSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import MeetPalarisSection from "./components/MeetPalarisSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import SocialProofBar from "./components/SocialProofBar";
import VibesLayerSection from "./components/VibesLayerSection";
import WhatIsPalariSection from "./components/WhatIsPalariSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#1B2A4A]">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <WhatIsPalariSection />
        <MeetPalarisSection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <VibesLayerSection />
        <DemoSection />
        <PricingSection />
        <FaqSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </div>
  );
}
