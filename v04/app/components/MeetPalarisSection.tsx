"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

const palaris = [
  {
    name: "Sofia Campos",
    role: "Operations Lead",
    scope: "Frontend, design, sprint planning",
    capabilities: "Async standups, PR reviews, regression hunting",
    voice:
      "found it. three tests failing in auth, all hitting that token_lifetime refactor from tuesday. fix is a default value. want me to push?",
    dot: "bg-[#F46F61]",
    border: "border-[#F46F61]/20",
  },
  {
    name: "Leo Chen",
    role: "Data Engineer",
    scope: "Backend, databases, API logs",
    capabilities: "Query tuning, schema reviews, incident triage",
    voice:
      "the migration has a race condition. two transactions can hit the same row if they start within 50ms. adding a row-level lock. tests running.",
    dot: "bg-[#22B8B0]",
    border: "border-[#22B8B0]/20",
  },
  {
    name: "Alfred",
    role: "Coordinator",
    scope: "Read-only across all channels",
    capabilities: "Status digests, dependency tracking, standup notes",
    voice:
      "Sofia shipped the auth refactor last night. Leo&rsquo;s API handler still expects the old token format. Left him a note. Two items need your call today.",
    dot: "bg-[#E7B83D]",
    border: "border-[#E7B83D]/20",
  },
];

export default function MeetPalarisSection() {
  return (
    <section id="meet-team" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Meet your Palaris.
            </h2>
            <p className="mt-4 text-lg text-[#4A4D73]">
              Three coworkers, each with their own scope, their own voice, and
              a memory of your work that grows every week.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {palaris.map((p) => (
            <FadeIn key={p.name}>
              <div
                className={`flex h-full flex-col rounded-[28px] border-2 ${p.border} bg-[#F7F5F2] p-7 transition-shadow hover:shadow-md`}
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

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/60">
                      Scope
                    </p>
                    <p className="mt-1 text-sm leading-5 text-[#2E2A7B]">
                      {p.scope}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/60">
                      Capabilities
                    </p>
                    <p className="mt-1 text-sm leading-5 text-[#4A4D73]">
                      {p.capabilities}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-black/5">
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A4D73]/50">
                    How {p.name.split(" ")[0]} sounds
                  </p>
                  <p
                    className="text-sm leading-relaxed text-[#2E2A7B]"
                    dangerouslySetInnerHTML={{ __html: p.voice }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-[#5B5E84]">
            Voice is how you know the memory is working. Same models
            underneath. A specific person on top.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 text-center">
            <Link
              href="/life"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E2A7B] transition-colors hover:text-[#F46F61]"
            >
              How a Palari is born
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
