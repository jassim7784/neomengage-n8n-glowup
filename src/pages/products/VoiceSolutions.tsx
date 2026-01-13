import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Vote, Headphones, Shield, Users, PhoneOff, Lock, MessageSquare, Volume2, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";

const VoiceSolutions = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    {
      icon: Phone,
      title: "Voice Broadcast (OBD)",
      description: "Eliminate language and literacy obstacles by providing tailored and localized content that speaks to your audience in a language they comprehend and connect with.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Vote,
      title: "Voting and Polling",
      description: "With the PCN or missed call-based feature, customers can participate and register their votes at no cost.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Headphones,
      title: "Hosted IVRs",
      description: "Experience the convenience of an interactive telephony system with our centralized IVR platform.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Call Masking",
      description: "Maintain the confidentiality and security of customer information while connecting calls between multiple parties.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Audio Conference Solution (ACS)",
      description: "Establish a multi-party conference without the need for prior reservations.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: PhoneOff,
      title: "Missed Call",
      description: "Attract budget-conscious customers with the widely used Missed Call feature, offering a Call-to-Action option.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Lock,
      title: "One Time Password (OTP)",
      description: "Mitigate the risk of online frauds by employing Voice OTP for instant one-time password authentication.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Feedback/Survey",
      description: "Improve your customer service experience by providing end-to-end support to your customers.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Volume2,
      title: "Text-To-Speech (TTS)",
      description: "Deliver your text messages with a personalized and engaging touch, using a human-like voice.",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

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
              Voice Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Give Voice to your{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Campaigns
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Neom Engage offers voice products and solutions that enables enterprises to leverage our enhanced voice communication capabilities for both their inbound and outbound customer interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 text-lg">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We Take Care Of
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <TiltCard key={index}>
                  <GlowingCard>
                    <Card className="h-full glass-premium border-primary/10 hover:border-primary/30 transition-all group">
                      <CardHeader>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
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
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                          variant="outline"
                        >
                          Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </GlowingCard>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-premium rounded-3xl p-12 text-center max-w-4xl mx-auto border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 aurora-bg opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Voice Communications?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let Neom Engage help you leverage the power of voice solutions to enhance customer engagement and drive business growth.
              </p>
              <Button 
                onClick={handleContactClick}
                size="lg"
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

export default VoiceSolutions;
