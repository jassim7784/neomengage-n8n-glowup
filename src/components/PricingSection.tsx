import { 
  Check, 
  Zap, 
  Star, 
  ArrowRight,
  Users,
  Building,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingPlans = [
    {
      icon: Rocket,
      name: "Starter",
      description: "Perfect for startups and small businesses",
      price: "Contact",
      period: "for pricing",
      features: [
        "Up to 10,000 SMS/month",
        "Basic API access",
        "Email support",
        "Standard delivery reports",
        "Basic analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: false,
      gradient: "gradient-cyber"
    },
    {
      icon: Users,
      name: "Professional",
      description: "Ideal for growing businesses and developers",
      price: "Contact",
      period: "for pricing",
      features: [
        "Up to 100,000 SMS/month",
        "Full API access with webhooks",
        "Priority support",
        "Advanced delivery reports",
        "Campaign management tools",
        "A/B testing capabilities"
      ],
      cta: "Get Started",
      popular: true,
      gradient: "gradient-primary"
    },
    {
      icon: Building,
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited SMS volume",
        "Dedicated infrastructure",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantees",
        "Dedicated account manager",
        "Advanced security features"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "gradient-neon"
    }
  ];

  const enterpriseFeatures = [
    "High deliverability rates",
    "Global carrier connections", 
    "Real-time delivery tracking",
    "Enterprise-grade security",
    "SOC 2 compliance",
    "GDPR ready",
    "Custom integration support",
    "Dedicated account management"
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl floating-element" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="glass-strong px-8 py-4 rounded-full inline-block mb-8">
            <span className="text-sm font-semibold gradient-text-neon uppercase tracking-wider">Transparent Pricing</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-glow">Choose Your</span>
            <br />
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Flexible pricing options designed to scale with your business needs and communication requirements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-strong p-8 rounded-3xl hover-lift group relative overflow-hidden ${
                plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-6 py-2 rounded-full flex items-center gap-2">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">Most Popular</span>
                  </div>
                </div>
              )}
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-${plan.gradient} opacity-5 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-${plan.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 gradient-text">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold mb-2">
                    <span className="gradient-text">{plan.price}</span>
                  </div>
                  <div className="text-muted-foreground">{plan.period}</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.popular ? "cyber" : "glass"} 
                  className="w-full group-hover:bg-purple-500/30 transition-all duration-300"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="glass-strong p-12 rounded-3xl max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">All Plans Include</h3>
            <p className="text-muted-foreground">Enterprise-grade features across all pricing tiers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="glass-strong p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 gradient-text">Need a Custom Solution?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Our enterprise team can create a tailored solution that meets your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cyber" size="lg" className="px-8 py-4">
                <Zap className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button variant="glass" size="lg" className="px-8 py-4">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;