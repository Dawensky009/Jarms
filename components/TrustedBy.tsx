"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { WORK_CATEGORIES, type WorkCategory } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useHoverPlay } from "@/components/ui/useHoverPlay";
import { VideoModal } from "@/components/ui/VideoModal";

function videoFor(poster: string) {
  return poster.replace("/posters/", "/videos/").replace(/\.webp$/, ".mp4");
}

function CategoryCard({ cat, onOpen }: { cat: WorkCategory; onOpen: (c: WorkCategory) => void }) {
  const hover = useHoverPlay();
  return (
    <RevealItem>
      <button
        onClick={() => onOpen(cat)}
        onMouseEnter={hover.onMouseEnter}
        onMouseLeave={hover.onMouseLeave}
        aria-label={`Play ${cat.label}`}
        className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-3xl border border-ink/10 bg-night text-left transition-transform duration-300 ease-out-strong hover:-translate-y-1.5"
      >
        <video
          ref={hover.videoRef}
          src={videoFor(cat.poster)}
          poster={cat.poster}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />

        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-300 ease-out-strong group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-white">
            {cat.label}
          </p>
          <p className="mt-1 text-sm text-white/60">{cat.caption}</p>
        </div>
      </button>
    </RevealItem>
  );
}

export function TrustedBy() {
  const [active, setActive] = useState<WorkCategory | null>(null);

  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
                <ArrowUpRight className="h-4 w-4" />
                Trusted by brands at scale
              </p>
              <h2 className="mt-4 font-display text-section font-bold uppercase tracking-tight text-ink">
                From first post to fully booked
              </h2>
            </div>
            <p className="max-w-sm text-ink-muted">
              From scrappy startups to established local names, we make the kind of video
              and websites that get a brand noticed — and remembered.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {WORK_CATEGORIES.map((cat) => (
            <CategoryCard key={cat.label} cat={cat} onOpen={setActive} />
          ))}
        </RevealGroup>
      </div>

      <VideoModal
        project={
          active
            ? { title: active.label, client: "Selected work", videoSrc: videoFor(active.poster) }
            : null
        }
        onClose={() => setActive(null)}
      />
    </section>
  );
}
