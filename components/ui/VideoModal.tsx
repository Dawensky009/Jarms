"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Film } from "lucide-react";

export type ModalProject = {
  title: string;
  client: string;
  youtubeId?: string;
  videoSrc?: string;
};

export function VideoModal({
  project,
  onClose,
}: {
  project: ModalProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — ${project.client}`}
        >
          <div className="absolute inset-0 bg-night/85 backdrop-blur-sm" />

          <motion.div
            className="relative w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  {project.title}
                </p>
                <p className="text-sm text-white/60">{project.client}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close video"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
              {project.videoSrc ? (
                <video
                  className="h-full w-full bg-black"
                  src={project.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              ) : project.youtubeId ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/50">
                  <Film className="h-10 w-10 text-gold/70" />
                  <p className="text-sm">Showreel coming soon</p>
                  <p className="max-w-xs text-center text-xs text-white/35">
                    Add a YouTube/Vimeo ID in lib/data.ts to play this project here.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
