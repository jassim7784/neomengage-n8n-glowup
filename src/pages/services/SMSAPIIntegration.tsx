import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code, Zap, Monitor, Sparkles, ArrowRight, Copy } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const SMSAPIIntegration = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const codeExample = `// Send SMS via API
fetch('https://api.neomengage.com/v1/sms/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+1234567890',
    message: 'Hello from NeoMengage!',
    from: 'YourBrand'
  })
})`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    toast({ title: "Copied!", description: "Code copied to clipboard" });
    setTimeout(() => setCopied(false), 2000);
  };

  const features = ["RESTful API architecture", "Real-time message tracking", "Webhook support for callbacks", "Multiple programming language SDKs", "Rate limiting and throttling", "Comprehensive API documentation"];

  return (
    <PageLayout>
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-orb" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />Developer Tools
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">SMS API Integration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Enable seamless send/receive SMS functionality, automation, and real-time message tracking via our powerful API.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 rounded-full hover:shadow-neon transition-all group"><Code className="w-5 h-5 mr-2" />View API Docs<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
              <Button variant="outline" size="lg" className="px-8 py-6 rounded-full">Get API Key</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">API Integration Features</h2>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <GlowingCard key={index}>
                  <div className="flex items-center space-x-4 glass-premium p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-primary transition-colors">{feature}</span>
                  </div>
                </GlowingCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">Quick Integration</h2>
            <div className="glass-premium p-8 rounded-2xl border border-primary/20 relative group">
              <button onClick={handleCopy} className="absolute top-4 right-4 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Copy className={`w-5 h-5 ${copied ? 'text-green-400' : 'text-primary'}`} />
              </button>
              <pre className="text-sm overflow-x-auto"><code className="text-primary/90">{codeExample}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: Zap, value: "<100ms", label: "API Response Time" }, { icon: Monitor, value: "99.99%", label: "API Uptime" }, { icon: Code, value: "10+", label: "Programming Languages" }].map((stat, index) => (
              <TiltCard key={index}>
                <div className={`text-center glass-premium p-10 rounded-2xl border border-primary/10 transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"><stat.icon className="w-8 h-8 text-white" /></div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-premium rounded-3xl p-12 max-w-3xl mx-auto border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Building Today</h2>
            <p className="text-xl text-muted-foreground mb-8">Integrate SMS functionality into your applications with our developer-friendly API.</p>
            <Button size="lg" className="px-10 py-6 rounded-full hover:shadow-neon transition-all">Get Started with API</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SMSAPIIntegration;
