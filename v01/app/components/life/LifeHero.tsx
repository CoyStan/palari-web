import FadeIn from "../FadeIn";

const stats = [
  { value: "28 years", label: "of life experience" },
  { value: "~$0.80", label: "to generate a life" },
  { value: "5\u201310 min", label: "generation time" },
];

const timeline = [
  { age: "Age 5", event: "First day of school. A teacher who smelled like coffee and chalk." },
  { age: "Age 14", event: "Learned to code on a hand-me-down laptop. Stayed up until 3am." },
  { age: "Age 22", event: "First real job. The imposter syndrome was overwhelming." },
  { age: "Age 26", event: "Left the startup. Learned that good enough ships." },
];

export default function LifeHero() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center md:px-10">
        <div>
          <FadeIn>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
                >
                  <div className="text-2xl font-semibold text-[#2E2A7B]">{stat.value}</div>
                  <div className="mt-1 text-sm text-[#5B5E84]">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-lg shadow-[#2E2A7B]/5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#9B4FCC]">
              Sofia&apos;s Timeline (excerpt)
            </p>
            <div className="relative space-y-4">
              <div
                className="absolute left-[3px] top-2 h-[calc(100%-16px)] w-px bg-[#2E2A7B]/10"
                aria-hidden="true"
              />
              {timeline.map((entry) => (
                <div key={entry.age} className="flex items-start gap-4 pl-0">
                  <div className="relative z-10 mt-1.5 h-[7px] w-[7px] shrink-0 rounded-full bg-[#9B4FCC]" />
                  <div>
                    <p className="text-xs font-semibold text-[#2E2A7B]">{entry.age}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">{entry.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
