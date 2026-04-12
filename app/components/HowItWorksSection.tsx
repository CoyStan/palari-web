"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

type ConversationItem =
  | { kind: "system"; text: string }
  | { kind: "message"; author: "Sofia" | "You"; text: string }
  | { kind: "reaction"; text: string }
  | { kind: "actions" };

const conversation: ConversationItem[] = [
  { kind: "system", text: "Sofia has joined #operations" },
  {
    kind: "message",
    author: "Sofia",
    text: "hey! I'm Sofia, your operations Palari. tell me what's on your plate and I'll start remembering",
  },
  {
    kind: "message",
    author: "You",
    text: "can you update the client proposal? the budget changed from 50k to 65k and the timeline moved to Q3",
  },
  { kind: "reaction", text: "Sofia reacted with :eyes:" },
  {
    kind: "message",
    author: "Sofia",
    text: "found it. two changes: budget in section 4 and timeline in section 2",
  },
  {
    kind: "message",
    author: "Sofia",
    text: "want me to update the doc or leave comments for the team to review?",
  },
  { kind: "actions" },
  { kind: "reaction", text: "Sofia reacted with :white_check_mark:" },
  {
    kind: "message",
    author: "Sofia",
    text: "done, both sections updated. here's the doc",
  },
];

function avatarClass(author: "Sofia" | "You") {
  return author === "Sofia"
    ? "bg-gradient-to-br from-[#FFD8C6] to-[#F5B9A2]"
    : "bg-gradient-to-br from-[#CFDAFF] to-[#AFC2F5]";
}

export default function HowItWorksSection() {
  const chatRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(chatRef, { once: true, margin: "-120px" });

  return (
    <section className="relative bg-gradient-to-b from-[#F7F5F2] to-[#F2F0ED] py-16 md:py-20" id="how-it-works">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-4xl">
              It starts with a conversation. It grows into a memory.
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 overflow-x-auto">
            {/* Dark outer card frame */}
            <div className="min-w-[680px] rounded-[32px] bg-[#2E2A7B] p-4 shadow-2xl shadow-[#2E2A7B]/10">
              {/* Header */}
              <div className="mb-3 flex items-center justify-between px-2">
                <div>
                  <p className="text-sm font-medium text-white/70">Palari HQ</p>
                  <p className="text-lg font-semibold text-white">#operations</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#F46F61]" />
                  <span className="h-3 w-3 rounded-full bg-[#E7B83D]" />
                  <span className="h-3 w-3 rounded-full bg-[#22B8B0]" />
                </div>
              </div>

              {/* White inner panel */}
              <div
                ref={chatRef}
                className="overflow-hidden rounded-[24px] bg-white"
              >
                <div className="grid grid-cols-[200px_1fr]">
                  {/* Slack sidebar */}
                  <aside className="bg-[#1D1C1D] px-4 py-5 text-[#D9D7DA]">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B9B7BB]">
                      Channels
                    </p>

                    <div className="mt-4 space-y-1 text-sm">
                      <p className="rounded-lg px-2 py-1.5 text-[#BFBCC2]">#general</p>
                      <p className="rounded-lg bg-[#4A154B] px-2 py-1.5 font-medium text-white">
                        <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[#22B8B0]" />
                        #operations
                      </p>
                      <p className="rounded-lg px-2 py-1.5 text-[#BFBCC2]">#client-projects</p>
                    </div>
                  </aside>

                  {/* Chat area */}
                  <div className="bg-white">
                    <header className="border-b border-black/5 px-6 py-3">
                      <p className="text-base font-semibold text-[#1D1C1D]">#operations</p>
                      <p className="mt-0.5 text-xs text-[#5B5E84]">
                        3 members · Sofia active now
                      </p>
                    </header>

                    <div className="space-y-3 px-6 py-5">
                      {conversation.map((item, index) => (
                        <motion.div
                          key={`${item.kind}-${index}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                          transition={{ duration: 0.35, delay: index * 0.5 }}
                        >
                          {item.kind === "system" && (
                            <p className="text-center text-xs font-medium text-[#5B5E84]/60">
                              {item.text}
                            </p>
                          )}

                          {item.kind === "reaction" && (
                            <p className="text-sm italic text-[#5B5E84]">[{item.text}]</p>
                          )}

                          {item.kind === "actions" && (
                            <div className="flex gap-3">
                              <span className="inline-flex rounded-full bg-[#22B8B0] px-4 py-1.5 text-sm font-semibold text-white">
                                Update the doc
                              </span>
                              <span className="inline-flex rounded-full border border-black/10 px-4 py-1.5 text-sm font-semibold text-[#4A4D73]">
                                Leave comments
                              </span>
                            </div>
                          )}

                          {item.kind === "message" && (
                            <div className="flex items-start gap-3">
                              <span
                                className={`mt-1 h-7 w-7 shrink-0 rounded-full ${avatarClass(item.author)}`}
                                aria-hidden="true"
                              />
                              <div className="min-w-0">
                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5B5E84]/60">
                                  {item.author}
                                </p>
                                <p className="mt-1 rounded-xl bg-[#F7F8FB] px-3 py-2 text-[0.94rem] leading-relaxed text-[#334155]">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-[#4A4D73]">
            No learning curve. No setup guide. No training. Just tell your Palari what you need.
            Tomorrow, they&apos;ll remember today.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
