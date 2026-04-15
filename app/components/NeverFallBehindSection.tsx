import FadeIn from "./FadeIn";

export default function NeverFallBehindSection() {
  return (
    <section
      id="never-fall-behind"
      className="bg-[#F7F5F2] py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            You never fall behind
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#2E2A7B] md:text-xl">
            New models every month. Same coworker, same memory, same
            voice. You change nothing.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
