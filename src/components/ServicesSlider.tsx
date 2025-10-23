import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import serviceA2P from "@/assets/service-a2p-sms.jpg";
import serviceBulk from "@/assets/service-bulk-sms.jpg";
import serviceAPI from "@/assets/service-sms-api.jpg";
import serviceVoice from "@/assets/service-voice-sms.jpg";

const ServicesSlider = () => {
  const services = [
    {
      title: "A2P SMS Service",
      description: "Enterprise-grade Application-to-Person SMS with global carrier partnerships and premium routing for OTP delivery, transactional notifications, and real-time alerts.",
      image: serviceA2P
    },
    {
      title: "Bulk SMS Marketing",
      description: "Scale your marketing campaigns with mass messaging, marketing automation, and customer engagement tools for enterprise bulk SMS.",
      image: serviceBulk
    },
    {
      title: "SMS API Integration",
      description: "Developer-friendly APIs with system integration capabilities, real-time message tracking, and automated communication workflows.",
      image: serviceAPI
    },
    {
      title: "Voice SMS",
      description: "Audio message delivery with voice-based notifications, multi-language support, and interactive voice response integration.",
      image: serviceVoice
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
                <div className="glass-strong rounded-3xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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
