import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialSection() {
  // Testimonial data for better maintainability
  const testimonials = [
    {
      name: "Sarah Miller",
      role: "Dog Owner",
      quote:
        "UrbanFur made grooming stress-free. The groomer was professional and gentle with my anxious golden retriever.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108777-2869c5b9b9b9?w=100&h=100&auto=format&fit=crop",
    },
    {
      name: "James Rodriguez",
      role: "Cat Owner",
      quote:
        "Finally a grooming service my cat doesn't hate. They came prepared and handled everything with patience.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop",
    },
    {
      name: "Lisa Wang",
      role: "Pet Groomer",
      quote:
        "Working with UrbanFur has been amazing. They truly care about both pets and groomers.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&fit=crop",
    },
    {
      name: "Daniel Lee",
      role: "Dog Owner",
      quote:
        "The convenience is unmatched. Booked in minutes, and they showed up right on time.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#1A1A1A] mb-4 tracking-tight">
            What Pet Parents Say
          </h2>
          <p className="text-gray-400 text-base font-light leading-relaxed">
            Thousands of happy pets and their owners trust UrbanFur
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-gray-200/50">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-serif text-[#1A1A1A]">10k+</div>
            <div className="text-xs text-gray-400 font-light tracking-wide">
              Happy Pets
            </div>
          </div>
          <div className="w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-3">
            <div className="text-2xl font-serif text-[#1A1A1A]">4.9</div>
            <div className="text-xs text-gray-400 font-light tracking-wide">
              Average Rating
            </div>
          </div>
          <div className="w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-3">
            <div className="text-2xl font-serif text-[#1A1A1A]">500+</div>
            <div className="text-xs text-gray-400 font-light tracking-wide">
              Certified Groomers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
