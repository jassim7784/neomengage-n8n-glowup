import { Quote, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const testimonials = [
    { headline: "Neom Engage transformed the way we communicate with our customers.", quote: "After adopting Neom Engage's solutions, our customer engagement has grown dramatically, and the ROI speaks for itself. The platform is intuitive, insightful, and incredibly effective. We couldn't be happier with the outcome.", name: "Dimitra Moklodov", role: "Marketing Manager" },
    { headline: "A seamless transition with remarkable results.", quote: "I was initially unsure about moving to a new communication platform, but Neom Engage made the entire process effortless. Their support team was exceptional—always responsive and ready to guide us. Today, we're seeing stronger customer satisfaction and greater operational efficiency.", name: "Shankar Das Menon", role: "Senior Manager" },
    { headline: "Outstanding support and reliable service.", quote: "The team at Neom Engage goes above and beyond. Their communication solutions have streamlined our operations and improved our customer relationships significantly.", name: "Alex Johnson", role: "Operations Director" },
    { headline: "Game-changing communication platform.", quote: "We've seen a 40% improvement in customer response rates since implementing Neom Engage's solutions. The analytics and insights have been invaluable for our marketing strategies.", name: "Sarah Chen", role: "CMO" }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

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

      {/* Tabloid Style Marquee Ticker */}
      <div className={`bg-gradient-to-r from-primary/5 via-background to-purple-500/5 border-y border-primary/20 py-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-marquee-slow gap-0 hover:pause-animation items-center">
          {triplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 whitespace-nowrap px-6 group"
            >
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                {testimonial.name.charAt(0)}
              </div>
              {/* Quote headline */}
              <span className="font-bold text-sm md:text-base group-hover:text-primary transition-colors">
                "{testimonial.headline}"
              </span>
              {/* Name */}
              <span className="text-primary text-sm font-medium">— {testimonial.name}</span>
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              {/* Separator */}
              <span className="text-primary/50 mx-4 text-xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;