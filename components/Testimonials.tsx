import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-paper">
      <div className="container-px mx-auto max-w-container py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <Eyebrow index="03">Loved by brands</Eyebrow>
          <h2 className="mt-5 text-section font-bold text-ink">Don&apos;t take our word for it.</h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-mist p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out-strong hover:-translate-y-1.5 hover:border-ink/15 hover:bg-white hover:shadow-2xl hover:shadow-ink/10">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-ink-soft">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-display font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-ink-muted">{t.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
