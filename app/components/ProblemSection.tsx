"use client";

import FadeIn from "./FadeIn";

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            {/* Left: Typical AI — the problem */}
            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F7F5F2] px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[#ccc]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                  Every other AI
                </span>
              </div>

              <p className="mb-4 text-sm font-semibold text-[#999]">
                Every conversation starts from zero.
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-[#ddd]" />
                  <div>
                    <p className="text-xs font-medium text-[#aaa]">
                      AI Assistant
                    </p>
                    <p className="mt-0.5 text-sm text-[#999]">
                      Hello! How can I help you today?
                    </p>
                  </div>
                </div>

                <div className="border-t border-dashed border-black/8 py-1.5">
                  <p className="text-center text-[10px] tracking-wide text-[#bbb]">
                    Session ended. Context cleared.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-[#ddd]" />
                  <div>
                    <p className="text-xs font-medium text-[#aaa]">
                      AI Assistant
                    </p>
                    <p className="mt-0.5 text-sm text-[#999]">
                      Hello! How can I help you today?
                    </p>
                  </div>
                </div>

                <div className="border-t border-dashed border-black/8 py-1.5">
                  <p className="text-center text-[10px] tracking-wide text-[#bbb]">
                    Session ended. Context cleared.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-[#ddd]" />
                  <div>
                    <p className="text-xs font-medium text-[#aaa]">
                      AI Assistant
                    </p>
                    <p className="mt-0.5 text-sm text-[#999]">
                      Hello! How can I help you today?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Palari — the solution */}
            <div className="rounded-[28px] border-2 border-[#22B8B0]/20 bg-white p-6 shadow-sm">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#22B8B0]/10 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[#22B8B0]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#22B8B0]">
                  With Palari
                </span>
              </div>

              <p className="mb-4 text-sm font-semibold text-[#2E2A7B]">
                Every conversation builds on the last.
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-[#F46F61]" />
                  <div>
                    <p className="text-xs font-semibold text-[#2E2A7B]">
                      Sofia
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                      Hey &mdash; saw you pushed that auth fix. The tests pass now
                      but I noticed the token_lifetime default changed. Want me to
                      update the staging config?
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#22B8B0]/10 py-1.5">
                  <p className="text-center text-[10px] tracking-wide text-[#22B8B0]/60">
                    Three weeks later
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-[#F46F61]" />
                  <div>
                    <p className="text-xs font-semibold text-[#2E2A7B]">
                      Sofia
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                      Morning. That token issue from last month? Similar pattern
                      just showed up in the payments module. Already on it.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#22B8B0]/10 py-1.5">
                  <p className="text-center text-[10px] tracking-wide text-[#22B8B0]/60">
                    Two months later
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-[#F46F61]" />
                  <div>
                    <p className="text-xs font-semibold text-[#2E2A7B]">
                      Sofia
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                      I refactored the config loader to prevent the whole class of
                      token bugs. Three incidents, one root cause. Done.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 text-center text-lg font-medium text-[#2E2A7B]">
            This is not how people work. People remember.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
