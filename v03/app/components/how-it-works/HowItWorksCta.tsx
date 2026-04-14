import Link from "next/link";
import FadeIn from "../FadeIn";

export default function HowItWorksCta() {
  return (
    <section className="bg-gradient-to-br from-[#F7F5F2] via-[#F0F9F8] to-[#E5F8F7] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 text-center md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Ready to see it in action?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#4A4D73]">
            Meet the Palaris. See their biographies. Choose your coworker.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/palaris"
              className="rounded-2xl bg-[#F46F61] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#F46F61]/25 transition hover:-translate-y-0.5"
            >
              Meet the Palaris
            </Link>
            <a
              href="/#early-access"
              className="rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-3 text-base font-semibold text-[#2E2A7B] shadow-sm transition hover:bg-[#EEEAF8]"
            >
              Get early access
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
