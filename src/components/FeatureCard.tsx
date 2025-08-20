import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, gradient = false }: FeatureCardProps) => {
  return (
    <div className={`p-8 rounded-2xl transition-smooth hover-lift ${
      gradient ? 'bg-gradient-secondary border-white/20' : 'glass'
    } border`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
        gradient ? 'bg-white/20' : 'bg-gradient-primary'
      }`}>
        <Icon className={`w-6 h-6 ${gradient ? 'text-primary' : 'text-white'}`} />
      </div>
      
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;