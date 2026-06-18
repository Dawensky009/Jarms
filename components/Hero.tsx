"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { Star, Play } from "lucide-react";
import { SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/ui/Typewriter";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { VideoModal } from "@/components/ui/VideoModal";
import { posterFor } from "@/components/ui/useHoverPlay";

const ease = [0.22, 1, 0.36, 1] as const;

// The flagship reel shown in the hero. Swap to your single strongest video.
const HERO_REEL = "/videos/shake-up.mp4";

function HeroReel({ onOpen }: { onOpen: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);

  // autoplay the reel on desktop (muted); mobile / reduced-motion get the poster + play button
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduce) v.play().catch(() => {});
  }, []);

  return (
    <button
      onClick={onOpen}
      aria-label="Play the showreel"
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-[1.75rem] border border-ink/10 bg-night shadow-[0_50px_100px_-40px_rgba(20,22,29,0.6)] transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1.5 hover:shadow-[0_60px_120px_-40px_rgba(20,22,29,0.7)] active:scale-[0.995] sm:rounded-[2.25rem]"
    >
      <video
        ref={ref}
        src={HERO_REEL}
        poster={posterFor(HERO_REEL)}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* gentle vignette for tag legibility — keeps the footage bright */}
      <div className="absolute inset-0 bg-gradient-to-t from-night/45 via-transparent to-transparent" />

      {/* play affordance */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ink shadow-2xl backdrop-blur transition-transform duration-300 ease-out-strong group-hover:scale-110 sm:h-20 sm:w-20">
          <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
        </span>
      </span>

      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-night/55 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur sm:bottom-5 sm:left-5">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
        Showreel — watch with sound
      </span>
    </button>
  );
}

export function Hero() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // signature scroll moment: the reel leans in (scales) and drifts as you scroll past
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const reelScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.07]);
  const reelY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -36]);

  // cursor spotlight — a soft gold light that trails the pointer (spring lag = natural)
  const [spotOn, setSpotOn] = useState(false);
  const mx = useMotionValue(-600);
  const my = useMotionValue(-200);
  const sx = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 110, damping: 18, mass: 0.5 });
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${sx}px ${sy}px, rgba(241,172,35,0.16), transparent 70%)`;

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !r) {
      setSpotOn(true);
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        mx.set(rect.width / 2);
        my.set(rect.height / 3);
      }
    }
  }, [mx, my]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!spotOn) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      onMouseMove={onMove}
      className="grain relative overflow-hidden bg-white pt-28 sm:pt-36"
    >
      {/* layered ambient glow — a focused bloom over a wide, soft wash for depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem]">
        <div className="absolute left-1/2 top-0 h-72 w-[46rem] max-w-[120vw] -translate-x-1/2 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(241,172,35,0.22),transparent_70%)]" />
        <div className="absolute left-1/2 top-24 h-96 w-[64rem] max-w-[140vw] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(241,172,35,0.06),transparent_75%)]" />
      </div>

      {/* cursor spotlight — follows the pointer with a soft spring lag */}
      {spotOn && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background: spotlight }}
        />
      )}

      <div className="container-px relative z-10 mx-auto max-w-container">
        {/* copy — centered, narrow */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto inline-flex max-w-xl items-center justify-center gap-2.5 text-sm font-medium text-ink-soft sm:text-base"
          >
            <span className="relative flex h-2 w-2 flex-none">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Right now, your next customer is watching a video — just not yours.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-5 text-hero font-bold text-ink"
          >
            Video that makes your brand
            <span className="mt-1 block text-gold-deep">
              <Typewriter words={["sell", "go viral", "get booked", "stand out", "grow"]} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mx-auto mt-6 max-w-xl text-base text-ink-muted sm:text-lg"
          >
            The brands winning your customers aren&apos;t better than you — they&apos;re
            just more visible. We make the scroll-stopping videos and websites that put
            you in front, fast — and turn that attention into paying customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-9 flex flex-col items-center gap-3"
          >
            <Button href={SITE.whatsappUrl} variant="primary">
              <WhatsAppIcon className="h-5 w-5" />
              Get a Free Quote
            </Button>
            <p className="text-sm text-ink-muted">Free quote in 24h — no obligation, no pressure.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-ink-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </span>
              4.9 average
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-ink/20 sm:block" />
            <span>Trusted by 90+ brands</span>
            <span className="hidden h-1 w-1 rounded-full bg-ink/20 sm:block" />
            <span>48-hour first cut</span>
          </motion.div>
        </div>

        {/* flagship reel — full width, wider than the copy for an editorial, cinematic feel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease }}
          className="mt-12 sm:mt-16"
        >
          <motion.div style={{ scale: reelScale, y: reelY }} className="will-change-transform">
            <HeroReel onOpen={() => setOpen(true)} />
          </motion.div>
        </motion.div>
      </div>

      <VideoModal
        project={
          open
            ? { title: "Jarms Showreel", client: "Shake Up", videoSrc: HERO_REEL }
            : null
        }
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
