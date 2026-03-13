import {
  FaCalendarAlt,
  FaTruck,
  FaClock,
  FaStar,
  FaPaw,
  FaRegSmileBeam,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import GoldenDivider from "@/components/ui/GoldenDivider";
import CTASection from "@/components/home/CTASection";

export default function HowItWorksPage() {
  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A]">
        {/* Background Image with Overlay - Optimized for pop and readability */}
        <div className="absolute inset-0 z-0 scale-105">
          <img
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop"
            alt="Pet being groomed"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <span className="h-px w-8 bg-[#FF9F0D]"></span>
              <span className="text-[#FF9F0D] text-sm font-medium tracking-widest uppercase">
                Seamless Experience
              </span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-white font-medium leading-[0.85] tracking-tight mb-8">
              Home <span className="text-[#FF9F0D]">Grooming</span> <br />
              <span className="italic">Simplified.</span>
            </h1>

            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mb-12 drop-shadow-md">
              Experience the pinnacle of pet care without ever leaving your sanctuary.
              Our seamless four-step process ensures a stress-free transformation.
            </p>

            <div className="flex flex-wrap gap-6">
              <a href="#steps" className="bg-[#FF9F0D] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#e68f0c] transition-all flex items-center gap-2 shadow-lg shadow-[#FF9F0D]/20">
                Explore the steps
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Floating Stat Card */}
        <div className="absolute bottom-12 right-12 lg:right-32 hidden md:block">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <div className="text-4xl font-serif text-[#FF9F0D] mb-1">04</div>
            <div className="text-white/60 text-xs font-light uppercase tracking-widest">Simple Stages</div>
          </div>
        </div>
      </section>

      <div id="steps" className="pt-20">
        <GoldenDivider variant="gradient" className="max-w-6xl mx-auto opacity-30" />
      </div>

      {/* Modern Steps Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
          <div className="space-y-40">
            <ProcessStep
              number="01"
              title="Select Your Service"
              subtitle="Personalized Care"
              description="Browse our curated menu of premium grooming services. From essential baths to full aesthetic treatments, choose the package that best suits your pet's unique needs."
              img="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop"
              icon={<FaPaw />}
            />

            <ProcessStep
              number="02"
              title="Choose a Master Groomer"
              subtitle="Certified Professionals"
              description="Every UrbanFur professional is rigorously vetted and certified. View detailed profiles, verified ratings, and portfolio work to find the perfect match for your furry companion."
              img="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop"
              icon={<FaCheckCircle />}
              reverse={true}
            />

            <ProcessStep
              number="03"
              title="Schedule at Your Convenience"
              subtitle="Flexible Timing"
              description="Life is busy, but your pet's care shouldn't be. Select a time slot that perfectly aligns with your schedule. We arrive fully equipped, requiring nothing but a small space to work."
              img="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
              icon={<FaClock />}
            />

            <ProcessStep
              number="04"
              title="Luxury Results at Home"
              subtitle="Stress-Free Finish"
              description="Relax while your pet receives one-on-one attention in their familiar environment. No cages, no travel stress—just a happy, refreshed pet and a beautiful finish."
              img="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=2012&auto=format&fit=crop"
              icon={<FaRegSmileBeam />}
              reverse={true}
            />
          </div>
        </div>
      </section>

      <GoldenDivider className="opacity-20" />

      {/* Benefits Section - Premium Cards */}
      <section className="py-32 bg-[#F9F9F9] overflow-hidden">
        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
          <div className="text-center mb-24">
            <h2 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] font-medium tracking-tight mb-6">
              The UrbanFur <span className="text-[#FF9F0D]">Advantage</span>
            </h2>
            <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
              We&apos;ve reimagined the grooming experience to focus on what matters most: your pet&apos;s comfort and your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PremiumBenefitCard
              title="Stress-Free Atmosphere"
              description="Eliminate the anxiety of travel and noisy salons. Your pet remains in their safe haven, resulting in a calmer, more pleasant experience."
              icon={<div className="w-12 h-12 bg-[#FF9F0D]/10 rounded-2xl flex items-center justify-center text-[#FF9F0D] mb-8 group-hover:bg-[#FF9F0D] group-hover:text-white transition-all duration-300">
                <FaStar className="w-6 h-6" />
              </div>}
            />
            <PremiumBenefitCard
              title="Bespoke Attention"
              description="Unlike busy salons, our groomers focus exclusively on your pet. This dedicated one-on-one time ensures every detail is handled with care."
              icon={<div className="w-12 h-12 bg-[#FF9F0D]/10 rounded-2xl flex items-center justify-center text-[#FF9F0D] mb-8 group-hover:bg-[#FF9F0D] group-hover:text-white transition-all duration-300">
                <FaPaw className="w-6 h-6" />
              </div>}
            />
            <PremiumBenefitCard
              title="Ultimate Convenience"
              description="Save hours of commute and wait time. Our master groomers bring the complete salon experience directly to your doorstep."
              icon={<div className="w-12 h-12 bg-[#FF9F0D]/10 rounded-2xl flex items-center justify-center text-[#FF9F0D] mb-8 group-hover:bg-[#FF9F0D] group-hover:text-white transition-all duration-300">
                <FaTruck className="w-6 h-6" />
              </div>}
            />
          </div>
        </div>
      </section>

      <GoldenDivider className="opacity-20" />

      {/* Reusing Home CTA */}
      <CTASection />

      <GoldenDivider className="opacity-20 pb-20" />
    </div>
  );
}

function ProcessStep({ number, title, subtitle, description, img, icon, reverse = false }) {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {/* Image Column */}
      <div className="flex-1 w-full relative group">
        {/* Decorative backdrop */}
        <div className={`absolute -inset-4 bg-[#FF9F0D]/5 rounded-[3rem] blur-3xl transition-opacity opacity-0 group-hover:opacity-100 -z-10`} />

        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl border border-gray-100">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Minimal Icon Overlay */}
        <div className={`absolute -bottom-6 ${reverse ? "-left-6" : "-right-6"} w-20 h-20 bg-white shadow-xl rounded-3xl flex items-center justify-center text-[#FF9F0D] text-3xl border border-gray-50 transform transition-transform group-hover:scale-110`}>
          {icon}
        </div>
      </div>

      {/* Content Column */}
      <div className="flex-1 max-w-xl">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-serif text-5xl md:text-7xl text-[#FF9F0D] opacity-20 font-medium">{number}</span>
          <span className="text-[#FF9F0D] text-xs font-semibold uppercase tracking-[0.2em]">{subtitle}</span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-[#1A1A1A] font-medium leading-tight mb-8">
          {title}
        </h2>

        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10">
          {description}
        </p>

        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-sm text-[#1A1A1A] font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF9F0D]" />
            Professional Equipment
          </li>
          <li className="flex items-center gap-3 text-sm text-[#1A1A1A] font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF9F0D]" />
            Vetted Master Groomers
          </li>
        </ul>
      </div>
    </div>
  );
}

function PremiumBenefitCard({ title, description, icon }) {
  return (
    <div className="group bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#FF9F0D]/5 transition-all duration-500 hover:-translate-y-2">
      {icon}
      <h3 className="font-serif text-2xl text-[#1A1A1A] font-medium mb-6 tracking-tight">{title}</h3>
      <p className="text-gray-400 leading-relaxed font-light">{description}</p>
    </div>
  );
}
