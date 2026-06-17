"use client";

import { useState } from "react";
import { Plus, ShieldCheck } from "lucide-react";
import { FAQS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  // single-open accordion — keeps focus on one answer at a time
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-mist">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Good to know
            </p>
            <h2 className="mt-4 text-section font-bold text-ink">
              Questions?
              <br className="hidden sm:block" /> We&apos;ve got answers.
            </h2>
            <p className="mt-5 max-w-sm text-ink-muted">
              Everything people usually ask before getting started. Still unsure?
              Message us on WhatsApp — we reply fast, and there&apos;s no pressure.
            </p>

            {/* guarantee — risk reversal */}
            <div className="mt-8 flex items-start gap-3 rounded-3xl border border-gold/30 bg-white p-5">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gold text-ink">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-bold text-ink">Love it, or we make it right.</p>
                <p className="mt-1 text-sm text-ink-muted">
                  You approve every cut before it&apos;s final. If the first version
                  misses, we fix it — you&apos;re never stuck with something you
                  don&apos;t love.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <ul className="border-y border-ink/10">
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q} className="border-b border-ink/10 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-display text-base font-semibold text-ink sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-200 ease-out-strong ${
                          isOpen
                            ? "rotate-45 border-gold bg-gold text-ink"
                            : "border-ink/15 text-ink-soft"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>

                    {/* grid-rows 0fr→1fr: auto-height reveal that stays interruptible (CSS transition) */}
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out-strong"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-10 text-ink-muted">{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
