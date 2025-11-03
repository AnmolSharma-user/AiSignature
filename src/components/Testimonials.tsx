import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Business Owner",
    rating: 5,
    text: "This AI signature generator transformed how I sign documents. Professional quality, instant results. Highly recommended!",
    avatar: "SM",
    verified: true,
    date: "2 days ago"
  },
  {
    name: "James Wilson",
    role: "Legal Professional",
    rating: 5,
    text: "Best AI signature maker I've found. The signatures look authentic and professional. Perfect for contracts and legal documents.",
    avatar: "JW",
    verified: true,
    date: "1 week ago"
  },
  {
    name: "Emily Roberts",
    role: "Freelance Designer",
    rating: 5,
    text: "Love this AI signature creator! Generated 10 unique styles in seconds. The customization options are fantastic.",
    avatar: "ER",
    verified: true,
    date: "3 days ago"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    rating: 5,
    text: "Incredible AI free signature generator. No watermarks, no fees, just professional signatures. Exactly what I needed!",
    avatar: "MC",
    verified: true,
    date: "5 days ago"
  },
  {
    name: "Lisa Anderson",
    role: "Real Estate Agent",
    rating: 5,
    text: "This AI signature generator free tool saved me hours. Created a perfect signature for all my property documents.",
    avatar: "LA",
    verified: true,
    date: "1 week ago"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary text-sm font-bold tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
            What Users Say About Our
            <span className="block mt-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI Signature Generator
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our users trust us for their privacy we must protect at any cost
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Google Reviews Card */}
          <Card className="border-2 border-border/50 hover:border-primary/30 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 bg-gradient-to-br from-card via-card to-secondary/10">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <svg className="w-20 h-20 mx-auto mb-4" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                  <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                  <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                  <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                  <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                  <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                  <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
                </svg>
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">5/5</p>
              <p className="text-sm text-muted-foreground">Based on 1000+ reviews</p>
            </CardContent>
          </Card>

          {/* Trustpilot Reviews Card */}
          <Card className="border-2 border-border/50 hover:border-primary/30 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 bg-gradient-to-br from-card via-card to-secondary/10">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-8 h-8 text-[#00b67a] fill-[#00b67a]" />
                  <span className="text-2xl font-bold text-foreground">Trustpilot</span>
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#00b67a] fill-[#00b67a]" />
                ))}
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">4.6/5</p>
              <p className="text-sm text-muted-foreground">4.6 out of 5 based on ratings</p>
            </CardContent>
          </Card>
        </div>

        {/* Review Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-border/50 shadow-[var(--shadow-card)] transition-all duration-500 bg-gradient-to-br from-card via-card to-secondary/10">
            <CardContent className="p-8 md:p-12">
          <div className="animate-fade-in" key={activeIndex}>
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#00b67a] fill-[#00b67a]" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 text-center leading-relaxed italic">
                  "{reviews[activeIndex].text}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {reviews[activeIndex].avatar}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-foreground">{reviews[activeIndex].name}</p>
                        {reviews[activeIndex].verified && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#00b67a]/10 text-[#00b67a]">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{reviews[activeIndex].role}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">{reviews[activeIndex].date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 text-[#00b67a] fill-[#00b67a]" />
                    <span>Posted on Trustpilot</span>
                  </div>
                </div>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? "bg-primary w-8" 
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
