# Jarms Marketing — Website

A one-page marketing site for **Jarms Marketing**, an AI-powered creative agency
producing ad videos (commercial, product, event, corporate) and high-converting
websites.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx          SEO, fonts, metadata
  page.tsx            Assembles all sections
  globals.css         Brand tokens, fonts, drip/grain utilities
  api/contact/route.ts Quote-form handler (Resend email)
components/           One file per section + ui/ primitives
lib/data.ts           All editable site content (text, links, media)
public/               Logo + media assets
```

## Editing content

Almost everything (services, projects, testimonials, stats, social links,
Calendly URL, email) lives in **`lib/data.ts`** — edit there, no component
changes needed.

## Design

Light, editorial layout (inspired by the "Lucrio" template) with one **dark,
bold Services block** (inspired by the "Delight" template). Section order:
Hero → Showreel gallery → Trust → **Services (dark)** → How it works → Feature →
Testimonials → Pricing → Booking → Contact → Footer.

| Token | Hex | Use |
|-------|-----|-----|
| Orange | `#F26A2B` | Accent / CTA (single accent, kept under the `gold` key) |
| Ink | `#14161D` | Body text |
| Night | `#0E1116` | Dark Services + footer background |
| Mist | `#F4F4F6` | Light section backgrounds |
| Paper | `#FFFFFF` | Base background |

Fonts: **Poppins** (headings) + **DM Sans** (body), via Google Fonts.
Signature motif: the **"drip"** from the logo (`components/ui/DripDivider.tsx`)
bridges the light sections into the dark Services block and footer.

> The single accent lives in the `gold` token in `tailwind.config.ts` (and the
> `--orange` vars in `globals.css`). Change it once to re-tint the whole site.

## Videos

Real client videos live in `public/videos/` and are wired into `TILES` (gallery),
`SERVICES`, and the Feature section in `lib/data.ts`. Thumbnails show the first
frame; the full clip plays in a lightbox on click.

> ⚠️ **Compress before launch.** The source clips are 28–73 MB each (~260 MB total).
> Re-encode to web-friendly H.264 720p with `faststart` (target < 5–8 MB each), e.g.
> `ffmpeg -i in.mp4 -vf scale=-2:720 -c:v libx264 -crf 26 -movflags +faststart out.mp4`.

## Integrations to finish

1. **Compress the videos** in `public/videos/` (see above) for fast load.
2. **Calendly** — set `SITE.calendlyUrl` in `lib/data.ts` to your scheduling link.
3. **Contact email** — copy `.env.example` → `.env.local` and add a `RESEND_API_KEY`.

## Deploy

Recommended: **Vercel**. Push to a Git repo, import in Vercel, add the env vars
from `.env.example`, and deploy.

```bash
npm run build && npm start   # production build locally
```
