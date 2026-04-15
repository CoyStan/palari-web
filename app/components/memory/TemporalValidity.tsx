import FadeIn from "../FadeIn";

export default function TemporalValidity() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            Facts have dates
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Your Palari knows when things changed.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Your manager was Jane until March. Your manager is Marcus now.
            Both facts are true, on different dates. Your Palari keeps
            both, tied to when each was the case, so an old fact never
            shows up as a current one and a current fact never erases
            the history.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 space-y-3">
            <div className="relative flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#5B5E84]/50" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[#2E2A7B]">
                  Your manager is Jane
                </p>
                <p className="mt-1 text-xs text-[#5B5E84]/70">
                  From September 2025 to March 14, 2026
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#5B5E84]/10 px-3 py-1 text-xs font-semibold text-[#5B5E84]">
                past
              </span>
            </div>

            <div className="flex justify-center">
              <span className="text-[#5B5E84]/40">&darr;</span>
            </div>

            <div className="relative flex items-center gap-4 rounded-2xl border-2 border-[#22B8B0]/30 bg-white p-5">
              <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#22B8B0]" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[#2E2A7B]">
                  Your manager is Marcus
                </p>
                <p className="mt-1 text-xs text-[#5B5E84]/70">
                  From March 14, 2026
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#22B8B0]/15 px-3 py-1 text-xs font-semibold text-[#137471]">
                current
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-[#5B5E84]">
            Ask &ldquo;who was my manager in February?&rdquo; and your
            Palari goes back to Jane. Ask &ldquo;who is my manager?&rdquo;
            and it says Marcus. Nothing is deleted. Nothing is confused.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
