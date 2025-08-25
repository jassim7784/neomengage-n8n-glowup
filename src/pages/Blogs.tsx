import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, TrendingUp, MessageSquare, Users } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of A2P Messaging in 2024",
      excerpt: "Explore the latest trends and innovations shaping application-to-person messaging.",
      date: "2024-01-15",
      category: "Latest Trends in Messaging",
      readTime: "5 min read",
      icon: TrendingUp
    },
    {
      id: 2,
      title: "How to Improve SMS Campaign Performance",
      excerpt: "Best practices for creating high-converting SMS marketing campaigns.",
      date: "2024-01-10",
      category: "Marketing Tips",
      readTime: "7 min read",
      icon: MessageSquare
    },
    {
      id: 3,
      title: "Enterprise SMS Security: What You Need to Know",
      excerpt: "Understanding security requirements for enterprise messaging solutions.",
      date: "2024-01-05",
      category: "Security",
      readTime: "6 min read",
      icon: Users
    },
    {
      id: 4,
      title: "Omnichannel Communication Strategy Guide",
      excerpt: "Building seamless customer experiences across multiple communication channels.",
      date: "2023-12-28",
      category: "Latest Trends in Messaging",
      readTime: "8 min read",
      icon: TrendingUp
    },
    {
      id: 5,
      title: "API Integration Best Practices for Developers",
      excerpt: "Technical guide for implementing SMS APIs in your applications.",
      date: "2023-12-20",
      category: "Technical",
      readTime: "10 min read",
      icon: MessageSquare
    },
    {
      id: 6,
      title: "Global SMS Market Insights and Predictions",
      excerpt: "Analysis of worldwide SMS trends and market forecasts for the coming year.",
      date: "2023-12-15",
      category: "Latest Trends in Messaging",
      readTime: "6 min read",
      icon: TrendingUp
    }
  ];

  const categories = [
    "Latest Trends in Messaging",
    "Marketing Tips", 
    "Technical",
    "Security"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Insights & Resources
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stay updated with the latest trends in messaging, best practices, 
                and industry insights from our experts.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="hover-glow">All Posts</Button>
              {categories.map((category, index) => (
                <Button key={index} variant="ghost" className="hover-glow">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="glass hover-lift cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <post.icon className="w-8 h-8 text-primary" />
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay in the Loop</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, trends, and updates in messaging technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border"
              />
              <Button className="hover-lift">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;