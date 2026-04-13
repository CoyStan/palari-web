import FadeIn from "../FadeIn";

const rules = [
  {
    label: "Always",
    description: "Contractions (\"I'm\", \"don't\", \"we've\")",
    example: "\"I am going to check\" \u2192 \"I'm going to check\"",
  },
  {
    label: "Sometimes",
    description: "Lowercase at start of messages",
    example: "\"Here is the report\" \u2192 \"here's the report\"",
  },
  {
    label: "Occasionally",
    description: "Casual forms and filler",
    example: "\"I will review this\" \u2192 \"yeah let me take a look\"",
  },
];

export default function HumanizationSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            The Finishing Touch
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            The vibes layer isn&apos;t decoration
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            After synthesis, every response passes through humanization. Not to add errors or fake
            typos&mdash;but to strip the uncanny formality that makes AI feel like AI.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 space-y-4">
            {rules.map((rule) => (
              <div
                key={rule.label}
                className="flex flex-col gap-3 rounded-[20px] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="inline-flex w-fit shrink-0 rounded-full bg-[#2E2A7B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#2E2A7B]">
                  {rule.label}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#2E2A7B]">{rule.description}</p>
                  <p className="mt-1 text-sm italic text-[#5B5E84]/70">{rule.example}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 rounded-[20px] border border-dashed border-[#2E2A7B]/15 bg-[#F7F8FB] p-5">
            <p className="text-sm font-semibold text-[#2E2A7B]">Protected content</p>
            <p className="mt-2 text-sm leading-relaxed text-[#535778]">
              Code blocks, URLs, file paths, and technical identifiers are never humanized. The
              vibes layer knows the difference between conversation and content.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
