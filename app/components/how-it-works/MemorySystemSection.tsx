import FadeIn from "../FadeIn";

const enables = [
  {
    title: "Project continuity",
    detail:
      "Remembers what you shipped last sprint, what regressed, and which decisions are load-bearing.",
  },
  {
    title: "Pattern recognition",
    detail:
      "Sees the same bug shape recurring across modules and flags it before you do.",
  },
  {
    title: "Stakeholder awareness",
    detail:
      "Knows who owns what, who to ping, and which reviewers block which paths.",
  },
];

const foundation = [
  {
    name: "project",
    description: "Architecture decisions, open loops, recent refactors.",
  },
  {
    name: "pattern",
    description:
      "Bug shapes and regression classes seen in this codebase over time.",
  },
  {
    name: "stakeholder",
    description: "Who owns which areas; who needs to be looped in.",
  },
  {
    name: "decision",
    description:
      "The tradeoffs already made, so you don\u2019t relitigate every sprint.",
  },
  {
    name: "relationship",
    description: "The working dynamics that shape how the team actually ships.",
  },
];

const earned = [
  {
    name: "working",
    description: "What you\u2019re focused on right now.",
  },
  {
    name: "preference",
    description: "How you like explanations, reviews, and diffs.",
  },
  {
    name: "recent_activity",
    description: "What moved on the project this week.",
  },
  {
    name: "conversational",
    description:
      "Threads and open questions from the last few Slack conversations.",
  },
  {
    name: "voice",
    description:
      "Your Palari\u2019s working style, tightened by months of interaction.",
  },
  {
    name: "sensory",
    description:
      "Texture fragments from the generated biography. Surface rarely; anchor the voice.",
  },
];

export default function MemorySystemSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Memory is the dataset. Your dataset.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Not a filing cabinet. Associative retrieval across eleven memory
            types, compressed until it costs under a cent per query. What it
            enables is the point.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {enables.map((e) => (
              <div
                key={e.title}
                className="rounded-[24px] border border-black/5 bg-[#F7F5F2] p-5"
              >
                <p className="text-sm font-semibold text-[#2E2A7B]">
                  {e.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4D73]">
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#22B8B0]">
                Foundation (durable project memory)
              </p>
              <div className="space-y-3">
                {foundation.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-2xl border border-black/5 bg-[#F7F5F2] p-4"
                  >
                    <p className="text-sm font-semibold text-[#2E2A7B]">
                      <code className="rounded bg-[#2E2A7B]/5 px-1.5 py-0.5 text-xs">
                        {t.name}
                      </code>
                    </p>
                    <p className="mt-1 text-sm text-[#4A4D73]">
                      {t.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#F46F61]">
                Earned (grown from working with you)
              </p>
              <div className="space-y-3">
                {earned.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-2xl border border-black/5 bg-[#F7F5F2] p-4"
                  >
                    <p className="text-sm font-semibold text-[#2E2A7B]">
                      <code className="rounded bg-[#2E2A7B]/5 px-1.5 py-0.5 text-xs">
                        {t.name}
                      </code>
                    </p>
                    <p className="mt-1 text-sm text-[#4A4D73]">
                      {t.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-[#5B5E84]">
            Eleven types total. Five ship with the Palari; six compound as you
            work.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
