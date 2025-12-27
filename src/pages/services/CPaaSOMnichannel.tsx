import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Phone, Mail, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";

const CPaaSOMnichannel = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);

  const channels = [
    { icon: MessageSquare, name: "SMS", description: "Text messaging", gradient: "from-blue-500 to-cyan-500" },
    { icon: Phone, name: "Voice", description: "Voice calls & IVR", gradient: "from-purple-500 to-pink-500" },
    { icon: Mail, name: "Email", description: "Email campaigns", gradient: "from-orange-500 to-red-500" },
    { icon: MessageCircle, name: "Chat", description: "Live chat support", gradient: "from-green-500 to-emerald-500" }
  ];

  const features = ["Unified communication platform", "Multi-channel customer journeys", "Real-time interaction analytics", "Automated workflow triggers", "Seamless channel switching", "Advanced personalization"];

  return (
    <PageLayout>
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-orb" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />Unified Platform
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">CPaaS / Omnichannel</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Integrate voice, SMS, email, chat, and social media into a unified engagement platform. Create seamless customer experiences.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 rounded-full hover:shadow-neon transition-all group"><MessageCircle className="w-5 h-5 mr-2" />Explore Platform<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
              <Button variant="outline" size="lg" className="px-8 py-6 rounded-full">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">Communication Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <TiltCard key={index}>
                <div className="text-center glass-premium p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all group h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${channel.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{channel.name}</h3>
                  <p className="text-muted-foreground">{channel.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">Platform Features</h2>
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

      <section ref={statsRef} className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: MessageCircle, value: "360°", label: "Customer View" }, { icon: Phone, value: "50+", label: "Countries Supported" }, { icon: Mail, value: "99.9%", label: "Platform Reliability" }].map((stat, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Customer Engagement</h2>
            <p className="text-xl text-muted-foreground mb-8">Unify all your communication channels and create exceptional customer experiences.</p>
            <Button size="lg" className="px-10 py-6 rounded-full hover:shadow-neon transition-all">Start Free Trial</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CPaaSOMnichannel;
