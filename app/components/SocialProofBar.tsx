import FadeIn from "./FadeIn";

export default function SocialProofBar() {
  return (
    <FadeIn>
      <section className="border-y border-gray-200 bg-[#F8F9FC] py-12">
        <div className="mx-auto w-full max-w-6xl px-6 text-center text-sm text-gray-500 md:px-8 md:text-base">
          <span className="font-medium text-gray-600">Built with</span>
          <span className="mx-3 text-gray-300">|</span>
          <span className="text-gray-400">Claude by Anthropic</span>
          <span className="mx-3 text-gray-300">|</span>
          <span className="text-gray-400">OpenAI Codex</span>
          <span className="mx-3 text-gray-300">|</span>
          <span className="text-gray-400">Slack API</span>
        </div>
      </section>
    </FadeIn>
  );
}
