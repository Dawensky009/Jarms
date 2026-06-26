// Centralized site content. Edit text, links and media here.

export const SITE = {
  name: "Jarms Marketing",
  tagline: "AI-powered video & web for brands that refuse to blend in.",
  email: "hello@jarmsmarketing.com",
  // WhatsApp (international format, no +/spaces) — drives the main CTAs
  whatsapp: "18299745141",
  whatsappUrl:
    "https://wa.me/18299745141?text=" +
    encodeURIComponent("Hello! I want to book a call for website / video."),
  // dual-service intents — so the visitor lands in the right conversation instantly
  whatsappVideo:
    "https://wa.me/18299745141?text=" +
    encodeURIComponent("Hello! I want to book a call for a video."),
  whatsappWeb:
    "https://wa.me/18299745141?text=" +
    encodeURIComponent("Hello! I want to book a call for a website."),
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
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
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
  { id: "patricia", title: "The Arc Beauty", client: "Beauty & spa", category: "Commercial", video: "/videos/patricia.mp4", tone: "from-[#13314a] to-[#0e1116]" },
  { id: "anna", title: "Anna BBQ", client: "Food brand", category: "Commercial", video: "/videos/anna-bbq.mp4", tone: "from-[#3a2c10] to-[#0e1116]" },
  { id: "astreya", title: "Astreya", client: "Brand film", category: "Brand", video: "/videos/astreya.mp4", tone: "from-[#13314a] to-[#0e1116]" },
  { id: "car", title: "Car Link Up", client: "Automotive", category: "Event", video: "/videos/car-link-up.mp4", tone: "from-[#2a1840] to-[#0e1116]" },
  { id: "cdm", title: "CDM", client: "Commercial spot", category: "Commercial", video: "/videos/cdm.mp4", tone: "from-[#3a1220] to-[#0e1116]" },
  { id: "star", title: "Star English", client: "Education", category: "Corporate", video: "/videos/star-english.mp4", tone: "from-[#123b3a] to-[#0e1116]" },
  { id: "makaya", title: "Makaya", client: "Brand film", category: "Brand", video: "/videos/makaya.mp4", tone: "from-[#2a1840] to-[#0e1116]" },
  { id: "pastor-jv", title: "Pastor JV", client: "Auto consulting", category: "Corporate", video: "/videos/pastor-jv.mp4", tone: "from-[#13314a] to-[#0e1116]" },
  { id: "shake-up", title: "Shake Up", client: "Drink brand", category: "Product", video: "/videos/shake-up.mp4", tone: "from-[#3a1220] to-[#0e1116]" },
  { id: "blind-eye", title: "The Blind Eye", client: "Brand film", category: "Brand", video: "/videos/the-blind-eye.mp4", tone: "from-[#3a2c10] to-[#0e1116]" },
];

/* ---------------- Services (dark, Delight-style rows) ---------------- */

export type Service = {
  id: string;
  index: string;
  title: string;
  highlight: string; // word(s) coloured with the accent
  short: string; // one-line scannable promise (shown on the card)
  blurb: string;
  bullets: string[];
  video?: string; // local mp4 — used as the still photo (poster) for the card
  image?: string; // explicit photo override (e.g. a website screenshot)
  url?: string; // if set, the card links here instead of opening the video
  tone: string;
};

