import FadeIn from "../FadeIn";

const scenarios = [
  {
    trigger: "A better model appears",
    result:
      "Update the engine config. Your Palari&rsquo;s memory, scope, and working style stay exactly the same.",
  },
  {
    trigger: "Your provider deprecates a model",
    result:
      "Switch to the next Claude version, GPT, or an open model. Your Palari migrates without losing memory.",
  },
  {
    trigger: "Your team leaves Slack",
    result:
      "Run the open-source server on your own infrastructure. Same Palari, same memory, different wire.",
  },
];

export default function PortabilitySection() {
  return (
    <section className="bg-gradient-to-b from-[#F7F5F2] to-[#EEEAF8]/30 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            Portability
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Lock-in through value, not walls.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Your Palari belongs to you. Not to us, not to a cloud provider,
            not to a model company. You stay because your Palari knows you,
            not because you can&apos;t leave.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {scenarios.map((s) => (
              <div
                key={s.trigger}
                className="rounded-[20px] bg-white p-5 shadow-sm ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold text-[#2E2A7B]">
                  {s.trigger}
                </p>
                <p
                  className="mt-2 text-sm leading-relaxed text-[#535778]"
                  dangerouslySetInnerHTML={{ __html: s.result }}
                />
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9B4FCC]">
              Why you&apos;ll want to stay
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4A4D73]">
              A Palari&rsquo;s memory compounds. Week one she learns your
              name, your project, your file structure. A month in she knows
              your formatting quirks and which files matter. Three months
              later she flags stale data because she remembers it was stale
              last quarter. After six months, switching means losing someone
              who genuinely knows you.
            </p>
            <p className="mt-4 text-sm italic text-[#5B5E84]/80">
              That&rsquo;s not lock-in. It&rsquo;s a relationship.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
