import { NAV_LINKS, SERVICES, SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DripDivider } from "@/components/ui/DripDivider";

export function Footer() {
  return (
    <footer className="relative bg-night text-white">
      {/* white drips down from the contact section into the dark footer */}
      <DripDivider className="text-white" />

      <div className="container-px mx-auto max-w-container pb-10 pt-16">
        <Reveal className="border-b border-white/10 pb-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-section font-bold">
              Ready to make something{" "}
              <span className="text-gradient-gold">unforgettable?</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              <Button href="#contact" variant="primary">
                Get a Free Quote
              </Button>
              <Button
                href={SITE.calendlyUrl}
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-gold"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-baseline">
              <span className="font-display text-2xl font-extrabold tracking-tight">
                Jarms Marketing
              </span>
              <span className="ml-1 h-2 w-2 self-end rounded-full bg-gold" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/55">{SITE.tagline}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-block text-sm text-gold transition-colors hover:text-gold-soft"
            >
              {SITE.email}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/65 transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Services</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm text-white/65 transition-colors hover:text-gold">
                    {s.title} {s.highlight}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">© 2026 Jarms Marketing. All rights reserved.</p>
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
      </div>
    </footer>
  );
}
