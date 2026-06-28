"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "border-b border-white/10 bg-night/80 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-px mx-auto flex h-16 max-w-container items-center justify-between sm:h-[4.5rem]">
          {/* logo */}
          <a href="#top" className="flex items-center gap-2.5" aria-label="Jarms Marketing home">
            <Image
              src="/logo_Jarms.png"
              alt="Jarms Marketing"
              width={120}
              height={120}
              priority
              className="h-9 w-9 rounded-lg object-cover"
            />
            <span className="font-display text-lg font-bold tracking-tight text-white">Jarms</span>
          </a>

          {/* centred nav */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* dark pill CTA */}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-ink py-2 pl-4 pr-2 text-sm font-medium text-white transition-colors duration-200 ease-out-strong hover:bg-ink-soft md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Contact
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-200 ease-out-strong group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>

          {/* mobile toggle */}
          <button
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-transform duration-200 ease-out-strong active:scale-90 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="container-px mx-auto max-w-container md:hidden">
          <div className="mt-2 rounded-3xl border border-white/10 bg-night p-4 shadow-xl shadow-ink/5">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-white/75 transition-colors hover:bg-night-soft hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-base font-medium text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Contact us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
