import CompoundingOverTimeSection from "./components/CompoundingOverTimeSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import GoldenRuleSection from "./components/GoldenRuleSection";
import HeroSection from "./components/HeroSection";
import MeetPalarisSection from "./components/MeetPalarisSection";
import Navbar from "./components/Navbar";
import NeverFallBehindSection from "./components/NeverFallBehindSection";
import PageNextCta from "./components/PageNextCta";
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
        <PageNextCta
          eyebrow="Start here"
          headline="Memory is what makes a Palari different. Start there."
          body="The rest of the story — character, trust, philosophy — all comes from the shape of the memory. Read that first and everything after will make more sense."
          next={{ label: "See how memory works", href: "/memory" }}
        />
      </main>
      <Footer />
    </div>
  );
}
