import FadeIn from "../FadeIn";

const profiles = [
  {
    team: "Team A",
    learnedPrefs: ["Detailed explanations", "Python focus", "Weekly check-ins"],
    memoryCount: "87 memories",
    personality: "Patient, thorough, asks clarifying questions",
  },
  {
    team: "Team B",
    learnedPrefs: ["Concise answers", "TypeScript focus", "Async updates"],
    memoryCount: "124 memories",
    personality: "Direct, proactive, suggests improvements",
  },
  {
    team: "Team C",
    learnedPrefs: ["Visual summaries", "Data-first", "Morning briefs"],
    memoryCount: "63 memories",
    personality: "Analytical, structured, sends dashboards",
  },
];

export default function NeverTheSameSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            Divergence
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            No two Palaris are the same
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Even Palaris built from the same template diverge through use. Every conversation, every
            preference, every learned pattern makes yours uniquely yours.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {profiles.map((profile) => (
              <article
                key={profile.team}
                className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#FFD8C6] to-[#F5B9A2]" />
                  <div>
                    <p className="text-sm font-semibold text-[#2E2A7B]">Sofia</p>
                    <p className="text-xs text-[#5B5E84]">{profile.team}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/50">
                    Learned preferences
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {profile.learnedPrefs.map((pref) => (
                      <span
                        key={pref}
                        className="rounded-full bg-[#22B8B0]/10 px-2.5 py-1 text-xs font-medium text-[#22B8B0]"
                      >
                        {pref}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/50">
                    Personality evolved to
                  </p>
                  <p className="mt-1 text-sm italic text-[#535778]">{profile.personality}</p>
                </div>

                <div className="mt-4 rounded-full bg-[#2E2A7B]/5 px-3 py-1.5 text-center text-xs font-semibold text-[#2E2A7B]">
                  {profile.memoryCount}
                </div>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-[#4A4D73]">
            Same backstory. Same starting personality. Three completely different colleagues, shaped
            by the people they work with. Your Sofia is not a copy of Sofia. She is your Sofia.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
