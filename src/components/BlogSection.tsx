import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Real LinkedIn blog posts
const blogPosts = [
  {
    id: 1,
    title: "Latest Updates from NeoMengage",
    url: "https://www.linkedin.com/posts/neom-engage_activity-7417212556341104640-8Rpl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj-J9kBN9X-BM4X4P0DNmLgYnTIWfy1QnY",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Industry Insights & Trends",
    url: "https://www.linkedin.com/posts/neom-engage_activity-7419382904633495553-RBfV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj-J9kBN9X-BM4X4P0DNmLgYnTIWfy1QnY",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Communication Solutions for Business",
    url: "https://www.linkedin.com/posts/neom-engage_activity-7419383515697504257-xRmY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj-J9kBN9X-BM4X4P0DNmLgYnTIWfy1QnY",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Enterprise Messaging Strategies",
    url: "https://www.linkedin.com/posts/neom-engage_activity-7419384443188142081-u5Gg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj-J9kBN9X-BM4X4P0DNmLgYnTIWfy1QnY",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
  },
];

const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section ref={ref} className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">Blog Insights</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Stay Updated with Our <span className="text-primary">Latest Insights</span>
          </h2>
        </div>
      </div>
      
      {/* Timer-based Carousel Slider */}
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <a 
                  href={post.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="glass rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-base line-clamp-2 mb-3 group-hover:text-primary transition-colors min-h-[48px]">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[#0A66C2] text-sm font-medium">
                        <Linkedin className="w-4 h-4" />
                        <span>Read on LinkedIn</span>
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>

      {/* CTA Button */}
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 text-center mt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <a 
          href="https://uk.linkedin.com/company/neom-engage" 
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
    </section>
  );
};

export default BlogSection;
