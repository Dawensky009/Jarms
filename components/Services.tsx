"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Clapperboard,
  Film,
  Globe,
  Package,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, SITE, type Service } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { posterFor } from "@/components/ui/useHoverPlay";

// one clear icon per service so the page is scannable at a glance
const ICONS: Record<string, LucideIcon> = {
  ad: Clapperboard,
  film: Film,
  product: Package,
  web: Globe,
};

function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const Icon = ICONS[service.id] ?? Clapperboard;
  const photo = service.image ?? (service.video ? posterFor(service.video) : "");
  // route the visitor straight to the right conversation
  const cta = service.id === "web" ? SITE.whatsappWeb : SITE.whatsappVideo;
  const ctaLabel = service.id === "web" ? "Get a website" : "Get this video";

  return (
    <RevealItem>
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/5">
        {/* photo tied to the service */}
        <div className="relative aspect-[16/10] overflow-hidden bg-night">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt={`${service.title} ${service.highlight}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/30 to-transparent" />
          <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-ink shadow-lg">
            <Icon className="h-5 w-5" />
          </span>
          <span className="absolute right-4 top-4 font-display text-sm font-bold text-white/80">
            {service.index}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
            {service.title} <span className="text-gold-deep">{service.highlight}</span>
          </h3>
          {/* one scannable line — the full pitch lives in the accordion */}
          <p className="mt-2 text-sm font-medium text-ink-soft">{service.short}</p>

          {/* accordion: details hidden until asked for */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-4 flex w-full items-center justify-between border-t border-ink/10 pt-4 text-sm font-semibold text-ink transition-colors hover:text-gold-deep"
          >
            What&apos;s included
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ease-out-strong ${open ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out-strong ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pt-3 text-sm text-ink-muted">{service.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-xs font-medium text-ink-soft"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={cta}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-gold-deep"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </RevealItem>
  );
}

export function Services() {
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
            <ServiceCard key={service.id} service={service} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
