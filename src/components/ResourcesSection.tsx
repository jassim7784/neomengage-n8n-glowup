import { 
  BookOpen, 
  FileText, 
  Code, 
  ArrowRight,
  ExternalLink,
  Download,
  PlayCircle,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  const resources = [
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive guides, API references, and technical documentation to help you get started quickly.",
      items: [
        "API Reference Guide",
        "Quick Start Tutorial",
        "Integration Examples",
        "Best Practices"
      ],
      gradient: "gradient-primary",
      cta: "Browse Docs"
    },
    {
      icon: Code,
      title: "API Guides",
      description: "Step-by-step guides for implementing our APIs with code samples and interactive examples.",
      items: [
        "REST API Walkthrough",
        "SDK Documentation",
        "Webhook Setup Guide",
        "Code Examples"
      ],
      gradient: "gradient-cyber",
      cta: "View API Guides"
    },
    {
      icon: BookOpen,
      title: "Blogs & Insights",
      description: "Industry insights, technical tutorials, and best practices from our communication experts.",
      items: [
        "Industry Trends",
        "Technical Tutorials",
        "Case Studies",
        "Product Updates"
      ],
      gradient: "gradient-neon",
      cta: "Read Blogs"
    }
  ];

  const additionalResources = [
    {
      icon: PlayCircle,
      title: "Video Tutorials",
      description: "API walkthrough and integration demonstrations",
      type: "Video Content"
    },
    {
      icon: Users,
      title: "Webinar Series",
      description: "Best practices and new feature announcements",
      type: "Live Events"
    },
    {
      icon: Download,
      title: "Whitepapers",
      description: "Industry reports and technical insights",
      type: "Downloads"
    },
    {
      icon: ExternalLink,
      title: "Partner Integrations",
      description: "Integration guides with popular platforms",
      type: "Partnerships"
    }
  ];

  return (
    <section id="resources" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl floating-element" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="glass-strong px-8 py-4 rounded-full inline-block mb-8">
            <span className="text-sm font-semibold gradient-text-neon uppercase tracking-wider">Knowledge Hub</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-glow">Developer</span>
            <br />
            <span className="gradient-text">Resources & Guides</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Everything you need to successfully implement and optimize your communication solutions.
          </p>
        </div>

        {/* Main Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="glass-strong p-8 rounded-3xl hover-lift group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-${resource.gradient} opacity-5 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-${resource.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 gradient-text">{resource.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {resource.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="cyber" className="w-full group-hover:bg-purple-500/30 transition-all duration-300">
                  {resource.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources Grid */}
        <div className="glass-strong p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Additional Resources</h3>
            <p className="text-muted-foreground">Expand your knowledge with these additional learning materials</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalResources.map((resource, index) => (
              <div key={index} className="glass p-6 rounded-2xl hover-lift group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="glass px-3 py-1 rounded-full inline-block mb-3">
                  <span className="text-xs font-semibold text-purple-400">{resource.type}</span>
                </div>
                
                <h4 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors">{resource.title}</h4>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Community CTA */}
        <div className="text-center mt-20">
          <div className="glass-strong p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 gradient-text">Join Our Developer Community</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with other developers, get support, and stay updated with the latest features.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cyber" size="lg" className="px-8 py-4">
                Join Community
                <Users className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="lg" className="px-8 py-4">
                API Explorer
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;