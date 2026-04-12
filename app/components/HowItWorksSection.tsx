"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

type ConversationItem =
  | { kind: "system"; text: string }
  | { kind: "message"; author: "Sofia" | "You"; text: string }
  | { kind: "reaction"; text: string }
  | { kind: "actions" }
  | { kind: "attachment"; file: string }
  | { kind: "pin"; text: string };

const conversation: ConversationItem[] = [
  { kind: "system", text: "Sofia has joined #frontend" },
  {
    kind: "message",
    author: "Sofia",
    text: "hey! I'm Sofia, I'll be handling frontend here. point me at a repo and I'll get to work, or just drop a question",
  },
  {
    kind: "message",
    author: "You",
    text: "sofia can you look at the login component? it's breaking on mobile",
  },
  { kind: "reaction", text: "Sofia reacted with :eyes:" },
  { kind: "message", author: "Sofia", text: "looking at it now" },
  { kind: "reaction", text: "Sofia reacted with :hourglass:" },
  {
    kind: "message",
    author: "Sofia",
    text: "found it, the viewport meta tag is missing and theres a css issue on the form container",
  },
  {
    kind: "message",
    author: "Sofia",
    text: "I can fix both. the viewport tag is one line and the css is just a max-width change",
  },
  { kind: "message", author: "Sofia", text: "want me to go ahead?" },
  { kind: "actions" },
  { kind: "reaction", text: "Sofia reacted with :white_check_mark:" },
  { kind: "message", author: "Sofia", text: "done! pushed both fixes. diff attached" },
  { kind: "attachment", file: "login-fix.diff" },
  { kind: "pin", text: "Sofia pinned this message" },
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
    <FadeIn>
      <section className="scroll-mt-28 py-24 md:py-32" id="how-it-works">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">
              It starts with a conversation
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto rounded-3xl border border-[#E7DBD2] bg-[#FBF6F1] p-2 md:p-4">
            <div ref={chatRef} className="min-w-[720px] overflow-hidden rounded-2xl border border-[#D8D2CA] bg-white shadow-xl">
              <div className="grid grid-cols-[240px_1fr]">
                <aside className="bg-[#1D1C1D] px-4 py-5 text-[#D9D7DA]">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B9B7BB]">Workspace</p>
                  <p className="mt-2 text-sm font-medium text-white">Palari HQ</p>

                  <div className="mt-6 space-y-1 text-sm">
                    <p className="rounded-md px-2 py-1 text-[#BFBCC2]">#general</p>
                    <p className="rounded-md bg-[#4A154B] px-2 py-1 text-white">
                      <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[#3ECDA5]" />
                      #frontend
                    </p>
                    <p className="rounded-md px-2 py-1 text-[#BFBCC2]">#product</p>
                    <p className="rounded-md px-2 py-1 text-[#BFBCC2]">#standup</p>
                  </div>
                </aside>

                <div className="bg-white">
                  <header className="border-b border-gray-200 px-6 py-4">
                    <p className="text-lg font-semibold text-[#1D1C1D]">#frontend</p>
                    <p className="mt-1 text-xs text-gray-500">4 members · Sofia active now</p>
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
                          <p className="text-center text-xs font-medium text-gray-400">{item.text}</p>
                        )}

                        {item.kind === "reaction" && (
                          <p className="text-sm italic text-gray-500">[{item.text}]</p>
                        )}

                        {item.kind === "actions" && (
                          <div className="flex gap-3">
                            <span className="inline-flex rounded-full bg-[#3ECDA5] px-4 py-1.5 text-sm font-semibold text-white">
                              Go ahead
                            </span>
                            <span className="inline-flex rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-gray-600">
                              Skip
                            </span>
                          </div>
                        )}

                        {item.kind === "attachment" && (
                          <div className="inline-flex items-center gap-2 rounded-lg border border-[#D8E4FF] bg-[#F2F6FF] px-3 py-2 text-sm text-[#2E4A8A]">
                            <span aria-hidden="true">[file]</span>
                            {item.file}
                          </div>
                        )}

                        {item.kind === "pin" && (
                          <p className="text-sm italic text-gray-500">[{item.text}]</p>
                        )}

                        {item.kind === "message" && (
                          <div className="flex items-start gap-3">
                            <span
                              className={`mt-1 h-7 w-7 shrink-0 rounded-full ${avatarClass(item.author)}`}
                              aria-hidden="true"
                            />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
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

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
            No terminal. No config files. No scary prompts. Just a conversation with your
            teammate.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
