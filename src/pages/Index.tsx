import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import EBiosProducts from "@/components/EBiosProducts";
import VideoSection from "@/components/VideoSection";
import UserExperiences from "@/components/UserExperiences";
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
    video: [
      {
        "@type": "VideoObject",
        name: "Biosoft Healthcare Platform Demo",
        description: "See how healthcare providers are transforming patient care with Biosoft's comprehensive platform",
        contentUrl: "https://youtu.be/JHpFFxnHtzc?si=UlVjtMBjQTNmHfl_",
        embedUrl: "https://www.youtube.com/embed/JHpFFxnHtzc",
        uploadDate: "2024-01-01",
        duration: "PT3M",
        thumbnailUrl: "https://img.youtube.com/vi/JHpFFxnHtzc/maxresdefault.jpg",
      },
      {
        "@type": "VideoObject",
        name: "Emergency Department Transformation",
        description: "Dr. Martinez shares how Biosoft reduced patient wait times by 40% in their emergency department",
        contentUrl: "https://youtu.be/4LlIrLdu7PE",
        embedUrl: "https://www.youtube.com/embed/4LlIrLdu7PE",
        uploadDate: "2024-01-01",
        duration: "PT4M32S",
        thumbnailUrl: "https://img.youtube.com/vi/4LlIrLdu7PE/maxresdefault.jpg",
      },
      {
        "@type": "VideoObject",
        name: "Rural Healthcare Innovation",
        description: "How a small clinic improved patient care access through telemedicine integration",
        contentUrl: "https://youtu.be/bPzttnhdQrE",
        embedUrl: "https://www.youtube.com/embed/bPzttnhdQrE",
        uploadDate: "2024-01-01",
        duration: "PT3M45S",
        thumbnailUrl: "https://img.youtube.com/vi/bPzttnhdQrE/maxresdefault.jpg",
      },
    ],
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
          <Certifications />
          <UserExperiences />
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
