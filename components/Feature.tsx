"use client";

import { useState } from "react";
import { Quote, Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { VideoModal } from "@/components/ui/VideoModal";
import { useHoverPlay, posterFor } from "@/components/ui/useHoverPlay";

const FEATURE_VIDEO = "/videos/star-english.mp4";

export function Feature() {
  const [open, setOpen] = useState(false);
  const hover = useHoverPlay();

  return (
    <section className="bg-night-soft">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <Quote className="h-10 w-10 text-gold" />
            <p className="mt-6 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Most businesses don&apos;t have a quality problem — they have a{" "}
              <span className="text-gold">&ldquo;forgettable&rdquo;</span>{" "}
              problem. We make the kind of video people actually stop, watch and
              remember.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm text-white/55">
              <span className="font-semibold text-white">Jarms Marketing</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>AI Creative Agency</span>
            </div>

            <div className="mt-8">
              <Button href="#work" variant="dark" arrow>
                See our work
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right">
            <button
              onClick={() => setOpen(true)}
              onMouseEnter={hover.onMouseEnter}
              onMouseLeave={hover.onMouseLeave}
              aria-label="Play brand film"
              className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-4xl border border-white/10 bg-night shadow-xl shadow-ink/10 transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/20 active:scale-[0.99]"
            >
              <video
                ref={hover.videoRef}
                src={FEATURE_VIDEO}
                poster={posterFor(FEATURE_VIDEO)}
                muted
                loop
                playsInline
                preload="none"
                tabIndex={-1}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out-strong group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-night/15" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-night text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </span>
              </span>
            </button>
          </Reveal>
        </div>
      </div>

      <VideoModal
        project={
          open
            ? { title: "Brand Film", client: "Jarms Marketing", videoSrc: FEATURE_VIDEO }
            : null
        }
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
