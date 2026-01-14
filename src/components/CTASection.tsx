import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

const CTASection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Communicate Smarter.";
  
  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-background via-background/95 to-muted/50"
    >
      {/* Floating Particles */}
      <FloatingParticles count={25} />
      
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg opacity-50" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Radial gradient spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-60" />
      
      {/* Animated orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-orb" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-orb" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float-orb" style={{ animationDelay: '-10s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
          {/* Animated badge */}
          <div className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium uppercase tracking-wider transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <span className="w-2 h-2 bg-primary rounded-full animate-dot-pulse" />
            <span>Connecting the Dots</span>
          </div>

          {/* Main headline with typewriter effect */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              {displayText}
              {displayText.length < fullText.length && <span className="animate-blink text-primary">|</span>}
            </span>
            <br />
            <span className="bg-gradient-to-br from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
              Engage Deeper.
            </span>
          </h1>

          {/* Subtitle with fade in */}
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Turn every interaction into impact. Neom Engage equips your business with intelligent communication tools that deliver the right message, to the right audience, at the right moment—driving stronger relationships and unstoppable growth.
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="text-lg px-10 py-7 rounded-full group relative overflow-hidden bg-primary hover:bg-primary/90 shadow-lg hover:shadow-neon transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className={`pt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
              <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 animate-scroll-indicator" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default CTASection;
