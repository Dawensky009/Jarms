import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { AgencyBlock } from "@/components/AgencyBlock";
import { Achieve } from "@/components/Achieve";
import { Gallery } from "@/components/Gallery";
import { WebPortfolio } from "@/components/WebPortfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <AgencyBlock />
        <Achieve />
        <Gallery />
        <WebPortfolio />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
