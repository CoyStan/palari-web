import Link from "next/link";
import FadeIn from "./FadeIn";

const pillars = [
  {
    title: "Memory",
    description:
      "Eleven types of memory that grow, reinforce, and compress. Not a search engine. A living system.",
    accent: "bg-[#22B8B0]",
    href: "/memory",
  },
  {
    title: "Intelligence",
    description:
      "Three tiers of thinking. Most messages cost less than a tenth of a cent. The rest go deep, only when needed.",
    accent: "bg-[#9B4FCC]",
    href: "/intelligence",
  },
  {
    title: "Trust",
    description:
      "You don\u2019t give \u2018the AI\u2019 access. You give Sofia access to operations. Leo access to data. Scoped, progressive, contained.",
    accent: "bg-[#E7B83D]",
    href: "/trust",
  },
  {
    title: "Identity",
    description:
      "Portable SQLite database. Model-agnostic compute. Your Palari belongs to you, not to us.",
    accent: "bg-[#F46F61]",
    href: "/manifesto",
  },
];

export default function FourPillarsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
              The Four Pillars
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-4xl">
              What makes a Palari more than AI
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:ring-[#2E2A7B]/10"
              >
                <div className={`mb-5 h-3 w-16 rounded-full ${pillar.accent}`} />
                <h3 className="text-xl font-semibold text-[#2E2A7B]">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-[#535778]">{pillar.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#22B8B0] transition-colors group-hover:text-[#2E2A7B]">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
