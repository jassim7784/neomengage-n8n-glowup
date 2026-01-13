import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Clock, Heart, Workflow, BarChart3, ShoppingCart, Headphones, Trophy, Megaphone, MessageSquare, Globe, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";

const WhatsAppSolutions = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const serviceCare = [
    {
      icon: MessageCircle,
      title: "Seamless WhatsApp Integration",
      description: "Effortless connection to the WhatsApp Business API.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Personalized Customer Journeys",
      description: "Craft unique and engaging customer experiences.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Provide instant support and address customer queries anytime.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Enhanced Customer Engagement",
      description: "Build stronger relationships through interactive conversations.",
      gradient: "from-rose-500 to-red-500"
    },
    {
      icon: Workflow,
      title: "Streamlined Business Operations",
      description: "Automate tasks and improve efficiency with WhatsApp workflows.",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Gain valuable insights into customer behavior and campaign effectiveness.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const servicesDo = [
    {
      icon: ShoppingCart,
      title: "Boost Sales with Conversational Commerce",
      description: "Drive sales and conversions through interactive product catalogs and personalized offers.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Headphones,
      title: "Enhance Customer Support",
      description: "Provide instant and efficient support, resolving queries quickly and improving customer satisfaction.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Trophy,
      title: "Build Brand Loyalty",
      description: "Foster stronger customer relationships through personalized interactions and proactive communication.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Megaphone,
      title: "Automate Marketing Campaigns",
      description: "Reach your target audience with targeted promotions and personalized messages at scale.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: MessageSquare,
      title: "Gather Valuable Feedback",
      description: "Collect customer feedback easily through interactive surveys and polls.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Expand Your Global Reach",
      description: "Connect with customers worldwide through WhatsApp's widespread accessibility.",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-float-orb" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              WhatsApp Business API
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              1.5 Billion reasons to get started on{" "}
              <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                WhatsApp API
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Neom Engage can help your business leverage the power of WhatsApp, with its 1.5 billion and growing user base globally. Use the platform for seamless conversations, transactions, and notifications to customers.
            </p>
          </div>
        </div>
      </section>

      {/* Services We Take Care Of Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 text-lg">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We Take Care Of
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCare.map((service, index) => (
              <TiltCard key={index}>
                <GlowingCard>
                  <Card className="h-full glass-premium border-primary/10 hover:border-primary/30 transition-all group">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <Button 
                        onClick={handleContactClick}
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
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

      {/* What Can You Do Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 text-lg">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Can You Do With WhatsApp?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesDo.map((service, index) => (
              <TiltCard key={index}>
                <GlowingCard>
                  <Card className="h-full glass-premium border-primary/10 hover:border-primary/30 transition-all group">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <Button 
                        onClick={handleContactClick}
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
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
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="glass-premium rounded-3xl p-12 text-center max-w-4xl mx-auto border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 aurora-bg opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your WhatsApp Communication?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get in touch with our team to discuss how our WhatsApp solutions can help you achieve your business goals.
              </p>
              <Button 
                size="lg" 
                onClick={handleContactClick}
                className="px-10 py-6 rounded-full hover:shadow-neon transition-all"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhatsAppSolutions;
