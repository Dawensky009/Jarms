import { Lightbulb, PenLine, Clapperboard, Rocket, type LucideIcon } from "lucide-react";
import { STEPS } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DripDivider } from "@/components/ui/DripDivider";

const ICONS: LucideIcon[] = [Lightbulb, PenLine, Clapperboard, Rocket];

export function HowItWorks() {
  return (
    <section id="process" className="relative bg-white">
      {/* dark drips down from the services block into this light section */}
      <DripDivider className="text-night" />

      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            How it works
          </p>
          <h2 className="mt-4 text-section font-bold text-ink">
            From idea to posted — in 4 easy steps.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* dotted connector */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-ink/15 lg:block" />

          <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => {
              const Icon = ICONS[i] ?? Lightbulb;
              return (
                <RevealItem key={step.n}>
                  <div className="flex flex-col items-center text-center">
                    <span
                      className={`relative flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${step.color}`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-bold text-ink">
                      {step.n}. {step.title}
                    </h3>
                    <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-ink-muted">
                      {step.blurb}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
