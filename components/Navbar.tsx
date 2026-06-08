"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
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
          scrolled ? "border-b border-ink/10 bg-white/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-px mx-auto flex h-16 max-w-container items-center justify-between sm:h-20">
          <a href="#top" className="flex items-center" aria-label="Jarms Marketing home">
            <Image
              src="/logo_Jarms.png"
              alt="Jarms Marketing"
              width={120}
              height={120}
              priority
              className="h-10 w-10 rounded-xl object-cover ring-1 ring-ink/5"
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href={SITE.whatsappUrl} variant="primary" className="px-5 py-2.5">
              <WhatsAppIcon className="h-4 w-4" />
              Get a Video / Website
            </Button>
          </div>

          <button
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
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
          <div className="mt-2 rounded-3xl border border-ink/10 bg-white p-4 shadow-xl shadow-ink/5">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-ink-soft transition-colors hover:bg-mist hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <Button href={SITE.whatsappUrl} variant="primary" className="mt-2 w-full">
                <WhatsAppIcon className="h-4 w-4" />
                Get a Video / Website
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
