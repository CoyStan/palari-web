import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LifeHero from "../components/life/LifeHero";
import SofiaTimelineSection from "../components/life/SofiaTimelineSection";
import LifeStepsSection from "../components/life/LifeStepsSection";
import FourPassesSection from "../components/life/FourPassesSection";
import CompressionSection from "../components/life/CompressionSection";
import SynthesisSection from "../components/life/SynthesisSection";
import VibesLayerHumanizationSection from "../components/life/VibesLayerHumanizationSection";
import DisclaimerCallout from "../components/life/DisclaimerCallout";

export const metadata: Metadata = {
  title: "Life. Palari.",
  description:
    "Every Palari ships with a life. A twenty-eight-year biography compressed into a person with opinions, scars, and a voice that&rsquo;s hers.",
  alternates: { canonical: "https://palari.io/life" },
  openGraph: {
    title: "Life. Palari.",
    description:
      "Every Palari ships with a life. A twenty-eight-year biography compressed into a person.",
    type: "website",
    url: "https://palari.io/life",
  },
};

export default function LifePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <LifeHero />
        <SofiaTimelineSection />
        <LifeStepsSection />
        <FourPassesSection />
        <CompressionSection />
        <SynthesisSection />
        <VibesLayerHumanizationSection />
        <DisclaimerCallout />
      </main>
      <Footer />
    </div>
  );
}
