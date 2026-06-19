"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ArrowUpRight, Play } from "lucide-react";
import { SITE, TILES, type Tile } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { VideoModal } from "@/components/ui/VideoModal";
import { useHoverPlay, posterFor } from "@/components/ui/useHoverPlay";

const ease = [0.22, 1, 0.36, 1] as const;

const HERO_REEL = TILES.find((t) => t.id === "shake-up") ?? TILES[0];

/** Reel embedded inline in the headline — autoplays muted, opens on click. */
function InlineReel({ onOpen }: { onOpen: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduce) v.play().catch(() => {});
  }, []);

  return (
    <button
      onClick={onOpen}
      aria-label="Play the showreel"
      className="group relative mx-2 inline-block aspect-[1.9/1] h-[0.78em] translate-y-[0.04em] cursor-pointer overflow-hidden rounded-2xl border border-ink/10 bg-night align-middle shadow-lg shadow-ink/15 sm:mx-3"
    >
      <video
        ref={ref}
        src={HERO_REEL.video}
        poster={posterFor(HERO_REEL.video)}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-night/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex h-[0.42em] w-[0.42em] items-center justify-center rounded-full bg-white/90 text-ink">
          <Play className="h-[0.2em] w-[0.2em] fill-current" />
        </span>
      </span>
    </button>
  );
}

/** Small filmstrip thumbnail — hover-plays, opens on click. */
function StripThumb({ tile, onOpen }: { tile: Tile; onOpen: (t: Tile) => void }) {
  const hover = useHoverPlay();
  return (
    <button
      onClick={() => onOpen(tile)}
      onMouseEnter={hover.onMouseEnter}
      onMouseLeave={hover.onMouseLeave}
      aria-label={`Play ${tile.title}`}
      className="group relative aspect-video w-32 flex-none cursor-pointer overflow-hidden rounded-xl border border-ink/10 bg-night transition-transform duration-300 ease-out-strong hover:-translate-y-1 sm:w-auto sm:flex-1"
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
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
      />
      <span className="absolute inset-0 ring-1 ring-inset ring-white/0 transition-colors duration-300 group-hover:ring-gold/70" />
    </button>
  );
}

export function Hero() {
  const [active, setActive] = useState<Tile | null>(null);

  return (
    <section id="top" className="grain relative overflow-hidden bg-white pt-28 sm:pt-36">
      <div className="container-px mx-auto max-w-container">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-mist px-3.5 py-1.5 text-sm font-medium text-ink-soft"
        >
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
            ))}
          </span>
          Trusted by 90+ brands
        </motion.div>

        {/* giant headline with inline reel */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mt-6 max-w-5xl font-display text-giant font-bold uppercase leading-[0.95] tracking-tight text-ink"
        >
          Creative
          <InlineReel onOpen={() => setActive(HERO_REEL)} />
          video
          <br />
          &amp; websites that <span className="text-gold-deep">sell</span>
        </motion.h1>

        {/* subhead + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-base text-ink-muted sm:text-lg">
            We&apos;re an AI-powered studio making the videos and websites that get small
            brands seen — and turn that attention into paying customers.
          </p>

          <div className="flex flex-none items-center gap-3">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-sm font-medium text-white transition-colors duration-200 ease-out-strong hover:bg-ink-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Get a free quote
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-200 ease-out-strong group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#work"
              className="hidden text-sm font-medium text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline sm:inline"
            >
              See our work
            </a>
          </div>
        </motion.div>

        {/* filmstrip of recent work */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease }}
          className="mt-12 flex gap-2.5 overflow-x-auto pb-2 sm:mt-14 sm:gap-3 sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TILES.map((tile) => (
            <StripThumb key={tile.id} tile={tile} onOpen={setActive} />
          ))}
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
