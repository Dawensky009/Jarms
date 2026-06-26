import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { AI_UPGRADE, SITE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { PricingCards } from "@/components/PricingCards";

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

        <Reveal>
          <PricingCards className="mx-auto mt-12 max-w-3xl" />
        </Reveal>

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
