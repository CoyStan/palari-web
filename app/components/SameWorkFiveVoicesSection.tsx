"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { scenarios, voices } from "../data/voices";

export default function SameWorkFiveVoicesSection() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);
  const scenario =
    scenarios.find((s) => s.id === activeScenario) ?? scenarios[0];

  return (
    <section
      id="five-voices"
      className="relative overflow-hidden bg-gradient-to-b from-[#F7F5F2] via-white to-[#F7F5F2] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
              Same work, five voices
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              One output. Five coworkers. Five ways of thinking.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4A4D73]">
              Pick a task. Watch five Palaris frame the same facts five
              different ways. The numbers and dates stay identical. The
              judgment, rhythm, and questions shift with each coworker.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {scenarios.map((s) => {
              const isActive = s.id === activeScenario;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveScenario(s.id)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#2E2A7B] text-white shadow-md"
                      : "bg-white text-[#4A4D73] ring-1 ring-black/5 hover:bg-[#EEEAF8]"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 rounded-[24px] bg-white p-5 ring-1 ring-black/5 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B5E84]/70">
              Raw AI output
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={scenario.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-3 text-base leading-relaxed text-[#535778]"
              >
                {scenario.rawOutput}
              </motion.p>
            </AnimatePresence>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {voices.map((voice) => (
            <FadeIn key={voice.id}>
              <div
                className={`flex h-full flex-col rounded-[24px] border-2 ${voice.accentBorder} bg-white p-5`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-8 w-8 shrink-0 rounded-full ${voice.dot}`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-[#2E2A7B]">
                      {voice.name}
                    </h3>
                    <p className="text-xs text-[#5B5E84]/80">{voice.role}</p>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${voice.id}-${scenario.id}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 text-sm leading-relaxed text-[#2E2A7B]"
                  >
                    {scenario.responses[voice.id]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[#5B5E84]">
            Every Palari's voice is generated through a proprietary process
            that produces unique convictions and ways of noticing. Same
            engine, same facts, different coworker. You pick the one that
            thinks the way you do.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
