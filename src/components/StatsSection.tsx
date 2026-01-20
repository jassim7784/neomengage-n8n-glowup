import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { count, startAnimation } = useCountUp(273, 2000);

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  const features = [
    "Omnichannel Communication",
    "Personalized Engagement",
    "Data-Driven Insights",
    "Seamless Integrations"
  ];

  return (
    <section ref={ref} className="py-24 relative bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Stats Counter */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative">
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-glow-strong">
                <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                  {count.toLocaleString()}+
                </span>
              </div>
              {/* Animated line decoration */}
              <div className={`h-1 bg-gradient-to-r from-primary to-purple-500 mt-4 rounded-full ${isVisible ? 'animate-line-grow' : 'scale-x-0'}`} style={{ maxWidth: '200px' }} />
            </div>
            <h2 className={`text-2xl md:text-3xl font-bold mt-6 mb-4 text-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              More than 273 businesses rely on us to deliver communication that creates measurable impact.
            </h2>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group flex items-center gap-4 p-5 glass-premium rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover-lift ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                {/* Animated dot */}
                <div className="relative">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-dot-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full opacity-50 group-hover:animate-ping" />
                </div>
                
                {/* Animated progress bar */}
                <div className="flex-1">
                  <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature}
                  </span>
                  <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
