import { FileText, BarChart3, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const steps = [
    { number: "01", icon: FileText, title: "Information Collection", subtitle: "Discovering What Matters.", description: "We begin by gaining a deep understanding of your business challenges and communication objectives. Our team collaborates with you to define your audience and craft solutions precisely aligned with your needs." },
    { number: "02", icon: BarChart3, title: "Projection Report Analysis", subtitle: "Insight-Powered Optimization.", description: "We evaluate your communication data to uncover performance gaps and opportunities. Our analysis delivers actionable insights that enhance the effectiveness of your campaigns." },
    { number: "03", icon: Lightbulb, title: "Consultation Solution", subtitle: "Strategies Built Around You.", description: "We design tailored communication strategies and solutions that directly support your business goals and accelerate measurable growth." }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary text-glow">Trust</span> forms our foundation. <span className="text-primary text-glow">Technology</span> drives our progress. <span className="text-primary text-glow">Transparency</span> shapes our promise.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <TiltCard key={index}>
              <div className={`glass-premium p-8 rounded-2xl border border-primary/10 h-full group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="text-7xl font-bold bg-gradient-to-b from-primary/30 to-transparent bg-clip-text text-transparent mb-4">{step.number}</div>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-primary font-medium mb-4">{step.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className={`glass-premium p-8 rounded-2xl border border-primary/20 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-bold mb-6 text-foreground">We offer a best-in-class CPaaS solution for your business.</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {["Satisfaction guarantee", "Ontime delivery"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 group">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-dot-pulse" />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
