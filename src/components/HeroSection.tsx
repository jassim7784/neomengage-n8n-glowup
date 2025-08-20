import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Customer
            <span className="gradient-text"> Engagement</span>
            <br />
            Like Never Before
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Build powerful, automated customer journeys with our intuitive workflow platform. 
            Connect every touchpoint and create personalized experiences that drive growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="glass p-4 rounded-2xl shadow-glass">
              <img
                src={heroDashboard}
                alt="NeoMengage Dashboard Interface"
                className="w-full rounded-xl shadow-primary"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-primary rounded-full animate-pulse opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;