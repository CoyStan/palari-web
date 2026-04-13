"use client";

import FadeIn from "./FadeIn";

export default function BeforeAfterSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            The difference you feel.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Typical AI */}
            <div className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F7F5F2] px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[#ccc]" />
                <span className="text-xs font-semibold text-[#999]">
                  Typical AI
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-8 w-8 shrink-0 rounded-full bg-[#ddd]" />
                <p className="text-sm leading-6 text-[#666]">
                  I&apos;ve identified the issue in your authentication module.
                  The token_lifetime() function returns 0 when the configuration
                  is absent. I&apos;ve implemented a fix by adding a default
                  value. All tests are now passing successfully. Let me know if
                  you need anything else!
                </p>
              </div>
            </div>

            {/* Sofia */}
            <div className="rounded-[28px] border-2 border-[#F46F61]/20 bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F46F61]/10 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[#F46F61]" />
                <span className="text-xs font-semibold text-[#F46F61]">
                  Sofia
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-8 w-8 shrink-0 rounded-full bg-[#F46F61]" />
                <p className="text-sm leading-6 text-[#2E2A7B]">
                  found the bug. it was in the auth module &mdash; token lifetime
                  was set to 0 when the config is missing. fixed it, tests pass
                  now
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-8 text-center text-base text-[#4A4D73]">
            Same answer. Same accuracy. One sounds like software. The other
            sounds like your coworker.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
