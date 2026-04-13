import FadeIn from "../FadeIn";

export default function CompressionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            Compression
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Memories fade. That&apos;s the point.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            You remember the feeling of your first job, not what you had for lunch on your third
            Tuesday. Palari&apos;s compression works the same way.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] bg-white/60 p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/50">
                Before compression
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-[#F7F8FB] px-4 py-2.5 text-sm text-[#535778]">
                  Monday: debugged the auth module for 4 hours
                </div>
                <div className="rounded-xl bg-[#F7F8FB] px-4 py-2.5 text-sm text-[#535778]">
                  Tuesday: auth module still broken, tried different approach
                </div>
                <div className="rounded-xl bg-[#F7F8FB] px-4 py-2.5 text-sm text-[#535778]">
                  Wednesday: finally fixed auth, the issue was token expiry
                </div>
                <div className="rounded-xl bg-[#F7F8FB] px-4 py-2.5 text-sm text-[#535778]">
                  Thursday: wrote tests for auth module
                </div>
                <div className="rounded-xl bg-[#F7F8FB] px-4 py-2.5 text-sm text-[#535778]">
                  Friday: code review, merged auth changes
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-white p-6 shadow-sm ring-2 ring-[#22B8B0]/20">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                After compression
              </p>
              <div className="mt-4">
                <div className="rounded-xl bg-[#F0F9F8] px-4 py-4 text-sm leading-relaxed text-[#535778]">
                  Spent a frustrating week wrestling with auth. The fix turned out to be token
                  expiry&mdash;simple in retrospect, but the kind of thing that makes you paranoid
                  about assumptions. Wrote thorough tests afterward.
                </div>
              </div>
              <p className="mt-4 text-sm italic text-[#22B8B0]/70">
                Five memories became one understanding. The details faded. The lesson stayed.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-[#4A4D73]">
            Every few years of a Palari&apos;s life, raw memories compress into richer, denser
            understanding. This keeps memory lightweight while preserving what matters.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
