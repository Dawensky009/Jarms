import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const siteUrl = "https://jarmsmarketing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jarms Marketing — AI-Powered Video & Web for Brands",
    template: "%s · Jarms Marketing",
  },
  description:
    "Jarms Marketing is an AI-powered creative agency producing scroll-stopping ad videos — commercial, product, event and corporate — plus high-converting websites. Faster, sharper, unforgettable.",
  keywords: [
    "AI video agency",
    "advertising video production",
    "commercial video",
    "product video",
    "event video",
    "website creation",
    "marketing agency",
    "Jarms Marketing",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Jarms Marketing",
    title: "Jarms Marketing — AI-Powered Video & Web for Brands",
    description:
      "Scroll-stopping ad videos and high-converting websites, powered by AI and human craft.",
    images: [{ url: "/sample-2.webp", width: 1200, height: 630, alt: "Jarms Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarms Marketing — AI-Powered Video & Web for Brands",
    description:
      "Scroll-stopping ad videos and high-converting websites, powered by AI and human craft.",
    images: ["/sample-2.webp"],
  },
  icons: {
    icon: "/logo_Jarms.png",
    apple: "/logo_Jarms.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1626",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
