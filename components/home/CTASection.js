import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";
export default function CTACard() {
  return (
    <section className="py-16 md:py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Main Card - Compact & Professional */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Column - Image (using your described image) */}
            <div className="relative h-[300px] md:h-full min-h-80 bg-gray-50">
              <Image
                src="/cta.png"
                alt="Happy dog and cat together"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle gradient overlay for text if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>

            {/* Right Column - Content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#FF9F0D]/10 px-3 py-1 rounded-full w-fit mb-4">
                <FaStar className="w-3 h-3 text-[#FF9F0D]" />
                <span className="text-[10px] font-medium text-[#FF9F0D] uppercase tracking-wider">
                  Limited Time
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-3 tracking-tight">
                Ready to Pamper Your Pet?
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 max-w-xs">
                Join thousands of pet parents who trust UrbanFur for stress-free
                grooming at home.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/signup"
                  className="group bg-[#1A1A1A] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#2A2A2A] transition-all inline-flex items-center justify-center gap-2 w-fit"
                >
                  Book your first grooming
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/how-it-works"
                  className="group text-gray-400 hover:text-[#1A1A1A] px-6 py-3 rounded-lg text-sm font-light transition-colors inline-flex items-center justify-center"
                >
                  Learn more
                </Link>
              </div>

              {/* Trust Indicator */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3 h-3 text-[#FF9F0D]" />
                  ))}
                </div>
                <span className="text-[10px] text-gray-400 font-light">
                  Rated 4.9 by 2,300+ pet parents
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
