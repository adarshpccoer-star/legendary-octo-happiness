import CaseStudies from "@/component/CaseStudies";
import Collection from "@/component/Collection";
import FeaturedPage from "@/component/FeaturedPage";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#c6bbaa] font-sans">
      <HeroSection />      {/* BG: #c6bbaa (Stone) */}
      <Collection />       {/* BG: #000000 (Black - for high-fashion contrast) */}
      <CaseStudies />      {/* BG: #c6bbaa (Stone - matches Hero) */}
      <FeaturedPage />     {/* BG: #f4f4f2 (Bone White - clean finish) */}
      <Footer/>
    </div>
  );
}