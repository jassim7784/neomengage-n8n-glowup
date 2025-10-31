import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogs = [
    {
      title: "CPaaS: The Secret Weapon Behind Every Successful Business!",
      date: "April 16, 2025",
      description: "Discover how Communication Platform as a Service is transforming modern business communications."
    },
    {
      title: "The Rise of Conversational AI: How Chatbots are Revolutionizing Customer Service",
      date: "April 16, 2025",
      description: "Explore the impact of AI-powered chatbots on customer engagement and satisfaction."
    },
    {
      title: "Neom Engage: From SMS to a Suite of APIs – A 3-Year Evolution",
      date: "April 16, 2025",
      description: "Our journey from a simple SMS provider to a comprehensive communication platform."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">Blog Insight</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Valuable insights to change <span className="text-primary">your startup idea</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="glass rounded-2xl border overflow-hidden transition-smooth hover-lift">
              <div className="h-48 bg-gradient-primary"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{blog.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{blog.description}</p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
