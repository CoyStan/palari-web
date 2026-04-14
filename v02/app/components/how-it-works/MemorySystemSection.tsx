import FadeIn from "../FadeIn";

const permanentTypes = [
  {
    name: "life_event",
    description: "The formative moments from 28 years of generated life",
  },
  {
    name: "sensory",
    description:
      "The smell of chlorine from the public pool mixed with cut grass",
  },
  {
    name: "relationship",
    description: "The people who shaped the Palari\u2019s values",
  },
  {
    name: "opinion",
    description: "Beliefs forged from experience, not assigned by prompt",
  },
];

const earnedTypes = [
  {
    name: "working",
    description: "What you\u2019re working on right now",
  },
  {
    name: "preference",
    description: "How you like things done",
  },
  {
    name: "recent_life",
    description: "What\u2019s been happening lately",
  },
];

export default function MemorySystemSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Seven types of memory. One living system.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Not a filing cabinet. A living system that mirrors how people
            remember: facts decay if unused, reinforce when confirmed, and
            surface unpredictably.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#22B8B0]">
                Permanent (never decay)
              </p>
              <div className="space-y-3">
                {permanentTypes.map((t) => (
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
                Earned (grow from working with you)
              </p>
              <div className="space-y-3">
                {earnedTypes.map((t) => (
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

              {/* Before/After demo */}
              <div className="mt-8 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4A4D73]/50">
                  The difference
                </p>
                <div className="rounded-2xl border border-black/5 bg-[#F7F5F2] p-4">
                  <p className="text-xs font-semibold text-[#999]">
                    Without memory
                  </p>
                  <p className="mt-1 text-sm italic text-[#999]">
                    &ldquo;That sounds frustrating. Deadlines can be
                    tough.&rdquo;
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-[#F46F61]/20 bg-white p-4">
                  <p className="text-xs font-semibold text-[#F46F61]">
                    With memory
                  </p>
                  <p className="mt-1 text-sm text-[#2E2A7B]">
                    &ldquo;yeah, missed deadlines are the worst. my first
                    startup died because we kept polishing instead of
                    shipping&rdquo;
                  </p>
                </div>
                <p className="text-xs text-[#4A4D73]/70">
                  The left is a character sheet. The right is a lived experience.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
