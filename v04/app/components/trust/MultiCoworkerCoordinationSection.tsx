import FadeIn from "../FadeIn";

export default function MultiCoworkerCoordinationSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
            Coordination
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Palaris talk to each other through an inbox you can read.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            When Sofia needs Leo to know about a change, she doesn&rsquo;t
            reach into his directory. She drops a note in his coordination
            inbox. Alfred watches both inboxes as a read-only colleague.
            Everything that moves between coworkers is plain text, visible,
            auditable, version-controlled.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 rounded-[24px] bg-white p-6 ring-1 ring-black/5 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
              Example: Sofia&rsquo;s inbox message to Leo
            </p>
            <pre className="mt-4 overflow-x-auto rounded-[16px] bg-[#0f0e2a] p-5 text-xs leading-relaxed text-[#EEEAF8]">
{`FROM: Sofia
TO: Leo
TYPE: informational

refactored /frontend/auth/useSession.ts on 2026-04-13.
the hook now expects \`last_seen\` instead of \`last_active\`.
your /api/auth/refresh response still returns \`last_active\`.
might be worth a look on your side when you get time.`}
            </pre>
            <p className="mt-4 text-sm leading-relaxed text-[#4A4D73]">
              Leo sees the note. He doesn&rsquo;t have to act on it. He
              can&rsquo;t be ordered to. A Palari never commands another
              Palari. The message is context, not instruction.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[20px] bg-white p-5 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                Readable
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#4A4D73]">
                Every message is a plain file in the recipient&rsquo;s
                coordination folder. You can open it.
              </p>
            </div>
            <div className="rounded-[20px] bg-white p-5 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                Auditable
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#4A4D73]">
                The inbox is Git-versioned. You can see exactly what one
                Palari said to another, and when.
              </p>
            </div>
            <div className="rounded-[20px] bg-white p-5 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                Informational
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#4A4D73]">
                No Palari is another&rsquo;s boss. Messages are context,
                never orders.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
