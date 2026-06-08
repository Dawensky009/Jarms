"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/ui/Typewriter";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 sm:pt-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(55%_55%_at_50%_0%,rgba(241,172,35,0.14),transparent_70%)]" />

      <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-hero font-bold text-ink"
        >
          Video that makes
          <br />
          your brand{" "}
          <Typewriter
            words={["move", "sell", "convert", "go viral", "grow"]}
            className="text-gold-deep"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mx-auto mt-6 max-w-xl text-base text-ink-muted sm:text-lg"
        >
          Scroll-stopping ad films and high-converting websites — crafted end to
          end for brands that refuse to blend in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-9 flex items-center justify-center"
        >
          <Button href={SITE.whatsappUrl} variant="primary">
            <WhatsAppIcon className="h-5 w-5" />
            Get a Free Quote
          </Button>
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
    </section>
  );
}
