import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RotatingText } from "./RotatingText";

interface HeroProps {
  onGetStarted: () => void;
  h1?: string;
  subtitle?: string;
}

export const Hero = ({
  onGetStarted,
  h1 = "Create Your Perfect",
  subtitle = "Generate 10 unique, professional signature styles instantly with our AI-powered tool. 100% Free. No signup. Download in PNG or SVG."
}: HeroProps) => {
  const keywords = [
    "AI Signature Generator",
    "AI Signature Maker",
    "AI Signature Creator",
    "AI Free Signature Generator",
    "Digital Signature"
  ];

  return <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      
      {/* Floating orbs */}
      <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: "2s"
    }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 mx-auto px-4 text-center py-20 md:py-32">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">
          
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.2] tracking-tight">
            {h1}
            <span className="block mt-3 text-white drop-shadow-lg">
              <RotatingText texts={keywords} className="inline-block" />
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" onClick={onGetStarted} className="group bg-white hover:bg-white/95 text-primary text-base sm:text-lg font-bold px-8 sm:px-12 py-6 sm:py-7 rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300">
              Start Creating Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={onGetStarted} className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-white backdrop-blur-sm text-base sm:text-lg font-semibold px-8 sm:px-12 py-6 sm:py-7 rounded-2xl transition-all duration-300">
              See How It Works
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-10 text-white/90">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">100% Free Forever</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Instant Generation</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">No Watermarks</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
