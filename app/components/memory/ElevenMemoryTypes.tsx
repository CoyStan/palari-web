import FadeIn from "../FadeIn";

type MemoryRow = {
  code: string;
  routing: string[];
  example: string;
};

const permanent: MemoryRow[] = [
  {
    code: "life_event",
    routing: ["Vibes"],
    example:
      "First startup died at the polishing stage. Shipping became sacred after that.",
  },
  {
    code: "sensory",
    routing: ["Vibes"],
    example: "The smell of printer toner at 2am before a demo.",
  },
  {
    code: "relationship",
    routing: ["Planning", "Mama", "Vibes"],
    example:
      "User is a senior dev who skips pleasantries. Wants the diff, not the framing.",
  },
  {
    code: "opinion",
    routing: ["Planning", "Mama", "Vibes"],
    example: "Premature abstraction is worse than duplication.",
  },
];

const transient: MemoryRow[] = [
  {
    code: "working",
    routing: ["Planning", "Mama"],
    example: "Auth refactor lives in /services/auth/.",
  },
  {
    code: "preference",
    routing: ["Planning", "Mama"],
    example: "Wants bullet points, not prose.",
  },
  {
    code: "recent_life",
    routing: ["Planning", "Mama", "Vibes"],
    example:
      "This week: debugged webhook retries, shipped the billing migration.",
  },
  {
    code: "prompt_pattern",
    routing: ["Planning"],
    example:
      "User often forgets to specify which file. Ask before assuming.",
  },
  {
    code: "budget_pattern",
    routing: ["Planning"],
    example: "User burns 60% of weekly budget by Wednesday.",
  },
  {
    code: "coordination",
    routing: ["Planning", "Mama"],
    example:
      "Sofia refactored auth on April 13. Leo&rsquo;s /api/auth/refresh may need updating.",
  },
  {
    code: "cross_reference",
    routing: ["Planning"],
    example:
      "Resolved Alfred&rsquo;s flag on last_seen rename. Updated three refs in UserStatus.tsx.",
  },
];

const routingColor: Record<string, string> = {
  Planning: "bg-[#9B4FCC]/10 text-[#6D2E9B]",
  Mama: "bg-[#22B8B0]/10 text-[#137471]",
  Vibes: "bg-[#F46F61]/12 text-[#B1473B]",
};

function Row({ row }: { row: MemoryRow }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4">
      <div className="flex flex-wrap items-center gap-2">
        <code className="rounded bg-[#2E2A7B]/6 px-2 py-1 text-xs font-semibold text-[#2E2A7B]">
          {row.code}
        </code>
        <div className="flex flex-wrap gap-1.5">
          {row.routing.map((r) => (
            <span
              key={r}
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${routingColor[r] ?? "bg-[#2E2A7B]/5 text-[#2E2A7B]"}`}
            >
              {r}
            </span>
          ))}
        </div>
      </div>
      <p
        className="mt-2 text-sm leading-relaxed text-[#4A4D73]"
        dangerouslySetInnerHTML={{ __html: row.example }}
      />
    </div>
  );
}

export default function ElevenMemoryTypes() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Eleven memory types.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              Grouped by permanence and routed to the layer that needs
              them. A sensory fragment never hits the Planning Layer. A
              file path never reaches the Vibes Layer. Each layer gets
              exactly what it needs.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <FadeIn>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2E2A7B]" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2E2A7B]">
                  Permanent (never decay)
                </p>
              </div>
              <div className="space-y-3">
                {permanent.map((row) => (
                  <Row key={row.code} row={row} />
                ))}
              </div>
              <p className="mt-3 text-xs italic text-[#5B5E84]/70">
                Four types that define who your Palari is.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#22B8B0]" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#22B8B0]">
                  Transient (decay and compress)
                </p>
              </div>
              <div className="space-y-3">
                {transient.map((row) => (
                  <Row key={row.code} row={row} />
                ))}
              </div>
              <p className="mt-3 text-xs italic text-[#5B5E84]/70">
                Seven types that grow with you. Importance drops 0.1 every
                14 idle days. Below 0.1, the memory is gone.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
