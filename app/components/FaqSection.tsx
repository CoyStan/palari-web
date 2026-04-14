"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

const faqItems = [
  {
    question: "How is a Palari different from ChatGPT or Claude?",
    answer:
      "ChatGPT and Claude have basic memory now. They store facts about you in a flat list. Palari&rsquo;s memory is deeper: eleven types, entity graphs connecting people and projects, and temporal tracking that knows when facts changed. But the real difference is two things. Your Palari has a unique voice that&rsquo;s consistent across every interaction, and the infrastructure underneath keeps improving without you doing anything. New models, new techniques, new optimizations. All adopted by the Palari team and deployed to your coworker automatically.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. No terminal, no API keys, no config files. A Slack workspace and an email is all it takes. You invite Sofia to a channel, tell her what you&rsquo;re working on, and she takes it from there.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Each Palari has scoped file access. Sofia can only read and write the folders you assign her. She can&rsquo;t access Leo&rsquo;s files or Alfred&rsquo;s. Memory is private per coworker by default. You control exactly what each one can read and write, and you can revoke access any time.",
  },
  {
    question: "How does the voice work?",
    answer:
      "Each Palari&rsquo;s voice is generated through a proprietary process that produces unique convictions, preferences, and ways of noticing things. The same data analysis framed by Sofia sounds different from the same analysis framed by Alfred, not because they have different personalities pasted on top, but because they have different ways of thinking about problems. You choose the coworker whose voice matches how you want to work.",
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
