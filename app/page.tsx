import CapabilitiesSection from "./components/CapabilitiesSection";
import MemoryTeaser from "./components/MemoryTeaser";
import EarlyAccessSection from "./components/EarlyAccessSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import FullWidthPhoto from "./components/FullWidthPhoto";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import MeetPalarisSection from "./components/MeetPalarisSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import QuoteSection from "./components/QuoteSection";
import SocialProofBar from "./components/SocialProofBar";
import VibesLayerSection from "./components/VibesLayerSection";
import WhatIsSection from "./components/WhatIsSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <WhatIsSection />
        <MeetPalarisSection />
        <HowItWorksSection />
        <VibesLayerSection />
        <MemoryTeaser />
        <CapabilitiesSection />
        <FullWidthPhoto />
        <QuoteSection />
        <PricingSection />
        <FaqSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </div>
  );
}
