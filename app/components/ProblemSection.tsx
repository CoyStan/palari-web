"use client";

import FadeIn from "./FadeIn";

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Every conversation starts from zero.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-10 max-w-2xl space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              You close the tab and the entity you were working with ceases to
              exist.
            </p>
            <p>
              You open a new tab and a stranger appears, wearing the same face,
              knowing nothing.
            </p>
            <p className="font-medium text-[#2E2A7B]">
              This is not how people work.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-12 max-w-md">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-[#ddd]" />
                  <div>
                    <p className="text-sm font-medium text-[#999]">AI Assistant</p>
                    <p className="mt-1 text-sm text-[#999]">
                      Hello! How can I help you today?
                    </p>
                  </div>
                </div>
                <div className="border-t border-dashed border-black/10 pt-3">
                  <p className="text-center text-xs text-[#aaa]">
                    Session ended. Context cleared.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-[#ddd]" />
                  <div>
                    <p className="text-sm font-medium text-[#999]">AI Assistant</p>
                    <p className="mt-1 text-sm text-[#999]">
                      Hello! How can I help you today?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
