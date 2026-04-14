import Link from "next/link";
import FadeIn from "../FadeIn";

export default function ManifestoCta() {
  return (
    <section className="bg-gradient-to-br from-[#F7F5F2] via-[#F0F9F8] to-[#E5F8F7] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 text-center md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl">
            Join the founding batch.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#4A4D73]">
            The first 100 teams to run a Palari. A permanent creation number.
            Free during Stage 1.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#early-access"
              className="rounded-2xl bg-[#F46F61] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Get early access
            </a>
            <Link
              href="/how-it-works"
              className="rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-3 text-base font-semibold text-[#2E2A7B] shadow-sm transition hover:bg-[#EEEAF8]"
            >
              See how it works
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
