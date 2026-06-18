import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { MarqueeBand } from "@/components/MarqueeBand";
import { Feature } from "@/components/Feature";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Booking } from "@/components/Booking";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Trust />
        <Services />
        <HowItWorks />
        <MarqueeBand />
        <Feature />
        <Testimonials />
        <Pricing />
        <Faq />
        <Booking />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
