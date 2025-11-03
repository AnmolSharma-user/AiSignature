import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Sparkles, Plus, Stars } from "lucide-react";
import { toast } from "sonner";
import { SignatureCard } from "./SignatureCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SignatureData {
  signature: string;
  analysis: string;
}

export const SignatureGenerator = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [signatures, setSignatures] = useState<SignatureData[]>([]);
  const [selectedStyle, setSelectedStyle] = useState("default");
  const [showAdvanced, setShowAdvanced] = useState(true);
  const [signatureLength, setSignatureLength] = useState<"full" | "short">("full");


  const generateSignatures = async (isMore = false) => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    setLoading(true);
    if (!isMore) {
      setSignatures([]);
    }
    
    try {
      // Process name based on signature length preference
      let processedName = name;
      if (signatureLength === "short") {
        const nameParts = name.trim().split(" ");
        if (nameParts.length >= 2) {
          processedName = `${nameParts[0]} ${nameParts[nameParts.length - 1][0]}`;
        }
      }

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-signature`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ 
            name: processedName, 
            style: selectedStyle,
            isMoreSignatures: isMore
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", response.status, errorData);
        
        if (response.status === 429) {
          toast.error("Too many requests. Please try again in a moment.");
          return;
        }
        if (response.status === 402) {
          toast.error("AI usage limit reached. Please try again later.");
          return;
        }
        toast.error(errorData.error || "Failed to generate signatures");
        return;
      }

      const data = await response.json();
      console.log("Received signatures:", data);
      
      if (data.signatures && Array.isArray(data.signatures) && data.signatures.length > 0) {
        const newSignatures = data.signatures.map((sig: string, idx: number) => ({
          signature: sig,
          analysis: data.analyses?.[idx] || "This signature reflects a unique personality with distinctive character traits."
        }));
        
        if (isMore) {
          setSignatures(prev => [...prev, ...newSignatures]);
          toast.success(`${newSignatures.length} more signatures generated!`);
        } else {
          setSignatures(newSignatures);
          toast.success(`${newSignatures.length} unique signatures generated!`);
        }
        
        setTimeout(() => {
          const signaturesSection = document.querySelector('.signatures-grid');
          if (signaturesSection) {
            signaturesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        console.error("No signatures in response:", data);
        toast.error("No signatures were generated. Please try again.");
      }
    } catch (error) {
      console.error("Error generating signatures:", error);
      toast.error("Failed to generate signatures. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="generator" className="py-16 md:py-28 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Get Started Now
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
            Generate Your Signature
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Type your name below and watch as our AI creates 10 unique signature styles for you instantly
          </p>
        </div>

        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 border-2 border-border/50 animate-fade-in mb-16 bg-gradient-to-br from-card via-card to-secondary/20 backdrop-blur-sm overflow-hidden relative group">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
          
          <CardContent className="p-6 md:p-10 relative">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="Enter your full name (e.g., John Smith)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && !loading && generateSignatures()}
                    className="text-base md:text-lg h-14 md:h-16 border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl transition-all duration-300 bg-background/50 pl-5"
                    disabled={loading}
                  />
                </div>
                <Button
                  onClick={() => generateSignatures(false)}
                  disabled={loading}
                  size="lg"
                  className="bg-gradient-to-r from-primary via-primary to-accent hover:shadow-[var(--shadow-hover)] active:scale-95 text-white h-14 md:h-16 px-8 md:px-12 font-bold text-base md:text-lg shadow-[var(--shadow-card)] whitespace-nowrap rounded-xl transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 md:h-6 md:w-6 animate-spin" />
                      Creating Magic...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                      Generate Now
                    </>
                  )}
                </Button>
              </div>

              <Collapsible open={showAdvanced} onOpenChange={setShowAdvanced}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-primary hover:text-primary/80">
                    <Stars className="mr-2 h-4 w-4" />
                    {showAdvanced ? "Hide" : "Show"} Advanced Options
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 pt-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Signature Length
                    </label>
                    <Select value={signatureLength} onValueChange={(value: "full" | "short") => setSignatureLength(value)}>
                      <SelectTrigger className="h-12 border-2 rounded-xl">
                        <SelectValue placeholder="Choose length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Name (e.g., John Smith)</SelectItem>
                        <SelectItem value="short">Short Name (e.g., John S)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Signature Style
                    </label>
                    <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                      <SelectTrigger className="h-12 border-2 rounded-xl">
                        <SelectValue placeholder="Choose a style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default (Mixed Styles)</SelectItem>
                        <SelectItem value="steve-jobs">Steve Jobs Style</SelectItem>
                        <SelectItem value="elon-musk">Elon Musk Style</SelectItem>
                        <SelectItem value="bill-gates">Bill Gates Style</SelectItem>
                        <SelectItem value="warren-buffett">Warren Buffett Style</SelectItem>
                        <SelectItem value="oprah-winfrey">Oprah Winfrey Style</SelectItem>
                        <SelectItem value="jeff-bezos">Jeff Bezos Style</SelectItem>
                        <SelectItem value="mark-zuckerberg">Mark Zuckerberg Style</SelectItem>
                        <SelectItem value="taylor-swift">Taylor Swift Style</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CollapsibleContent>
              </Collapsible>

            </div>
          </CardContent>
        </Card>

        {signatures.length > 0 && (
          <div className="animate-fade-in signatures-grid space-y-8">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
                Your Signature Collection
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Choose your favorite, customize color, and download in PNG or SVG format
              </p>
              <Button
                onClick={() => generateSignatures(true)}
                disabled={loading}
                variant="outline"
                size="lg"
                className="border-2 border-primary/60 text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 font-semibold rounded-xl"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-5 w-5" />
                    Generate 10 More Signatures
                  </>
                )}
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              {signatures.map((signatureData, index) => (
                <SignatureCard
                  key={`${signatureData.signature}-${index}`}
                  signature={signatureData.signature}
                  analysis={signatureData.analysis}
                  index={index}
                  name={name}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
