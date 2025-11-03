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
        schemaType={seoConfig.schemaType}
      />
      <Header />
      <Hero 
        onGetStarted={scrollToGenerator} 
        h1={seoConfig.h1}
        subtitle={seoConfig.heroSubtitle}
      />
      <SignatureGenerator />
      <Features />
      <SEOContent 
        variant={seoConfig.variant}
        uniqueContent={seoConfig.uniqueContent}
      />
      <Testimonials />
      <FAQ variant={seoConfig.variant} />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default SEOPage;
