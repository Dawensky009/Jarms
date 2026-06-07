import { STATS } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function Trust() {
  return (
    <section aria-label="By the numbers" className="border-y border-ink/5 bg-white">
      <div className="container-px mx-auto max-w-container py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
