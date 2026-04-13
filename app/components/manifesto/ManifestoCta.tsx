import Link from "next/link";
import FadeIn from "../FadeIn";

export default function ManifestoCta() {
  return (
    <section className="bg-gradient-to-br from-[#F7F5F2] via-[#F0F9F8] to-[#E5F8F7] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 text-center md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-5xl">
            Your Palaris are waiting to meet you
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            A colleague who remembers. A colleague who&apos;s yours. A colleague who gets better
            every day.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#meet-team"
              className="rounded-2xl bg-[#F46F61] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Meet the Palaris
            </a>
            <a
              href="/#early-access"
              className="rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-3 text-base font-semibold text-[#2E2A7B] shadow-sm transition hover:bg-[#EEEAF8]"
            >
              Request Early Access
            </a>
          </div>
          <Link
            href="/memory"
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#22B8B0] transition-colors hover:text-[#2E2A7B]"
          >
            Explore memory & life
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
