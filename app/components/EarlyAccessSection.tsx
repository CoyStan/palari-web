import FadeIn from "./FadeIn";

export default function EarlyAccessSection() {
  return (
    <section
      className="bg-gradient-to-br from-[#F7F5F2] via-[#F0F9F8] to-[#E5F8F7] py-20 md:py-28"
      id="early-access"
    >
      <div className="mx-auto w-full max-w-7xl px-6 text-center md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-5xl">
            They&apos;re waiting to meet you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Every Palari starts as a stranger. Give them a week and they&apos;ll feel like someone
            you&apos;ve worked with for years.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-4 text-lg text-[#2E2A7B] outline-none transition-colors placeholder:text-[#5B5E84]/50 focus:border-[#22B8B0] focus:ring-2 focus:ring-[#22B8B0]/20"
            />
            <a
              href="mailto:hello@palari.io?subject=Early%20Access%20Request"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#F46F61] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Request Early Access
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 text-base text-[#5B5E84]">
            Or reach out directly at{" "}
            <a
              href="mailto:hello@palari.io"
              className="font-medium text-[#2E2A7B] underline"
            >
              hello@palari.io
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
