import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Send, Megaphone, Code2, Mic } from "lucide-react";

const ServicesSlider = () => {
  const services = [
    {
      title: "A2P SMS Service",
      description: "Enterprise-grade Application-to-Person SMS with global carrier partnerships and premium routing for OTP delivery, transactional notifications, and real-time alerts.",
      icon: Send,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Bulk SMS Marketing",
      description: "Scale your marketing campaigns with mass messaging, marketing automation, and customer engagement tools for enterprise bulk SMS.",
      icon: Megaphone,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "SMS API Integration",
      description: "Developer-friendly APIs with system integration capabilities, real-time message tracking, and automated communication workflows.",
      icon: Code2,
      gradient: "from-pink-500/20 to-orange-500/20"
    },
    {
      title: "Voice SMS",
      description: "Audio message delivery with voice-based notifications, multi-language support, and interactive voice response integration.",
      icon: Mic,
      gradient: "from-orange-500/20 to-blue-500/20"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index}>
                <div className="glass-strong rounded-3xl p-12 hover-lift min-h-[400px] flex flex-col">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-lg`}>
                    <service.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
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

export default ServicesSlider;
