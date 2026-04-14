"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

const faqItems = [
  {
    question: "What API key do I need?",
    answer:
      "An Anthropic API key (for Claude) or an OpenAI key. Most founding users use Claude. You sign up at the provider\u2019s site, generate a key, and paste it into Palari. Your Palari uses this key for the heavy thinking work. Palari covers the rest.",
  },
  {
    question: "How much will my API usage cost?",
    answer:
      "Roughly $5\u201315/month depending on how much you use it. The Planning Layer actively optimizes your spend \u2014 85% of messages go through the cheapest path. Your Palari will warn you before expensive tasks.",
  },
  {
    question: "How is a Palari different from ChatGPT?",
    answer:
      "ChatGPT forgets you the moment you close the tab. A Palari remembers your project \u2014 the decisions, the regressions, the patterns across sprints. That memory compounds over weeks. By week four, it knows what matters in your codebase and who to ping.",
  },
  {
    question: "Can I switch models or hosts later?",
    answer:
      "Your Palari\u2019s identity lives in a SQLite file you own. Download it, back it up, migrate between Claude, GPT, or open models, or run the open-source server on your own infrastructure. Same Palari, new engine.",
  },
  {
    question: "Does it work with our existing tools?",
    answer:
      "Slack, Google Docs, Sheets, and Drive, plus GitHub for code review. BYOK works with Anthropic (Claude) or OpenAI today. More integrations land as the founding batch asks for them.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Each Palari has scoped access \u2014 Sofia sees the frontend folder, Leo sees the backend, neither sees your secrets. Memories are isolated per-Palari. You control exactly what each one can access.",
  },
  {
    question: "What happens after the founding batch?",
    answer:
      "Stage 2 pricing kicks in: $29/month for individuals, $149/month for teams. Founding batch members keep free access for the duration of Stage 1. Your creation number is permanent regardless.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Questions
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={item.question}>
                <article className="overflow-hidden rounded-[28px] bg-white ring-1 ring-black/5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-lg font-semibold text-[#2E2A7B]">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl text-[#2E2A7B]/30"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-base leading-relaxed text-[#535778]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
