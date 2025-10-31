import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Clock, Heart, Workflow, BarChart3, ShoppingCart, Headphones, Trophy, Megaphone, MessageSquare, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhatsAppSolutions = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[70px] md:pt-[100px]">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                1.5 Billion reasons to get started on{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  WhatsApp API
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Neom Engage can help your business leverage the power of WhatsApp, with its 1.5 billion and growing user base globally, including 200 million users in India. As WhatsApp aims to be the preferred chat-app-partner for enterprises, businesses can use the platform for seamless conversations, transactions, and notifications to customers. With rich messaging features like images, emojis, location, and files, businesses can easily grab their customers' attention. Contact Neom Engage to take your business to the next level on WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Services We Take Care Of Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-4 text-lg">OUR SERVICES</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                We Take Care Of
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCare.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover-lift transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What Can You Do Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-4 text-lg">OUR SERVICES</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What Can You Do With WhatsApp?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesDo.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover-lift transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="glass-strong rounded-3xl p-12 text-center max-w-4xl mx-auto border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your WhatsApp Communication?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get in touch with our team to discuss how our WhatsApp solutions can help you achieve your business goals.
              </p>
              <Button 
                size="lg" 
                onClick={handleContactClick}
                className="px-8"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatsAppSolutions;
