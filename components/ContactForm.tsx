"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE, SERVICES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "loading" | "success" | "error";

const BUDGETS = ["Under $1k", "$1k – $5k", "$5k – $15k", "$15k+"];

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/25";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="container-px mx-auto max-w-container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Get a quote
            </p>
            <h2 className="mt-4 text-section font-bold text-ink">Tell us about your project.</h2>
            <p className="mt-5 max-w-md text-ink-muted">
              Tell us what you need — we&apos;ll reply within one business day with
              ideas and a price. It&apos;s free, with no obligation.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="mt-8 inline-flex items-center gap-3 text-ink transition-colors hover:text-gold-deep"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-gold">
                <Mail className="h-5 w-5" />
              </span>
              <span className="font-medium">{SITE.email}</span>
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              {SITE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-gold hover:text-gold-deep"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="rounded-4xl border border-ink/10 bg-mist p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={fieldClass} placeholder="jane@brand.com" />
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-ink">
                    Project type
                  </label>
                  <select id="projectType" name="projectType" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={`${s.title} ${s.highlight}`}>
                        {s.title} {s.highlight}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-ink">
                    Budget
                  </label>
                  <select id="budget" name="budget" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`${fieldClass} resize-none`}
                  placeholder="What are you launching, and when?"
                />
              </div>

              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-medium text-ink transition-colors hover:bg-gold-deep hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                  {status === "success" ? "Sent — thank you!" : "Send request"}
                </button>

                {status === "success" && (
                  <span className="inline-flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                    We&apos;ll reply within one business day.
                  </span>
                )}
                {status === "error" && (
                  <span className="inline-flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
