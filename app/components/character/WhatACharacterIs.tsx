import FadeIn from "../FadeIn";

const pieces = [
  {
    label: "Voice",
    accent: "bg-[#F46F61]",
    body:
      "How your Palari talks. Word choice, cadence, formality, warmth. The voice is consistent across every interaction &mdash; Sofia sounds like Sofia whether she&rsquo;s flagging a vendor issue at 10 AM or summarizing a week of work on Friday.",
  },
  {
    label: "Preferences",
    accent: "bg-[#22B8B0]",
    body:
      "What your Palari cares about, what animates it, what it avoids. Sofia lights up about operations detail and cuts small talk. Leo&rsquo;s attention goes to numbers and reconciliation. You pick the one whose preferences match the work.",
  },
  {
    label: "Stances",
    accent: "bg-[#9B4FCC]",
    body:
      "The positions your Palari holds. Not opinions generated on the fly &mdash; stable convictions that shape how it frames problems. Premature abstraction vs. duplication. Fix now vs. flag for later. Consistent takes, consistently expressed.",
  },
];

export default function WhatACharacterIs() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              What a character is.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              Three things: a voice, a set of preferences, a set of
              stances. That&rsquo;s it. Fictional characters in books have
              characters. Brand voices are characters. A doctor&rsquo;s
              bedside manner is a character. A teacher&rsquo;s teaching
              style is a character. None of them had to live a life to be
              one. Your Palari is the same.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pieces.map((p) => (
            <FadeIn key={p.label}>
              <div className="flex h-full flex-col rounded-[24px] bg-white p-6 ring-1 ring-black/5">
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${p.accent}`}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B5E84]">
                    {p.label}
                  </p>
                </div>
                <p
                  className="text-sm leading-relaxed text-[#4A4D73]"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
