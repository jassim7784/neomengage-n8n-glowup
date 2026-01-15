import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const testimonials = [
    { headline: "Neom Engage transformed the way we communicate with our customers.", quote: "After adopting Neom Engage's solutions, our customer engagement has grown dramatically, and the ROI speaks for itself. The platform is intuitive, insightful, and incredibly effective. We couldn't be happier with the outcome.", name: "Dimitra Moklodov", role: "Marketing Manager" },
    { headline: "A seamless transition with remarkable results.", quote: "I was initially unsure about moving to a new communication platform, but Neom Engage made the entire process effortless. Their support team was exceptional—always responsive and ready to guide us. Today, we're seeing stronger customer satisfaction and greater operational efficiency.", name: "Shankar Das Menon", role: "Senior Manager" },
    { headline: "Outstanding support and reliable service.", quote: "The team at Neom Engage goes above and beyond. Their communication solutions have streamlined our operations and improved our customer relationships significantly.", name: "Alex Johnson", role: "Operations Director" },
    { headline: "Game-changing communication platform.", quote: "We've seen a 40% improvement in customer response rates since implementing Neom Engage's solutions. The analytics and insights have been invaluable for our marketing strategies.", name: "Sarah Chen", role: "CMO" }
  ];

  // Triple for smoother loop
  const triplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section ref={ref} className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
        </div>
      </div>

      {/* Rectangular Card Marquee Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className={`bg-gradient-to-r from-primary/5 via-background to-purple-500/5 border border-primary/20 rounded-2xl p-6 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex animate-marquee-slow gap-6 hover:pause-animation">
            {triplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 glass rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                {/* Header: Avatar + Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                {/* Quote */}
                <p className="font-bold text-sm mb-3 line-clamp-2 min-h-[40px]">
                  "{testimonial.headline}"
                </p>
                {/* Name & Role */}
                <div className="text-xs">
                  <span className="text-primary font-medium">{testimonial.name}</span>
                  <span className="text-muted-foreground"> - {testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
