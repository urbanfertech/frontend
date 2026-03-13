import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
import TestimonialSection from "../../components/home/TestimonialSection";
import CTASection from "../../components/home/CTASection";
import GoldenDivider from "@/components/ui/GoldenDivider";

export default function Home() {
  return (
    <div className="bg-white font-sans text-gray-900">
      <HeroSection />
      <AboutSection />
      <GoldenDivider/>
      <TestimonialSection />
      <GoldenDivider/>
      <CTASection />
      <GoldenDivider/>
    </div>
  );
}