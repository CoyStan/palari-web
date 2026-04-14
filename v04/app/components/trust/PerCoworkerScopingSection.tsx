import FadeIn from "../FadeIn";

const coworkers = [
  {
    name: "Sofia",
    role: "Operations",
    reads: "/frontend/, /design/, sprint docs",
    writes: "/frontend/, /design/",
    accent: "bg-[#F46F61]",
    ring: "ring-[#F46F61]/25",
  },
  {
    name: "Leo",
    role: "Data",
    reads: "/backend/, /api/, /db/, query logs",
    writes: "/backend/, /api/, /db/",
    accent: "bg-[#22B8B0]",
    ring: "ring-[#22B8B0]/25",
  },
  {
    name: "Alfred",
    role: "Coordination",
    reads: "Everything",
    writes: "Nothing",
    accent: "bg-[#E7B83D]",
    ring: "ring-[#E7B83D]/25",
  },
];

export default function PerCoworkerScopingSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            Per-coworker scoping
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Each Palari gets exactly the access her role needs.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            You don&rsquo;t grant access to &ldquo;the AI.&rdquo; You grant
            it to Sofia, or Leo, or Alfred. Their scopes are separate.
            Their keys are separate. Their mistakes are separate too.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {coworkers.map((c) => (
              <div
                key={c.name}
                className={`rounded-[24px] bg-white p-6 shadow-sm ring-1 ${c.ring}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-10 w-10 rounded-full ${c.accent}`}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-base font-semibold text-[#2E2A7B]">
                      {c.name}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wide text-[#5B5E84]">
                      {c.role}
                    </p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 border-t border-black/5 pt-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/70">
                      Reads
                    </p>
                    <p className="mt-1 text-sm text-[#535778]">{c.reads}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/70">
                      Writes
                    </p>
                    <p className="mt-1 text-sm text-[#535778]">{c.writes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 rounded-[24px] border-2 border-[#22B8B0]/25 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
              When Sofia hits a boundary
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#2E2A7B]">
              &ldquo;that&rsquo;s in Leo&rsquo;s area. want me to describe
              what should change and hand it to him, or open a read-only
              look for you?&rdquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
              She doesn&rsquo;t try to reach across the fence. She tells you
              the fence is there and asks what you want to do.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
