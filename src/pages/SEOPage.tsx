import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SignatureGenerator } from "@/components/SignatureGenerator";
import { SEOContent } from "@/components/SEOContent";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { getSEOConfig } from "@/config/seoRoutes";

const SEOPage = () => {
  const location = useLocation();
  const seoConfig = getSEOConfig(location.pathname);

  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        path={seoConfig.path}
      />
      <Header />
      <Hero onGetStarted={scrollToGenerator} />
      <SignatureGenerator />
      <Features />
      <SEOContent />
      <Testimonials />
      <FAQ />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default SEOPage;
