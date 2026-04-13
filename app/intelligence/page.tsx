import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntelligenceHero from "../components/intelligence/IntelligenceHero";
import ThreeTierSection from "../components/intelligence/ThreeTierSection";
import BudgetSystemSection from "../components/intelligence/BudgetSystemSection";
import UserExperiencesSection from "../components/intelligence/UserExperiencesSection";
import LearningSection from "../components/intelligence/LearningSection";
import EconomicsSection from "../components/intelligence/EconomicsSection";
import IntelligenceCta from "../components/intelligence/IntelligenceCta";

export const metadata: Metadata = {
  title: "How Palaris Think \u2014 Palari",
  description:
    "Three tiers of intelligence, transparent budgets, and a planning layer that pays for itself.",
  alternates: { canonical: "https://palari.io/intelligence" },
  openGraph: {
    title: "How Palaris Think \u2014 Palari",
    description:
      "Three tiers of intelligence, transparent budgets, and a planning layer that pays for itself.",
    type: "website",
    url: "https://palari.io/intelligence",
  },
};

export default function IntelligencePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <IntelligenceHero />
        <ThreeTierSection />
        <BudgetSystemSection />
        <UserExperiencesSection />
        <LearningSection />
        <EconomicsSection />
        <IntelligenceCta />
      </main>
      <Footer />
    </div>
  );
}
