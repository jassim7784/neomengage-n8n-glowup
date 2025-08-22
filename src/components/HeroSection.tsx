import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 animated-gradient opacity-15"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/30 rounded-full floating-element"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-primary opacity-20 rounded-lg rotate-45 floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-cyan-400/40 rounded-full floating-element" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-neon opacity-15 rounded-full floating-element" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo and Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="glass-strong px-6 py-3 rounded-full inline-flex items-center gap-3">
              <img 
                src="/lovable-uploads/0a68ecfa-c129-42a6-a0ac-fcad7fa2a1ed.png" 
                alt="NeoMengage Logo" 
                className="w-8 h-8"
              />
              <span className="text-sm font-semibold gradient-text-neon">Next-Gen Communication Platform</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-glow">Revolutionize</span>
            <br />
            <span className="gradient-text">Customer Engagement</span>
            <br />
            <span className="text-cyan-400">Beyond Imagination</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Power your business with <span className="gradient-text-neon font-semibold">AI-driven SMS solutions</span>, 
            omnichannel communication, and enterprise-grade infrastructure that scales infinitely.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="glass-strong p-6 rounded-2xl hover-glow">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="glass-strong p-6 rounded-2xl hover-glow">
              <div className="text-3xl font-bold gradient-text mb-2">100M+</div>
              <div className="text-sm text-muted-foreground">Messages/Month</div>
            </div>
            <div className="glass-strong p-6 rounded-2xl hover-glow">
              <div className="text-3xl font-bold gradient-text mb-2">Global</div>
              <div className="text-sm text-muted-foreground">Coverage</div>
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
              <h3 className="text-2xl font-bold mb-4 gradient-text">Lightning Fast</h3>
              <p className="text-muted-foreground">Deploy campaigns in seconds with our advanced automation engine</p>
            </div>
            
            <div className="glass p-8 rounded-3xl hover-lift group">
              <div className="w-16 h-16 bg-gradient-neon rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-level encryption with SOC 2 compliance and GDPR ready</p>
            </div>
            
            <div className="glass p-8 rounded-3xl hover-lift group">
              <div className="w-16 h-16 bg-gradient-cyber rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Global Reach</h3>
              <p className="text-muted-foreground">Connect with customers worldwide through our premium carrier network</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      
      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;