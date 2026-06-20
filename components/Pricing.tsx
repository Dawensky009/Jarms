import { Check, ShieldCheck, RefreshCcw, Clock, Unlock } from "lucide-react";
import { PLANS, SITE, type Plan } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

// objection-handling strip — every promise here is restated from the FAQ (kept honest)
const REASSURANCE = [
  { icon: ShieldCheck, label: "Fixed price upfront" },
  { icon: Check, label: "Approve every cut before it's final" },
  { icon: RefreshCcw, label: "Revisions until you're happy" },
  { icon: Clock, label: "First cut in ~48h" },
  { icon: Unlock, label: "No lock-in" },
];

function ctaHref(plan: Plan) {
  if (plan.intent === "web") return SITE.whatsappWeb;
  if (plan.intent === "video") return SITE.whatsappVideo;
  return SITE.whatsappUrl;
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
            Agency-quality video &amp; web — without the agency retainer.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Clear, fixed prices. Pick what you need and upgrade anytime — no contracts,
            no surprises.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <RevealItem key={plan.name}>
              <div
                className={`relative flex h-full flex-col rounded-4xl border p-8 transition-[transform,box-shadow,border-color] duration-300 ease-out-strong hover:-translate-y-1.5 ${
                  plan.popular
                    ? "border-gold/50 bg-white shadow-[0_30px_60px_-30px_rgba(229,168,35,0.55)] hover:shadow-[0_40px_80px_-30px_rgba(229,168,35,0.7)] lg:-mt-4 lg:pb-12"
                    : "border-ink/10 bg-mist hover:border-ink/15 hover:bg-white hover:shadow-2xl hover:shadow-ink/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                    Most popular
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
                {plan.perUnit && (
                  <p className="mt-1 text-sm font-medium text-gold-deep">{plan.perUnit}</p>
                )}

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-gold-deep" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={ctaHref(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex w-full cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-[color,background-color,border-color,transform] duration-200 ease-out-strong active:scale-[0.97] ${
                    plan.popular
                      ? "bg-gold text-ink hover:bg-gold-deep hover:text-white"
                      : "border border-ink/15 text-ink hover:border-gold hover:text-gold-deep"
                  }`}
                >
                  {plan.cta}
                </a>

                {plan.note && (
                  <p className="mt-3 text-center text-xs text-ink-muted">{plan.note}</p>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* reassurance strip — defuses risk right at the decision point */}
        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {REASSURANCE.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-sm text-ink-soft">
                <Icon className="h-4 w-4 flex-none text-gold-deep" />
                {label}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-muted">
            Not sure which fits? Tell us your goal —{" "}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline-offset-4 hover:text-gold-deep hover:underline"
            >
              free quote in 24h
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
