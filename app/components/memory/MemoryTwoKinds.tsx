import FadeIn from "../FadeIn";

const kinds = [
  {
    label: "The character",
    subtitle: "Who your Palari is",
    dot: "bg-[#2E2A7B]",
    description:
      "Voice, preferences, stances. What makes Sofia Sofia. These stay stable over time &mdash; they&rsquo;re the part of your Palari that feels like the same coworker every day. You can read more in the character page.",
    examples: [
      "The way Sofia frames a problem before solving it.",
      "Alfred&rsquo;s habit of waiting until Monday morning to summarize the week.",
      "Leo&rsquo;s preference for showing the math before the answer.",
    ],
  },
  {
    label: "Your shared history",
    subtitle: "What you&rsquo;ve built together",
    dot: "bg-[#22B8B0]",
    description:
      "Everything your Palari has learned about your work: the people on your team, the projects you&rsquo;re running, the conventions you follow, the bugs you hit last month. This part grows. Memories that prove themselves stay. The rest fade.",
    examples: [
      "The vendor billing issue you caught on March 14th.",
      "The shorthand you use in Slack that isn&rsquo;t in any doc.",
      "The reason you stopped using the retention script.",
    ],
  },
];

export default function MemoryTwoKinds() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Two kinds of memory.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              One part of your Palari is fixed on purpose: the character.
              One part grows over time: your shared history. The fixed
              part is what makes your coworker feel consistent. The
              growing part is what makes it useful to keep them around.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {kinds.map((kind) => (
            <FadeIn key={kind.label}>
              <div className="flex h-full flex-col rounded-[28px] bg-[#F7F5F2] p-7 ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${kind.dot}`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-[#2E2A7B]">
                      {kind.label}
                    </h3>
                    <p
                      className="text-xs text-[#5B5E84]/70"
                      dangerouslySetInnerHTML={{ __html: kind.subtitle }}
                    />
                  </div>
                </div>
                <p
                  className="mt-4 text-sm leading-relaxed text-[#4A4D73]"
                  dangerouslySetInnerHTML={{ __html: kind.description }}
                />
                <ul className="mt-5 space-y-2.5">
                  {kind.examples.map((ex, i) => (
                    <li
                      key={i}
                      className="flex gap-3 rounded-2xl bg-white p-3 text-sm leading-relaxed text-[#2E2A7B] ring-1 ring-black/5"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F46F61]/60"
                        aria-hidden="true"
                      />
                      <span dangerouslySetInnerHTML={{ __html: ex }} />
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-[#5B5E84]">
            One stays. The other grows. Together they make a coworker
            who&rsquo;s still useful in month six.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