export const SERVICES: Service[] = [
  {
    id: "ad",
    index: "01",
    title: "AI Ad",
    highlight: "Videos",
    short: "Thumb-stopping ads watched to the end.",
    blurb:
      "The ad that stops the thumb. We grab attention in the first 3 seconds, so people watch to the end and tap “buy” instead of scrolling past.",
    bullets: ["Reels, TikTok & Shorts", "Hook-first scripting", "A/B-ready variants"],
    video: "/videos/anna-bbq.mp4",
    image: "/img/svc-ad.jpg",
    tone: "from-[#3a2c10] to-[#0e1116]",
  },
  {
    id: "film",
    index: "02",
    title: "Commercial &",
    highlight: "Brand Films",
    short: "Films that make people remember your name.",
    blurb:
      "The film that makes people remember your name. Real story, motion and sound that make your business look as good as it actually is.",
    bullets: ["Creative direction", "Motion & sound design", "Broadcast-ready"],
    video: "/videos/cdm.mp4",
    image: "/img/svc-film.jpg",
    tone: "from-[#13314a] to-[#0e1116]",
  },
  {
    id: "product",
    index: "03",
    title: "Product",
    highlight: "Videos",
    short: "Product videos that turn lookers into buyers.",
    blurb:
      "Show your product like it’s worth every cent. Clean shots and real-life moments that answer “why should I buy this?” and turn lookers into buyers.",
    bullets: ["Studio & lifestyle", "Feature highlights", "E-commerce ready"],
    video: "/videos/shake-up.mp4",
    image: "/img/svc-product.jpg",
    tone: "from-[#123b3a] to-[#0e1116]",
  },
  {
    id: "web",
    index: "04",
    title: "Website",
    highlight: "Creation",
    short: "A site that sells for you 24/7.",
    blurb:
      "A website that sells for you 24/7 — fast, easy to use, and done for you. The one you’re reading right now? We built it.",
    bullets: ["Conversion-focused design", "Next.js performance", "SEO & analytics"],
    video: "/videos/astreya.mp4",
    image: "/sites/juicylicious.jpeg",
    url: "#websites",
    tone: "from-[#2a1840] to-[#0e1116]",
  },
];

/* ---------------- Work categories ("Trusted by" cards) ---------------- */

export type WorkCategory = { label: string; caption: string; poster: string };

export const WORK_CATEGORIES: WorkCategory[] = [
  { label: "Ad & Social Video", caption: "Reels, TikTok & Shorts that stop the thumb", poster: "/posters/anna-bbq.webp" },
  { label: "Commercial & Brand Films", caption: "The film that makes people remember you", poster: "/posters/cdm.webp" },
  { label: "Product Videos", caption: "Shots that turn lookers into buyers", poster: "/posters/shake-up.webp" },
  { label: "Websites That Sell", caption: "Fast, done-for-you, built to convert", poster: "/posters/astreya.webp" },
];

/* ---------------- Outcomes ("What we help you achieve" bento) ---------------- */

export type Outcome = { title: string; blurb: string; accent?: boolean };

export const OUTCOMES: Outcome[] = [
  { title: "Get seen", blurb: "Scroll-stopping video that actually gets watched — and shared — instead of ignored." },
  { title: "Grow your audience", blurb: "Show up consistently so the right people start to know, like and remember you." },
  { title: "Make content people care about", blurb: "Real stories and emotion — not just “#content” that fills a feed." },
  { title: "Turn views into sales", blurb: "Attention is nice. Paying customers are better. We build for the second one.", accent: true },
];

/* ---------------- Websites we've built (portfolio) ---------------- */

export type Website = { name: string; tag: string; url: string; image: string };

export const WEBSITES: Website[] = [
  {
    name: "Juicylicious",
    tag: "E-commerce · Juice & food brand",
    url: "https://juicylicious.vercel.app/",
    image: "/sites/juicylicious.jpeg",
  },
  {
    name: "Dawensky Thermildort",
    tag: "Personal portfolio · Analyst",
    url: "https://dt-eight-kappa.vercel.app/",
    image: "/sites/dt-portfolio.jpeg",
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
  { n: "1", title: "Tell us the goal", blurb: "A quick call or message. You tell us what you want — we take it from there.", color: "bg-step-violet" },
  { n: "2", title: "We plan it", blurb: "We turn your idea into a script and a look. AI makes it fast; we make it good.", color: "bg-step-green" },
  { n: "3", title: "We make it", blurb: "We shoot, edit and polish until it looks exactly how you pictured it.", color: "bg-step-blue" },
  { n: "4", title: "You post it", blurb: "Ready-to-post files in days — with changes until you’re happy.", color: "bg-step-pink" },
];

/* ---------------- Pricing ---------------- */

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  perUnit?: string; // mental-accounting reframe shown under the price
  note?: string; // social-proof / context microcopy
  features: string[];
  cta: string;
  intent?: "video" | "web"; // which WhatsApp conversation the CTA opens
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$490",
    cadence: "per video",
    perUnit: "One-time · yours to keep",
    tagline: "Test the waters with a single ad or promo",
    features: [
      "1 finished video",
      "Up to 30 seconds",
      "2 revision rounds",
      "Vertical + square exports",
    ],
    cta: "Get started",
    intent: "video",
  },
  {
    name: "Growth",
    price: "$1,900",
    cadence: "per month",
    perUnit: "≈ $475 / video",
    note: "Where most brands start.",
    tagline: "For businesses posting every week",
    features: [
      "4 videos / month",
      "Ad scripting & strategy",
      "Unlimited revisions",
      "All platform formats",
      "Priority turnaround",
    ],
    cta: "Start with Growth",
    intent: "video",
    popular: true,
  },
  {
    name: "Studio",
    price: "Custom",
    cadence: "video + web",
    perUnit: "Tailored to your scope",
    tagline: "Video + website, handled by one team",
    features: [
      "Everything in Growth",
      "Website design & build",
      "Brand & campaign strategy",
      "Dedicated producer",
    ],
    cta: "Book a call",
    intent: "web",
  },
];

