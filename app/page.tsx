import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Feature } from "@/components/Feature";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
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
        <Feature />
        <Testimonials />
        <Pricing />
        <Booking />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
