"use client";

import { useEffect, useState } from "react";
import { Clapperboard, Globe } from "lucide-react";
import { SITE } from "@/lib/data";

/**
 * Mobile-only floating action bar (dual intent: video / website).
 * Appears once the visitor scrolls past the hero so the next move is always
 * one thumb-tap away; hides over the footer (which has its own CTA).
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
      <div className="mx-auto flex max-w-md gap-2 rounded-full border border-ink/10 bg-white/90 p-1.5 shadow-[0_18px_40px_-12px_rgba(20,22,29,0.45)] backdrop-blur-md">
        <a
          href={SITE.whatsappVideo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition-transform duration-150 ease-out-strong active:scale-[0.97]"
        >
          <Clapperboard className="h-4 w-4 text-gold" />
          Get Video Now
        </a>
        <a
          href={SITE.whatsappWeb}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-ink transition-transform duration-150 ease-out-strong active:scale-[0.97]"
        >
          <Globe className="h-4 w-4" />
          Get Website Now
        </a>
      </div>
    </div>
  );
}
