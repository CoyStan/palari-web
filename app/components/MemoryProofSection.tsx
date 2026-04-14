"use client";

import FadeIn from "./FadeIn";

export default function MemoryProofSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-4xl">
              Memory is the dataset. Your dataset.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#4A4D73]">
              Same question. Same model underneath. Completely different answer
              &mdash; because one of them knows your project.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
            {/* Left: AI with a prompt */}
            <article>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5E84]">
                AI with a prompt
              </p>
              <div className="rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-black/5">
                <div className="mb-3 rounded-lg bg-[#F7F8FB] px-3 py-2 text-xs font-medium text-[#5B5E84]">
                  You: The release keeps regressing. Any ideas?
                </div>
                <div className="rounded-xl bg-[#F7F8FB] px-4 py-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#D0D4E0] to-[#B8BCCC]" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#5B5E84]/60">
                        AI Assistant
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                        Regressions usually come from untested code paths.
                        Consider adding more integration tests, setting up CI
                        gates, and reviewing recent changes. Want me to outline
                        a test plan?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Center connector */}
            <div className="hidden text-lg font-medium text-[#2E2A7B]/30 md:block">
              vs
            </div>

            {/* Right: AI with a memory of your work */}
            <article>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#22B8B0]">
                AI with a memory of your work
              </p>
              <div className="rounded-[28px] border-2 border-[#F46F61]/15 bg-white p-4 shadow-sm">
                <div className="mb-3 rounded-lg bg-[#FFF8F7] px-3 py-2 text-xs font-medium text-[#2E2A7B]/70">
                  You: The release keeps regressing. Any ideas?
                </div>
                <div className="rounded-xl bg-[#FFF8F7] px-4 py-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#FFD8C6] to-[#F5B9A2]" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#F46F61]">
                        Sofia
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                        Last sprint the regression came from the webhook retry
                        path &mdash; the one you flagged in the March audit and
                        never got back to. Want me to audit it now before we
                        lock the release?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-[#4A4D73]">
            The difference isn&apos;t the model. It&apos;s the dataset the AI
            brings to every conversation &mdash; your project history, your
            codebase patterns, your team&apos;s unfinished work.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
