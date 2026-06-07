"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label, .cursor-pointer";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 380, damping: 30, mass: 0.5 });

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return; // keep native cursor on touch / reduced-motion

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest?.(INTERACTIVE));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* precise dot */}
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-gold"
      />
      {/* trailing ring */}
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: pressed ? 0.8 : hovering ? 1.9 : 1, opacity: hovering ? 1 : 0.6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-gold"
      />
    </>
  );
}
