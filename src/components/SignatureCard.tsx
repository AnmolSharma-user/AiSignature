import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Palette, Info } from "lucide-react";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SignatureCardProps {
  signature: string;
  analysis: string;
  index: number;
  name: string;
}

export const SignatureCard = ({ signature, analysis, index, name }: SignatureCardProps) => {
  const [selectedColor, setSelectedColor] = useState("#1E3A8A");

  const colors = [
    { name: "Classic Blue", value: "#1E3A8A" },
    { name: "Elegant Black", value: "#000000" },
    { name: "Royal Purple", value: "#7C3AED" },
    { name: "Emerald Green", value: "#059669" },
    { name: "Crimson Red", value: "#DC2626" },
    { name: "Navy Blue", value: "#1E40AF" },
  ];

  const downloadSignature = (format: "png" | "svg") => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");
    
    if (!ctx) return;

    if (format === "png") {
      ctx.fillStyle = selectedColor;
      ctx.font = "48px 'Dancing Script', cursive";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(signature, canvas.width / 2, canvas.height / 2);

      const link = document.createElement("a");
      link.download = `signature-${index + 1}-${name.replace(/\s+/g, "-")}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      toast.success("Signature downloaded as PNG!");
    } else {
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="200">
          <text x="400" y="100" text-anchor="middle" font-family="Dancing Script, cursive" font-size="48" fill="${selectedColor}">
            ${signature}
          </text>
        </svg>
      `;
      const blob = new Blob([svg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `signature-${index + 1}-${name.replace(/\s+/g, "-")}.svg`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
      toast.success("Signature downloaded as SVG!");
    }
  };

  return (
    <Card className="group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-secondary/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="p-5 md:p-7 relative">
        <div className="relative bg-gradient-to-br from-secondary/60 via-background/40 to-muted/40 rounded-2xl p-6 md:p-8 flex items-center justify-center min-h-[110px] md:min-h-[140px] mb-5 border-2 border-border/30 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
          <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-xs font-bold shadow-md">
            {index + 1}
          </div>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 hover:bg-background border border-border/50"
              >
                <Info className="h-4 w-4 text-primary" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Personality Analysis</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{analysis}</p>
              </div>
            </PopoverContent>
          </Popover>
          
          <span
            className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10"
            style={{ 
              fontFamily: "'Dancing Script', cursive",
              color: selectedColor
            }}
          >
            {signature}
          </span>
        </div>

        <div className="flex gap-2 mb-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 h-11 md:h-12 border-2 border-border/60 hover:border-primary/60 transition-all duration-300 font-semibold rounded-xl text-sm md:text-base"
              >
                <Palette className="mr-2 h-4 w-4" />
                Color
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Choose Color</h4>
                <div className="grid grid-cols-3 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`h-10 rounded-lg border-2 transition-all duration-200 ${
                        selectedColor === color.value
                          ? "border-primary scale-110 shadow-lg"
                          : "border-border hover:border-primary/50 hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => downloadSignature("png")}
            variant="outline"
            size="sm"
            className="flex-1 h-11 md:h-12 border-2 border-primary/60 text-primary hover:bg-primary hover:text-white hover:border-primary hover:scale-105 transition-all duration-300 font-semibold rounded-xl text-sm md:text-base"
          >
            <Download className="mr-2 h-4 w-4" />
            PNG
          </Button>
          <Button
            onClick={() => downloadSignature("svg")}
            variant="outline"
            size="sm"
            className="flex-1 h-11 md:h-12 border-2 border-accent/60 text-accent hover:bg-accent hover:text-white hover:border-accent hover:scale-105 transition-all duration-300 font-semibold rounded-xl text-sm md:text-base"
          >
            <Download className="mr-2 h-4 w-4" />
            SVG
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
