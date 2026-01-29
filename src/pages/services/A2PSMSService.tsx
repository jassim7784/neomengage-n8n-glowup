import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageSquare, BarChart, Shield, Sparkles, ArrowRight, Zap, Globe, Building2, Heart, ShoppingCart, Store } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const A2PSMSService = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);
  const { count: messagesCount, startAnimation: startMessages } = useCountUp(1, 1500);
  const { count: clientsCount, startAnimation: startClients } = useCountUp(100, 1500);
  const { count: reachCount, startAnimation: startReach } = useCountUp(200, 1500);

  useEffect(() => {
    if (statsVisible) {
      startMessages();
      startClients();
      startReach();
    }
  }, [statsVisible]);

  const whyChooseUs = [
    {
      icon: Zap,
      title: "High Delivery Rates",
      description: "Our advanced infrastructure ensures your messages are delivered swiftly and reliably, maximizing your reach.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart,
      title: "Scalable Solutions",
      description: "Whether you're a small business or a large enterprise, our A2P SMS service scales to meet your needs.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with customers worldwide with our extensive network and international SMS capabilities.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Gain insights into your campaigns with detailed delivery reports and analytics.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: "Banking and Finance",
      description: "Ensure secure and timely communication with transactional alerts, OTPs, and account notifications.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Remind patients about appointments, send health tips, and manage follow-ups efficiently.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Send order confirmations, shipping updates, and promotional offers directly to your customers' phones.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Store,
      title: "Retail",
      description: "Drive sales with promotional messages, loyalty program updates, and personalized offers.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-orb" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Enterprise Solution
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                A2P SMS Service
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Leverage the power of A2P SMS to engage your customers, enhance your brand presence, and drive business growth. Our reliable and scalable A2P SMS service ensures your messages are delivered promptly and effectively.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="px-8 py-6 rounded-full hover:shadow-neon transition-all group" onClick={() => navigate('/contact')}>
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 text-lg">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-glow">
              Why Choose Our A2P SMS Service?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <TiltCard key={index}>
                <GlowingCard>
                  <Card className="h-full glass-premium border-primary/10 hover:border-primary/30 transition-all group">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-center">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 text-lg">Industries We Serve</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-glow">
              Trusted Across Industries
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <TiltCard key={index}>
                <GlowingCard>
                  <Card className="h-full glass-premium border-primary/10 hover:border-primary/30 transition-all group">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <industry.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{industry.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-center">{industry.description}</CardDescription>
                    </CardContent>
                  </Card>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, value: `${messagesCount}M+`, label: "Messages Sent" },
              { icon: Building2, value: `${clientsCount}+`, label: "Clients Served" },
              { icon: Globe, value: `${reachCount}+`, label: "Global Reach" },
              { icon: Shield, value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <TiltCard key={index}>
                <div className={`text-center glass-premium p-10 rounded-2xl border border-primary/10 transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-premium rounded-3xl p-12 max-w-3xl mx-auto border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses using our A2P SMS service to engage customers effectively.
            </p>
            <Button size="lg" className="px-10 py-6 rounded-full hover:shadow-neon transition-all" onClick={() => navigate('/contact')}>
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default A2PSMSService;
