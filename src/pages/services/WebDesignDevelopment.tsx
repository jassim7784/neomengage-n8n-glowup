import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Monitor, Smartphone, Zap, Palette, Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";

const WebDesignDevelopment = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);

  const services = ["Custom web application development", "Responsive design and mobile optimization", "E-commerce platform development", "API integration and backend services", "UI/UX design and user research", "Performance optimization and SEO"];

  const process = [
    { step: 1, title: "Discovery", desc: "Understanding your needs and goals" },
    { step: 2, title: "Design", desc: "Creating wireframes and visual designs" },
    { step: 3, title: "Development", desc: "Building your web application" },
    { step: 4, title: "Launch", desc: "Testing, deployment, and support" }
  ];

  return (
    <PageLayout>
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-orb" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />Creative Services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">Web Design & Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Create stunning, high-performance websites that drive engagement and deliver exceptional user experiences.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 rounded-full hover:shadow-neon transition-all group"><Palette className="w-5 h-5 mr-2" />Start Project<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
              <Button variant="outline" size="lg" className="px-8 py-6 rounded-full">View Portfolio</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">Our Development Services</h2>
            <div className="grid gap-4">
              {services.map((service, index) => (
                <GlowingCard key={index}>
                  <div className="flex items-center space-x-4 glass-premium p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-primary transition-colors">{service}</span>
                  </div>
                </GlowingCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <TiltCard key={index}>
                <div className="text-center glass-premium p-8 rounded-2xl border border-primary/10 h-full group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">{item.step}</div>
                  <h3 className="font-semibold mb-2 text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: Monitor, value: "100+", label: "Projects Delivered" }, { icon: Smartphone, value: "100%", label: "Mobile Responsive" }, { icon: Zap, value: "2 weeks", label: "Average Delivery" }].map((stat, index) => (
              <TiltCard key={index}>
                <div className={`text-center glass-premium p-10 rounded-2xl border border-primary/10 transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"><stat.icon className="w-8 h-8 text-white" /></div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-premium rounded-3xl p-12 max-w-3xl mx-auto border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-muted-foreground mb-8">Let's create a web presence that stands out and drives results for your business.</p>
            <Button size="lg" className="px-10 py-6 rounded-full hover:shadow-neon transition-all">Get Free Consultation</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WebDesignDevelopment;
