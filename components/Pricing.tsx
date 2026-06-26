import { ArrowUpRight, Check, Clapperboard, Globe, type LucideIcon } from "lucide-react";
import { PRICING, SITE, type PriceTier } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const ICONS: Record<PriceTier["id"], LucideIcon> = {
  video: Clapperboard,
  web: Globe,
};

function PriceCard({ tier }: { tier: PriceTier }) {
  const Icon = ICONS[tier.id];
  const href = tier.intent === "web" ? SITE.whatsappWeb : SITE.whatsappVideo;

  return (
    <RevealItem>
      <div className="flex h-full flex-col rounded-4xl border border-ink/10 bg-mist p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out-strong hover:-translate-y-1.5 hover:border-ink/15 hover:bg-white hover:shadow-2xl hover:shadow-ink/10 sm:p-9">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-ink">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">{tier.name}</h3>
        </div>

        <div className="mt-6 flex items-end gap-1.5">
          <span className="text-sm font-medium text-ink-muted">from</span>
          <span className="font-display text-5xl font-extrabold tracking-tight text-ink">{tier.priceFrom}</span>
        </div>
        <p className="mt-2 text-sm text-ink-muted">{tier.tagline}</p>

        <ul className="mt-7 flex-1 space-y-3">
          {tier.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <Check className="mt-0.5 h-4 w-4 flex-none text-gold-deep" />
              {b}
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-[background-color,color,transform] duration-200 ease-out-strong active:scale-[0.98] ${
            tier.intent === "web"
              ? "bg-gold text-ink hover:bg-gold-soft"
              : "bg-ink text-white hover:bg-ink-soft"
          }`}
        >
          Get a {tier.name} Now
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
          {PRICING.map((tier) => (
            <PriceCard key={tier.id} tier={tier} />
          ))}
        </RevealGroup>

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
