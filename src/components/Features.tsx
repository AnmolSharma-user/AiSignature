import { Sparkles, Download, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description: "Advanced AI creates unique, professional signatures tailored to your style in seconds.",
  },
  {
    icon: Palette,
    title: "Multiple Styles",
    description: "Choose from elegant, modern, bold, or minimal styles to match your personality.",
  },
  {
    icon: Download,
    title: "Instant Download",
    description: "Download your signature as PNG or SVG format, ready for immediate use.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate professional signatures in seconds. No waiting, no hassle.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Premium grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-bold tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-foreground leading-[1.1]">
            Everything You Need in
            <span className="block mt-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              One Professional Tool
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Enterprise-grade signature generation powered by cutting-edge AI technology. 
            <span className="block mt-2 text-primary">Trusted by professionals worldwide</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-2 border-border/50 hover:border-primary/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-700 hover:-translate-y-4 animate-fade-in bg-gradient-to-br from-card via-card to-secondary/10 backdrop-blur-sm overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/0 before:via-accent/0 before:to-primary/0 hover:before:from-primary/5 hover:before:via-accent/5 hover:before:to-primary/5 before:transition-all before:duration-700"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <CardContent className="p-8 md:p-10 text-center space-y-5 relative z-10">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[2rem] blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-[2rem] flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                    <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-foreground">99.9% Uptime</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">⚡ Lightning Fast</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">🔒 100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
