"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowLeft, Play } from "lucide-react";
import { SITE, TILES, type Tile } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { VideoModal } from "@/components/ui/VideoModal";
import { useHoverPlay, posterFor } from "@/components/ui/useHoverPlay";

const ease = [0.22, 1, 0.36, 1] as const;

const CENTER = TILES.find((t) => t.id === "star") ?? TILES[0];
const CARD_A = TILES.find((t) => t.id === "makaya") ?? TILES[0];
const CARD_B = TILES.find((t) => t.id === "cdm") ?? TILES[1];
const CARD_C = TILES.find((t) => t.id === "anna") ?? TILES[2];

/** The tall centrepiece reel — autoplays muted, opens on click. */
function CenterReel({ onOpen }: { onOpen: () => void }) {
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
      className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-[2rem] border border-ink/10 bg-night shadow-[0_40px_90px_-40px_rgba(20,22,29,0.45)]"
    >
      <video
        ref={ref}
        src={CENTER.video}
        poster={posterFor(CENTER.video)}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg backdrop-blur transition-transform duration-300 ease-out-strong group-hover:scale-110">
        <Play className="ml-0.5 h-5 w-5 fill-current" />
      </span>
    </button>
  );
}

/** Small image card (poster) that opens the modal. */
function PosterCard({ tile, onOpen, className = "" }: { tile: Tile; onOpen: (t: Tile) => void; className?: string }) {
  const hover = useHoverPlay();
  return (
    <button
      onClick={() => onOpen(tile)}
      onMouseEnter={hover.onMouseEnter}
      onMouseLeave={hover.onMouseLeave}
      aria-label={`Play ${tile.title}`}
      className={`group relative overflow-hidden rounded-2xl border border-ink/10 bg-night shadow-xl shadow-ink/10 transition-transform duration-300 ease-out-strong hover:-translate-y-1 ${className}`}
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
    </button>
  );
}

const Words = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span
    aria-hidden="true"
    className={`block font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-ink ${className}`}
  >
    {children}
  </span>
);

export function Hero() {
  const [active, setActive] = useState<Tile | null>(null);

  return (
    <section id="top" className="relative overflow-hidden bg-[#f4f3ef] pt-24 sm:pt-28">
      {/* dotted "beautiful background" */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,_rgba(20,22,29,0.08)_1.1px,_transparent_1.1px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(241,172,35,0.10),transparent_70%)]" />

      <div className="container-px relative z-10 mx-auto max-w-container">
        <h1 className="sr-only">Jarms Marketing — a creative video & web agency that turns attention into paying customers.</h1>

        {/* headline wrapping the centrepiece */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="grid items-stretch gap-6 lg:grid-cols-[1fr_minmax(290px,360px)_1fr] lg:gap-8"
        >
          {/* left */}
          <div className="flex flex-col gap-6 lg:gap-7 lg:text-right">
            <Words>
              Creative
              <br />
              Digital
            </Words>
            <p className="font-display text-sm font-bold uppercase leading-snug tracking-wide text-ink-soft lg:max-w-[15rem] lg:self-end">
              We turn attention into
              <br className="hidden lg:block" /> paying customers.
            </p>
          </div>

          {/* centrepiece */}
          <div className="order-first aspect-[3/4] w-full lg:order-none">
            <CenterReel onOpen={() => setActive(CENTER)} />
          </div>

          {/* right */}
          <div className="flex flex-col gap-6 lg:gap-7">
            <Words>Agency</Words>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-sm font-medium text-white transition-colors duration-200 ease-out-strong hover:bg-ink-soft"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Start Project
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-200 ease-out-strong group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/70 px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 ease-out-strong hover:border-ink/30"
              >
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>

        {/* floating proof cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative z-10 mt-10 grid grid-cols-2 gap-3 pb-16 sm:gap-4 lg:-mt-12 lg:grid-cols-[1.3fr_1fr_0.8fr_0.8fr] lg:items-end"
        >
          {/* stat card */}
          <button
            onClick={() => setActive(CARD_A)}
            className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl border border-white/15 bg-night p-4 text-left shadow-xl shadow-ink/20 sm:aspect-video lg:h-40"
            aria-label="Play project reel"
          >
            <video
              src={CARD_A.video}
              poster={posterFor(CARD_A.video)}
              muted
              loop
              playsInline
              preload="none"
              tabIndex={-1}
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 ease-out-strong group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
            <div className="relative">
              <p className="font-display text-lg font-bold text-white">50+ projects delivered</p>
              <p className="text-xs text-white/70">3× average client growth</p>
            </div>
            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink">
              <Play className="ml-0.5 h-4 w-4 fill-current" />
            </span>
          </button>

          {/* trusted card */}
          <div className="flex aspect-[4/3] flex-col justify-between rounded-2xl border border-ink/10 bg-white p-4 shadow-xl shadow-ink/5 sm:aspect-video lg:h-40">
            <div className="flex -space-x-2">
              {[CARD_B, CARD_C, CENTER].map((t) => (
                <span key={t.id} className="h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={posterFor(t.video)} alt="" className="h-full w-full object-cover" />
                </span>
              ))}
            </div>
            <p className="text-sm font-medium leading-snug text-ink">
              Trusted by startups &amp; brands across many fields.
            </p>
          </div>

          {/* image cards */}
          <PosterCard tile={CARD_B} onOpen={setActive} className="aspect-[4/3] sm:aspect-video lg:h-40" />
          <PosterCard tile={CARD_C} onOpen={setActive} className="hidden aspect-[4/3] sm:aspect-video lg:block lg:h-40" />
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
