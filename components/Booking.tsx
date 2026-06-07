"use client";

import Script from "next/script";
import { CalendarClock } from "lucide-react";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Booking() {
  return (
    <section id="booking" className="bg-mist">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Book a call
            </p>
            <h2 className="mt-4 text-section font-bold text-ink">
              Let&apos;s map your next campaign.
            </h2>
            <p className="mt-5 max-w-md text-ink-muted">
              Grab a free 20-minute discovery call. We&apos;ll talk goals,
              timelines and ideas — you&apos;ll leave with a clear next step, no
              pressure.
            </p>
            <div className="mt-8 flex items-center gap-3 text-ink-soft">
              <CalendarClock className="h-5 w-5 text-gold-deep" />
              <span className="text-sm">Free · 20 min · Zoom or Google Meet</span>
            </div>
            <div className="mt-8">
              <Button href={SITE.calendlyUrl} variant="outline" arrow>
                Open scheduler in new tab
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="overflow-hidden rounded-4xl border border-ink/10 bg-white">
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
