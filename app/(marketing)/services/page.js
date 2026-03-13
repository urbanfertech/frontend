import {
  FaBath,
  FaCut,
  FaSpa,
  FaCheck,
  FaDog,
  FaCat,
  FaPaw,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
import GoldenDivider from "@/components/ui/GoldenDivider";
import CTASection from "@/components/home/CTASection";
import ServicesList from "@/components/services/ServicesList";

export const metadata = {
  title: "Grooming Services - UrbanFur",
  description: "Premium pet grooming services tailored to your pet's needs",
};

export default function ServicesPage() {
  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#0A0A0A]">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/stockimage1.png"
            alt="UrbanFur Pets"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/95 via-[#030303]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#FF9F0D]"></span>
              <span className="text-[#FF9F0D] text-sm font-medium tracking-widest uppercase">
                Expert Care
              </span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-medium leading-[0.9] tracking-tight mb-8">
              Bespoke <span className="text-[#FF9F0D]">Services.</span>
            </h1>

            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mb-12">
              From essential hygiene to luxury spa treatments, our certified
              groomers bring a world-class salon experience to your home.
            </p>
          </div>
        </div>
      </section>

      <GoldenDivider variant="gradient" className="max-w-6xl mx-auto opacity-30 my-20" />

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
          <ServicesList />
        </div>
      </section>

      <GoldenDivider className="opacity-20 my-20" />

      {/* Pet Types Section */}
      <section className="py-32 bg-[#F9F9F9] overflow-hidden">
        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 text-center mb-24">
          <h2 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] font-medium tracking-tight mb-6">
            For Every <span className="text-[#FF9F0D]">Companion</span>
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
            Our grooming techniques are tailored to the unique physiological and emotional needs of every pet.
          </p>
        </div>

        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureTypeBox
            icon={<FaDog />}
            title="Canine Care"
            description="Specialized grooming for all breeds, from miniature explorers to gentle giants."
          />
          <FeatureTypeBox
            icon={<FaCat />}
            title="Feline Luxury"
            description="Quiet, stress-free handling for cats. Specialized tools for delicate coats."
          />
          <FeatureTypeBox
            icon={<FaPaw />}
            title="Special Needs"
            description="Patience-first approach for senior pets and those with physical sensitivities."
          />
        </div>
      </section>

      <GoldenDivider className="opacity-20" />

      {/* Standard CTA Section */}
      <CTASection />

      <GoldenDivider className="opacity-20 pb-20" />
    </div>
  );
}

function PremiumServiceCard({ icon, title, subtitle, description, features, price, featured = false }) {
  return (
    <div className={`relative p-12 rounded-[3rem] transition-all duration-500 flex flex-col group ${featured ? "bg-navy text-white shadow-2xl scale-105" : "bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-2"}`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF9F0D] text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
          Client Favorite
        </div>
      )}

      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 ${featured ? "bg-white/10 text-[#FF9F0D]" : "bg-[#FF9F0D]/10 text-[#FF9F0D]"}`}>
        {icon}
      </div>

      <div className="mb-4">
        <span className={`text-[10px] uppercase tracking-widest font-bold ${featured ? "text-white/50" : "text-[#FF9F0D]"}`}>{subtitle}</span>
        <h3 className={`font-serif text-3xl font-medium mt-2 ${featured ? "text-white" : "text-[#1A1A1A]"}`}>{title}</h3>
      </div>

      <p className={`text-base font-light leading-relaxed mb-8 ${featured ? "text-white/60" : "text-gray-500"}`}>
        {description}
      </p>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className={`flex items-center gap-3 text-sm font-medium ${featured ? "text-white/80" : "text-gray-600"}`}>
            <FaCheckCircle className="text-[#FF9F0D] text-xs" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex items-baseline gap-1 mb-6">
          <span className={`text-4xl font-serif font-medium ${featured ? "text-white" : "text-[#1A1A1A]"}`}>{price}</span>
        </div>

        <Link
          href="/booking"
          className={`w-full py-4 rounded-full font-medium text-center transition-all flex items-center justify-center gap-2 ${featured ? "bg-[#FF9F0D] text-white hover:bg-[#e68f0c]" : "bg-navy text-white hover:bg-[#2A2A2A]"}`}
        >
          Book Service
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

function FeatureTypeBox({ icon, title, description }) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-lg transition-all text-center group">
      <div className="w-16 h-16 bg-[#FF9F0D]/5 rounded-2xl flex items-center justify-center text-[#FF9F0D] text-3xl mx-auto mb-8 group-hover:bg-[#FF9F0D] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-2xl font-medium mb-4 text-[#1A1A1A]">{title}</h3>
      <p className="text-gray-400 font-light leading-relaxed">{description}</p>
    </div>
  );
}
