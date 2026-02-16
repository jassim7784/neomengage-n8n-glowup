import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";
import { MessageSquare, Users, Globe, Shield } from "lucide-react";

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const stats = [
    { value: 100, suffix: "M+", label: "Messages Sent", icon: MessageSquare, gradient: "from-blue-500 to-cyan-500" },
    { value: 273, suffix: "+", label: "Clients Served", icon: Users, gradient: "from-purple-500 to-pink-500" },
    { value: 200, suffix: "+", label: "Global Reach", icon: Globe, gradient: "from-green-500 to-emerald-500" },
    { value: 99.9, suffix: "%", label: "Uptime", icon: Shield, gradient: "from-orange-500 to-red-500" }
  ];

  // Individual counter hooks for each stat
  const counter1 = useCountUp(100, 1500);
  const counter2 = useCountUp(273, 1500);
  const counter3 = useCountUp(200, 1500);
  const counter4 = useCountUp(99.9, 1500);
  const counters = [counter1, counter2, counter3, counter4];

  useEffect(() => {
    if (isVisible) {
      counters.forEach(counter => counter.startAnimation());
    }
  }, [isVisible]);

  return (
    <section ref={ref} className="py-24 relative bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-semibold mb-4 text-lg">Our Impact</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than 273 businesses rely on us to deliver communication that creates measurable impact.
          </p>
        </div>

        {/* Stats Grid - 4 columns centered */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const counter = counters[index];
            const displayValue = stat.suffix === "%" 
              ? counter.count.toFixed(1) 
              : Math.floor(counter.count).toLocaleString();
            
            return (
              <div 
                key={index} 
                className={`group text-center glass-premium rounded-2xl p-8 lg:p-10 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {/* Number - HUGE and centered */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-1 text-center">
                  <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                    {displayValue}
                  </span>
                </div>
                
                {/* Suffix - Below number, still prominent */}
                <div className="text-2xl md:text-3xl font-bold text-primary/80 mb-4">
                  {stat.suffix}
                </div>
                
                {/* Label */}
                <p className="text-muted-foreground font-medium text-base lg:text-lg">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
