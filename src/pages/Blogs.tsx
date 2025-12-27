import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, TrendingUp, MessageSquare, Users, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import GlowingCard from "@/components/ui/GlowingCard";

const Blogs = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const blogPosts = [
    { id: 1, title: "The Future of A2P Messaging in 2024", excerpt: "Explore the latest trends and innovations shaping application-to-person messaging.", date: "2024-01-15", category: "Latest Trends in Messaging", readTime: "5 min read", icon: TrendingUp },
    { id: 2, title: "How to Improve SMS Campaign Performance", excerpt: "Best practices for creating high-converting SMS marketing campaigns.", date: "2024-01-10", category: "Marketing Tips", readTime: "7 min read", icon: MessageSquare },
    { id: 3, title: "Enterprise SMS Security: What You Need to Know", excerpt: "Understanding security requirements for enterprise messaging solutions.", date: "2024-01-05", category: "Security", readTime: "6 min read", icon: Users },
    { id: 4, title: "Omnichannel Communication Strategy Guide", excerpt: "Building seamless customer experiences across multiple communication channels.", date: "2023-12-28", category: "Latest Trends in Messaging", readTime: "8 min read", icon: TrendingUp },
    { id: 5, title: "API Integration Best Practices for Developers", excerpt: "Technical guide for implementing SMS APIs in your applications.", date: "2023-12-20", category: "Technical", readTime: "10 min read", icon: MessageSquare },
    { id: 6, title: "Global SMS Market Insights and Predictions", excerpt: "Analysis of worldwide SMS trends and market forecasts for the coming year.", date: "2023-12-15", category: "Latest Trends in Messaging", readTime: "6 min read", icon: TrendingUp }
  ];

  const categories = ["Latest Trends in Messaging", "Marketing Tips", "Technical", "Security"];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-orb" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Blog & Resources
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Insights & Resources
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest trends in messaging, best practices, and industry insights from our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 glass-premium border-y border-primary/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" className="hover:shadow-neon transition-all">All Posts</Button>
            {categories.map((category, index) => (
              <Button key={index} variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-all">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <GlowingCard key={post.id}>
                <Card className="glass-premium hover-lift cursor-pointer group h-full border-primary/10 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <post.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-xl">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-glow">Stay in the Loop</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, trends, and updates in messaging technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <Button className="rounded-full px-8 hover:shadow-neon transition-all">Subscribe</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blogs;
