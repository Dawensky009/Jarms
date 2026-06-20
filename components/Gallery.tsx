"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { TILES, type Tile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { VideoModal } from "@/components/ui/VideoModal";
import { useHoverPlay, posterFor } from "@/components/ui/useHoverPlay";

const ease = [0.22, 1, 0.36, 1] as const;

function GalleryTile({ tile, onPlay }: { tile: Tile; onPlay: (t: Tile) => void }) {
  const hover = useHoverPlay();
  return (
    <button
      onClick={() => onPlay(tile)}
      onMouseEnter={hover.onMouseEnter}
      onMouseLeave={hover.onMouseLeave}
      aria-label={`Play ${tile.title} for ${tile.client}`}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-3xl border border-ink/5 bg-night text-left transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-night/25"
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
        <span className="flex h-10 w-10 flex-none translate-y-1 items-center justify-center rounded-full bg-gold text-ink opacity-0 shadow-lg transition-[opacity,transform] duration-300 ease-out-strong group-hover:translate-y-0 group-hover:opacity-100">
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
      </div>
    </button>
  );
}

export function Gallery() {
  const [active, setActive] = useState<Tile | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const reduce = useReducedMotion();

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
              Filter by category. Hover to preview, tap to watch.
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

        <motion.div layout className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((tile) => (
              <motion.div
                key={tile.id}
                layout
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease }}
              >
                <GalleryTile tile={tile} onPlay={setActive} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
