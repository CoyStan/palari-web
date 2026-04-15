import FadeIn from "../FadeIn";
import Link from "next/link";

export default function CharacterCta() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <FadeIn>
          <div className="rounded-[28px] bg-gradient-to-br from-[#FFF4F1] via-white to-[#F0F9F8] p-8 ring-1 ring-black/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5B5E84]">
              In plain language
            </p>
            <p className="mt-5 text-base leading-8 text-[#2E2A7B]">
              A Palari is a coworker with a stable character and a memory
              of your work. It&rsquo;s not a person. It&rsquo;s also not
              a forgetful assistant that starts from zero every
              conversation. It&rsquo;s something in between, designed to
              be the part of your team that doesn&rsquo;t churn.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/memory"
                className="rounded-2xl bg-[#2E2A7B] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                See how memory works
              </Link>
              <Link
                href="/philosophy"
                className="rounded-2xl border border-[#2E2A7B]/10 bg-white px-6 py-3 text-sm font-semibold text-[#2E2A7B] transition hover:bg-[#EEEAF8]"
              >
                Read the philosophy
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
