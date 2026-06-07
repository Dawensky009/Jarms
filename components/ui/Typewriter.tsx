"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function Typewriter({
  words,
  className = "",
  typingSpeed = 95,
  deletingSpeed = 45,
  pause = 1500,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = words[index % words.length];

  useEffect(() => {
    if (reduce) return;

    // finished typing → hold, then delete
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    // finished deleting → next word
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSub((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, current, words.length, reduce, pause, typingSpeed, deletingSpeed]);

  if (reduce) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={className}>
      {current.slice(0, sub)}
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.82em] w-[3px] translate-y-[0.06em] animate-blink rounded-sm bg-current align-baseline"
      />
    </span>
  );
}
