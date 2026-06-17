import type { ReactNode } from "react";

/**
 * Editorial section label: monospace, uppercase, numbered, with a hairline rule.
 * The numbered "(0X)" device is a hallmark of studio/agency sites — the opposite
 * of the generic centered sans eyebrow.
 */
export function Eyebrow({
  index,
  children,
  tone = "dark",
  className = "",
}: {
  index?: string;
  children: ReactNode;
  tone?: "dark" | "light"; // "light" = on dark backgrounds
  className?: string;
}) {
  const text = tone === "light" ? "text-white/55" : "text-ink-muted";
  const accent = tone === "light" ? "text-gold" : "text-gold-deep";
  const rule = tone === "light" ? "bg-white/20" : "bg-ink/15";

  return (
    <p className={`flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] ${text} ${className}`}>
      {index && <span className={accent}>({index})</span>}
      <span>{children}</span>
      <span className={`h-px w-8 flex-none ${rule}`} aria-hidden="true" />
    </p>
  );
}
