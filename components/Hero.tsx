"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clapperboard, Globe, Star } from "lucide-react";
import { PRICING, SITE, TILES, WEBSITES, type Tile, type Website } from "@/lib/data";
import { posterFor } from "@/components/ui/useHoverPlay";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const ease = [0.22, 1, 0.36, 1] as const;

// the hero centrepiece is a mix: star-english[5–14s] then shake-up[0–14s], looped
const CENTER: Tile = {
  id: "hero-mix",
  title: "Jarms Showreel",
  client: "Selected work",
  category: "Brand",
  video: "/videos/hero-mix.mp4",
  tone: "from-[#3a2c10] to-[#0e1116]",
};
const STAT = TILES.find((t) => t.id === "makaya") ?? TILES[0];
const AV1 = TILES.find((t) => t.id === "cdm") ?? TILES[1];
const AV2 = TILES.find((t) => t.id === "anna") ?? TILES[2];

/** Single primary CTA — one tap to start, for either service. */
function PrimaryCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-base font-bold text-ink transition-colors duration-200 ease-out-strong hover:bg-gold-soft active:scale-[0.98] ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      Get a Video / Website
    </a>
  );
}

/** Prioritised secondary action — a prominent outlined button, not a buried link. */
function SeeWorkButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#work"
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink/15 px-5 py-3.5 text-base font-semibold text-ink transition-colors duration-200 ease-out-strong hover:border-ink hover:bg-ink hover:text-white ${className}`}
    >
      See our work
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

/** Low-barrier price anchors — "Video from $50 · Website from $300". */
function PricePills({ className = "" }: { className?: string }) {
  const icons = { video: Clapperboard, web: Globe } as const;
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {PRICING.map((p) => {
        const Icon = icons[p.id];
        return (
          <span
            key={p.id}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-sm"
          >
            <Icon className="h-3.5 w-3.5 text-gold-deep" />
            {p.name} <span className="font-normal text-ink-muted">from</span>
            <span className="text-gold-deep">{p.priceFrom}</span>
          </span>
        );
      })}
    </div>
  );
}

/** Centrepiece reel — autoplays inline (muted), never opens a modal. */
function CenterReel() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) v.play().catch(() => {});
  }, []);
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-ink/10 bg-night shadow-[0_40px_90px_-40px_rgba(20,22,29,0.45)]">
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
    </div>
  );
}

function SiteCard({ site, className = "" }: { site: Website; className?: string }) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${site.name}`}
      className={`group relative block overflow-hidden rounded-2xl border border-ink/10 bg-night shadow-xl shadow-ink/10 transition-transform duration-300 ease-out-strong hover:-translate-y-1 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.image}
        alt={`${site.name} website`}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out-strong group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="text-sm font-semibold text-white">{site.name}</p>
        <p className="text-[0.7rem] text-white/60">Website</p>
      </div>
    </a>
  );
}

function TrustLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 text-xs text-ink-muted ${className}`}>
      <span className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
        ))}
      </span>
      4.9 · Trusted by 90+ brands
    </div>
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
  return (
    <section id="top" className="relative overflow-hidden bg-[#f4f3ef] pt-20 sm:pt-28">
      {/* dotted "beautiful background" */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,_rgba(20,22,29,0.08)_1.1px,_transparent_1.1px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(241,172,35,0.10),transparent_70%)]" />

      <div className="container-px relative z-10 mx-auto max-w-container">
        <h1 className="sr-only">
          Jarms Marketing — videos &amp; websites that push your brand to the next level, from $50.
        </h1>

        {/* ===================== MOBILE (fold = hook → swipe → CTAs) ===================== */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-center"
          >
            <h2 className="font-display text-[clamp(1.9rem,8.5vw,2.7rem)] font-bold uppercase leading-[1.02] tracking-tight text-ink">
              Videos &amp; websites that push your brand <span className="text-gold-deep">to the next level.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm text-ink-muted">
              Most content gets scrolled past. We make work people stop for — and buy
              from. In days, not months.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-8 pb-12"
          >
            <PricePills className="mb-4" />
            <PrimaryCTA />
            <SeeWorkButton className="mt-3 w-full" />
            <TrustLine className="mt-5" />
          </motion.div>
        </div>

        {/* ===================== DESKTOP ===================== */}
        <div className="hidden lg:block">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-7 text-center text-sm font-semibold uppercase tracking-[0.22em] text-gold-deep"
          >
            Get seen · Get remembered · Get paid
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="grid items-stretch gap-8 lg:grid-cols-[1fr_minmax(290px,360px)_1fr]"
          >
            {/* left */}
            <div className="flex flex-col justify-between gap-7 text-right">
              <Words>
                Video
                <br />
                &amp; Web
              </Words>
              <p className="self-end max-w-[19rem] text-sm leading-snug text-ink-muted">
                Videos &amp; websites that push your brand to the next level — work people
                stop for, and buy from.
              </p>
            </div>

            {/* centrepiece (inline, no modal) — prices + CTAs sit right under it */}
            <div className="flex flex-col gap-4">
              <div className="aspect-[3/4] w-full">
                <CenterReel />
              </div>
              <PricePills />
              <PrimaryCTA />
            </div>

            {/* right */}
            <div className="flex flex-col justify-between gap-7">
              <Words>Agency</Words>
              <SeeWorkButton className="w-fit" />
            </div>
          </motion.div>

          {/* floating proof cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative z-10 mt-10 grid grid-cols-[1.3fr_1fr_0.8fr_0.8fr] items-end gap-4 pb-16"
          >
            {/* stat card (links to work — no modal) */}
            <a
              href="#work"
              className="group relative flex h-40 items-end overflow-hidden rounded-2xl border border-white/15 bg-night p-4 text-left shadow-xl shadow-ink/20"
            >
              <video
                src={STAT.video}
                poster={posterFor(STAT.video)}
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
            </a>

            {/* trusted card */}
            <div className="flex h-40 flex-col justify-between rounded-2xl border border-ink/10 bg-white p-4 shadow-xl shadow-ink/5">
              <div className="flex -space-x-2">
                {[AV1, AV2, CENTER].map((t) => (
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

            {/* websites we built — photos */}
            <SiteCard site={WEBSITES[0]} className="h-40" />
            <SiteCard site={WEBSITES[1]} className="h-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
