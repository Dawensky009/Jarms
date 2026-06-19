"use client";

import { useEffect, useRef } from "react";
import type { Tile } from "@/lib/data";
import { posterFor } from "@/components/ui/useHoverPlay";

/**
 * Touch swipe carousel of project reels (mobile fold).
 * Scroll-snaps; only the in-view card plays (IntersectionObserver) to stay light.
 * Plays inline — never opens a modal.
 */
export function MobileVideoSwipe({ tiles }: { tiles: Tile[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const videos = Array.from(root.querySelectorAll<HTMLVideoElement>("video"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting && e.intersectionRatio >= 0.6) v.play().catch(() => {});
          else v.pause();
        }
      },
      { root, threshold: [0, 0.6, 1] }
    );
    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className="relative aspect-[9/16] h-[clamp(16rem,40vh,22rem)] shrink-0 snap-center overflow-hidden rounded-3xl border border-ink/10 bg-night"
        >
          <video
            src={tile.video}
            poster={posterFor(tile.video)}
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-night/40 px-2.5 py-1 text-[0.65rem] font-medium text-white/85 backdrop-blur-sm">
            {tile.category}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-3">
            <p className="font-display text-sm font-bold uppercase tracking-tight text-white">{tile.title}</p>
            <p className="text-[0.7rem] text-white/60">{tile.client}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
