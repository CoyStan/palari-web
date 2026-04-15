"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";

const DOTS = [
  { color: "#E7B83D", x: 0.561, y: -0.081, d: 0.22 },
  { color: "#F46F61", x: 0.643, y: -0.231, d: 0.138 },
  { color: "#E7B83D", x: 0.654, y: 0.055, d: 0.154 },
  { color: "#F46F61", x: 0.722, y: -0.366, d: 0.179 },
  { color: "#22B8B0", x: 0.742, y: -0.026, d: 0.179 },
  { color: "#2E2A7B", x: 0.818, y: -0.239, d: 0.236 },
];

type Props = {
  href?: string;
  className?: string;
};

export default function PalariLogo({ href = "/", className = "" }: Props) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      setBox({ w: rect.width, h: rect.height });
    };

    measure();
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const content = (
    <span
      className={`relative inline-block select-none leading-none ${className}`}
    >
      <span
        ref={textRef}
        className="block font-bold leading-none text-[#2E2A7B]"
        style={{
          fontFamily:
            "var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif",
          fontSize: "1.5rem",
          letterSpacing: "-0.03em",
        }}
      >
        Palari
      </span>

      {box
        ? DOTS.map((dot, i) => {
            const diameter = box.h * dot.d;
            return (
              <span
                key={i}
                aria-hidden="true"
                className="absolute rounded-full"
                style={{
                  left: box.w * dot.x - diameter / 2,
                  top: box.h * dot.y - diameter / 2,
                  width: diameter,
                  height: diameter,
                  background: dot.color,
                }}
              />
            );
          })
        : null}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Palari home" className="inline-block">
      {content}
    </Link>
  );
}
