"use client";

import { useState } from "react";
import { Check, ArrowUpRight, Play } from "lucide-react";
import { SERVICES, type Service } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { DripDivider } from "@/components/ui/DripDivider";
import { VideoModal } from "@/components/ui/VideoModal";

function ServiceVisual({
  service,
  onPlay,
}: {
  service: Service;
  onPlay: (s: Service) => void;
}) {
  if (!service.video) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-4xl border border-white/10">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.tone}`} />
      </div>
    );
  }
  return (
    <button
      onClick={() => onPlay(service)}
      aria-label={`Play ${service.title} ${service.highlight}`}
      className={`group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br ${service.tone}`}
    >
      <video
        src={`${service.video}#t=1`}
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
        onLoadedMetadata={(e) => {
          try {
            e.currentTarget.currentTime = 1;
          } catch {}
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
          <Play className="ml-1 h-6 w-6 fill-current" />
        </span>
      </span>
      <span className="absolute bottom-4 left-5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white">
        {service.title} {service.highlight}
      </span>
    </button>
  );
}

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="grain relative overflow-hidden bg-night text-white">
      <DripDivider className="text-white" />

      <div className="container-px relative z-10 mx-auto max-w-container py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            What we do
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl">
            Get seen. Get <span className="text-gold">booked</span>. Get paid.
          </h2>
          <p className="mt-5 max-w-xl text-white/55">
            Ads, brand films, product videos and websites — made for businesses
            that want customers, not just &ldquo;content.&rdquo;
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {SERVICES.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <div key={service.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <Reveal
                  direction={reversed ? "right" : "left"}
                  className={reversed ? "lg:order-2" : ""}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl font-extrabold text-white/10">
                      {service.index}
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                    {service.title} <span className="text-gold">{service.highlight}</span>
                  </h3>
                  <p className="mt-4 max-w-md text-white/60">{service.blurb}</p>

                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-white/75">
                        <Check className="h-4 w-4 text-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Reveal>

                <Reveal
                  direction={reversed ? "left" : "right"}
                  className={reversed ? "lg:order-1" : ""}
                >
                  <ServiceVisual service={service} onPlay={setActive} />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      <VideoModal
        project={
          active && active.video
            ? {
                title: `${active.title} ${active.highlight}`,
                client: "Jarms Marketing",
                videoSrc: active.video,
              }
            : null
        }
        onClose={() => setActive(null)}
      />
    </section>
  );
}
