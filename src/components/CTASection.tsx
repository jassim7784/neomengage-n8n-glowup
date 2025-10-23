import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ctaHero from "@/assets/cta-hero.jpg";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ctaHero} 
          alt="Futuristic business communication"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-0 animated-gradient opacity-20" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow animate-fade-in">
            Empowering Your Business with Advanced Communication Solutions
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-10 animate-fade-in">
            Experience the future of business communication with our cutting-edge services. From bulk SMS to web development, we provide the tools you need to connect, engage, and grow.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/contact')}
            className="hover-lift text-lg px-10 py-6 animate-scale-in shadow-primary"
            variant="default"
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default CTASection;
