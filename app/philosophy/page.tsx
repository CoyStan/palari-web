import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PhilosophyHero from "../components/philosophy/PhilosophyHero";
import IncentiveAlignmentSection from "../components/philosophy/IncentiveAlignmentSection";
import ThreeLayersSection from "../components/philosophy/ThreeLayersSection";
import AlwaysImprovingSection from "../components/philosophy/AlwaysImprovingSection";
import PortabilitySection from "../components/philosophy/PortabilitySection";
import ScopedTrustRationaleSection from "../components/philosophy/ScopedTrustRationaleSection";
import EthicsSection from "../components/philosophy/EthicsSection";
import FounderStorySection from "../components/philosophy/FounderStorySection";
import PageNextCta from "../components/PageNextCta";

export const metadata: Metadata = {
  title: "Philosophy. Palari.",
  description:
    "Why we built AI coworkers that keep getting better on your behalf. Incentive alignment, three-layer architecture, portability, and the founder story behind Palari.",
  alternates: { canonical: "https://palari.io/philosophy" },
  openGraph: {
    title: "Philosophy. Palari.",
    description:
      "Why we built AI coworkers that keep getting better on your behalf. Incentive alignment, three-layer architecture, portability.",
    type: "article",
    url: "https://palari.io/philosophy",
  },
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <PhilosophyHero />
        <IncentiveAlignmentSection />
        <ThreeLayersSection />
        <AlwaysImprovingSection />
        <PortabilitySection />
        <ScopedTrustRationaleSection />
        <EthicsSection />
        <FounderStorySection />
        <PageNextCta
          eyebrow="Ready when you are"
          headline="Meet a coworker who remembers."
          body="Start building memory from day one. What you tell your Palari today will shape how it answers you next month."
          next={{ label: "Get early access", href: "/#early-access" }}
          secondary={{ label: "Start from the memory system", href: "/memory" }}
        />
      </main>
      <Footer />
    </div>
  );
}
