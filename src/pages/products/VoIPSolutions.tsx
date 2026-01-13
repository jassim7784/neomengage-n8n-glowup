import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, TrendingUp, DollarSign, Settings, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";

const VoIPSolutions = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const whyChooseUs = [
    { icon: Phone, title: "Exceptional Call Quality", description: "Experience HD voice clarity with minimal latency, ensuring every conversation is professional and uninterrupted.", gradient: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, title: "Seamless Scalability", description: "Grow your communication infrastructure effortlessly—add lines, users, and features as your business expands without costly hardware upgrades.", gradient: "from-purple-500 to-pink-500" },
    { icon: DollarSign, title: "Cost Savings", description: "Reduce communication expenses by up to 60% compared to traditional phone systems while gaining enterprise-grade features.", gradient: "from-green-500 to-emerald-500" },
    { icon: Settings, title: "Advanced Features", description: "Unlock powerful capabilities including auto-attendant, call routing, conference calling, voicemail-to-email, CRM integration, and real-time call analytics.", gradient: "from-orange-500 to-red-500" }
  ];

  return (
    <PageLayout>
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-orb" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />Enterprise VoIP
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">VoIP Solutions for Enterprise</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform Your Business Communication with Enterprise VoIP. Revolutionize the way your organization connects. Our Enterprise VoIP Solutions deliver crystal-clear voice quality, seamless scalability, and powerful features that empower your teams to communicate efficiently—whether in the office, remote, or on the go.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 text-lg">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Enterprise-Grade VoIP Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <TiltCard key={index}>
                <GlowingCard>
                  <Card className="h-full glass-premium border-primary/10 hover:border-primary/30 transition-all group">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all`}>
                        <item.icon className="w-8 h-8 text-white" />
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

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-premium rounded-3xl p-12 text-center max-w-4xl mx-auto border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Communication?</h2>
            <p className="text-lg text-muted-foreground mb-8">Let Neom Engage help you leverage the power of enterprise VoIP solutions.</p>
            <Button size="lg" onClick={() => navigate('/contact')} className="px-10 py-6 rounded-full hover:shadow-neon transition-all">Contact Our Team</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VoIPSolutions;
