import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      headline: "Neom Engage transformed the way we communicate with our customers.",
      quote: "After adopting Neom Engage's solutions, our customer engagement has grown dramatically, and the ROI speaks for itself. The platform is intuitive, insightful, and incredibly effective. We couldn't be happier with the outcome.",
      name: "Dimitra Moklodov",
      role: "Marketing Manager"
    },
    {
      headline: "A seamless transition with remarkable results.",
      quote: "I was initially unsure about moving to a new communication platform, but Neom Engage made the entire process effortless. Their support team was exceptional—always responsive and ready to guide us. Today, we're seeing stronger customer satisfaction and greater operational efficiency.",
      name: "Shankar Das Menon",
      role: "Senior Manager"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass p-8 rounded-2xl border transition-smooth hover-lift">
              <Quote className="w-12 h-12 text-primary mb-6" />
              <p className="text-foreground font-semibold text-lg mb-4">"{testimonial.headline}"</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-6">
                <h4 className="font-bold text-foreground text-lg">— {testimonial.name}</h4>
                <p className="text-primary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
