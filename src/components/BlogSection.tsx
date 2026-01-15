import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Placeholder blog posts - replace with actual LinkedIn blog URLs and images
const blogPosts = [
  {
    id: 1,
    title: "The Future of CPaaS: Trends to Watch in 2025",
    url: "https://www.linkedin.com/company/neomengage/posts/",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "How A2P SMS is Revolutionizing Customer Engagement",
    url: "https://www.linkedin.com/company/neomengage/posts/",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "WhatsApp Business API: A Complete Guide for Enterprises",
    url: "https://www.linkedin.com/company/neomengage/posts/",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "AI Chatbots: Transforming Customer Support in 2025",
    url: "https://www.linkedin.com/company/neomengage/posts/",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "Omnichannel Communication: Why Your Business Needs It",
    url: "https://www.linkedin.com/company/neomengage/posts/",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "SMS Marketing Best Practices for Higher ROI",
    url: "https://www.linkedin.com/company/neomengage/posts/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
];

const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Duplicate posts for seamless infinite scroll
  const duplicatedPosts = [...blogPosts, ...blogPosts];

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 overflow-hidden">
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
        
        {/* Marquee Blog Cards */}
        <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex animate-marquee gap-6 hover:pause-animation">
            {duplicatedPosts.map((post, index) => (
              <a 
                key={`${post.id}-${index}`}
                href={post.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="glass rounded-2xl overflow-hidden min-w-[320px] md:min-w-[380px] flex-shrink-0 hover-lift group border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#0A66C2] rounded-full p-2">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#0A66C2] text-sm font-medium">
                    <span>Read on LinkedIn</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://www.linkedin.com/company/neomengage/posts/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2 group mx-auto">
              <Linkedin className="w-4 h-4" />
              View All Posts on LinkedIn 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;