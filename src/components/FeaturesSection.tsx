import FeatureCard from "./FeatureCard";
import { 
  Workflow, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Zap, 
  Shield,
  Target,
  Inbox
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Workflow,
      title: "Visual Workflow Builder",
      description: "Design complex customer journeys with our intuitive drag-and-drop interface. No coding required.",
      gradient: true
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Messaging",
      description: "Reach customers across email, SMS, push notifications, and in-app messages from one platform."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into customer behavior and campaign performance with real-time dashboards."
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description: "Create precise customer segments based on behavior, preferences, and engagement patterns.",
      gradient: true
    },
    {
      icon: Zap,
      title: "Real-time Automation",
      description: "Trigger personalized messages instantly based on customer actions and behavioral data."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, GDPR ready, and advanced data protection."
    },
    {
      icon: Target,
      title: "Personalization Engine",
      description: "Deliver hyper-personalized experiences using AI-powered recommendations and content.",
      gradient: true
    },
    {
      icon: Inbox,
      title: "Unified Inbox",
      description: "Manage all customer conversations in one place with intelligent routing and automation."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="gradient-text"> Engage Customers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines the power of automation with the simplicity of visual design.
            Build, test, and optimize customer experiences that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;