/* ---------------- Entry pricing (2 services, shown in hero + #pricing) ---------------- */

export type PriceOption = {
  price: string;
  detail?: string; // e.g. duration for videos
  desc: string;
};

export type PriceService = {
  id: "video" | "web";
  name: string;
  priceFrom: string; // headline "from" price (hero pills)
  options: PriceOption[];
  intent: "video" | "web"; // which WhatsApp conversation the CTA opens
};

export const PRICING: PriceService[] = [
  {
    id: "video",
    name: "Video",
    priceFrom: "$50",
    intent: "video",
    options: [
      {
        price: "$50",
        detail: "30–40s max",
        desc: "Quick promotions, business announcements, service offers & social media content.",
      },
      {
        price: "$80",
        detail: "30–60s max",
        desc: "Event promos, product commercials, digital products & advanced ad campaigns.",
      },
    ],
  },
  {
    id: "web",
    name: "Website",
    priceFrom: "$200",
    intent: "web",
    options: [
      { price: "$200", desc: "Portfolio, business presentation website, landing page." },
      { price: "$300", desc: "Online store, service booking with payment, digital products store." },
    ],
  },
];

// optional paid add-on (offered on top of a website build)
export const AI_UPGRADE = {
  title: "Upgrade with AI integration",
  blurb: "Make your site work for you — automate the busywork and book clients on autopilot.",
  features: [
    "Agentic workflows",
    "Business process automation",
    "Automated forms",
    "Booking automation",
    "And more…",
  ],
};

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

/* ---------------- FAQ (objection handling) ---------------- */

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How much does a video cost?",
    a: "Single videos start at $490, and our monthly plan is $1,900 for four videos a month. You always get a clear, fixed price before we start — no surprises, no hidden fees. Got a bigger project? Message us and we'll quote it within 24 hours.",
  },
  {
    q: "How fast will I get my video?",
    a: "You'll see your first cut in about 48 hours, and most projects are fully finished within a few days. On a deadline? Tell us the date and we'll tell you straight if we can hit it.",
  },
  {
    q: "What if I don't like the result?",
    a: "You approve every cut before it's final — nothing goes out without your yes. If the first version misses the mark, we revise it until it's right. You're never stuck with a video you don't love.",
  },
  {
    q: "I don't have a script or know exactly what I want. Is that a problem?",
    a: "Not at all — that's our job. Just tell us the goal (more sales, more bookings, more attention) and we handle the idea, the script and the look. You only have to approve.",
  },
  {
    q: "Do I need to be on camera or send footage?",
    a: "Only if you want to. We can film it, work with footage you already have, or create it with AI — whatever fits your brand and budget. We'll recommend the best route for you.",
  },
  {
    q: "Do you build websites too?",
    a: "Yes — video and websites, handled by one team. The site you're reading right now? We built it. Doing both together means no back-and-forth between vendors, and one consistent look.",
  },
];

/* ---------------- Testimonials ---------------- */

export type Testimonial = { quote: string; name: string; role: string };

export const TESTIMONIALS: Testimonial[] = [
  { quote: "We needed a launch video fast, and they delivered in days. The first version was already better than what our last agency took weeks to make.", name: "Sofia Marchetti", role: "Founder, Aurum Coffee" },
  { quote: "Our product video got more saves and comments than anything we'd posted all year. People actually watched the whole thing.", name: "David Okafor", role: "Owner, Nova Audio" },
  { quote: "They did our website and our event video together — one team, no back-and-forth, and it just worked. We'll be back.", name: "Camille Roy", role: "Director, Pulse Events" },
];
