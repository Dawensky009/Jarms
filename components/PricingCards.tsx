import { ArrowUpRight, Clapperboard, Globe, type LucideIcon } from "lucide-react";
import { PRICING, SITE, type PriceService } from "@/lib/data";

const ICONS: Record<PriceService["id"], LucideIcon> = {
  video: Clapperboard,
  web: Globe,
};

function Card({ service }: { service: PriceService }) {
  const Icon = ICONS[service.id];
  const href = service.intent === "web" ? SITE.whatsappWeb : SITE.whatsappVideo;

  return (
    <div className="flex h-full flex-col rounded-4xl border border-ink/10 bg-mist p-6 text-left transition-[transform,box-shadow,border-color] duration-300 ease-out-strong hover:-translate-y-1.5 hover:border-ink/15 hover:bg-white hover:shadow-2xl hover:shadow-ink/10 sm:p-8">
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
        className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-[background-color,color,transform] duration-200 ease-out-strong active:scale-[0.98] ${
          service.intent === "web"
            ? "bg-gold text-ink hover:bg-gold-soft"
            : "bg-ink text-white hover:bg-ink-soft"
        }`}
      >
        Book a {service.name} Call
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}

/** The two service price cards (Video / Website). Shared by the hero + #pricing. */
export function PricingCards({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${className}`}>
      {PRICING.map((service) => (
        <Card key={service.id} service={service} />
      ))}
    </div>
  );
}
