"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { STATS, TESTIMONIALS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="reviews" className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        {/* header */}
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
                <Quote className="h-4 w-4 fill-current" />
                Kind words
              </p>
              <h2 className="mt-4 max-w-xl font-display text-section font-bold uppercase tracking-tight text-ink">
                Loved by the brands we work with
              </h2>
            </div>

            {/* desktop scroll controls (mobile just swipes) */}
            <div className="hidden items-center gap-2 sm:flex">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-200 ease-out-strong hover:border-gold hover:bg-gold active:scale-90"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink transition-colors duration-200 ease-out-strong hover:bg-gold-deep hover:text-white active:scale-90"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* quick reassurance stats — read at a glance */}
        <Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-ink/10 bg-mist px-4 py-5 text-center"
              >
                <p className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {s.value}
                  <span className="text-gold-deep">{s.suffix}</span>
                </p>
                <p className="mt-1 text-xs font-medium text-ink-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* swipe carousel */}
        <div
          ref={track}
          className="mt-8 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:-mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex w-[85%] shrink-0 snap-center flex-col rounded-4xl border border-ink/10 bg-mist p-7 sm:w-[420px] sm:p-9"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-gold">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-display font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-ink-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
