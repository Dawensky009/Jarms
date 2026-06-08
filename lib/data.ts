// Centralized site content. Edit text, links and media here.

export const SITE = {
  name: "Jarms Marketing",
  tagline: "AI-powered video & web for brands that refuse to blend in.",
  email: "hello@jarmsmarketing.com",
  // WhatsApp (international format, no +/spaces) — drives the main CTAs
  whatsapp: "18299745141",
  whatsappUrl:
    "https://wa.me/18299745141?text=" +
    encodeURIComponent("Hi Jarms 👋 I'd like a video / website."),
  // TODO: replace with the agency's real Calendly scheduling link
  calendlyUrl: "https://calendly.com/jarms-marketing/discovery-call",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "TikTok", href: "https://tiktok.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

/* ---------------- Showreel gallery (top, edge-to-edge) ---------------- */

export type Tile = {
  id: string;
  title: string;
  client: string;
  category: "Commercial" | "Product" | "Event" | "Corporate" | "Brand";
  video: string; // local mp4 in /public/videos — shows first frame, plays in lightbox
  tone: string; // gradient backdrop behind the frame
};

// Real client work. The thumbnail shows the first frame; full video plays on click.
export const TILES: Tile[] = [
  { id: "anna", title: "Anna BBQ", client: "Food brand", category: "Commercial", video: "/videos/anna-bbq.mp4", tone: "from-[#3a2c10] to-[#0e1116]" },
  { id: "astreya", title: "Astreya", client: "Brand film", category: "Brand", video: "/videos/astreya.mp4", tone: "from-[#13314a] to-[#0e1116]" },
  { id: "car", title: "Car Link Up", client: "Automotive", category: "Event", video: "/videos/car-link-up.mp4", tone: "from-[#2a1840] to-[#0e1116]" },
  { id: "cdm", title: "CDM", client: "Commercial spot", category: "Commercial", video: "/videos/cdm.mp4", tone: "from-[#3a1220] to-[#0e1116]" },
  { id: "star", title: "Star English", client: "Education", category: "Corporate", video: "/videos/star-english.mp4", tone: "from-[#123b3a] to-[#0e1116]" },
  { id: "makaya", title: "Makaya", client: "Brand film", category: "Brand", video: "/videos/makaya.mp4", tone: "from-[#2a1840] to-[#0e1116]" },
  { id: "pastor-jv", title: "Pastor JV", client: "Auto consulting", category: "Corporate", video: "/videos/pastor-jv.mp4", tone: "from-[#13314a] to-[#0e1116]" },
  { id: "shake-up", title: "Shake Up", client: "Event promo", category: "Event", video: "/videos/shake-up.mp4", tone: "from-[#3a1220] to-[#0e1116]" },
  { id: "blind-eye", title: "The Blind Eye", client: "Brand film", category: "Brand", video: "/videos/the-blind-eye.mp4", tone: "from-[#3a2c10] to-[#0e1116]" },
];

/* ---------------- Services (dark, Delight-style rows) ---------------- */

export type Service = {
  id: string;
  index: string;
  title: string;
  highlight: string; // word(s) coloured with the accent
  blurb: string;
  bullets: string[];
  video?: string; // local mp4 — first frame as visual, plays on click
  tone: string;
};

export const SERVICES: Service[] = [
  {
    id: "ad",
    index: "01",
    title: "AI Ad",
    highlight: "Videos",
    blurb:
      "Scroll-stopping short-form ads engineered for social. Hooks, captions and pacing tuned to convert viewers into customers.",
    bullets: ["Reels, TikTok & Shorts", "Hook-first scripting", "A/B-ready variants"],
    video: "/videos/anna-bbq.mp4",
    tone: "from-[#3a2c10] to-[#0e1116]",
  },
  {
    id: "film",
    index: "02",
    title: "Commercial &",
    highlight: "Brand Films",
    blurb:
      "Cinematic brand commercials with story, motion and sound design that make people stop, watch and remember you.",
    bullets: ["Creative direction", "Motion & sound design", "Broadcast-ready"],
    video: "/videos/cdm.mp4",
    tone: "from-[#13314a] to-[#0e1116]",
  },
  {
    id: "product",
    index: "03",
    title: "Product",
    highlight: "Videos",
    blurb:
      "Show the product in its best light — clean reveals, feature highlights and lifestyle context that drives the click.",
    bullets: ["Studio & lifestyle", "Feature highlights", "E-commerce ready"],
    video: "/videos/shake-up.mp4",
    tone: "from-[#123b3a] to-[#0e1116]",
  },
  {
    id: "web",
    index: "04",
    title: "Website",
    highlight: "Creation",
    blurb:
      "Fast, modern, high-converting websites — like this one. Strategy, design, build and launch, fully done for you.",
    bullets: ["Conversion-focused design", "Next.js performance", "SEO & analytics"],
    video: "/videos/astreya.mp4",
    tone: "from-[#2a1840] to-[#0e1116]",
  },
];

/* ---------------- How it works (4 coloured steps) ---------------- */

export type Step = {
  n: string;
  title: string;
  blurb: string;
  color: string; // tailwind bg-* class
};

export const STEPS: Step[] = [
  { n: "1", title: "Brief", blurb: "We learn your brand, goal and audience in a quick discovery call.", color: "bg-step-violet" },
  { n: "2", title: "Concept", blurb: "AI accelerates scripts and storyboards — refined by our team.", color: "bg-step-green" },
  { n: "3", title: "Produce", blurb: "We shoot, generate and edit — motion, sound and colour dialled in.", color: "bg-step-blue" },
  { n: "4", title: "Deliver", blurb: "Platform-ready exports, fast revisions and assets that perform.", color: "bg-step-pink" },
];

/* ---------------- Pricing ---------------- */

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$490",
    cadence: "per video",
    tagline: "For one-off ads & social cuts",
    features: [
      "1 finished video",
      "Up to 30 seconds",
      "2 revision rounds",
      "Vertical + square exports",
    ],
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "$1,900",
    cadence: "per month",
    tagline: "For brands shipping content weekly",
    features: [
      "4 videos / month",
      "Ad scripting & strategy",
      "Unlimited revisions",
      "All platform formats",
      "Priority turnaround",
    ],
    cta: "Start with Growth",
    popular: true,
  },
  {
    name: "Studio",
    price: "Custom",
    cadence: "video + web",
    tagline: "Full campaigns & website builds",
    features: [
      "Everything in Growth",
      "Website design & build",
      "Brand & campaign strategy",
      "Dedicated producer",
    ],
    cta: "Book a call",
  },
];

/* ---------------- Trust: stats + client names ---------------- */

export type Stat = { value: number; suffix: string; label: string };

export const STATS: Stat[] = [
  { value: 320, suffix: "+", label: "Videos delivered" },
  { value: 90, suffix: "+", label: "Brands served" },
  { value: 12, suffix: "M+", label: "Views generated" },
  { value: 48, suffix: "h", label: "Avg. first cut" },
];

export const CLIENTS = [
  "Aurum Coffee",
  "Nova Audio",
  "Pulse Events",
  "Lumen Studio",
  "Meridian Legal",
  "Verde Skincare",
  "Atlas Realty",
  "Kite Tech",
  "Neon Nights",
];

/* ---------------- Testimonials ---------------- */

export type Testimonial = { quote: string; name: string; role: string };

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Jarms turned our launch around in days, not weeks. The first cut already looked like a finished campaign.", name: "Sofia Marchetti", role: "Founder, Aurum Coffee" },
  { quote: "Our product video tripled engagement on launch day. The pacing and hooks are on another level.", name: "David Okafor", role: "CMO, Nova Audio" },
  { quote: "They built our website and our promo reel in one go. One partner, zero friction, real results.", name: "Camille Roy", role: "Director, Pulse Events" },
];
