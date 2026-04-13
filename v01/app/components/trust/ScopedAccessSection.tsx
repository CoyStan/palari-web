import FadeIn from "../FadeIn";

const levels = [
  {
    title: "Write Access",
    subtitle: "Working directory",
    description:
      "Your Palari can read and edit files in its assigned scope. This is where it does its work.",
    example: "Sofia can update documents in #operations",
    accent: "bg-[#F46F61]",
    accentLight: "border-[#F46F61]/20 bg-[#FFF5F0]",
  },
  {
    title: "Read Access",
    subtitle: "Shared visibility",
    description:
      "Your Palari can see context from other areas without editing. Cross-domain awareness without cross-domain risk.",
    example: "Sofia can read Leo\u2019s data summaries to inform her proposals",
    accent: "bg-[#22B8B0]",
    accentLight: "border-[#22B8B0]/20 bg-[#F0F9F8]",
  },
  {
    title: "Memory Isolation",
    subtitle: "Private by default",
    description:
      "Each Palari\u2019s memories stay separate unless you choose to share. What you tell Sofia stays with Sofia.",
    example: "Your communication preferences with Sofia don\u2019t leak to Leo",
    accent: "bg-[#2E2A7B]",
    accentLight: "border-[#2E2A7B]/15 bg-[#EEEAF8]/50",
  },
];

export default function ScopedAccessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            Access Levels
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Three levels of access
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            You don&apos;t think &ldquo;access control.&rdquo; You think: &ldquo;Sofia&apos;s
            job.&rdquo; Permissions are implicit in the relationship.
          </p>
        </FadeIn>

        <div className="mt-12 flex flex-col gap-5">
          {levels.map((level) => (
            <FadeIn key={level.title}>
              <article className={`rounded-[24px] border-2 p-6 ${level.accentLight}`}>
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${level.accent}`} />
                  <h3 className="text-lg font-semibold text-[#2E2A7B]">{level.title}</h3>
                  <span className="text-sm text-[#5B5E84]/50">{level.subtitle}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#535778]">{level.description}</p>
                <p className="mt-2 text-sm italic text-[#5B5E84]/60">{level.example}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
