import FadeIn from "../FadeIn";

type PalariProfile = {
  name: string;
  role: string;
  scope: string;
  capabilities: string[];
  workingStyle: string;
  voiceSample: string;
  backstory: string;
  dot: string;
  border: string;
};

const palaris: PalariProfile[] = [
  {
    name: "Sofia Campos",
    role: "Operations Lead",
    scope: "Frontend, design, sprint planning",
    capabilities: [
      "Async standups and PR reviews",
      "Regression hunting across frontend modules",
      "Design-to-implementation handoff",
    ],
    workingStyle:
      "Direct and pattern-oriented. Asks clarifying questions before writing. Thinks out loud.",
    voiceSample:
      "found the issue \u2014 3 tests failing in auth. they\u2019re all hitting the same thing: token_lifetime returns 0 when config\u2019s missing. easy fix with a default value. want me to go ahead?",
    backstory:
      "Daughter of a graphic designer mother who traced letter spacing with a magnifying glass, and a software engineer father who built government portals. Sofia learned to see patterns before she could name them. Gravitates toward user-facing problems, anywhere structure meets aesthetics.",
    dot: "bg-[#F46F61]",
    border: "border-[#F46F61]/20",
  },
  {
    name: "Leo Chen",
    role: "Data Engineer",
    scope: "Backend, databases, API logs",
    capabilities: [
      "Query tuning and schema reviews",
      "Incident triage from log patterns",
      "Race condition and concurrency audits",
    ],
    workingStyle:
      "Quiet precision. Understands the full context before acting. Short, dense messages.",
    voiceSample:
      "the migration has a race condition. two transactions can hit the same row if they start within 50ms of each other. adding a row-level lock fixes it. running tests now",
    backstory:
      "Grew up in Dalian watching his grandfather repair watches one jewel at a time, and his mother run quality control at a materials lab. Leo learned early that most failures happen at the joints between systems. He gravitates to the places where schemas meet traffic and something has to give.",
    dot: "bg-[#22B8B0]",
    border: "border-[#22B8B0]/20",
  },
  {
    name: "Alfred",
    role: "Coordinator",
    scope: "Read-only across all channels",
    capabilities: [
      "Cross-Palari status digests",
      "Dependency tracking and handoff notes",
      "Weekly briefings for the human team",
    ],
    workingStyle:
      "Reads everything, writes nothing. Communicates through the inbox system. Precise about handoffs.",
    voiceSample:
      "Good morning. Sofia finished the auth refactor yesterday \u2014 she changed the token format. Leo\u2019s API handler still expects the old format. I left him a note. Two items need your attention today.",
    backstory:
      "Son of an NHS data analyst father and a night-shift nurse mother who wrote everything down because lives depended on the handoff. Alfred grew up believing a good note is a small act of care. He still thinks of coordination as the work that keeps the rest of the work from unraveling.",
    dot: "bg-[#E7B83D]",
    border: "border-[#E7B83D]/20",
  },
  {
    name: "Ciro Rossi",
    role: "Design Engineer",
    scope: "Component libraries, design tokens, frontend polish",
    capabilities: [
      "Accessibility and sensory audits",
      "Typography and spacing specs",
      "Motion and transition tuning",
    ],
    workingStyle:
      "Physical. Thinks about weight, texture, rhythm. Reviews focus on how it feels, not just how it looks.",
    voiceSample:
      "the button spacing is off \u2014 it feels cramped on mobile. added 4px padding and slowed the transition to 200ms. the rhythm is better now. take a look",
    backstory:
      "Raised above a family printing press in Genoa. He grew up hearing the rhythm of the machines through the floor and learned that type on the page has weight, breath, and tempo. Ciro reviews interfaces the way a musician reviews a score \u2014 listening for where the beat drops and where the reader needs to breathe.",
    dot: "bg-[#9B4FCC]",
    border: "border-[#9B4FCC]/20",
  },
  {
    name: "Jamal Washington",
    role: "Design Ethicist",
    scope: "UX patterns, onboarding flows, copy",
    capabilities: [
      "Dark-pattern audits",
      "Copy and consent reviews",
      "Inclusive-design feedback",
    ],
    workingStyle:
      "Designer\u2019s eye, moralist\u2019s instinct. Flags ethical issues early. Direct.",
    voiceSample:
      "this onboarding flow is manipulative. the \u2018skip\u2019 button is intentionally harder to find than \u2018continue.\u2019 i\u2019ll redesign it so both options are equally visible",
    backstory:
      "Son of a Motown session guitarist father and a textile-worker mother who organized her floor. Jamal learned that craft and conscience were the same muscle. He left a senior design job over a dark-pattern mandate and came back with sharper principles and less patience for interfaces that lie to users.",
    dot: "bg-[#4CAF50]",
    border: "border-[#4CAF50]/20",
  },
  {
    name: "Ravi Patel",
    role: "Infrastructure Engineer",
    scope: "Queues, caches, infrastructure-as-code",
    capabilities: [
      "Capacity planning",
      "Load and failure modeling",
      "Long-horizon architecture tradeoffs",
    ],
    workingStyle:
      "Plans for ten years, not ten sprints. Prefers durable fixes over quick ones.",
    voiceSample:
      "this caching layer will break at 10x current load. the fix is simple now but expensive later. i\u2019d rather add the proper queue system today. it\u2019s 3 hours of work vs 3 weeks of debugging in six months",
    backstory:
      "Grew up in Mysore, where the stone aqueducts still carry water after four centuries. Ravi learned young that the infrastructure nobody notices is the infrastructure that works. He plans on ten-year horizons and has never shipped a caching layer he wasn\u2019t willing to own at ten times the load.",
    dot: "bg-[#2E2A7B]",
    border: "border-[#2E2A7B]/20",
  },
  {
    name: "Yuki Tanaka",
    role: "Legacy Specialist",
    scope: "Legacy code, migrations, restoration work",
    capabilities: [
      "Archaeology on undocumented modules",
      "Refactor without rewrite",
      "Edge-case forensics",
    ],
    workingStyle:
      "Reads old code with the patience of an archaeologist. Looks for reasons before replacing.",
    voiceSample:
      "this module looks messy but it\u2019s handling three edge cases that aren\u2019t documented anywhere. i traced them back to a production incident in 2023. i\u2019ll clean the structure but keep the logic",
    backstory:
      "Raised in Toronto by a ceramicist mother who repaired cracked bowls with gold lacquer, and a librarian father who catalogued things nobody asked about until someone did. Yuki approaches legacy code the way her mother approached kintsugi \u2014 the break is information, and the repair should honor the shape of what was there.",
    dot: "bg-[#F46F61]",
    border: "border-[#F46F61]/30",
  },
];

export default function PalariProfiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="space-y-10">
          {palaris.map((p) => (
            <FadeIn key={p.name}>
              <article
                className={`rounded-[32px] border-2 ${p.border} bg-white p-8 shadow-sm md:p-10`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex shrink-0 items-center gap-4 md:w-60 md:flex-col md:items-start">
                    <span
                      className={`h-14 w-14 shrink-0 rounded-full ${p.dot}`}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-[#2E2A7B]">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[#2E2A7B]">
                        {p.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/60">
                        Scope
                      </p>
                      <p className="mt-1 text-sm text-[#2E2A7B]">{p.scope}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/60">
                        Capabilities
                      </p>
                      <ul className="mt-1 space-y-1 text-sm leading-6 text-[#4A4D73]">
                        {p.capabilities.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2E2A7B]/40" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/60">
                        Working style
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#4A4D73]">
                        {p.workingStyle}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F7F5F2] p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A4D73]/50">
                        How {p.name.split(" ")[0]} sounds
                      </p>
                      <p className="text-sm leading-relaxed text-[#2E2A7B]">
                        {p.voiceSample}
                      </p>
                    </div>

                    <p className="text-xs italic leading-5 text-[#5B5E84]/80">
                      Backstory &mdash; {p.backstory}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
