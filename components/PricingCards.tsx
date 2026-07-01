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
    <div className="flex h-full flex-col rounded-4xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 text-left shadow-[0_28px_70px_-28px_rgba(0,0,0,0.9)] transition-[transform,box-shadow,border-color] duration-300 ease-out-strong hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_36px_80px_-24px_rgba(241,172,35,0.22)] sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-ink">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">{service.name}</h3>
      </div>

      <div className="mt-6 flex-1 space-y-5">
        {service.options.map((opt, i) => (
          <div key={opt.price} className={i > 0 ? "border-t border-white/10 pt-5" : ""}>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl font-extrabold leading-none tracking-tight text-white">{opt.price}</span>
              {opt.detail && (
                <span className="text-xs font-semibold uppercase tracking-wide text-gold">{opt.detail}</span>
              )}
            </div>
            <p className="mt-1.5 text-sm text-white/55">{opt.desc}</p>
          </div>
        ))}
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-ink shadow-lg shadow-gold/25 transition-[background-color,transform] duration-200 ease-out-strong hover:bg-gold-soft active:scale-[0.98]"
      >
        Book a call
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
