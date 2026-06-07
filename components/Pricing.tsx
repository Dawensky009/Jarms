import { Check } from "lucide-react";
import { PLANS } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Choose the plan that fits you
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-section font-bold text-ink">
            Power up your brand — pick a plan that scales with you.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <RevealItem key={plan.name}>
              <div
                className={`relative flex h-full flex-col rounded-4xl border p-8 ${
                  plan.popular
                    ? "border-gold/50 bg-white shadow-[0_30px_60px_-30px_rgba(229,168,35,0.55)] lg:-mt-4 lg:pb-12"
                    : "border-ink/10 bg-mist"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                    Popular
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{plan.tagline}</p>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="font-display text-4xl font-extrabold text-ink">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-ink-muted">{plan.cadence}</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-gold-deep" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                    plan.popular
                      ? "bg-gold text-ink hover:bg-gold-deep hover:text-white"
                      : "border border-ink/15 text-ink hover:border-gold hover:text-gold-deep"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
