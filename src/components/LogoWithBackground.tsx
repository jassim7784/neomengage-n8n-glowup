import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemover';

interface LogoWithBackgroundProps {
  className?: string;
  alt?: string;
}

const LogoWithBackground = ({ className = "", alt = "NeoM Engage Logo" }: LogoWithBackgroundProps) => {
  const [processedLogo, setProcessedLogo] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Fetch the original logo
        const response = await fetch('/lovable-uploads/b8a21206-8d69-4993-bbf9-6312c3880ab0.png');
        const blob = await response.blob();
        
        // Load as image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedLogo(processedUrl);
        
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original logo
        setProcessedLogo('/lovable-uploads/b8a21206-8d69-4993-bbf9-6312c3880ab0.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  if (isProcessing) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-full scale-110"></div>
      
      {/* Logo with transparent background */}
      <img 
        src={processedLogo || '/lovable-uploads/b8a21206-8d69-4993-bbf9-6312c3880ab0.png'}
        alt={alt}
        className={`relative z-10 logo-glow ${className}`}
        style={{
          filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.8)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.6))',
        }}
      />
    </div>
  );
};

export default LogoWithBackground;