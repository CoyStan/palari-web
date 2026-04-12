import FadeIn from "./FadeIn";

export default function EarlyAccessSection() {
  return (
    <FadeIn>
      <section
        className="scroll-mt-28 bg-gradient-to-r from-teal-50 via-white to-blue-50 py-24 md:py-32"
        id="early-access"
      >
        <div className="mx-auto w-full max-w-6xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-5xl">
            Your team is waiting
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            We are onboarding early users one at a time to make sure every Palari feels right.
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
              Request Access
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
