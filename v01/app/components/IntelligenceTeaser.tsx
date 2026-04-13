import Link from "next/link";
import FadeIn from "./FadeIn";

const tiers = [
  { label: "Fast responses", width: "w-[85%]", color: "bg-[#22B8B0]", pct: "85%" },
  { label: "Careful thinking", width: "w-[40%]", color: "bg-[#9B4FCC]", pct: "12%" },
  { label: "Deep strategy", width: "w-[15%]", color: "bg-[#2E2A7B]", pct: "3%" },
];

export default function IntelligenceTeaser() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <div className="rounded-[28px] bg-gradient-to-br from-[#F5F0FF] via-white to-[#EEEAF8] p-8 shadow-sm ring-1 ring-[#2E2A7B]/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
              Deep Dive
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#2E2A7B] md:text-3xl">
              A coworker that thinks before it thinks
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4A4D73]">
              Most messages fly through in under a second for less than a tenth of a cent. But when
              the task is complex, your Palari slows down, plans, and brings its full intelligence.
              No wasted compute. No surprise bills.
            </p>

            <div className="mt-6 space-y-3">
              {tiers.map((tier) => (
                <div key={tier.label} className="flex items-center gap-4">
                  <span className="w-8 shrink-0 text-right text-xs font-bold text-[#5B5E84]">
                    {tier.pct}
                  </span>
                  <div className="flex-1">
                    <div className={`${tier.width} h-5 rounded-full ${tier.color}`} />
                  </div>
                  <span className="w-32 shrink-0 text-sm text-[#5B5E84]">{tier.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/intelligence"
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#9B4FCC] transition-colors hover:text-[#2E2A7B]"
            >
              How Palaris think
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
