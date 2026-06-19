"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SITE, TILES, type Tile } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useHoverPlay, posterFor } from "@/components/ui/useHoverPlay";
import { VideoModal } from "@/components/ui/VideoModal";

const t = (id: string) => TILES.find((x) => x.id === id) ?? TILES[0];

type Card = { n: string; title: string; desc?: string; subs: string; tile?: Tile };

const CARDS: Card[] = [
  { n: "01", title: "Build a Brand", desc: "Make your business look as good as it actually is.", subs: "03" },
  { n: "02", title: "Grow Your Audience", desc: "Show up consistently so the right people remember you.", subs: "03" },
  { n: "03", title: "Make Content People Care About", subs: "04", tile: t("makaya") },
  { n: "04", title: "Turn Views Into Sales", desc: "Attention is nice. Paying customers are better.", subs: "03" },
];

function ServiceCard({ card, onOpen }: { card: Card; onOpen: (tt: Tile) => void }) {
  const hover = useHoverPlay();
  return (
    <RevealItem>
      <div className="group">
        <div className="relative flex h-[21rem] flex-col overflow-hidden rounded-3xl border border-ink/10 bg-mist p-5 transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/5">
          {/* top row */}
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-ink/15 bg-white px-3 py-1 text-xs font-medium text-ink-soft">
              Service {card.n}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-300 ease-out-strong group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          {card.tile ? (
            <div className="mt-4 flex flex-1 flex-col">
              <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ink">
                {card.title}
              </h3>
              <button
                onClick={() => onOpen(card.tile!)}
                onMouseEnter={hover.onMouseEnter}
                onMouseLeave={hover.onMouseLeave}
                aria-label={`Play ${card.tile.title}`}
                className="relative mt-3 flex-1 cursor-pointer overflow-hidden rounded-2xl bg-night"
              >
                <video
                  ref={hover.videoRef}
                  src={card.tile.video}
                  poster={posterFor(card.tile.video)}
                  muted
                  loop
                  playsInline
                  preload="none"
                  tabIndex={-1}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
                />
              </button>
            </div>
          ) : (
            <div className="flex flex-1 flex-col justify-end">
              <h3 className="whitespace-nowrap font-display text-[clamp(2rem,3.4vw,3rem)] font-bold uppercase leading-none tracking-tight text-ink">
                {card.title}
              </h3>
              <p className="mt-4 text-sm text-ink-muted">{card.desc}</p>
            </div>
          )}
        </div>

        {/* below the card */}
        <div className="mt-4 flex items-center justify-between">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">
            {card.subs} Sub Services
          </p>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </RevealItem>
  );
}

export function Achieve() {
  const [active, setActive] = useState<Tile | null>(null);

  return (
    <section id="achieve" className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        {/* header */}
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="font-display text-section font-bold uppercase leading-[1.02] tracking-tight text-ink">
              What we help
              <span className="mt-1 flex items-center gap-3">
                <ArrowRight className="h-8 w-8 flex-none text-gold sm:h-10 sm:w-10" strokeWidth={2.5} />
                You achieve
              </span>
            </h2>
            <div className="max-w-md">
              <p className="text-lg text-ink-muted">
                We don&apos;t just make things that look good — we build the videos and
                websites that actually move your numbers.
              </p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-sm font-medium text-white transition-colors duration-200 ease-out-strong hover:bg-ink-soft"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Start Project
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-200 ease-out-strong group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* service cards */}
        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <ServiceCard key={c.n} card={c} onOpen={setActive} />
          ))}
        </RevealGroup>
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
