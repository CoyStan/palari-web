type PalariDotsProps = {
  scale?: "navbar" | "hero";
};

export default function PalariDots({ scale = "navbar" }: PalariDotsProps) {
  const isHero = scale === "hero";
  const size = isHero ? { width: 116, height: 108 } : { width: 20, height: 18 };
  const factor = isHero ? 2 : 20 / 58;
  const prefix = isHero ? "dot-hero-float" : "dot-float";

  const dots = [
    { cx: 10, cy: 40, r: 6, fill: "#E7B83D", anim: `${prefix}-1` },
    { cx: 24, cy: 26, r: 7, fill: "#22B8B0", anim: `${prefix}-2` },
    { cx: 38, cy: 36, r: 6, fill: "#9B4FCC", anim: `${prefix}-3` },
    { cx: 16, cy: 18, r: 5, fill: "#4CAF50", anim: `${prefix}-4` },
    { cx: 30, cy: 10, r: 5, fill: "#2E2A7B", anim: `${prefix}-5` },
    { cx: 44, cy: 20, r: 6, fill: "#F46F61", anim: `${prefix}-6` },
  ];

  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 58 54"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={dot.fill}
          className={dot.anim}
        />
      ))}
    </svg>
  );
}
