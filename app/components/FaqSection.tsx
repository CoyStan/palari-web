"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

const faqItems = [
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT is a tool you visit. A Palari is a teammate who shows up. Sofia lives in your Slack, remembers your project, reads your docs, makes changes, and asks before she acts. ChatGPT forgets everything when you close the tab.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. You talk to your Palaris in plain language. They handle the technical parts and explain everything in words you understand.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Palaris only access what you explicitly connect. Google Docs require your OAuth approval. Code stays on your machine or server. We never store your data longer than needed for processing.",
  },
  {
    question: "Can I customize my Palaris?",
    answer:
      "Completely. Change their name, personality, expertise, communication style, and opinions. Create new Palaris from scratch or install pre-built ones from the marketplace.",
  },
  {
    question: "What if I want to stop?",
    answer:
      "Cancel anytime. Export your Palari configurations. No lock-in. The open source core means you can always self-host.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <FadeIn>
      <section className="bg-[#F8F9FC] py-24 md:py-32">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">Questions</h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article key={item.question} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-lg font-semibold text-[#1B2A4A]">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl text-gray-400"
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
                        <p className="px-6 pb-6 text-base leading-relaxed text-gray-600">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
