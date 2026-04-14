import FadeIn from "../FadeIn";

const steps = [
  {
    title: "Birth",
    body: "Role, working style, and name. The seed.",
    accent: "bg-[#E7B83D]",
  },
  {
    title: "Twenty-eight years",
    body: "Four passes of life: defining events, small moments, relationships, sensory fragments.",
    accent: "bg-[#22B8B0]",
  },
  {
    title: "Compression",
    body: "Five small memories become one understanding.",
    accent: "bg-[#9B4FCC]",
  },
  {
    title: "Synthesis",
    body: "Core memories, relationship ghosts, opinions, sensory compilation.",
    accent: "bg-[#2E2A7B]",
  },
  {
    title: "A person",
    body: "A specialist with a persistent style. Ready to hire.",
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
              How she comes to life.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              A one-time process, run before your Palari ships. About a
              dollar in compute, start to finish. You never see it happen,
              but you feel the difference the first time she references
              something from her past and it lands exactly right.
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
