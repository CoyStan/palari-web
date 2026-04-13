import FadeIn from "../FadeIn";

const modes = [
  {
    title: "Private",
    tag: "Default",
    description:
      "Each Palari\u2019s memories stay with that Palari. Sofia\u2019s knowledge of your frontend preferences doesn\u2019t appear in Leo\u2019s context.",
    highlighted: true,
  },
  {
    title: "Org-level",
    tag: "Shared",
    description:
      "Some facts matter to everyone: \u201CClient deadline is June 15\u201D or \u201CUser prefers concise summaries.\u201D Mark them as org-level, and all Palaris see them.",
    highlighted: false,
  },
  {
    title: "Shared-on-request",
    tag: "Controlled",
    description:
      "When context needs to cross boundaries, you decide. \u201CDatabase migration is blocked until API is stable. Tell all Palaris.\u201D One command, deliberate sharing.",
    highlighted: false,
  },
];

export default function MemorySharingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            Memory Boundaries
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Memory sharing is a choice
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {modes.map((mode) => (
              <article
                key={mode.title}
                className={`rounded-[24px] p-6 ${
                  mode.highlighted
                    ? "bg-white shadow-sm ring-2 ring-[#22B8B0]/20"
                    : "bg-white/60 ring-1 ring-black/5"
                }`}
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-[#2E2A7B]">{mode.title}</h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      mode.highlighted
                        ? "bg-[#22B8B0]/10 text-[#22B8B0]"
                        : "bg-[#2E2A7B]/5 text-[#5B5E84]"
                    }`}
                  >
                    {mode.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#535778]">{mode.description}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
