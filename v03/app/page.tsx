import ByokSection from "./components/ByokSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import EarlyAccessSection from "./components/EarlyAccessSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import FoundingBatchSection from "./components/FoundingBatchSection";
import HeroSection from "./components/HeroSection";
import IntelligenceTiersSection from "./components/IntelligenceTiersSection";
import MeetPalarisSection from "./components/MeetPalarisSection";
import MemoryProofSection from "./components/MemoryProofSection";
import Navbar from "./components/Navbar";
import PersonalityEasterEggSection from "./components/PersonalityEasterEggSection";
import PortabilitySection from "./components/PortabilitySection";
import PricingSection from "./components/PricingSection";
import ProblemSection from "./components/ProblemSection";
import ScopedTrustSection from "./components/ScopedTrustSection";
import TwoBrainSection from "./components/TwoBrainSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <MemoryProofSection />
        <TwoBrainSection />
        <PortabilitySection />
        <IntelligenceTiersSection />
        <ScopedTrustSection />
        <CapabilitiesSection />
        <MeetPalarisSection />
        <ByokSection />
        <PersonalityEasterEggSection />
        <FoundingBatchSection />
        <PricingSection />
        <FaqSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </div>
  );
}
