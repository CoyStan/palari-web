"use client";

import { motion } from "framer-motion";
import FadeIn from "../FadeIn";

const stages = [
  { label: "Day 1", description: "Read-only in one channel" },
  { label: "Week 1", description: "Write access to working docs" },
  { label: "Month 1", description: "Cross-channel visibility" },
  { label: "Month 3", description: "Full team integration" },
];

export default function ProgressiveTrustSection() {
  return (
    <section className="bg-gradient-to-b from-[#F7F5F2] to-[#F0F9F8]/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
            Progressive Trust
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Trust builds naturally
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Start with minimal access. Expand as you get comfortable. Your Palari earns its scope
            the same way any new team member does.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12">
            {/* Desktop: horizontal */}
            <div className="hidden md:flex md:items-start md:gap-0">
              {stages.map((stage, i) => (
                <div key={stage.label} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.15 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#22B8B0] to-[#2E2A7B] text-sm font-bold text-white shadow-md"
                    >
                      {i + 1}
                    </motion.div>
                    <p className="mt-3 text-center text-sm font-semibold text-[#2E2A7B]">
                      {stage.label}
                    </p>
                    <p className="mt-1 text-center text-xs text-[#5B5E84]">{stage.description}</p>
                  </div>
                  {i < stages.length - 1 && (
                    <div className="mx-2 mt-1 h-px flex-1 border-t-2 border-dashed border-[#2E2A7B]/15" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: vertical */}
            <div className="relative flex flex-col gap-6 md:hidden">
              <div
                className="absolute left-6 top-0 h-full w-px border-l-2 border-dashed border-[#2E2A7B]/10"
                aria-hidden="true"
              />
              {stages.map((stage, i) => (
                <div key={stage.label} className="flex items-start gap-5">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#22B8B0] to-[#2E2A7B] text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2E2A7B]">{stage.label}</p>
                    <p className="mt-0.5 text-sm text-[#5B5E84]">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-[#4A4D73]">
            No binary &ldquo;all or nothing&rdquo; commitment. No escalation of anxiety. You&apos;re
            always in control.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
