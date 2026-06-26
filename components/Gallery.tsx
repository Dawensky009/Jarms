"use client";

import { useMemo, useState } from "react";
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
      className="group relative block aspect-[9/16] w-full cursor-pointer overflow-hidden rounded-3xl border border-ink/5 bg-night text-left transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-night/25 lg:aspect-video"
    >
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
      <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition-colors duration-300 group-hover:ring-gold/60" />

      <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-night/40 px-3 py-1 text-[0.7rem] font-medium text-white/85 backdrop-blur-sm">
        {tile.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
        <div>
          <p className="font-display text-base font-bold uppercase tracking-tight text-white">{tile.title}</p>
          <p className="text-xs text-white/60">{tile.client}</p>
        </div>
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold text-ink shadow-lg transition-[opacity,transform] duration-300 ease-out-strong lg:translate-y-1 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
      </div>
    </button>
  );
}

export function Gallery() {
  const [active, setActive] = useState<Tile | null>(null);
  const [filter, setFilter] = useState<string>("All");

  // tabs derived from the real videos — never shows an empty category
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(TILES.map((t) => t.category)))],
    []
  );
  const filtered = useMemo(
    () => (filter === "All" ? TILES : TILES.filter((t) => t.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
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
              Swipe through our recent work — tap any to watch.
            </p>
          </div>
        </Reveal>

        {/* category filter tabs */}
        <Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const activeTab = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  aria-pressed={activeTab}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ease-out-strong active:scale-95 ${
                    activeTab
                      ? "bg-ink text-white"
                      : "border border-ink/15 text-ink-soft hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* mobile = swipe carousel · desktop = grid */}
        <div className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {filtered.map((tile) => (
            <div key={tile.id} className="w-[64%] shrink-0 snap-center sm:w-[42%] lg:w-auto">
              <GalleryTile tile={tile} onPlay={setActive} />
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-ink-muted lg:hidden">Swipe to explore →</p>
      </div>

      <VideoModal
        project={
          active ? { title: active.title, client: active.client, videoSrc: active.video } : null
        }
        onClose={() => setActive(null)}
      />
    </section>
  );
}
