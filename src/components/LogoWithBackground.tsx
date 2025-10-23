import logo from "@/assets/neomengage-logo.png";

interface LogoWithBackgroundProps {
  className?: string;
  alt?: string;
}

const LogoWithBackground = ({ className = "", alt = "NeoM Engage Logo" }: LogoWithBackgroundProps) => {
  return (
    <img 
      src={logo}
      alt={alt}
      className={`object-contain ${className}`}
    />
  );
};

export default LogoWithBackground;