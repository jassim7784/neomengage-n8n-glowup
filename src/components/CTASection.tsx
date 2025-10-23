import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-background via-background/95 to-muted/50">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Radial gradient spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Trusted by 1000+ businesses worldwide
          </div>

          {/* Main headline - Apple style */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fade-in">
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Communication.
            </span>
            <br />
            <span className="bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Simplified.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in font-light">
            Enterprise-grade messaging solutions that scale with your business. 
            From SMS to omnichannel communication—all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-scale-in">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-6 rounded-full group"
              variant="default"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-2"
            >
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 animate-fade-in">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">5B+</div>
              <div className="text-sm text-muted-foreground mt-1">Messages/Year</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">180+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
