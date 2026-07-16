import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedModels } from "@/components/FeaturedModels";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { BookTestDrive } from "@/components/BookTestDrive";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedModels />
        <VideoShowcase />
        <Testimonials />
        <ContactSection />
        <BookTestDrive />
      </main>
      <Footer />
    </div>
  );
}
