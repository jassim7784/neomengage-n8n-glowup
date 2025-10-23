import { Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import LogoWithBackground from "./LogoWithBackground";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <LogoWithBackground className="w-10 h-10" alt="NeoMengage Logo" />
              <span className="text-xl font-bold text-foreground">Neom Engage</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Neom Engage offers advanced communication solutions, enhancing business connectivity through reliable SMS, voice, and omnichannel services.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-foreground">Contact Us</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <p>71 A Meadowlands, Downpatrick,<br />Co Down, BT30 6HG, UK</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <p>+44 7436787758</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <p>info@neomengage.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            COPYRIGHT © 2025 neom engage
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;