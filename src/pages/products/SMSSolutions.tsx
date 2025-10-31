import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Shield, Sparkles, Megaphone, Target, Info, Users, Send, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SMSSolutions = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Bell,
      title: "Transactional Alerts",
      description: "NeomEngage provides APIs and on-premise SMS solutions that allow enterprises to send alerts, such as account balance or transaction notifications, to their customers.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "User Verification (OTP)",
      description: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Engagement",
      description: "Engage your customers with SMS-based quizzes, contests, and gamification to make their experience interactive and fun.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Megaphone,
      title: "Promotional SMS",
      description: "Craft SMS campaigns tailored to individual user behavior by utilizing our powerful tools and solutions.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Segment/Retarget",
      description: "Craft SMS campaigns tailored to individual user behavior by utilizing our powerful tools and solutions.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Info,
      title: "Information on Demand",
      description: "Obtain information instantly by sending a simple SMS to a dedicated number for a wide range of services such as stock prices, account balance, inventory, office locations, transaction statements, status updates, and more.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Internal Team Communication",
      description: "Effectively communicate with your internal teams by utilizing SMS to send out service alerts, including security updates and new account information.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Send,
      title: "Bulk SMS",
      description: "Send mass SMS messages to a large number of recipients simultaneously. Ideal for marketing campaigns, alerts, notifications, and promotional offers.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Loyalty Programs",
      description: "Implement multi-level loyalty programs that extend beyond SMS and utilize multiple channels.",
      gradient: "from-violet-500 to-purple-500"
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
                We Drive Business Results With{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  SMS Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Empower your business with enterprise-grade SMS solutions that deliver results. 
                From transactional alerts to promotional campaigns, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-4 text-lg">OUR SERVICES</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive SMS Solutions for Every Need
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass-strong rounded-3xl p-12 text-center max-w-4xl mx-auto border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Communication?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get in touch with our team to discuss how our SMS solutions can help you achieve your business goals.
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

export default SMSSolutions;
