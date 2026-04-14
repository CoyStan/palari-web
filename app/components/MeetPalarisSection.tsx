"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

const palaris = [
  {
    name: "Sofia Campos",
    role: "Operations Lead",
    scope: "Frontend, design, sprint planning",
    capabilities: "Async standups, PR reviews, regression hunting",
    dot: "bg-[#F46F61]",
    border: "border-[#F46F61]/20",
  },
  {
    name: "Leo Chen",
    role: "Data Engineer",
    scope: "Backend, databases, API logs",
    capabilities: "Query tuning, schema reviews, incident triage",
    dot: "bg-[#22B8B0]",
    border: "border-[#22B8B0]/20",
  },
  {
    name: "Alfred",
    role: "Coordinator",
    scope: "Read-only across all channels",
    capabilities: "Status digests, dependency tracking, standup notes",
    dot: "bg-[#E7B83D]",
    border: "border-[#E7B83D]/20",
  },
  {
    name: "Ciro Rossi",
    role: "Design Engineer",
    scope: "Component libraries, design tokens, frontend polish",
    capabilities: "Accessibility audits, typography specs, UI refactors",
    dot: "bg-[#9B4FCC]",
    border: "border-[#9B4FCC]/20",
  },
];

export default function MeetPalarisSection() {
  return (
    <section id="meet-team" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Specialists, not generalists.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A4D73]">
              Each Palari is a domain expert with scoped access, its own memory,
              and a working style that sharpens as you work together. Assemble
              the team your work actually needs.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {palaris.map((p) => (
            <FadeIn key={p.name}>
              <div
                className={`rounded-[28px] border-2 ${p.border} bg-[#F7F5F2] p-7 transition-shadow hover:shadow-md`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`h-10 w-10 shrink-0 rounded-full ${p.dot}`}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-[#2E2A7B]">
                      {p.name}
                    </h3>
                    <span className="text-xs font-medium text-[#4A4D73]/70">
                      {p.role}
                    </span>
                  </div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/60">
                  Scope
                </p>
                <p className="mt-1 text-sm leading-5 text-[#2E2A7B]">
                  {p.scope}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/60">
                  Capabilities
                </p>
                <p className="mt-1 text-sm leading-6 text-[#4A4D73]">
                  {p.capabilities}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 text-center">
            <Link
              href="/palaris"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E2A7B] transition-colors hover:text-[#F46F61]"
            >
              See all seven specialists
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
