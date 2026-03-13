import { FaStar, FaAward, FaCheckCircle, FaSearch, FaArrowRight, FaShieldAlt, FaBriefcase } from "react-icons/fa";
import Link from "next/link";
import GoldenDivider from "@/components/ui/GoldenDivider";
import CTASection from "@/components/home/CTASection";
import GroomersList from "@/components/groomers/GroomersList";

export const metadata = {
  title: "Master Groomers - UrbanFur",
  description: "Find certified pet grooming experts in your area",
};

export default function GroomersPage() {
    return (
        <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
            {/* Premium Hero Section */}
            <section className="relative min-h-[70vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#0A0A0A]">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=2070&auto=format&fit=crop"
                        alt="Aesthetic Grooming"
                        className="w-full h-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-px w-8 bg-[#FF9F0D]"></span>
                            <span className="text-[#FF9F0D] text-sm font-medium tracking-widest uppercase">
                                Our Professionals
                            </span>
                        </div>

                        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-medium leading-[0.9] tracking-tight mb-8">
                            Master <span className="text-[#FF9F0D]">Groomers.</span>
                        </h1>

                        <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-lg mb-12">
                            Meet the vetted experts who bring elite salon standards
                            directly to your pet's familiar environment.
                        </p>

                        <div className="flex gap-12 pt-8 border-t border-navy/5">
                            <GroomerHeaderStat count="50+" label="Certified Experts" dark={true} />
                            <GroomerHeaderStat count="4.9" label="Avg. Rating" dark={true} />
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF9F0D] to-[#e68f0c] rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-[#1A1A1A] p-10 md:p-12 rounded-[2.5rem] border border-white/5">
                            <h3 className="font-serif text-2xl font-medium text-white mb-8">Locate a Groomer</h3>
                            <div className="relative mb-6">
                                <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" />
                                <input
                                    type="text"
                                    placeholder="Enter your location..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-[#FF9F0D]/50 transition-all font-light"
                                />
                            </div>
                            <button className="w-full bg-[#FF9F0D] text-white py-6 rounded-2xl font-medium text-lg shadow-xl shadow-[#FF9F0D]/10 hover:bg-[#e68f0c] transition-all flex items-center justify-center gap-2">
                                Browse nearby
                                <FaArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <GoldenDivider variant="gradient" className="max-w-6xl mx-auto opacity-30 my-20" />

            {/* Featured Groomers Section */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="h-px w-8 bg-[#FF9F0D]"></span>
                        <span className="text-[#FF9F0D] text-sm font-medium tracking-widest uppercase">
                            Our Experts
                        </span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] font-medium leading-tight mb-20">
                        Meet Our <span className="text-[#FF9F0D]">Expert Groomers</span>
                    </h2>

                    <GroomersList />
                </div>
            </section>

            {/* Trust & Certification Section */}
            <section className="py-32 bg-[#F9F9F9] overflow-hidden">
                <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-px w-8 bg-[#FF9F0D]"></span>
                            <span className="text-[#FF9F0D] text-sm font-medium tracking-widest uppercase">
                                Unmatched Standards
                            </span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] font-medium leading-tight mb-8">
                            Vetted for Your <span className="text-[#FF9F0D]">Peace of Mind.</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-light mb-12 leading-relaxed">
                            Beyond technical skill, every UrbanFur professional is chosen
                            for their temperament and commitment to pet welfare.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <TrustPoint icon={<FaShieldAlt />} text="Full Background Checks" />
                            <TrustPoint icon={<FaAward />} text="Professional Certification" />
                            <TrustPoint icon={<FaCheckCircle />} text="In-Person Assessments" />
                            <TrustPoint icon={<FaBriefcase />} text="Comprehensive Insurance" />
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:max-w-md">
                        <div className="relative">
                            <div className="absolute -inset-10 bg-[#FF9F0D]/5 rounded-full blur-3xl"></div>
                            <div className="relative bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-50">
                                <div className="text-center mb-10">
                                    <div className="w-16 h-16 bg-[#FF9F0D]/10 rounded-2xl flex items-center justify-center text-[#FF9F0D] text-3xl mx-auto mb-6">
                                        <FaStar />
                                    </div>
                                    <h4 className="font-serif text-2xl text-[#1A1A1A] font-medium mb-4">Top Rated Status</h4>
                                    <p className="text-gray-400 font-light text-sm">Our platform only retains professionals who maintain a 4.8+ client satisfaction rating.</p>
                                </div>
                                <div className="space-y-4 pt-8 border-t border-gray-100">
                                    <div className="flex justify-between items-center bg-[#F9F9F9] p-4 rounded-xl">
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Security Ranking</span>
                                        <span className="text-sm font-bold text-[#1A1A1A]">Level 1 (Highest)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <>
                <GoldenDivider className="opacity-20" />

                <CTASection />

                <GoldenDivider className="opacity-20 pb-20" />
            </>
        </div>
    );
}

function GroomerHeaderStat({ count, label, dark = false }) {
    return (
        <div>
            <div className="font-serif text-4xl font-medium text-[#FF9F0D] mb-1">{count}</div>
            <div className={`text-[10px] font-bold uppercase tracking-[0.2em] ${dark ? "text-navy/40" : "text-white/40"}`}>{label}</div>
        </div>
    )
}

function PremiumGroomerCard({ name, specialty, rating, reviews, experience, img }) {
    return (
        <div className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
                <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full font-serif text-[#1A1A1A] text-sm flex items-center gap-2 shadow-lg">
                    <FaStar className="text-[#FF9F0D]" /> {rating}
                </div>
            </div>

            <div className="p-10">
                <div className="mb-6">
                    <span className="text-[10px] text-[#FF9F0D] font-bold uppercase tracking-widest">{specialty}</span>
                    <h3 className="font-serif text-3xl text-[#1A1A1A] font-medium mt-2">{name}</h3>
                </div>

                <div className="flex justify-between border-y border-gray-50 py-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <div className="flex flex-col gap-1">
                        <span>Experience</span>
                        <span className="text-[#1A1A1A]">{experience}</span>
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                        <span>Reviews</span>
                        <span className="text-[#1A1A1A]">{reviews}</span>
                    </div>
                </div>

                <button className="w-full bg-navy text-white py-4 rounded-xl font-medium hover:bg-[#2A2A2A] transition-all flex items-center justify-center gap-2">
                    View Portfolio
                    <FaArrowRight className="w-3 h-3" />
                </button>
            </div>
        </div>
    )
}

function TrustPoint({ icon, text }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-[#FF9F0D] group-hover:bg-[#FF9F0D] group-hover:text-white transition-all">
                {icon}
            </div>
            <span className="text-sm font-bold text-[#1A1A1A] tracking-tight">{text}</span>
        </div>
    )
}
