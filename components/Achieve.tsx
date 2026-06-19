import { ArrowUpRight } from "lucide-react";
import { OUTCOMES } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

// bento spans — first and last cards are wide
const SPAN = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2"];

export function Achieve() {
  return (
    <section id="achieve" className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
            <ArrowUpRight className="h-4 w-4" />
            What we help you achieve
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-section font-bold uppercase tracking-tight text-ink">
            Not just &ldquo;content&rdquo; — actual results
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {OUTCOMES.map((o, i) => (
            <RevealItem key={o.title} className={SPAN[i] ?? "lg:col-span-1"}>
              <div
                className={`group flex h-full min-h-[15rem] flex-col justify-between rounded-3xl border p-7 transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1.5 ${
                  o.accent
                    ? "border-transparent bg-gold text-ink hover:shadow-[0_30px_60px_-30px_rgba(241,172,35,0.7)]"
                    : "border-ink/10 bg-mist text-ink hover:border-ink/15 hover:bg-white hover:shadow-2xl hover:shadow-ink/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-display text-sm font-bold ${o.accent ? "text-ink/50" : "text-ink-muted"}`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 ease-out-strong group-hover:rotate-45 ${
                      o.accent ? "bg-ink text-gold" : "bg-ink/5 text-ink"
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-10">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight sm:text-3xl">
                    {o.title}
                  </h3>
                  <p className={`mt-2 max-w-md text-sm ${o.accent ? "text-ink/75" : "text-ink-muted"}`}>
                    {o.blurb}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
