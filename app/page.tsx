import CompoundingOverTimeSection from "./components/CompoundingOverTimeSection";
import EarlyAccessSection from "./components/EarlyAccessSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import GoldenRuleSection from "./components/GoldenRuleSection";
import HeroSection from "./components/HeroSection";
import MeetPalarisSection from "./components/MeetPalarisSection";
import Navbar from "./components/Navbar";
import NeverFallBehindSection from "./components/NeverFallBehindSection";
import PricingSection from "./components/PricingSection";
import RealWorkSection from "./components/RealWorkSection";
import SameWorkFiveVoicesSection from "./components/SameWorkFiveVoicesSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <HeroSection />
        <CompoundingOverTimeSection />
        <SameWorkFiveVoicesSection />
        <MeetPalarisSection />
        <NeverFallBehindSection />
        <RealWorkSection />
        <GoldenRuleSection />
        <PricingSection />
        <FaqSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </div>
  );
}
