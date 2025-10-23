import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import LogoWithBackground from "./LogoWithBackground";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <LogoWithBackground className="w-10 h-10" alt="NeoMengage Logo" />
              <span className="text-xl font-bold text-foreground">NeoMengage</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The future of customer engagement is here. Build meaningful relationships with automated, personalized experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Integrations</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">API</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Security</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">E-commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">SaaS</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Enterprise</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 NeoMengage. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;