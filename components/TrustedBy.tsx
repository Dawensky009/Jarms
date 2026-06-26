import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type CaseItem = {
  label: string;
  pill: string;
  title: string;
  sub: string;
  image: string;
  down?: boolean;
};

// placeholder metrics — swap for real numbers once you have them
const CASES: CaseItem[] = [
  {
    label: "E-commerce & D2C Brands",
    pill: "Impact",
    title: "Food & drink campaigns",
    sub: "3× more engagement on average",
    image: "/trust/food.jpg",
  },
  {
    label: "Growth & Reach",
    pill: "Reach",
    title: "More views, more sales",
    sub: "Up to 2× conversion lift",
    image: "/trust/growth.jpg",
    down: true,
  },
  {
    label: "Corporate & Enterprise Teams",
    pill: "Retention",
    title: "Clients who keep coming back",
    sub: "Built to convert, not just to look nice",
    image: "/trust/corporate.jpg",
  },
];

function ArrowChip() {
  return (
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-gold text-gold transition-transform duration-200 ease-out-strong group-hover:rotate-45">
      <ArrowRight className="h-4 w-4" />
    </span>
  );
}

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <a href="#work" className={`group block ${item.down ? "lg:mt-24" : ""}`}>
      <div className="relative block aspect-[3/4] w-full overflow-hidden rounded-3xl border border-ink/10 bg-night transition-transform duration-300 ease-out-strong group-hover:-translate-y-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
          {item.pill}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-lg font-bold leading-tight text-white">{item.title}</p>
          <p className="mt-1 text-sm text-white/70">{item.sub}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="max-w-[11rem] font-display text-base font-bold uppercase leading-tight tracking-tight text-ink">
          {item.label}
        </p>
        <ArrowChip />
      </div>
    </a>
  );
}

export function TrustedBy() {
  return (
    <section className="hidden bg-white lg:block">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        {/* header */}
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="font-display text-section font-bold uppercase leading-[1.02] tracking-tight text-ink">
              Trusted by
              <span className="mt-1 flex items-center gap-3">
                <ArrowRight className="h-8 w-8 flex-none text-gold sm:h-10 sm:w-10" strokeWidth={2.5} />
                Teams at scale
              </span>
            </h2>
            <p className="max-w-md text-lg leading-relaxed">
              <span className="text-ink">
                We work with scrappy startups and established local brands alike —
              </span>{" "}
              <span className="text-ink-muted">
                people who want real results, not just something that looks nice.
              </span>
            </p>
          </div>
        </Reveal>

        {/* grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1fr_1fr_1fr] lg:items-start lg:gap-5">
          {/* left column */}
          <Reveal className="flex flex-col">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold">
              <ArrowRight className="h-4 w-4" />
            </span>
            <p className="mt-5 max-w-[11rem] font-display text-base font-bold uppercase leading-tight tracking-tight text-ink">
              Startups &amp; Tech Companies
            </p>
            <a
              href="#work"
              className="group relative mt-5 block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-night"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/trust/startups.jpg"
                alt="Startups and tech teams"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-3 text-xs text-white/80">
                Trusted by many startups &amp; brands across fields.
              </p>
            </a>

            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-sm font-medium text-white transition-colors duration-200 ease-out-strong hover:bg-ink-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Start Project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-200 ease-out-strong group-hover:rotate-45">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>

          {/* case cards */}
          {CASES.map((c) => (
            <Reveal key={c.label}>
              <CaseCard item={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
