import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ShoppingCart, DollarSign, Heart, Globe } from "lucide-react";

const IndustriesSlider = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Enhance customer engagement with personalized SMS campaigns, order updates, and promotional offers that drive sales and build loyalty."
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Secure OTP authentication, transaction alerts, and account notifications to ensure customer trust and regulatory compliance."
    },
    {
      icon: Heart,
      title: "Health Care",
      description: "Appointment reminders, health tips, and emergency alerts to improve patient care and reduce no-shows."
    },
    {
      icon: Globe,
      title: "E-Commerce",
      description: "Order confirmations, shipping updates, and cart abandonment reminders to boost conversions and customer satisfaction."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Industries Served</h2>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto"
          plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}
        >
          <CarouselContent>
            {industries.map((industry, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="glass-strong p-8 rounded-3xl h-full hover-lift">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{industry.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default IndustriesSlider;
