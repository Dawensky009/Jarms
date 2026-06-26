"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/**
 * Mobile-only floating action bar — a single, always-pinned CTA.
 * Appears as soon as the visitor starts scrolling so the next move is one tap
 * away; hides over the footer (which has its own CTA).
 */
export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("contact");

    let footerVisible = false;
    const io = footer
      ? new IntersectionObserver(
          ([e]) => {
            footerVisible = e.isIntersecting;
            update();
          },
          { rootMargin: "0px 0px -40% 0px" }
        )
      : null;
    io?.observe(footer!);

    const update = () => {
      // show as soon as the visitor starts scrolling — keep the CTA one tap away
      const scrolled = window.scrollY > 120;
      setShow(scrolled && !footerVisible);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 transition-[transform,opacity] duration-300 ease-out-strong lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-base font-bold text-ink shadow-[0_18px_40px_-12px_rgba(20,22,29,0.5)] transition-transform duration-150 ease-out-strong active:scale-[0.98]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Get Started Now
        <ArrowUpRight className="h-5 w-5" />
      </a>
    </div>
  );
}
