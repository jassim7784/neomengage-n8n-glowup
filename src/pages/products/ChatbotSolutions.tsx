import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Gift, Users, Heart, MapPin, FileText, MessageSquare, Store, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";

const ChatbotSolutions = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    { icon: Workflow, title: "Processes Automation", description: "Effortlessly handle user and system-initiated requests, offer personalized product recommendations, streamline order processing, and track orders.", gradient: "from-blue-500 to-cyan-500" },
    { icon: Gift, title: "Offers & Coupons", description: "Deliver tailored promotions to your customers by leveraging their buying behavior and loyalty status.", gradient: "from-purple-500 to-pink-500" },
    { icon: Users, title: "Referral Programs", description: "Encourage referrals and incentivize your customers by implementing our program that allows them to easily share referral links or codes.", gradient: "from-green-500 to-emerald-500" },
    { icon: Heart, title: "Customer Support", description: "Deliver reliable customer service by providing post-purchase assistance, including returns, exchange of information, updates on refund status.", gradient: "from-orange-500 to-red-500" },
    { icon: Gift, title: "Loyalty Programs", description: "Manage and deliver loyalty program updates and rewards to your customers.", gradient: "from-indigo-500 to-blue-500" },
    { icon: MapPin, title: "Geo Marketing & Store Locators", description: "Leverage your customer's location information to enhance discovery and drive foot traffic.", gradient: "from-teal-500 to-cyan-500" },
    { icon: FileText, title: "Product Information", description: "Deliver rich, personalized content in the form of brand or product updates and brochures.", gradient: "from-rose-500 to-pink-500" },
    { icon: MessageSquare, title: "Feedback", description: "Enable your customers to provide feedback on their service experience and gather market insights.", gradient: "from-amber-500 to-orange-500" },
    { icon: Store, title: "In-shop Experience", description: "Assist your customers in navigating your large store by providing in-store guidance.", gradient: "from-violet-500 to-purple-500" }
  ];

  return (
    <PageLayout>
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-orb" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />AI-Powered Chatbots
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Next-generation Direct Response System in a{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">Bot</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Chatbots have revolutionized the way businesses handle user and system-initiated requests across the globe. Neom Engage's chatbot solution offers a seamless, chat-like experience to customers for on-demand support, ensuring consistency and accuracy without the need for human intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 text-lg">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">We Take Care Of</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <TiltCard key={index}>
                <GlowingCard>
                  <Card className="h-full glass-premium border-primary/10 hover:border-primary/30 transition-all group">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                      <Button onClick={() => navigate('/contact')} variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Get Started <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Customer Interactions?</h2>
            <p className="text-lg text-muted-foreground mb-8">Let Neom Engage help you leverage the power of AI chatbots to enhance customer experience.</p>
            <Button size="lg" onClick={() => navigate('/contact')} className="px-10 py-6 rounded-full hover:shadow-neon transition-all">Contact Our Team</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ChatbotSolutions;
