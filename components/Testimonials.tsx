"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
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
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (dir: number) => setI((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="reviews" className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <Reveal>
          <div className="rounded-4xl border border-ink/10 bg-mist p-8 sm:p-12 lg:p-16">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
              <Quote className="h-4 w-4 fill-current" />
              Kind words
            </p>

            <blockquote className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-gold">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-display font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-ink-muted">{t.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-200 ease-out-strong hover:border-gold hover:bg-gold hover:text-ink active:scale-90"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gold text-ink transition-colors duration-200 ease-out-strong hover:bg-gold-deep hover:text-white active:scale-90"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
