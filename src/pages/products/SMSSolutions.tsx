import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Shield, Sparkles, Megaphone, Target, Info, Users, Send, Heart, ArrowRight, Gamepad2, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";

const SMSSolutions = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    { icon: Bell, title: "Transactional Alerts", description: "Neom Engage provides APIs and on-premise SMS solutions that allow enterprises to send alerts, such as account balance or transaction notifications, to their customers.", gradient: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "User Verification (OTP)", description: "Secure user authentication with one-time passwords sent via SMS for seamless verification.", gradient: "from-purple-500 to-pink-500" },
    { icon: Gamepad2, title: "Engagement", description: "Engage your customers with SMS-based quizzes, contests, and gamification to make their experience interactive and fun.", gradient: "from-green-500 to-emerald-500" },
    { icon: Megaphone, title: "Promotional SMS", description: "Craft SMS campaigns tailored to individual user behavior by utilizing our powerful tools and solutions.", gradient: "from-orange-500 to-red-500" },
    { icon: Target, title: "Segment/Retarget", description: "Robust SMS analytics engine that enables businesses to segment their customer base and send targeted SMS broadcasts for better retargeting.", gradient: "from-indigo-500 to-blue-500" },
    { icon: Info, title: "Information on Demand", description: "Obtain information instantly by sending a simple SMS to a dedicated number for a wide range of services.", gradient: "from-teal-500 to-cyan-500" },
    { icon: Users, title: "Internal Team Communication", description: "Effectively communicate with your internal teams by utilizing SMS to send out service alerts.", gradient: "from-rose-500 to-pink-500" },
    { icon: Send, title: "Bulk SMS", description: "Send mass SMS messages to a large number of recipients simultaneously. Ideal for marketing campaigns, alerts, and notifications.", gradient: "from-amber-500 to-orange-500" },
    { icon: Gift, title: "Loyalty Programs", description: "Implement multi-level loyalty programs that extend beyond SMS and utilize multiple channels.", gradient: "from-violet-500 to-purple-500" }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-orb" style={{ animationDelay: '-5s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Complete SMS Suite
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              We Drive Business Results With{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                SMS Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empower your business with enterprise-grade SMS solutions that deliver results. From transactional alerts to promotional campaigns, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 text-lg">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We Take Care Of
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <TiltCard key={index}>
                <GlowingCard>
                  <Card className="h-full glass-premium border-primary/10 hover:border-primary/30 transition-all group">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                      <Button onClick={() => navigate('/contact')} variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-premium rounded-3xl p-12 text-center max-w-4xl mx-auto border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 aurora-bg opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Communication?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get in touch with our team to discuss how our SMS solutions can help you achieve your business goals.
              </p>
              <Button size="lg" onClick={() => navigate('/contact')} className="px-10 py-6 rounded-full hover:shadow-neon transition-all">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SMSSolutions;
