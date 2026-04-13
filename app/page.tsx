import BeforeAfterSection from "./components/BeforeAfterSection";
import ByokSection from "./components/ByokSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import EarlyAccessSection from "./components/EarlyAccessSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import FoundingBatchSection from "./components/FoundingBatchSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSimple from "./components/HowItWorksSimple";
import MeetPalarisSection from "./components/MeetPalarisSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import ProblemSection from "./components/ProblemSection";
import WhatIsSection from "./components/WhatIsSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatIsSection />
        <BeforeAfterSection />
        <MeetPalarisSection />
        <HowItWorksSimple />
        <CapabilitiesSection />
        <ByokSection />
        <FoundingBatchSection />
        <PricingSection />
        <FaqSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </div>
  );
}
