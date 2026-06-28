"use client";

import Script from "next/script";
import { CalendarClock } from "lucide-react";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Booking() {
  return (
    <section id="booking" className="bg-night-soft">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Book a call
            </p>
            <h2 className="mt-4 text-section font-bold text-white">
              Let&apos;s talk — it&apos;s free and it&apos;s quick.
            </h2>
            <p className="mt-5 max-w-md text-white/55">
              Book a free 20-minute call. Bring your idea — you&apos;ll walk away
              with a clear plan and a price. No pressure, no obligation.
            </p>
            <div className="mt-8 flex items-center gap-3 text-white/75">
              <CalendarClock className="h-5 w-5 text-gold" />
              <span className="text-sm">Free · 20 min · Zoom or Google Meet</span>
            </div>
            <div className="mt-8">
              <Button href={SITE.calendlyUrl} variant="outline" arrow>
                Open scheduler in new tab
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="overflow-hidden rounded-4xl border border-white/10 bg-night">
              <div
                className="calendly-inline-widget"
                data-url={SITE.calendlyUrl}
                style={{ minWidth: "320px", height: "640px" }}
              />
            </div>
          </Reveal>
        </div>
      </div>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </section>
  );
}
