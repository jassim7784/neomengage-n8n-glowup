import logo from "@/assets/neomengage-logo.png";

interface LogoWithBackgroundProps {
  className?: string;
  alt?: string;
}

const LogoWithBackground = ({ className = "", alt = "NeoM Engage Logo" }: LogoWithBackgroundProps) => {
  return (
    <div className="relative">
      {/* Logo */}
      <img 
        src={logo}
        alt={alt}
        className={`relative z-10 ${className}`}
      />
    </div>
  );
};

export default LogoWithBackground;