import FadeIn from "../FadeIn";

export default function LifeDivider() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-[#2E2A7B]/10" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
              Life Generation
            </p>
            <div className="h-px flex-1 bg-[#2E2A7B]/10" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Before they meet you, they&apos;ve already lived 28 years
          </h2>
        </FadeIn>
      </div>
    </section>
  );
}
