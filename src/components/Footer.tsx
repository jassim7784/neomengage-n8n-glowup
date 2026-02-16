import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import LogoWithBackground from "./LogoWithBackground";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <LogoWithBackground className="w-[300px] h-[100px]" alt="NeoMengage Logo" />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm max-w-md">
              Neom Engage offers advanced communication solutions, enhancing business connectivity through reliable SMS, voice, and omnichannel services.
            </p>
            <div className="flex space-x-4">
              <a href="https://uk.linkedin.com/company/neom-engage" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="mailto:info@neomengage.com" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/a2p-sms" className="text-muted-foreground hover:text-primary transition-colors">A2P SMS Service</Link></li>
              <li><Link to="/products/whatsapp-solutions" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp Solutions</Link></li>
              <li><Link to="/products/voice-solutions" className="text-muted-foreground hover:text-primary transition-colors">Voice Solutions</Link></li>
              <li><Link to="/products/email-solutions" className="text-muted-foreground hover:text-primary transition-colors">Email Solutions</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <p>71 A Meadowlands, Downpatrick,<br />Co Down, BT30 6HG, UK</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <p>+44 7436787758</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <p>info@neomengage.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <p>support@neomengage.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2025 Neom Engage. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;