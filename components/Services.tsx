"use client";

import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { SERVICES, SITE, type Service } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useHoverPlay, posterFor } from "@/components/ui/useHoverPlay";
import { VideoModal } from "@/components/ui/VideoModal";

function ServiceCard({ service, onPlay }: { service: Service; onPlay: (s: Service) => void }) {
  const hover = useHoverPlay();
  return (
    <RevealItem>
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/5">
        {service.video && (
          <button
            onClick={() => onPlay(service)}
            onMouseEnter={hover.onMouseEnter}
            onMouseLeave={hover.onMouseLeave}
            aria-label={`Play ${service.title} ${service.highlight}`}
            className="relative block aspect-video w-full cursor-pointer overflow-hidden bg-night"
          >
            <video
              ref={hover.videoRef}
              src={service.video}
              poster={posterFor(service.video)}
              muted
              loop
              playsInline
              preload="none"
              tabIndex={-1}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100">
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              </span>
            </span>
          </button>
        )}

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="font-display text-sm font-bold text-ink-muted">{service.index}</span>
            <ArrowUpRight className="h-4 w-4 text-ink-muted" />
          </div>
          <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
            {service.title} <span className="text-gold-deep">{service.highlight}</span>
          </h3>
          <p className="mt-3 text-sm text-ink-muted">{service.blurb}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {service.bullets.map((b) => (
              <li
                key={b}
                className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {b}
              </li>
            ))}
          </ul>

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-gold-deep"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </RevealItem>
  );
}

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
            <ArrowUpRight className="h-4 w-4" />
            Our services
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-section font-bold uppercase tracking-tight text-ink">
            Everything you need to get seen
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} onPlay={setActive} />
          ))}
        </RevealGroup>
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
