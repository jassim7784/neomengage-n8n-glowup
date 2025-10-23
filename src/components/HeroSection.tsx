import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/0a68ecfa-c129-42a6-a0ac-fcad7fa2a1ed.png" 
              alt="NeoMengage Logo" 
              className="w-16 h-16"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-foreground">
            Enhance Business Communication With Innovation
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Comprehensive communication platform offering end-to-end messaging solutions 
            from bulk SMS to web development services, emphasizing reliability, security, and scalability.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">100M+</div>
              <div className="text-muted-foreground">Messages/Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">Global</div>
              <div className="text-muted-foreground">Coverage</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 hover-lift pulse-neon">
              <Zap className="w-6 h-6" />
              Start Free Trial
              <ArrowRight className="w-6 h-6" />
            </Button>
            <Button variant="glass" size="lg" className="text-xl px-12 py-6 hover-lift">
              <Play className="w-6 h-6" />
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-8 rounded-3xl hover-lift group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">Deploy campaigns in seconds with our advanced automation engine</p>
            </div>
            
            <div className="glass p-8 rounded-3xl hover-lift group">
              <div className="w-16 h-16 bg-gradient-neon rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-level encryption with SOC 2 compliance and GDPR ready</p>
            </div>
            
            <div className="glass p-8 rounded-3xl hover-lift group">
              <div className="w-16 h-16 bg-gradient-cyber rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Global Reach</h3>
              <p className="text-muted-foreground">Connect with customers worldwide through our premium carrier network</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </section>
  );
};

export default HeroSection;