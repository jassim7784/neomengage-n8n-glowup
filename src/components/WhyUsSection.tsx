import { CheckCircle, Sparkles, TrendingUp } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";
import { useEffect } from "react";

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { count: roiCount, startAnimation } = useCountUp(78, 1500, 0);

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 aurora-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">Neom Engage</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Neom Engage is your gateway to smarter, stronger customer communication. We deliver a powerful omnichannel platform built for scale, reliability, and global reach. From transactional SMS and secure user verification to promotional emails, missed call solutions, voice broadcasts, polling, WhatsApp, and RCS — we equip businesses with everything they need to engage customers effortlessly. Backed by robust compliance and an experienced team, Neom Engage helps brands create exceptional customer experiences and drive results that truly matter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Card 1 */}
          <TiltCard>
            <GlowingCard className={`h-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="glass-premium p-10 rounded-2xl border border-primary/20 h-full group">
                {/* Animated icon container */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-full h-full bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  One Connection. Infinite Possibilities.
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Reach your customers across every channel from one powerful platform — and scale your communication as fast as your business grows.
                </p>

                {/* Animated decorative elements */}
                <div className="mt-8 flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 flex-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-full transition-all duration-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                      style={{ transitionDelay: `${i * 100 + 500}ms`, transformOrigin: 'left' }}
                    />
                  ))}
                </div>
              </div>
            </GlowingCard>
          </TiltCard>
          
          {/* Card 2 */}
          <TiltCard>
            <GlowingCard className={`h-full transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="glass-premium p-10 rounded-2xl border border-primary/20 h-full group">
                {/* Animated ROI counter */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-xl blur-xl animate-pulse" />
                    <div className="relative text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {(roiCount / 10).toFixed(1)}X
                    </div>
                  </div>
                  <TrendingUp className="w-12 h-12 text-primary animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  Smarter Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Unlock outstanding ROI with our cost-efficient communication suite. Amplify your marketing impact while keeping costs dramatically lower.
                </p>

                {/* Animated chart bars */}
                <div className="mt-8 flex items-end gap-2 h-16">
                  {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
                    <div 
                      key={i}
                      className={`flex-1 bg-gradient-to-t from-primary to-purple-400 rounded-t-sm transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        height: isVisible ? `${height}%` : '0%',
                        transitionDelay: `${i * 100 + 600}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            </GlowingCard>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
