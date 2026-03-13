import Link from "next/link";
import {
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen max-h-270 w-full overflow-hidden">
      {/* Background Image with Dark, Sophisticated Overlay */}
      <div className="absolute inset-0 w-full h-[110%] -top-[5%]">
        <img
          src="./herosection.png"
          alt="Professional pet grooming"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Premium multi-layer gradient for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1920px] mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="max-w-2xl lg:max-w-3xl">
              {/* Eyebrow with rating - Now fully visible */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 fill-[#FF9F0D] text-[#FF9F0D]"
                    />
                  ))}
                </div>
                <span className="text-white/95 text-sm font-light tracking-wide">
                  4.9 · 2,300+ reviews
                </span>
              </div>

              {/* Main Headline - Crystal clear with proper contrast */}
              <h1 className="font-serif text-7xl sm:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight mb-6">
                <span className="text-white">Grooming</span>
                <span className="block text-[#FF9F0D] mt-2 drop-shadow-lg">
                  redefined.
                </span>
              </h1>

              {/* Description - Perfectly readable */}
              <p className="text-white/90 text-xl sm:text-2xl font-light leading-relaxed max-w-xl mb-12 drop-shadow-md">
                Professional pet care that comes to you. No stress, no travel
                just happy pets.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="/booking"
                  className="group bg-[#FF9F0D] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e68f0c] transition-all inline-flex items-center justify-center gap-2 min-w-[200px] shadow-lg shadow-[#FF9F0D]/20"
                >
                  Book a groomer
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/signup"
                  className="text-white/95 hover:text-white px-8 py-4 rounded-full text-lg font-light transition-colors inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                >
                  Become a groomer
                </Link>
              </div>

              {/* Feature List - Now with better contrast */}
              <div className="flex flex-wrap gap-8 mt-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
                    <FaCalendarCheck className="w-4 h-4 text-white/95" />
                  </div>
                  <span className="text-white/90 text-sm font-light tracking-wide">
                    Easy booking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
                    <FaMapMarkerAlt className="w-4 h-4 text-white/95" />
                  </div>
                  <span className="text-white/90 text-sm font-light tracking-wide">
                    At your home
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
                    <FaShieldAlt className="w-4 h-4 text-white/95" />
                  </div>
                  <span className="text-white/90 text-sm font-light tracking-wide">
                    Certified groomers
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Empty for balance */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Bottom Corner Stat - Premium dark background */}
      <div className="absolute bottom-12 right-12 lg:right-24 z-10">
        <div className="text-right bg-black/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
          <p className="text-white/60 text-xs font-light tracking-widest uppercase mb-1">
            Trusted by
          </p>
          <p className="text-white text-3xl font-light">
            10k<span className="text-white/40 mx-1">+</span>
          </p>
          <p className="text-white/60 text-sm font-light">happy pet parents</p>
        </div>
      </div>
    </section>
  );
}
