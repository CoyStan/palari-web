"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

const faqItems = [
  {
    question: "How is a Palari different from ChatGPT?",
    answer:
      "ChatGPT forgets you the moment you close the tab. A Palari remembers. Sofia lives in your Slack and carries your context\u2014your projects, your preferences, your history\u2014across every conversation. She doesn\u2019t just respond to what you say now. She remembers what you said last week.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "Not at all. You talk to your Palaris in plain language, and they remember how you prefer to communicate. Over time, a Palari learns your style and explains things the way you understand best.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Palaris only access what you explicitly connect. Google Docs require your approval. We never store your documents longer than needed.",
  },
  {
    question: "Can I customize a Palari?",
    answer:
      "Completely. Change their name, personality, expertise, and how they communicate. Every customization becomes part of their memory\u2014your Palari grows into exactly the colleague you need. Or start with a pre-built Palari from the marketplace.",
  },
  {
    question: "What if I want to stop?",
    answer:
      "Cancel anytime. No lock-in. The open source core means you can always self-host.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Your subscription covers a weekly compute budget. Most messages cost less than a tenth of a cent. Your Palari warns you before expensive tasks and never goes silent. The planning layer optimizes every interaction so you get the most from your budget.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. Your Palari\u2019s identity lives in a SQLite database you own. Export it anytime. Run your own server with the open-source core. Switch models freely. We believe in lock-in through value, not walls.",
  },
  {
    question: "Who can my Palari access?",
    answer:
      "Each Palari gets scoped access. Sofia might see your operations files. Leo might see your data. They don\u2019t cross boundaries unless you grant it. Start small, expand as trust builds. Mistakes stay contained.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F7F5F2] py-16 md:py-20">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-4xl">
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
                    <span className="text-lg font-semibold text-[#2E2A7B]">{item.question}</span>
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
