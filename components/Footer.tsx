import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-night text-white">
      <div className="container-px mx-auto max-w-container pt-20 sm:pt-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl">
              Let&apos;s make something worth{" "}
              <span className="text-gold">watching.</span>
            </h2>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-none items-center gap-2.5 rounded-full bg-gold py-3 pl-6 pr-3 text-base font-semibold text-ink transition-colors duration-200 ease-out-strong hover:bg-gold-soft"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Get a free quote
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-gold transition-transform duration-200 ease-out-strong group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/65 transition-colors hover:text-gold">
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-white/65 transition-colors hover:text-gold"
            >
              {SITE.email}
            </a>
          </div>
          <div className="flex gap-4">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/55 transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <p className="pb-6 text-sm text-white/40">© 2026 Jarms Marketing. All rights reserved.</p>
      </div>

      {/* giant wordmark */}
      <div className="pointer-events-none select-none px-2">
        <p className="text-center font-display font-bold uppercase leading-[0.78] tracking-tighter text-white [font-size:clamp(4rem,21vw,17rem)]">
          Jarms
        </p>
      </div>
    </footer>
  );
}
