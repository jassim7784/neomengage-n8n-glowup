import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import FloatingParticles from "@/components/ui/FloatingParticles";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <FloatingParticles count={20} />
      
      {/* Background effects */}
      <div className="absolute inset-0 aurora-bg opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float-orb" style={{ animationDelay: '-5s' }} />
      
      <div className="text-center relative z-10 px-6">
        {/* Glowing 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] leading-none">
            404
          </h1>
          <div className="absolute inset-0 text-[150px] md:text-[200px] font-bold text-primary/20 blur-2xl leading-none">
            404
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Oops! Page not found
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline" 
            size="lg"
            className="group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
          <a href="/">
            <Button size="lg" className="hover:shadow-neon transition-all group">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
