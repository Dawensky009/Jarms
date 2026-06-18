import { Star } from "lucide-react";

const ITEMS = [
  "Ad Videos",
  "Brand Films",
  "Product Videos",
  "Websites That Sell",
  "Made With AI",
  "Done in Days",
];

/**
 * Kinetic typographic band — a signature agency device. Bold words scroll past
 * with alternating filled / outlined treatment and a gold star between each.
 * Pure CSS marquee (off main thread); pauses on hover.
 */
export function MarqueeBand() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-white/10 bg-ink py-6 sm:py-8">
      <div className="flex w-max animate-marquee items-center [animation-duration:32s] hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center">
            <span
              className={`whitespace-nowrap px-6 font-display text-3xl font-extrabold uppercase tracking-tight sm:px-9 sm:text-5xl ${
                i % 2 === 0
                  ? "text-white"
                  : "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]"
              }`}
            >
              {item}
            </span>
            <Star className="h-4 w-4 flex-none fill-gold text-gold sm:h-5 sm:w-5" />
          </div>
        ))}
      </div>
    </section>
  );
}
