
// Homepage with all sections in order, fully responsive, with fade/slide animation

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureHighlight from "@/components/FeatureHighlight";
import VideoSection from "@/components/VideoSection";
import CoreBenefits from "@/components/CoreBenefits";
import Amenities from "@/components/Amenities";
import DreamHome from "@/components/DreamHome";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Main Page
export default function Index() {
  return (
    <div className="font-sans bg-white text-navy min-h-screen w-full">
      <Navbar />
      <main className="flex flex-col gap-0 pt-16">
        <Hero />
        <FeatureHighlight />
        <VideoSection />
        <CoreBenefits />
        <Amenities />
        <DreamHome />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
