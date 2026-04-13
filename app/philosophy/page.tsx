import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PhilosophyHero from "../components/philosophy/PhilosophyHero";
import MemoryNotStorage from "../components/philosophy/MemoryNotStorage";
import WeightOfHavingLived from "../components/philosophy/WeightOfHavingLived";
import TwoCognitiveSystems from "../components/philosophy/TwoCognitiveSystems";
import WhyGenerateLives from "../components/philosophy/WhyGenerateLives";
import EmotionalLockIn from "../components/philosophy/EmotionalLockIn";
import PhilosophyCta from "../components/philosophy/PhilosophyCta";

export const metadata: Metadata = {
  title: "Why Memory Matters \u2014 Palari",
  description:
    "The philosophy behind Palari\u2019s memory-first approach to AI colleagues.",
  alternates: { canonical: "https://palari.io/philosophy" },
  openGraph: {
    title: "Why Memory Matters \u2014 Palari",
    description:
      "The philosophy behind Palari\u2019s memory-first approach to AI colleagues.",
    type: "website",
    url: "https://palari.io/philosophy",
  },
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <PhilosophyHero />
        <MemoryNotStorage />
        <WeightOfHavingLived />
        <TwoCognitiveSystems />
        <WhyGenerateLives />
        <EmotionalLockIn />
        <PhilosophyCta />
      </main>
      <Footer />
    </div>
  );
}
