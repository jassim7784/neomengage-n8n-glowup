import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Since implementing Venera Connect's solutions, we've seen a significant increase in customer engagement and a measurable return on our investment. The platform is easy to use and provides valuable insights into our customer interactions. We are thrilled with the results.",
      name: "Kritika Ahlawat",
      role: "Marketing Manager"
    },
    {
      quote: "I was initially hesitant to switch to a new communication platform, but the Venera Connect team made the transition seamless. Their customer support was outstanding, and they were always available to answer our questions and provide guidance. We are now experiencing improved customer satisfaction and increased efficiency.",
      name: "Trisha Arora",
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
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-6">
                <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
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
