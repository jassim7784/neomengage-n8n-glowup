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

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
        </div>

        {/* Marquee Testimonials */}
        <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex animate-marquee-slow gap-8 hover:pause-animation">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-premium p-8 rounded-2xl border border-primary/10 min-w-[400px] md:min-w-[500px] flex-shrink-0 group transition-all duration-500 hover:border-primary/30"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Quote className="w-10 h-10 text-primary/50 group-hover:text-primary transition-colors" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground font-semibold text-xl mb-4 group-hover:text-primary transition-colors">"{testimonial.headline}"</p>
                <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-primary/10 pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-primary">{testimonial.role}</p>
                  </div>
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