"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { TILES, type Tile } from "@/lib/data";
import { VideoModal } from "@/components/ui/VideoModal";

function GalleryTile({ tile, onPlay }: { tile: Tile; onPlay: (t: Tile) => void }) {
  return (
    <button
      onClick={() => onPlay(tile)}
      aria-label={`Play ${tile.title} for ${tile.client}`}
      className={`group relative aspect-video w-[240px] flex-none cursor-pointer overflow-hidden rounded-2xl border border-ink/5 bg-gradient-to-br sm:w-[320px] ${tile.tone}`}
    >
      {/* first frame as thumbnail (full video plays in the lightbox) */}
      <video
        src={`${tile.video}#t=1`}
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
        onLoadedMetadata={(e) => {
          try {
            e.currentTarget.currentTime = 1;
          } catch {}
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />

      <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-night/40 px-3 py-1 text-[0.7rem] text-white/85 backdrop-blur-sm">
        {tile.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
        <div className="text-left">
          <p className="font-display text-base font-semibold text-white">{tile.title}</p>
          <p className="text-xs text-white/60">{tile.client}</p>
        </div>
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
  const loop = [...tiles, ...tiles];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex w-max gap-4 pr-4 animate-marquee hover:[animation-play-state:paused] ${durationClass} ${
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
    <section id="work" className="overflow-hidden bg-white py-10 sm:py-12">
      <div className="space-y-4">
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
