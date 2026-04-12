import FadeIn from "./FadeIn";

export default function EarlyAccessSection() {
  return (
    <FadeIn>
      <section
        className="scroll-mt-28 bg-gradient-to-r from-[#FDF8F4] via-[#F8FCF8] to-[#E8FBF5] py-24 md:py-32"
        id="early-access"
      >
        <div className="mx-auto w-full max-w-6xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-5xl">
            They&apos;re waiting to meet you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Every Palari starts as a stranger. Give them a week and they&apos;ll feel like someone
            you&apos;ve worked with for years.
          </p>

          <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-full border border-gray-300 bg-white px-6 py-4 text-lg text-[#1B2A4A] outline-none transition-colors placeholder:text-gray-400 focus:border-[#3ECDA5]"
            />
            <a
              href="mailto:hello@palari.io?subject=Early%20Access%20Request"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#3ECDA5] to-[#3B5EE8] px-8 py-4 text-lg font-semibold text-white"
            >
              Request Early Access
            </a>
          </div>

          <p className="mt-6 text-base text-gray-600">
            Or email us directly at{" "}
            <a href="mailto:hello@palari.io" className="font-medium text-[#1B2A4A] underline">
              hello@palari.io
            </a>
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
