// src/pages/Index.tsx - Updated with Blog Section

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import EBiosProducts from "@/components/EBiosProducts";
import VideoSection from "@/components/VideoSection";
import UserExperiences from "@/components/UserExperiences";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import HomepageBlog from "@/components/HomepageBlog";
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
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <section id="services" className="bg-biosoft-gray/20">
            <Services />
          </section>
          <section id="products" className="bg-white">
            <VideoSection />
            <EBiosProducts />
          </section>
          <section id="about" className="bg-biosoft-gray/10">
            <Certifications />
            <UserExperiences />
          </section>
          <section id="team" className="bg-white">
            <Team />
          </section>
          <section id="stats" className="bg-biosoft-gray/10">
            <Stats />
          </section>
          <section id="testimonials" className="bg-white">
            <Testimonials />
          </section>
          <section id="blog" className="bg-biosoft-gray/10">
            <HomepageBlog />
          </section>
          <section id="contact" className="bg-gradient-primary">
            <CTA />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
