import CaseStudies from "@/component/CaseStudies";
import Collection from "@/component/Collection";
import FeaturedPage from "@/component/FeaturedPage";
import HeroSection from "@/component/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#c6bbaa] font-sans">
      <HeroSection />
      <Collection />
      <CaseStudies />
      <FeaturedPage />
    </div>
  );
}