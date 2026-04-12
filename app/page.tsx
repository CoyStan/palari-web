import CapabilitiesSection from "./components/CapabilitiesSection";
import EarlyAccessSection from "./components/EarlyAccessSection";
import FaqSection from "./components/FaqSection";
import FeelingSection from "./components/FeelingSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import MeetPalarisSection from "./components/MeetPalarisSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import QuoteSection from "./components/QuoteSection";
import VibesLayerSection from "./components/VibesLayerSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#1B2A4A]">
      <Navbar />
      <main>
        <HeroSection />
        <FeelingSection />
        <MeetPalarisSection />
        <HowItWorksSection />
        <VibesLayerSection />
        <CapabilitiesSection />
        <QuoteSection />
        <PricingSection />
        <FaqSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </div>
  );
}
