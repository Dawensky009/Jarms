"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE, TILES, type Tile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useHoverPlay, posterFor } from "@/components/ui/useHoverPlay";
import { VideoModal } from "@/components/ui/VideoModal";

const t = (id: string) => TILES.find((x) => x.id === id) ?? TILES[0];

type CaseItem = {
  label: string;
  pill: string;
  title: string;
  sub: string;
  tile: Tile;
  down?: boolean;
};

// placeholder metrics — swap for real numbers once you have them
const CASES: CaseItem[] = [
  { label: "E-commerce & D2C Brands", pill: "Impact", title: "Food & drink campaigns", sub: "3× more engagement on average", tile: t("anna") },
  { label: "Growth & Reach", pill: "Reach", title: "More views, more sales", sub: "Up to 2× conversion lift", tile: t("blind-eye"), down: true },
  { label: "Corporate & Enterprise Teams", pill: "Retention", title: "Clients who keep coming back", sub: "Built to convert, not just to look nice", tile: t("astreya") },
];

const LEFT = t("makaya");

function ArrowChip() {
  return (
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-gold text-gold transition-transform duration-200 ease-out-strong group-hover:rotate-45">
      <ArrowRight className="h-4 w-4" />
    </span>
  );
}

function CaseCard({ item, onOpen }: { item: CaseItem; onOpen: (tt: Tile) => void }) {
  const hover = useHoverPlay();
  return (
    <div className={item.down ? "lg:mt-24" : ""}>
      <button
        onClick={() => onOpen(item.tile)}
        onMouseEnter={hover.onMouseEnter}
        onMouseLeave={hover.onMouseLeave}
        aria-label={`Play ${item.title}`}
        className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-3xl border border-ink/10 bg-night text-left transition-transform duration-300 ease-out-strong hover:-translate-y-1.5"
      >
        <video
          ref={hover.videoRef}
          src={item.tile.video}
          poster={posterFor(item.tile.video)}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
          {item.pill}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-lg font-bold leading-tight text-white">{item.title}</p>
          <p className="mt-1 text-sm text-white/70">{item.sub}</p>
        </div>
      </button>

      <div className="group mt-4 flex items-center justify-between">
        <p className="max-w-[11rem] font-display text-base font-bold uppercase leading-tight tracking-tight text-ink">
          {item.label}
        </p>
        <ArrowChip />
      </div>
    </div>
  );
}

export function TrustedBy() {
  const [active, setActive] = useState<Tile | null>(null);
  const leftHover = useHoverPlay();

  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        {/* header */}
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="font-display text-section font-bold uppercase leading-[1.02] tracking-tight text-ink">
              Trusted by
              <span className="mt-1 flex items-center gap-3">
                <ArrowRight className="h-8 w-8 flex-none text-gold sm:h-10 sm:w-10" strokeWidth={2.5} />
                Teams at scale
              </span>
            </h2>
            <p className="max-w-md text-lg leading-relaxed">
              <span className="text-ink">
                We work with scrappy startups and established local brands alike —
              </span>{" "}
              <span className="text-ink-muted">
                people who want real results, not just something that looks nice.
              </span>
            </p>
          </div>
        </Reveal>

        {/* grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1fr_1fr_1fr] lg:items-start lg:gap-5">
          {/* left column */}
          <Reveal className="flex flex-col">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold">
              <ArrowRight className="h-4 w-4" />
            </span>
            <p className="mt-5 max-w-[11rem] font-display text-base font-bold uppercase leading-tight tracking-tight text-ink">
              Startups &amp; Tech Companies
            </p>
            <button
              onClick={() => setActive(LEFT)}
              onMouseEnter={leftHover.onMouseEnter}
              onMouseLeave={leftHover.onMouseLeave}
              aria-label={`Play ${LEFT.title}`}
              className="group relative mt-5 block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-night text-left"
            >
              <video
                ref={leftHover.videoRef}
                src={LEFT.video}
                poster={posterFor(LEFT.video)}
                muted
                loop
                playsInline
                preload="none"
                tabIndex={-1}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-3 text-xs text-white/80">
                Trusted by many startups &amp; brands across fields.
              </p>
            </button>

            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-sm font-medium text-white transition-colors duration-200 ease-out-strong hover:bg-ink-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Start Project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-200 ease-out-strong group-hover:rotate-45">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>

          {/* case cards */}
          {CASES.map((c) => (
            <Reveal key={c.label}>
              <CaseCard item={c} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
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
