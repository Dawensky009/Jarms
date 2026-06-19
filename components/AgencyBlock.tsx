"use client";

import { useState } from "react";
import { ArrowUpRight, Play, Check } from "lucide-react";
import { SITE, TILES, type Tile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useHoverPlay, posterFor } from "@/components/ui/useHoverPlay";
import { VideoModal } from "@/components/ui/VideoModal";

const FEATURE = TILES.find((t) => t.id === "blind-eye") ?? TILES[0];

const FOR = ["Creative & lifestyle brands", "Startups & local businesses", "Founders who hate looking small"];

export function AgencyBlock() {
  const [open, setOpen] = useState(false);
  const hover = useHoverPlay();

  return (
    <section id="about" className="bg-white">
      <div className="container-px mx-auto max-w-container pb-20 sm:pb-28">
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-4xl bg-night p-6 text-white sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
            {/* media */}
            <button
              onClick={() => setOpen(true)}
              onMouseEnter={hover.onMouseEnter}
              onMouseLeave={hover.onMouseLeave}
              aria-label="Play brand film"
              className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-night"
            >
              <video
                ref={hover.videoRef}
                src={FEATURE.video}
                poster={posterFor(FEATURE.video)}
                muted
                loop
                playsInline
                preload="none"
                tabIndex={-1}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ink shadow-xl transition-transform duration-300 ease-out-strong group-hover:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </span>
              </span>
            </button>

            {/* copy */}
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                <ArrowUpRight className="h-4 w-4" />
                Who we&apos;re for
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
                Built for brands that refuse to{" "}
                <span className="text-gold">blend in.</span>
              </h2>
              <p className="mt-5 max-w-md text-white/55">
                We mix AI speed with real creative taste — so you get scroll-stopping work
                in days, not months, at a price that actually makes sense.
              </p>

              <ul className="mt-7 space-y-2.5">
                {FOR.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/80">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold py-2.5 pl-5 pr-2.5 text-sm font-semibold text-ink transition-colors duration-200 ease-out-strong hover:bg-gold-soft"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Let&apos;s talk
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-gold transition-transform duration-200 ease-out-strong group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <VideoModal
        project={open ? { title: "Brand Film", client: "Jarms Marketing", videoSrc: FEATURE.video } : null}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
