import FadeIn from "../FadeIn";

const layers = [
  {
    label: "Identity Layer",
    description:
      "Memory, scope, and working style live in a portable SQLite file. You can switch providers without losing the Palari you&rsquo;ve trained.",
    detail: "Practical consequence: you can change providers without losing the Palari you&rsquo;ve trained.",
    tags: ["SQLite", "Portable", "Exportable"],
    accent: "bg-[#2E2A7B]",
    textColor: "text-white",
    tagStyle: "bg-white/10 text-white/70",
  },
  {
    label: "Compute Layer",
    description:
      "Model-agnostic by design. Claude today, GPT tomorrow, an open model next year. The engine is configuration, not identity.",
    detail: "Practical consequence: model deprecations are a config change, not a migration project.",
    tags: ["Claude", "GPT", "Model-Agnostic"],
    accent: "border-2 border-[#9B4FCC]/20 bg-[#F5F0FF]",
    textColor: "text-[#2E2A7B]",
    tagStyle: "bg-[#9B4FCC]/10 text-[#9B4FCC]/70",
  },
  {
    label: "Communication Layer",
    description:
      "Slack today because that&rsquo;s where teams work. The architecture supports anything with an API and a message queue.",
    detail: "Practical consequence: if your team leaves Slack, your Palari doesn&rsquo;t.",
    tags: ["Slack", "API", "Extensible"],
    accent: "border-2 border-[#22B8B0]/20 bg-[#F0F9F8]",
    textColor: "text-[#2E2A7B]",
    tagStyle: "bg-[#22B8B0]/10 text-[#22B8B0]/70",
  },
];

export default function ThreeLayersSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            Architecture
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Three layers of independence
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Most AI products tie your data to their model, their platform, their servers. A Palari
            separates identity from infrastructure.
          </p>
        </FadeIn>

        <div className="relative mt-12 flex flex-col gap-5">
          {/* Connecting line */}
          <div
            className="absolute left-6 top-8 hidden h-[calc(100%-64px)] w-px border-l-2 border-dashed border-[#2E2A7B]/10 md:block"
            aria-hidden="true"
          />

          {layers.map((layer, i) => (
            <FadeIn key={layer.label}>
              <div className="relative flex items-start gap-5">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#2E2A7B] shadow-sm ring-1 ring-black/5">
                  {i + 1}
                </div>
                <div className={`flex-1 rounded-[24px] p-6 ${layer.accent}`}>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      i === 0 ? "text-white/50" : "text-[#5B5E84]/60"
                    }`}
                  >
                    {layer.label}
                  </p>
                  <p className={`mt-2 text-base leading-relaxed ${i === 0 ? "text-white/80" : "text-[#535778]"}`}>
                    {layer.description}
                  </p>
                  <p className={`mt-2 text-sm italic ${i === 0 ? "text-white/50" : "text-[#5B5E84]/60"}`}>
                    {layer.detail}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${layer.tagStyle}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
