import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Biosoft Healthcare Solutions",
    url: "https://biosoft-healthcare.com",
    logo: "https://biosoft-healthcare.com/logo.png",
    description: "Leading healthcare software platform trusted by 500+ providers worldwide. Comprehensive EHR, practice management, and telemedicine solutions.",
    foundingDate: "2020",
    industry: "Healthcare Technology",
    numberOfEmployees: "50-100",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-BIOSOFT",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: ["https://linkedin.com/company/biosoft-healthcare", "https://twitter.com/biosoft_health"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "CA",
    },
    video: {
      "@type": "VideoObject",
      name: "Biosoft Healthcare Platform Demo",
      description: "See how healthcare providers are transforming patient care with Biosoft's comprehensive platform",
      contentUrl: "https://youtu.be/JHpFFxnHtzc?si=UlVjtMBjQTNmHfl_",
      embedUrl: "https://www.youtube.com/embed/JHpFFxnHtzc",
      uploadDate: "2024-01-01",
      duration: "PT3M",
      thumbnailUrl: "https://img.youtube.com/vi/JHpFFxnHtzc/maxresdefault.jpg",
    },
  };

  return (
    <>
      <SEO structuredData={structuredData} />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <VideoSection />
          <Stats />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
