import StepCard from "../ui/StepCard";
import { User, Settings, Zap } from "lucide-react";

export default function AboutSection() {
  const steps = [
    {
      number: "1",
      title: "Register",
      desc: "It more shed went up is roof if loud case. Delay music in lived noise an.",
      icon: <User className="w-8 h-8 text-[#187965]" strokeWidth={2.5} />,
      isActive: true,
      lineType: "down",
    },
    {
      number: "2",
      title: "Complete Setup",
      desc: "Beyond genius really enough passed is up. Up maids me an ample stood given.",
      icon: <Settings className="w-8 h-8 text-[#187965]" strokeWidth={2.5} />,
      isActive: false,
      lineType: "up",
    },
    {
      number: "3",
      title: "Utilize App",
      desc: "Certainly say suffering his him collected intention promotion. Hill sold ham men.",
      icon: (
        <Zap
          className="w-8 h-8 text-[#187965]"
          fill="currentColor"
          stroke="none"
        />
      ),
      isActive: false,
      lineType: null,
    },
  ];

  return (
    <section className="py-32 bg-[#F9F9F9] font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Custom Abstract Top Icon */}
        <div className="flex justify-center mb-8">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-300"
          >
            <path
              d="M24 12L26 15L28 12M20 18L22 21L24 18M30 19L32 22L34 19M16 24L18 27L20 24M25 28L27 31L29 28M12 16L14 19L16 16M36 14L38 17L40 14M32 28L34 31L36 28M18 32L20 35L22 32M28 36L30 39L32 36"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Section Header - Updated to match premium typography */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#1A1A1A] mb-6 tracking-tight">
            Learn More About Process
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Was are delightful solicitude discovered collecting man day.
            Resolving neglected sir tolerably.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
