"use client";

import FadeIn from "../FadeIn";

const mamaMemories = [
  { label: "Working Memories", color: "bg-[#2E2A7B]/10 text-[#2E2A7B]" },
  { label: "Preferences", color: "bg-[#2E2A7B]/10 text-[#2E2A7B]" },
  { label: "Relationships", color: "bg-[#22B8B0]/10 text-[#22B8B0]" },
  { label: "Recent Context", color: "bg-[#22B8B0]/10 text-[#22B8B0]" },
];

const vibesMemories = [
  { label: "Life Events", color: "bg-[#F46F61]/10 text-[#F46F61]" },
  { label: "Sensory Memories", color: "bg-[#F46F61]/10 text-[#F46F61]" },
  { label: "Relationships", color: "bg-[#22B8B0]/10 text-[#22B8B0]" },
  { label: "Opinions", color: "bg-[#9B4FCC]/10 text-[#9B4FCC]" },
  { label: "Recent Context", color: "bg-[#22B8B0]/10 text-[#22B8B0]" },
];

export default function TwoBrainDiagram() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
              Architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Two brains, one colleague
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              Every message passes through two specialized systems. One does the work. The other
              makes it sound like someone you know.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col items-center gap-6">
            {/* Input node */}
            <div className="rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-3 text-sm font-semibold text-[#2E2A7B] shadow-sm">
              Your message
            </div>

            {/* Connector line down */}
            <div className="h-8 w-px border-l-2 border-dashed border-[#2E2A7B]/20" />

            {/* Split indicator */}
            <div className="flex w-full max-w-4xl items-start">
              {/* Left connector */}
              <div className="hidden flex-1 items-center justify-end md:flex">
                <div className="h-px flex-1 border-t-2 border-dashed border-[#2E2A7B]/20" />
              </div>

              {/* Center dot */}
              <div className="mx-4 hidden h-3 w-3 rounded-full bg-[#2E2A7B]/30 md:block" />

              {/* Right connector */}
              <div className="hidden flex-1 items-center md:flex">
                <div className="h-px flex-1 border-t-2 border-dashed border-[#F46F61]/30" />
              </div>
            </div>

            {/* Two brain cards */}
            <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
              {/* Analytical Brain */}
              <div className="rounded-[28px] bg-[#2E2A7B] p-7 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                  The Analytical Brain
                </p>
                <p className="mt-2 text-2xl font-bold text-white">Sonnet / Opus / Codex</p>
                <p className="mt-3 text-base leading-relaxed text-white/60">
                  Reads files, analyzes data, edits documents, writes code. This is the engine that
                  does the actual work.
                </p>
                <div className="mt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/30">
                    Receives
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mamaMemories.map((mem) => (
                      <span
                        key={mem.label}
                        className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80"
                      >
                        {mem.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vibes Layer */}
              <div className="rounded-[28px] border-2 border-[#F46F61]/20 bg-[#FFF5F0] p-7 shadow-lg">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F46F61]/50">
                    The Vibes Layer
                  </p>
                  <span className="rounded-full bg-[#F46F61]/10 px-3 py-1 text-xs font-semibold text-[#F46F61]">
                    $0.0006 / msg
                  </span>
                </div>
                <p className="mt-2 text-2xl font-bold text-[#2E2A7B]">Haiku</p>
                <p className="mt-3 text-base leading-relaxed text-[#535778]">
                  Rewrites every response to sound like a specific person. Personality, warmth, and
                  the texture of a real colleague.
                </p>
                <div className="mt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F46F61]/30">
                    Receives
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {vibesMemories.map((mem) => (
                      <span
                        key={mem.label}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${mem.color}`}
                      >
                        {mem.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Merge indicator */}
            <div className="flex w-full max-w-4xl items-start">
              <div className="hidden flex-1 items-center justify-end md:flex">
                <div className="h-px flex-1 border-t-2 border-dashed border-[#2E2A7B]/20" />
              </div>
              <div className="mx-4 hidden h-3 w-3 rounded-full bg-[#22B8B0]/50 md:block" />
              <div className="hidden flex-1 items-center md:flex">
                <div className="h-px flex-1 border-t-2 border-dashed border-[#F46F61]/30" />
              </div>
            </div>

            {/* Connector line down */}
            <div className="h-8 w-px border-l-2 border-dashed border-[#22B8B0]/30" />

            {/* Output node */}
            <div className="rounded-2xl bg-gradient-to-r from-[#22B8B0] to-[#2E2A7B] px-6 py-3 text-sm font-semibold text-white shadow-lg">
              What your Palari says in Slack
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-[#4A4D73]">
            The result: AI that can update your budget spreadsheet AND remember that you prefer
            morning messages and always want the bad news first.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
