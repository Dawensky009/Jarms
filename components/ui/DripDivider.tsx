// Brand "drip" motif (echoes the honey drip in the Jarms logo).
// Renders the *top* section's color dripping down into the section below.
// Set the color via text-* utility on `className` — the SVG uses currentColor.

export function DripDivider({
  className = "text-cream",
  flip = false,
  height = 64,
}: {
  className?: string;
  flip?: boolean;
  height?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full leading-[0] ${className} ${flip ? "rotate-180" : ""}`}
      style={{ height }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,0 H1440 V34 C1300,34 1290,34 1252,38 C1232,40 1230,78 1208,78 C1186,78 1184,42 1150,40 C980,32 760,36 600,40 C580,40 578,72 558,72 C540,72 538,44 506,42 C360,34 200,38 120,42 C100,43 98,66 80,66 C64,66 62,44 36,42 C20,41 0,42 0,42 Z" />
        {/* detached honey droplets */}
        <ellipse cx="1208" cy="74" rx="7" ry="6" />
        <ellipse cx="558" cy="68" rx="6" ry="5" />
        <ellipse cx="80" cy="62" rx="5" ry="4" />
      </svg>
    </div>
  );
}
