"use client";

import { useRef } from "react";

/** Derive the webp poster path from a /videos/*.mp4 path. */
export function posterFor(video: string) {
  return video.replace("/videos/", "/posters/").replace(/\.mp4$/, ".webp");
}

/**
 * Hover-to-play for video thumbnails. Spread the handlers on the *parent*
 * (so overlays don't steal the hover) and put `videoRef` on the <video>.
 * Plays only on a fine pointer with motion allowed; otherwise the poster
 * stays put. The <video> should use preload="none" so nothing loads until hover.
 */
export function useHoverPlay() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const onMouseEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduce) v.play().catch(() => {});
  };

  const onMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    try {
      v.currentTime = 0; // snap back to the poster frame
    } catch {}
  };

  return { videoRef, onMouseEnter, onMouseLeave };
}
