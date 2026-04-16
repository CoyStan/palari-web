import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrustHero from "../components/trust/TrustHero";
import TheProblemSection from "../components/trust/TheProblemSection";
import PerCoworkerScopingSection from "../components/trust/PerCoworkerScopingSection";
import ProgressiveTrustSection from "../components/trust/ProgressiveTrustSection";
import CompartmentalizedRiskSection from "../components/trust/CompartmentalizedRiskSection";
import MemoryIsolationSection from "../components/trust/MemoryIsolationSection";
import MultiCoworkerCoordinationSection from "../components/trust/MultiCoworkerCoordinationSection";
import GoldenRuleCalloutSection from "../components/trust/GoldenRuleCalloutSection";
import PageNextCta from "../components/PageNextCta";

export const metadata: Metadata = {
  title: "Trust. Palari.",
  description:
    "Scoped access, progressive trust, compartmentalized risk, memory isolation, and the golden rule: Palaris never act without your permission.",
  alternates: { canonical: "https://palari.io/trust" },
  openGraph: {
    title: "Trust. Palari.",
    description:
      "AI coworkers that earn access the way employees do, with narrow scope, audit trails, and propose-and-approve on every write.",
    type: "website",
    url: "https://palari.io/trust",
  },
};

export default function TrustPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <TrustHero />
        <TheProblemSection />
        <PerCoworkerScopingSection />
        <ProgressiveTrustSection />
        <CompartmentalizedRiskSection />
        <MemoryIsolationSection />
        <MultiCoworkerCoordinationSection />
        <GoldenRuleCalloutSection />
        <PageNextCta
          headline="You've seen how it works. Here's why we built it this way."
          body="The memory system, the character, the scoped trust: they're all answers to a single argument about what AI coworkers should be, and who their incentives should serve."
          next={{ label: "Read the philosophy", href: "/philosophy" }}
        />
      </main>
      <Footer />
    </div>
  );
}
