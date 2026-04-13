import Link from "next/link";
import FadeIn from "./FadeIn";

const scopes = [
  { name: "Sofia", role: "Operations", color: "from-[#FFD8C6] to-[#F5B9A2]" },
  { name: "Leo", role: "Data", color: "from-[#C6E0FF] to-[#A2C8F5]" },
  { name: "Alfred", role: "Coordination", color: "from-[#C6F5E8] to-[#A2E8D0]" },
];

export default function TrustTeaser() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <div className="rounded-[28px] bg-gradient-to-br from-[#FFFBF0] via-white to-[#F0F9F8] p-8 shadow-sm ring-1 ring-[#2E2A7B]/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
              Trust & Safety
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#2E2A7B] md:text-3xl">
              You don&apos;t give &lsquo;the AI&rsquo; access. You give Sofia access.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4A4D73]">
              Each Palari sees only what you grant. Start small. Expand as trust builds. Mistakes
              stay contained to one scope. Your data, your rules.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {scopes.map((s) => (
                <div key={s.name} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-black/5">
                  <span className={`h-8 w-8 rounded-full bg-gradient-to-br ${s.color}`} />
                  <div>
                    <p className="text-sm font-semibold text-[#2E2A7B]">{s.name}</p>
                    <p className="text-xs text-[#5B5E84]">{s.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/trust"
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#E7B83D] transition-colors hover:text-[#2E2A7B]"
            >
              Learn about trust & teamwork
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
