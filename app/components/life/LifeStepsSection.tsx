import FadeIn from "../FadeIn";

const steps = [
  {
    title: "Seed",
    body: "Role, working style, and name. The starting input.",
    accent: "bg-[#E7B83D]",
  },
  {
    title: "Four passes",
    body: "Defining events, small moments, relationships, and sensory fragments. Each pass adds a different texture to the voice.",
    accent: "bg-[#22B8B0]",
  },
  {
    title: "Compression",
    body: "Five small memories become one understanding. The voice is distilled from the raw material.",
    accent: "bg-[#9B4FCC]",
  },
  {
    title: "Synthesis",
    body: "Core convictions, relationship patterns, preferences, and a concrete sensory library.",
    accent: "bg-[#2E2A7B]",
  },
  {
    title: "A coworker",
    body: "A specialist with a persistent voice. Ready to hire.",
    accent: "bg-[#F46F61]",
  },
];

export default function LifeStepsSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              The process, end to end.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              A one-time process, run before your Palari ships. About a
              dollar in compute, start to finish. You never see it happen.
              You notice the difference the first time the voice frames a
              problem in a way a generic assistant never would.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <FadeIn key={s.title}>
              <div className="flex h-full flex-col rounded-[20px] bg-white p-5 ring-1 ring-black/5">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${s.accent}`}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                    Step {i + 1}
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-[#2E2A7B]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4D73]">
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
