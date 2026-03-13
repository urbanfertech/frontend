import { FaCheck, FaInfoCircle, FaStar, FaArrowRight, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import GoldenDivider from "@/components/ui/GoldenDivider";
import CTASection from "@/components/home/CTASection";

export default function PricingPage() {
  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Sophisticated Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop"
            alt="Aesthetic pet care"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/95 via-[#030303]/70 to-[#030303]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="h-px w-8 bg-[#FF9F0D]"></span>
            <span className="text-[#FF9F0D] text-sm font-medium tracking-widest uppercase">
              Simple & Transparent
            </span>
            <span className="h-px w-8 bg-[#FF9F0D]"></span>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-white font-medium leading-[0.85] tracking-tight mb-8">
            Pricing <span className="italic text-[#FF9F0D]">Plans.</span>
          </h1>

          <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Premium pet care without the premium headache. Choose the volume
            and frequency that fits your lifestyle.
          </p>
        </div>
      </section>

      <div className="py-20">
        <GoldenDivider variant="gradient" className="max-w-6xl mx-auto opacity-30" />
      </div>

      {/* Pricing Grid */}
      <section className="pb-32 bg-white">
        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <PremiumPricingCard
              tier="Lite"
              price="45"
              description="Ideal for maintenance grooming between regular sessions."
              features={[
                "Organic Bath & Dry",
                "Ear & Eye Cleaning",
                "Basic Nail Trimming",
                "Natural Scent Spray",
              ]}
              buttonText="Select Lite"
            />

            <PremiumPricingCard
              tier="Platinum"
              price="75"
              description="A comprehensive grooming experience for a complete refresh."
              features={[
                "Everything in Lite",
                "Precision Hair styling",
                "Organic Teeth Brushing",
                "Paws & Pads Balm",
                "Full Body De-Shed",
              ]}
              buttonText="Experience Platinum"
              featured={true}
            />

            <PremiumPricingCard
              tier="Royal Spa"
              price="125"
              description="The ultimate in luxury, featuring specialized skin treatments."
              features={[
                "Everything in Platinum",
                "Blueberry Facial Luxe",
                "Mud Bath Therapy",
                "Deep Tissue Massage",
                "Aromatherapy Session",
              ]}
              buttonText="Select Royal Spa"
            />
          </div>
        </div>
      </section>

      <GoldenDivider className="opacity-20 my-20" />

      {/* FAQ Section */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="text-[#FF9F0D] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Frequently Asked</span>
              <h2 className="font-serif text-5xl md:text-6xl text-white font-medium mb-8">Your Questions Answered.</h2>
              <p className="text-white/40 font-light text-lg">Everything you need to know about our home grooming services and payment process.</p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <FaqBox
                question="Are there hidden travel fees?"
                answer="Absolutely not. Our pricing is transparent and includes travel within our primary service zones. External zones may attract a minor flat-fee that you'll see clearly during booking."
              />
              <FaqBox
                question="Multi-pet discounts?"
                answer="We celebrate multi-pet families. Enjoy an automatic 15% reduction on subsequent pets when groomed during the same scheduled window."
              />
              <FaqBox
                question="Seamless payments?"
                answer="Complete your transaction securely via the UrbanFur app. We support all leading credit cards, Apple Pay, and Google Pay for your convenience."
              />
              <FaqBox
                question="Cancellation policy?"
                answer="We value flexibility. Reschedule or cancel up to 24 hours prior to your session with zero penalty. Late changes may incur a modest fee to support our groomers."
              />
            </div>
          </div>
        </div>
      </section>

      <GoldenDivider className="opacity-20" />

      {/* CTA Section */}
      <CTASection />

      <GoldenDivider className="opacity-20 pb-20" />
    </div>
  );
}

function PremiumPricingCard({ tier, price, description, features, buttonText, featured = false }) {
  return (
    <div className={`group relative p-12 rounded-[3.5rem] border transition-all duration-700 flex flex-col ${featured ? "bg-navy text-white shadow-2xl scale-105 z-10" : "bg-white text-navy border-gray-50 hover:shadow-xl hover:-translate-y-2"}`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF9F0D] text-white px-8 py-2 rounded-full font-bold text-[10px] tracking-widest uppercase shadow-lg shadow-[#FF9F0D]/20">
          Unrivaled Value
        </div>
      )}

      <div className="text-center mb-10">
        <h3 className={`text-xs font-bold uppercase tracking-[0.25em] mb-8 ${featured ? "text-[#FF9F0D]" : "text-gray-400"}`}>{tier}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-2xl font-serif ${featured ? "text-white/40" : "text-gray-300"}`}>$</span>
          <span className={`text-7xl font-serif font-medium ${featured ? "text-white" : "text-[#1A1A1A]"}`}>{price}</span>
        </div>
        <p className={`text-[11px] font-bold uppercase tracking-wider mt-2 ${featured ? "text-white/30" : "text-gray-300"}`}>Per Session</p>
      </div>

      <p className={`text-center font-light leading-relaxed mb-12 ${featured ? "text-white/60" : "text-gray-400"}`}>
        {description}
      </p>

      <div className="space-y-6 mb-16 flex-grow">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-4 group/item">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${featured ? "bg-[#FF9F0D] text-white" : "bg-[#FF9F0D]/10 text-[#FF9F0D]"}`}>
              <FaCheck className="text-[8px]" />
            </div>
            <span className={`text-sm font-medium ${featured ? "text-white/80" : "text-gray-600"}`}>{feature}</span>
          </div>
        ))}
      </div>

      <Link
        href="/signup"
        className={`w-full py-5 rounded-2xl font-medium text-center transition-all flex items-center justify-center gap-2 ${featured ? "bg-[#FF9F0D] text-white hover:bg-[#e68f0c]" : "bg-navy text-white hover:bg-[#2A2A2A]"}`}
      >
        {buttonText}
        <FaArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}

function FaqBox({ question, answer }) {
  return (
    <div className="group">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-[#FF9F0D] text-lg opacity-40 group-hover:opacity-100 transition-opacity">
          <FaQuestionCircle />
        </div>
        <h4 className="font-serif text-2xl text-white font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {question}
        </h4>
      </div>
      <p className="text-white/30 leading-relaxed font-light text-base group-hover:text-white/50 transition-colors">
        {answer}
      </p>
    </div>
  );
}
