"use client";

import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { TILES, type Tile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { VideoModal } from "@/components/ui/VideoModal";
import { useHoverPlay, posterFor } from "@/components/ui/useHoverPlay";

function GalleryTile({ tile, onPlay }: { tile: Tile; onPlay: (t: Tile) => void }) {
  const hover = useHoverPlay();

  return (
    <button
      onClick={() => onPlay(tile)}
      onMouseEnter={hover.onMouseEnter}
      onMouseLeave={hover.onMouseLeave}
      aria-label={`Play ${tile.title} for ${tile.client}`}
      className={`group relative mr-4 aspect-video w-[260px] flex-none cursor-pointer overflow-hidden rounded-2xl border border-ink/5 bg-gradient-to-br shadow-sm transition-[transform,box-shadow] duration-300 ease-out-strong will-change-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-night/25 active:scale-[0.99] sm:w-[340px] ${tile.tone}`}
    >
      {/* poster paints instantly; the video itself loads only on hover (preload=none) */}
      <video
        ref={hover.videoRef}
        src={tile.video}
        poster={posterFor(tile.video)}
        muted
        loop
        playsInline
        preload="none"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-[1.04]"
      />
      {/* legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />
      {/* gold ring blooms on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-colors duration-300 group-hover:ring-gold/60" />

      <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-night/40 px-3 py-1 text-[0.7rem] font-medium text-white/85 backdrop-blur-sm">
        {tile.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
        <div className="text-left">
          <p className="font-display text-base font-semibold text-white">{tile.title}</p>
          <p className="text-xs text-white/60">{tile.client}</p>
        </div>
        <span className="flex h-10 w-10 flex-none translate-y-1 items-center justify-center rounded-full bg-gold text-ink opacity-0 shadow-lg transition-[opacity,transform] duration-300 ease-out-strong group-hover:translate-y-0 group-hover:opacity-100">
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
      </div>
    </button>
  );
}

function MarqueeRow({
  tiles,
  reverse = false,
  durationClass,
  onPlay,
}: {
  tiles: Tile[];
  reverse?: boolean;
  durationClass: string;
  onPlay: (t: Tile) => void;
}) {
  // doubled list + per-tile right margin → translateX(-50%) loops with no seam
  const loop = [...tiles, ...tiles];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex w-max animate-marquee hover:[animation-play-state:paused] ${durationClass} ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {loop.map((t, i) => (
          <GalleryTile key={`${t.id}-${i}`} tile={t} onPlay={onPlay} />
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const [active, setActive] = useState<Tile | null>(null);
  const row2 = [...TILES].reverse();

  return (
    <section id="work" className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="container-px mx-auto mb-10 max-w-container">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
                <ArrowUpRight className="h-4 w-4" />
                Our work
              </p>
              <h2 className="mt-4 font-display text-section font-bold uppercase tracking-tight text-ink">
                Recent projects
              </h2>
            </div>
            <p className="max-w-xs text-sm text-ink-muted">
              Hover to preview, tap to watch. Real work for real businesses.
            </p>
          </div>
        </Reveal>
      </div>

      {/* soft edge fades so tiles dissolve in/out instead of hard-cutting at the rim */}
      <div className="relative space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <MarqueeRow tiles={TILES} durationClass="[animation-duration:50s]" onPlay={setActive} />
        <MarqueeRow tiles={row2} reverse durationClass="[animation-duration:62s]" onPlay={setActive} />
      </div>

      <VideoModal
        project={
          active
            ? { title: active.title, client: active.client, videoSrc: active.video }
            : null
        }
        onClose={() => setActive(null)}
      />
    </section>
  );
}
