"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

const faqItems = [
  {
    question: "How is a Palari different from ChatGPT or Claude?",
    answer:
      "ChatGPT and Claude have memory now. They store facts about you in a flat list. Palari&rsquo;s memory is structured: eleven types, an entity graph that connects people and projects, temporal tracking that knows when facts changed, and importance decay that keeps what matters and releases what doesn&rsquo;t. But the deeper difference is that Sofia has a name, a history, and a voice that&rsquo;s hers. She doesn&rsquo;t just remember what you said. She remembers it the way she would.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "A Slack workspace and an email. That&rsquo;s it. No terminal, no API keys, no config files. You invite Sofia to a channel, tell her what you&rsquo;re working on, and she takes it from there.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Each Palari has scoped access. Sofia sees the frontend folder, Leo sees the backend, neither sees your secrets. Memories are private per Palari by default. You control exactly what each one can read and write, and you can revoke access any time.",
  },
  {
    question: "Can I change how my Palari behaves?",
    answer:
      "Yes. Preferences are a memory type. Tell Sofia once that you want bullet points instead of paragraphs, or that you never want her to edit files in /shared without asking, and she remembers. You can also nudge her voice over time by reacting to her responses.",
  },
  {
    question: "What if I want to stop?",
    answer:
      "You can pause or delete your Palari at any time. Your memory is yours. You can export the full SQLite file, delete everything from our servers, and take the relationship with you.",
  },
  {
    question: "Does it work with our existing tools?",
    answer:
      "Slack, Google Docs, Sheets, Drive, and GitHub for code review. More integrations land as the team asks for them.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
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
                <article className="overflow-hidden rounded-[28px] bg-[#F7F5F2] ring-1 ring-black/5">
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
                        <p
                          className="px-6 pb-6 text-base leading-relaxed text-[#535778]"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
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
