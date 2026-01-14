import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">Blog Insights</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Stay Updated with Our <span className="text-primary">Latest Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow us on LinkedIn for the latest updates, industry insights, and communication tips.
          </p>
        </div>
        
        {/* LinkedIn CTA Card */}
        <div className={`max-w-lg mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://www.linkedin.com/company/neomengage/posts/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass rounded-2xl p-8 flex flex-col items-center text-center hover-lift block border transition-smooth"
          >
            <div className="w-20 h-20 bg-[#0A66C2]/10 rounded-full flex items-center justify-center mb-6">
              <Linkedin className="w-10 h-10 text-[#0A66C2]" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Read Our Blog on LinkedIn</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Discover insights about CPaaS, SMS marketing, AI chatbots, and more on our LinkedIn page.
            </p>
            <Button className="flex items-center gap-2 group">
              Visit LinkedIn Blog 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
