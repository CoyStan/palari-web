"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

const scopes = [
  {
    name: "Sofia",
    role: "Operations",
    access: "Frontend, design, sprint planning",
    color: "from-[#FFD8C6] to-[#F5B9A2]",
    dot: "bg-[#F46F61]",
  },
  {
    name: "Leo",
    role: "Data",
    access: "Backend, databases, API logs",
    color: "from-[#C6E0FF] to-[#A2C8F5]",
    dot: "bg-[#22B8B0]",
  },
  {
    name: "Alfred",
    role: "Coordination",
    access: "Read-only across all channels",
    color: "from-[#FFF1C6] to-[#E7D08A]",
    dot: "bg-[#E7B83D]",
  },
];

export default function ScopedTrustSection() {
  return (
    <section className="bg-[#F7F5F2] py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
              Scoped Trust
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              You don&apos;t give &lsquo;the AI&rsquo; access. You give Sofia
              access.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#4A4D73]">
              Each Palari sees only what you grant. Start small. Expand as trust
              builds. Mistakes stay contained to one scope.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {scopes.map((s) => (
              <div
                key={s.name}
                className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-10 w-10 rounded-full bg-gradient-to-br ${s.color}`}
                  />
                  <div>
                    <p className="text-base font-semibold text-[#2E2A7B]">
                      {s.name}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wide text-[#5B5E84]">
                      {s.role}
                    </p>
                  </div>
                </div>
                <div className="mt-4 border-t border-black/5 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/60">
                    Scope
                  </p>
                  <p className="mt-1 text-sm text-[#535778]">{s.access}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 rounded-[28px] border-2 border-[#E7B83D]/20 bg-white p-6 text-center">
            <p className="text-base leading-relaxed text-[#4A4D73]">
              <span className="font-semibold text-[#2E2A7B]">
                Propose-and-approve by default.
              </span>{" "}
              Your Palari drafts the change and waits for your nod. No silent
              writes. No surprise actions. Audit trail on every scope.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 text-center">
            <Link
              href="/how-it-works#scoped-trust"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E2A7B] transition-colors hover:text-[#E7B83D]"
            >
              How scoped trust works
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
