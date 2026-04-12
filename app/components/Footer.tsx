import DotLogo from "./DotLogo";

export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] py-16 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-3">
              <DotLogo size="sm" />
              <span className="text-xl font-bold tracking-tight">Palari</span>
            </div>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-gray-400">
              AI coworkers that feel like real teammates.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-400">Links</h3>
            <ul className="mt-4 space-y-3 text-base">
              <li>
                <a href="#how-it-works" className="text-gray-200 transition-colors hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-200 transition-colors hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                {/* TODO: Replace with real GitHub URL */}
                <a href="#" className="text-gray-200 transition-colors hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                {/* TODO: Replace with real Twitter/X URL */}
                <a href="#" className="text-gray-200 transition-colors hover:text-white">
                  Twitter/X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a href="mailto:hello@palari.io" className="text-lg font-medium text-white">
              hello@palari.io
            </a>
            <p className="mt-4 text-base text-gray-500">Built by Quetza</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400">2026 Palari. Open source core under MIT license.</p>
        </div>
      </div>
    </footer>
  );
}
