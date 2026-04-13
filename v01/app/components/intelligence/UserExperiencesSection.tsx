import FadeIn from "../FadeIn";

type Experience = {
  badge: string;
  badgeColor: string;
  title: string;
  lines: { speaker: string; text: string }[];
};

const experiences: Experience[] = [
  {
    badge: "Fast",
    badgeColor: "bg-[#22B8B0]/10 text-[#22B8B0]",
    title: "The silent majority (85%)",
    lines: [
      { speaker: "You", text: "fix the typo in the readme" },
      { speaker: "Sofia", text: "fixed. 'recieve' is now 'receive' on line 23." },
    ],
  },
  {
    badge: "Careful",
    badgeColor: "bg-[#9B4FCC]/10 text-[#9B4FCC]",
    title: "Clarification when needed (10%)",
    lines: [
      { speaker: "You", text: "check the latest numbers" },
      { speaker: "Sofia", text: "sure. Q1 revenue or infrastructure cost analysis? we touched both last week." },
    ],
  },
  {
    badge: "Transparent",
    badgeColor: "bg-[#E7B83D]/10 text-[#E7B83D]",
    title: "Budget warning (3%)",
    lines: [
      { speaker: "You", text: "refactor the entire auth module" },
      { speaker: "Sofia", text: "this is a big refactor. probably takes about 15% of what\u2019s left this week. want me to go ahead, or break it into smaller pieces?" },
    ],
  },
  {
    badge: "Deep",
    badgeColor: "bg-[#2E2A7B]/10 text-[#2E2A7B]",
    title: "Strategic planning (2%)",
    lines: [
      { speaker: "You", text: "redesign the data pipeline for real-time streaming" },
      { speaker: "Sofia", text: "this is a big one. let me think through the approach first." },
      { speaker: "Sofia", text: "okay, here\u2019s the breakdown. three phases: first, add streaming alongside existing batch. second, migrate the latency-sensitive pipelines. third, deprecate batch once streaming is stable." },
    ],
  },
];

export default function UserExperiencesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            In Practice
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            What it feels like
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Most of the time, you never notice the planning layer. That&apos;s the point.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {experiences.map((exp) => (
              <article
                key={exp.title}
                className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-black/5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${exp.badgeColor}`}>
                    {exp.badge}
                  </span>
                  <span className="text-sm font-medium text-[#5B5E84]">{exp.title}</span>
                </div>
                <div className="space-y-2">
                  {exp.lines.map((line, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className={`mt-1 h-5 w-5 shrink-0 rounded-full ${
                          line.speaker === "You"
                            ? "bg-[#2E2A7B]/10"
                            : "bg-gradient-to-br from-[#FFD8C6] to-[#F5B9A2]"
                        }`}
                      />
                      <div>
                        <p className="text-xs font-semibold text-[#2E2A7B]/40">{line.speaker}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">{line.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
