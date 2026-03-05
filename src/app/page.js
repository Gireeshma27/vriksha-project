import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import RecipesSection from "@/components/RecipesSection";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FeaturedProducts />
      <RecipesSection />
      <VideoSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
