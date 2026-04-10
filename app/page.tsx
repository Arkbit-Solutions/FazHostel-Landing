import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceGrid from "@/components/ExperienceGrid";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsSection />
      <AboutSection />
      <ExperienceGrid />
      <Gallery />
      <Testimonials />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
