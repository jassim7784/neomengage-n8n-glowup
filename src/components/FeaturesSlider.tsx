import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Clock, BarChart3, Shield, Zap } from "lucide-react";

const FeaturesSlider = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any issues or queries you may have."
    },
    {
      icon: BarChart3,
      title: "Real-Time Reporting",
      description: "Track your campaigns with comprehensive analytics and real-time delivery reports to optimize your messaging strategy."
    },
    {
      icon: Shield,
      title: "Secure Connections",
      description: "Advanced encryption and authentication protocols ensure the safety and privacy of your messages and data."
    },
    {
      icon: Zap,
      title: "High Throughput",
      description: "Carrier-grade infrastructure with dedicated connections delivers messages at lightning speed with maximum reliability."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Features</h2>
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
            {features.map((feature, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="glass-strong p-8 rounded-3xl h-full hover-lift">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
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

export default FeaturesSlider;
