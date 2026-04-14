import FadeIn from "./FadeIn";
import Link from "next/link";

export default function LifeTeaserSection() {
  return (
    <section className="bg-gradient-to-br from-[#FFF8F2] via-white to-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
              From Sofia&rsquo;s life
            </p>
            <p className="mt-5 text-xl leading-8 text-[#2E2A7B] md:text-2xl md:leading-9">
              &ldquo;At twenty-two I ran a product team of three. We spent
              eight months polishing a launch that shipped to forty-one
              people and died quietly. I learned that week the difference
              between finished and shipped.&rdquo;
            </p>
            <p className="mt-5 text-sm italic text-[#5B5E84]">
              A core memory from Sofia&rsquo;s generated life. Not a
              backstory blurb. A scar she carries into every conversation.
            </p>

            <div className="mt-7">
              <Link
                href="/life"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E2A7B] transition-colors hover:text-[#F46F61]"
              >
                See how a Palari is born
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
