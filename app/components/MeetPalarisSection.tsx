"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

const palaris = [
  {
    name: "Sofia Campos",
    hook: "Pattern hunter. Sees the structure inside the mess.",
    bio: "Grew up in San Jos\u00e9 watching her mother trace letter spacing with a magnifying glass.",
    role: "Frontend & Design",
    dot: "bg-[#F46F61]",
    border: "border-[#F46F61]/20",
  },
  {
    name: "Leo Chen",
    hook: "Quiet precision. When Leo writes a long message, pay attention.",
    bio: "Learned patience from his grandfather\u2019s watchmaking shop in Dalian.",
    role: "Backend & Systems",
    dot: "bg-[#22B8B0]",
    border: "border-[#22B8B0]/20",
  },
  {
    name: "Alfred",
    hook: "Reads everything. Writes nothing. Connects the dots you missed.",
    bio: "NHS data analyst\u2019s kid from London. Learned that good notes save lives.",
    role: "Coordinator & PM",
    dot: "bg-[#E7B83D]",
    border: "border-[#E7B83D]/20",
  },
  {
    name: "Ciro Rossi",
    hook: "Raised above a printing press. Designs with his hands.",
    bio: "Orphaned at four, grew up hearing the rhythm of the press through the floor.",
    role: "Design Engineering",
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
              Your team is waiting.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A4D73]">
              Every Palari is born, not built. When you join, a new Palari is
              created for you &mdash; with a unique biography, personality, and
              voice that emerged from a generated life. No two are the same.
              Yours is yours alone.
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
                <p className="text-sm font-medium leading-5 text-[#2E2A7B]">
                  {p.hook}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#4A4D73]">
                  {p.bio}
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
              Meet the seven Palaris born so far
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
