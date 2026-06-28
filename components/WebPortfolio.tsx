import { ArrowUpRight } from "lucide-react";
import { WEBSITES } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

function host(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function WebPortfolio() {
  return (
    <section id="websites" className="bg-night">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                <ArrowUpRight className="h-4 w-4" />
                Websites we&apos;ve built
              </p>
              <h2 className="mt-4 font-display text-section font-bold uppercase tracking-tight text-white">
                Sites that sell while you sleep
              </h2>
            </div>
            <p className="max-w-sm text-white/55">
              Real, live websites we designed and shipped — fast, easy to use, and built
              to turn visitors into customers. Click any to open it.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {WEBSITES.map((site) => (
            <RevealItem key={site.url}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-3xl border border-white/10 bg-night shadow-sm transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/10"
              >
                {/* browser chrome */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-night-soft px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-white/25" />
                  <span className="h-3 w-3 rounded-full bg-white/25" />
                  <span className="h-3 w-3 rounded-full bg-white/25" />
                  <span className="ml-3 truncate rounded-md bg-night px-3 py-1 text-xs text-white/55">
                    {host(site.url)}
                  </span>
                </div>

                {/* screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-night-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={site.image}
                    alt={`${site.name} website`}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out-strong group-hover:scale-[1.03]"
                  />
                </div>

                {/* footer */}
                <div className="flex items-center justify-between p-5 sm:p-6">
                  <div>
                    <p className="font-display text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
                      {site.name}
                    </p>
                    <p className="mt-1 text-sm text-white/55">{site.tag}</p>
                  </div>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold text-ink transition-transform duration-300 ease-out-strong group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
