import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CharacterHero from "../components/character/CharacterHero";
import WhatACharacterIs from "../components/character/WhatACharacterIs";
import HonestySection from "../components/character/HonestySection";
import HowItHoldsSection from "../components/character/HowItHoldsSection";
import CharacterCta from "../components/character/CharacterCta";

const title = "The character. Palari.";
const description =
  "A Palari is a coworker embodied as a character: a stable voice, a set of preferences, a way of noticing. Not a person, not conscious, honest about what it is.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://palari.io/character" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://palari.io/character",
  },
};

export default function CharacterPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <CharacterHero />
        <WhatACharacterIs />
        <HonestySection />
        <HowItHoldsSection />
        <CharacterCta />
      </main>
      <Footer />
    </div>
  );
}
