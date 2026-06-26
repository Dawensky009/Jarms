import { ArrowUpRight, Check, Clapperboard, Globe, Sparkles, type LucideIcon } from "lucide-react";
import { AI_UPGRADE, PRICING, SITE, type PriceService } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const ICONS: Record<PriceService["id"], LucideIcon> = {
  video: Clapperboard,
  web: Globe,
};

function ServiceCard({ service }: { service: PriceService }) {
  const Icon = ICONS[service.id];
  const href = service.intent === "web" ? SITE.whatsappWeb : SITE.whatsappVideo;

  return (
    <RevealItem>
      <div className="flex h-full flex-col rounded-4xl border border-ink/10 bg-mist p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out-strong hover:-translate-y-1.5 hover:border-ink/15 hover:bg-white hover:shadow-2xl hover:shadow-ink/10 sm:p-9">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-ink">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">{service.name}</h3>
        </div>

        <div className="mt-6 flex-1 space-y-5">
          {service.options.map((opt, i) => (
            <div key={opt.price} className={i > 0 ? "border-t border-ink/10 pt-5" : ""}>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-extrabold tracking-tight text-ink">{opt.price}</span>
                {opt.detail && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-deep">{opt.detail}</span>
                )}
              </div>
              <p className="mt-1.5 text-sm text-ink-muted">{opt.desc}</p>
            </div>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-[background-color,color,transform] duration-200 ease-out-strong active:scale-[0.98] ${
            service.intent === "web"
              ? "bg-gold text-ink hover:bg-gold-soft"
              : "bg-ink text-white hover:bg-ink-soft"
          }`}
        >
          Get a {service.name} Now
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </RevealItem>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Simple, honest pricing
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-section font-bold uppercase tracking-tight text-ink">
            Start small. Look big.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-muted">
            No agency retainer, no surprises — just a clear price to get started.
          </p>
        </Reveal>

        <RevealGroup className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {PRICING.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </RevealGroup>

        {/* AI integration — paid upgrade */}
        <Reveal>
          <div className="mx-auto mt-5 max-w-3xl overflow-hidden rounded-4xl bg-night p-7 text-white sm:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                  <Sparkles className="h-4 w-4" />
                  {AI_UPGRADE.title}
                </p>
                <p className="mt-3 max-w-md text-white/60">{AI_UPGRADE.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {AI_UPGRADE.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={SITE.whatsappWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-none items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 ease-out-strong hover:bg-gold-soft active:scale-[0.98]"
              >
                Add AI to my build
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-gold-deep" /> No hidden fees
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-gold-deep" /> Free quote in 24h
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-gold-deep" /> You approve before you pay
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
