import Link from "next/link";
import FadeIn from "./FadeIn";

type Props = {
  eyebrow?: string;
  headline: string;
  body?: string;
  next: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function PageNextCta({
  eyebrow = "What's next",
  headline,
  body,
  next,
  secondary,
}: Props) {
  return (
    <section className="bg-gradient-to-br from-[#F7F5F2] via-[#FFF4F1] to-[#F0F9F8] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <div className="rounded-[28px] bg-white p-8 shadow-[0_20px_60px_-40px_rgba(46,42,123,0.4)] ring-1 ring-black/5 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#2E2A7B] md:text-3xl md:leading-tight">
              {headline}
            </h2>
            {body ? (
              <p className="mt-4 text-base leading-relaxed text-[#4A4D73]">
                {body}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={next.href}
                className="inline-flex items-center justify-center rounded-2xl bg-[#2E2A7B] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#2E2A7B]/15 transition hover:-translate-y-0.5"
              >
                {next.label}
                <span aria-hidden="true" className="ml-1.5">
                  &rarr;
                </span>
              </Link>
              {secondary ? (
                <Link
                  href={secondary.href}
                  className="inline-flex items-center justify-center rounded-2xl border border-[#2E2A7B]/15 bg-white px-6 py-3 text-sm font-semibold text-[#2E2A7B] transition-colors hover:bg-[#EEEAF8]"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
