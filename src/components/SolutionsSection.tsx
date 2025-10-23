import { 
  Building2, 
  Code2, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise Communications",
      description: "Comprehensive communication solutions designed for large enterprises requiring reliable, scalable messaging infrastructure.",
      features: [
        "Multi-channel messaging platform",
        "Advanced security & compliance",
        "Dedicated account management",
        "Custom integration support"
      ],
      gradient: "gradient-primary",
      target: "Enterprise Businesses"
    },
    {
      icon: Code2,
      title: "Developer Tools",
      description: "Easy-to-implement APIs and comprehensive documentation for developers and technical teams building communication features.",
      features: [
        "RESTful API framework",
        "SDK implementations",
        "Interactive documentation",
        "Webhook integrations"
      ],
      gradient: "gradient-cyber",
      target: "Developers & Technical Teams"
    },
    {
      icon: TrendingUp,
      title: "Marketing Automation",
      description: "Advanced marketing tools for campaigns, customer engagement, and automated communication workflows.",
      features: [
        "Campaign management",
        "Audience segmentation",
        "A/B testing capabilities",
        "Performance analytics"
      ],
      gradient: "gradient-neon",
      target: "Marketing Teams"
    }
  ];

  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Solutions Built For Your Industry
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Discover specialized communication solutions designed for your specific business needs and industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="glass-strong p-8 rounded-3xl hover-lift group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{solution.target}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="cyber" className="w-full group-hover:bg-purple-500/30 transition-all duration-300">
                  Explore Solution
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* User Journey Highlights */}
        <div className="glass-strong p-12 rounded-3xl max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Popular User Journeys</h3>
            <p className="text-muted-foreground">See how different user types navigate our platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Enterprise Decision Maker</h4>
              <p className="text-sm text-muted-foreground">Homepage → Services → A2P SMS → Pricing → Contact</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Developer</h4>
              <p className="text-sm text-muted-foreground">API Docs → SMS Integration → HTTP API → Implementation</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Marketing Professional</h4>
              <p className="text-sm text-muted-foreground">Bulk SMS → Use Cases → Pricing → Demo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;