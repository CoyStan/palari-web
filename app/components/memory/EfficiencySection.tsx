import FadeIn from "../FadeIn";

const stats = [
  { value: "<1,300", label: "tokens of context per message" },
  { value: "~$0.001", label: "per message in memory costs" },
  { value: "SQLite", label: "No vector DB, no cloud dependency" },
  { value: "<50MB", label: "storage for 100 Palaris" },
];

type Competitor = {
  name: string;
  label: string;
  description: string;
  highlighted?: boolean;
};

const competitors: Competitor[] = [
  {
    name: "ChatGPT",
    label: "Forgets you",
    description: "Starts fresh every conversation. No continuity, no relationship.",
  },
  {
    name: "Claude Memory",
    label: "One dimension",
    description: "Single memory type. No personality, no life history.",
  },
  {
    name: "Character.ai",
    label: "All personality, no capability",
    description: "Great at being a character. Can\u2019t touch your files.",
  },
  {
    name: "Palari",
    label: "The complete picture",
    description: "Seven memory types. Real capabilities. Personality that persists.",
    highlighted: true,
  },
];

export default function EfficiencySection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
              Efficiency
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Lightweight by design
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              No vector databases. No cloud dependencies. Just SQLite and smart engineering.
            </p>
          </div>
        </FadeIn>

        {/* Stats row */}
        <FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="text-2xl font-bold text-[#2E2A7B]">{stat.value}</div>
                <div className="mt-2 text-sm leading-relaxed text-[#5B5E84]">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Competitive comparison */}
        <FadeIn>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <h3 className="text-2xl font-semibold text-[#2E2A7B]">How Palari compares</h3>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {competitors.map((comp) => (
              <article
                key={comp.name}
                className={`flex flex-col rounded-[28px] p-6 shadow-sm ${
                  comp.highlighted
                    ? "bg-white ring-2 ring-[#22B8B0] shadow-lg shadow-[#2E2A7B]/10"
                    : "bg-white/70 ring-1 ring-black/5"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                    comp.highlighted ? "text-[#22B8B0]" : "text-[#5B5E84]/50"
                  }`}
                >
                  {comp.name}
                </p>
                <h4
                  className={`mt-2 text-lg font-semibold ${
                    comp.highlighted ? "text-[#2E2A7B]" : "text-[#5B5E84]"
                  }`}
                >
                  {comp.label}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#535778]">
                  {comp.description}
                </p>
                <div className="mt-4">
                  {comp.highlighted ? (
                    <div className="flex flex-wrap gap-1.5">
                      {["Memory", "Capability", "Personality", "Growth"].map((check) => (
                        <span
                          key={check}
                          className="rounded-full bg-[#22B8B0]/10 px-2.5 py-1 text-xs font-medium text-[#22B8B0]"
                        >
                          &#10003; {check}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-sm text-[#5B5E84]/40">Limited</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
