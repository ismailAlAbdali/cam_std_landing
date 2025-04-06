import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import StatsSection from '@/components/sections/stats-section';
import TeamSection from '@/components/sections/team-section';
import GallerySection from '@/components/sections/gallery-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import LocationSection from '@/components/sections/location-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <TeamSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}