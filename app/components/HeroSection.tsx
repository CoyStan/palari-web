"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

const cyclingLines = [
  "Sofia just fixed the auth bug",
  "Leo optimized the dashboard query",
  "Alfred prepared your weekly briefing",
];

export default function HeroSection() {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLine((prev) => (prev + 1) % cyclingLines.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <FadeIn>
      <section className="flex min-h-screen items-center py-24 md:py-32" id="top">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl font-bold tracking-tight text-[#1B2A4A] md:text-7xl"
              >
                Some colleagues are unforgettable
              </motion.h1>

              <p className="max-w-xl text-xl leading-relaxed text-gray-500">
                They show up every morning. They remember your last conversation. They push back
                when your idea needs work. They celebrate when you ship. And they never, ever
                forget what you&apos;re working on.
              </p>

              <a
                href="#meet-team"
                className="inline-flex rounded-full bg-gradient-to-r from-[#3ECDA5] to-[#3B5EE8] px-8 py-4 text-lg font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
              >
                Meet them
              </a>
            </div>

            <div className="flex w-full justify-center md:justify-end">
              <div className="aspect-[4/5] w-full max-w-lg rounded-3xl border border-[#EEE2D8] bg-gradient-to-br from-[#FDEEE4] via-[#FBECDD] to-[#EAF3FF] shadow-sm">
                {/* IMAGE: Warm office scene, Palaris and humans working together at a wooden desk, coffee cups, brick walls, natural lighting. Use Image 7 or 9 style. */}
              </div>
            </div>
          </div>

          <div className="mt-10 flex h-8 items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={cyclingLines[activeLine]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45 }}
                className="text-center text-sm italic text-gray-400 md:text-base"
              >
                {cyclingLines[activeLine]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
